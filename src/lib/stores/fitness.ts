import { writable, derived, get } from 'svelte/store';
import { supabase } from '$lib/supabase';
import { user } from './auth';
import type { HealthMetrics, ExerciseLog } from '$lib/types';

// Stores
export const healthMetrics = writable<HealthMetrics[]>([]);
export const exerciseLogs = writable<ExerciseLog[]>([]);
export const userSettings = writable({
	start_date: '2025-08-17',
	target_weight: 175,
	current_age: 37
});
export const userStreaks = writable({
	current_streak: 0,
	total_workouts: 0,
	badges: []
});

// Derived stores
export const currentMetrics = derived(healthMetrics, ($metrics) => {
	if ($metrics.length === 0) return null;
	return $metrics.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())[0];
});

export const baselineMetrics = derived(healthMetrics, ($metrics) => {
	if ($metrics.length === 0) return null;
	return $metrics.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())[0];
});

// Database functions
export const loadHealthMetrics = async (userId: string) => {
	try {
	const { data, error } = await supabase
		.from('health_metrics')
		.select('*')
		.eq('user_id', userId)
		.order('recorded_date', { ascending: false });

	if (error) {
		console.error('Error loading health metrics:', error);
		return;
	}

		if (!data) {
			healthMetrics.set([]);
			return;
		}

	// Convert to HealthMetrics format
	const metrics = data.map(row => ({
		weight: row.weight,
		bmi: row.bmi,
		bodyFat: row.body_fat,
		fatFreeBodyWeight: row.fat_free_body_weight,
		subcutaneousFat: row.subcutaneous_fat,
		visceralFat: row.visceral_fat,
		bodyWater: row.body_water,
		skeletalMuscle: row.skeletal_muscle,
		muscleMass: row.muscle_mass,
		boneMass: row.bone_mass,
		protein: row.protein,
		bmr: row.bmr,
		metabolicAge: row.metabolic_age,
		date: row.recorded_date
	}));

	healthMetrics.set(metrics);
	} catch (error) {
		console.error('Error in loadHealthMetrics:', error);
		healthMetrics.set([]);
	}
};

export const saveHealthMetrics = async (userId: string, metrics: HealthMetrics) => {
	const { error } = await supabase
		.from('health_metrics')
		.insert({
			user_id: userId,
			weight: metrics.weight,
			bmi: metrics.bmi,
			body_fat: metrics.bodyFat,
			fat_free_body_weight: metrics.fatFreeBodyWeight,
			subcutaneous_fat: metrics.subcutaneousFat,
			visceral_fat: metrics.visceralFat,
			body_water: metrics.bodyWater,
			skeletal_muscle: metrics.skeletalMuscle,
			muscle_mass: metrics.muscleMass,
			bone_mass: metrics.boneMass,
			protein: metrics.protein,
			bmr: metrics.bmr,
			metabolic_age: metrics.metabolicAge,
			recorded_date: metrics.date
		});

	if (error) {
		console.error('Error saving health metrics:', error);
		throw error;
	}

	// Reload metrics
	await loadHealthMetrics(userId);
};

export const loadExerciseLogs = async (userId: string) => {
	try {
	const { data, error } = await supabase
		.from('exercise_logs')
		.select('*')
		.eq('user_id', userId)
		.order('exercise_date', { ascending: false });

	if (error) {
		console.error('Error loading exercise logs:', error);
		return;
	}

		if (!data) {
			exerciseLogs.set([]);
			return;
		}

	// Convert to ExerciseLog format
	const logs = data.map(row => ({
		id: row.id,
		date: row.exercise_date,
		type: row.type,
		distance: row.distance,
		duration: row.duration,
		sets: row.sets,
		reps: row.reps,
		weight: row.weight,
		calories: row.calories,
		steps: row.steps,
		activeCalories: row.active_calories,
		totalCalories: row.total_calories,
		averagePace: row.average_pace,
		averageHeartRate: row.average_heart_rate,
		startTime: row.start_time,
		endTime: row.end_time,
		notes: row.notes
	}));

	exerciseLogs.set(logs);
	
	// Update streaks
	await updateStreaks(userId, logs);
	} catch (error) {
		console.error('Error in loadExerciseLogs:', error);
		exerciseLogs.set([]);
	}
};

export const saveExerciseLog = async (userId: string, log: Omit<ExerciseLog, 'id'>) => {
	const { error } = await supabase
		.from('exercise_logs')
		.insert({
			user_id: userId,
			exercise_date: log.date,
			type: log.type,
			distance: log.distance,
			duration: log.duration,
			sets: log.sets,
			reps: log.reps,
			weight: log.weight,
			calories: log.calories,
			steps: log.steps,
			active_calories: log.activeCalories,
			total_calories: log.totalCalories,
			average_pace: log.averagePace,
			average_heart_rate: log.averageHeartRate,
			start_time: log.startTime,
			end_time: log.endTime,
			notes: log.notes
		});

	if (error) {
		console.error('Error saving exercise log:', error);
		throw error;
	}

	// Reload logs
	await loadExerciseLogs(userId);
};

export const deleteExerciseLog = async (userId: string, logId: string) => {
	const { error } = await supabase
		.from('exercise_logs')
		.delete()
		.eq('id', logId)
		.eq('user_id', userId);

	if (error) {
		console.error('Error deleting exercise log:', error);
		throw error;
	}

	// Reload logs to update streaks
	await loadExerciseLogs(userId);
};

export const loadUserSettings = async (userId: string) => {
	try {
	const { data, error } = await supabase
		.from('user_settings')
		.select('*')
		.eq('user_id', userId)
		.maybeSingle();

	if (error) {
		console.error('Error loading user settings:', error);
		return;
	}

	if (data) {
		userSettings.set({
			start_date: data.start_date,
			target_weight: data.target_weight,
			current_age: data.current_age
		});
		} else {
			// Create default settings for new user
			await saveUserSettings(userId, {
				start_date: '2025-08-17',
				target_weight: 175,
				current_age: 37
			});
		}
	} catch (error) {
		console.error('Error in loadUserSettings:', error);
	}
};

export const saveUserSettings = async (userId: string, settings: any) => {
	const { error } = await supabase
		.from('user_settings')
		.upsert({
			user_id: userId,
			start_date: settings.start_date,
			target_weight: settings.target_weight,
			current_age: settings.current_age,
			updated_at: new Date().toISOString()
		});

	if (error) {
		console.error('Error saving user settings:', error);
		throw error;
	}

	userSettings.set(settings);
};

const updateStreaks = async (userId: string, logs: ExerciseLog[]) => {
	try {
	const totalWorkouts = logs.length;
	const uniqueDays = [...new Set(logs.map(log => log.date))].sort();
	
	// Calculate current streak
	let currentStreak = 0;
	const today = new Date().toISOString().split('T')[0];
	const todayDate = new Date(today);
	
	for (let i = 0; i < 30; i++) {
		const checkDate = new Date(todayDate);
		checkDate.setDate(todayDate.getDate() - i);
		const checkDateStr = checkDate.toISOString().split('T')[0];
		
		if (uniqueDays.includes(checkDateStr)) {
			currentStreak++;
		} else if (i > 0) {
			break;
		}
	}

	// Calculate badges
	const badges = [];
	if (currentStreak >= 7) badges.push('7-Day Streak');
	if (currentStreak >= 30) badges.push('30-Day Warrior');
	if (totalWorkouts >= 50) badges.push('50 Workouts');
	if (totalWorkouts >= 100) badges.push('Century Club');

	const streakData = {
		current_streak: currentStreak,
		total_workouts: totalWorkouts,
		badges
	};

	// Save to database
		const { error } = await supabase
		.from('user_streaks')
			.upsert([{
			user_id: userId,
			...streakData,
			updated_at: new Date().toISOString()
			}], {
			onConflict: 'user_id'
		});

	if (error) {
		console.error('Error updating streaks:', error);
			return;
	}

	userStreaks.set(streakData);
	} catch (error) {
		console.error('Error in updateStreaks:', error);
	}
};

export const loadUserStreaks = async (userId: string) => {
	try {
	const { data, error } = await supabase
		.from('user_streaks')
		.select('*')
		.eq('user_id', userId)
		.maybeSingle();

	if (error) {
		console.error('Error loading user streaks:', error);
		return;
	}

	if (data) {
		userStreaks.set({
			current_streak: data.current_streak,
			total_workouts: data.total_workouts,
			badges: data.badges
		});
		} else {
			// Initialize default streaks for new user
			userStreaks.set({
				current_streak: 0,
				total_workouts: 0,
				badges: []
			});
		}
	} catch (error) {
		console.error('Error in loadUserStreaks:', error);
		userStreaks.set({
			current_streak: 0,
			total_workouts: 0,
			badges: []
		});
	}
};

// Ensure historical workouts are added only once per user
const ensureHistoricalWorkouts = async (userId: string, currentLogs: ExerciseLog[]) => {
	try {
		// Check if historical data already exists
		const existingHistoricalLogs = currentLogs.filter(log => 
			log.date === '2025-08-15' || log.date === '2025-08-17'
		);
		
		// Only add if no historical data exists
		if (existingHistoricalLogs.length === 0) {
			// Add August 15th workout
			await saveExerciseLog(userId, {
				date: '2025-08-15',
				type: 'walk',
				distance: 2.68,
				duration: Math.round(81.47), // 1h 21min 28sec in minutes
				calories: 820,
				activeCalories: 820,
				totalCalories: 1040,
				averagePace: "30'18\"/mi",
				averageHeartRate: 148,
				startTime: '12:39',
				endTime: '14:19',
				notes: 'Outdoor Walk - Historical data entry'
			});
			
			// Add August 17th workout
			await saveExerciseLog(userId, {
				date: '2025-08-17',
				type: 'walk',
				distance: 2.84,
				duration: Math.round(74.5), // 1h 14min 30sec in minutes
				calories: 786,
				activeCalories: 786,
				totalCalories: 986,
				averagePace: "26'13\"/mi",
				averageHeartRate: 143,
				startTime: '17:24',
				endTime: '18:58',
				notes: 'Outdoor Walk - Historical data entry'
			});
		}
	} catch (error) {
		console.error('Error ensuring historical workouts:', error);
	}
};

// Initialize data when user changes
user.subscribe(async ($user) => {
	if ($user) {
		await Promise.all([
			loadHealthMetrics($user.id),
			loadExerciseLogs($user.id),
			loadUserSettings($user.id),
			loadUserStreaks($user.id)
		]);
		
		// Ensure historical workouts are added only once after loading existing data
		const currentLogs = get(exerciseLogs);
		await ensureHistoricalWorkouts($user.id, currentLogs);
	} else {
		// Clear stores when user logs out
		healthMetrics.set([]);
		exerciseLogs.set([]);
		userSettings.set({
			start_date: '2025-08-17',
			target_weight: 175,
			current_age: 37
		});
		userStreaks.set({
			current_streak: 0,
			total_workouts: 0,
			badges: []
		});
	}
});