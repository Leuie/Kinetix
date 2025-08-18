export interface HealthMetrics {
	weight: number;
	bmi: number;
	bodyFat: number;
	fatFreeBodyWeight: number;
	subcutaneousFat: number;
	visceralFat: number;
	bodyWater: number;
	skeletalMuscle: number;
	muscleMass: number;
	boneMass: number;
	protein: number;
	bmr: number;
	metabolicAge: number;
	date: string;
	[key: string]: number | string;
}

export interface Activity {
	type: 'walk' | 'strength' | 'rest';
	time: string;
	description: string;
	completed?: boolean;
	distance?: number;
	duration?: number;
	calories?: number;
	sets?: number;
	reps?: number;
	weight?: number;
}

export interface WeeklySchedule {
	[key: string]: Activity[];
}

export interface Badge {
	id: string;
	name: string;
	description: string;
	earned: boolean;
	earnedDate?: string;
}

export interface ExerciseLog {
	id: string;
	date: string;
	type: 'walk' | 'dumbbell' | 'squat' | 'pushup';
	distance?: number;
	duration?: number;
	sets?: number;
	reps?: number;
	weight?: number;
	calories: number;
	steps?: number;
	activeCalories?: number;
	totalCalories?: number;
	averagePace?: string;
	averageHeartRate?: number;
	startTime?: string;
	endTime?: string;
	notes?: string;
}

export interface ProgressiveStrengthPlan {
	week: number;
	dumbbell: { sets: number; reps: number; weight: number };
	squat: { sets: number; reps: number };
	pushup: { sets: number; reps: number };
}