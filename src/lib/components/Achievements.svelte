<script lang="ts">
	import { onMount } from 'svelte';
	import { Trophy, Award, Medal, Star, Zap, Target, Flame, Crown, Shield, Sword, Mountain, Rocket, Diamond, Heart, TrendingUp, Calendar, Clock, Dumbbell, Activity, CircleCheck as CheckCircle, Lock, Sparkles, Gift, Timer, Gauge, Crosshair, Skull, Swords, Zap as Lightning, Footprints, Weight, Eye, Brain, Compass, Anchor, Sunrise, Moon, Coffee, Sunset, Hourglass, Repeat, RotateCcw, FastForward, Rewind, Play, Pause, SkipForward, SkipBack, Volume2, VolumeX, Wifi, WifiOff, Battery, BatteryLow, Signal, SignalHigh, SignalLow, SignalMedium, SignalZero } from 'lucide-svelte';
	import { exerciseLogs, healthMetrics, userStreaks } from '$lib/stores/fitness';
	import { user } from '$lib/stores/auth';

	interface Achievement {
		id: string;
		title: string;
		description: string;
		icon: any;
		category: 'streak' | 'exercise' | 'progress' | 'milestone' | 'elite' | 'legendary' | 'weight' | 'strength' | 'endurance' | 'consistency' | 'performance' | 'special';
		tier: 'bronze' | 'silver' | 'gold' | 'platinum' | 'diamond';
		requirement: number;
		currentProgress: number;
		unlocked: boolean;
		unlockedDate?: string;
		xp: number;
		rarity: 'common' | 'rare' | 'epic' | 'legendary';
	}

	let achievements: Achievement[] = [];
	let totalXP = 0;
	let currentLevel = 1;
	let xpToNextLevel = 100;
	let completedAchievements = 0;

	// Complete 50 Achievement definitions
	const achievementDefinitions = [
		// Milestone Achievements (10)
		{ id: 'first_step', title: 'First Step', description: 'Complete your first workout', icon: Footprints, category: 'milestone', tier: 'bronze', requirement: 1, xp: 50, rarity: 'common' },
		{ id: 'first_blood', title: 'First Blood', description: 'Log your first weight measurement', icon: Weight, category: 'milestone', tier: 'bronze', requirement: 1, xp: 75, rarity: 'common' },
		{ id: 'data_tracker', title: 'Data Tracker', description: 'Log your first complete health metrics', icon: TrendingUp, category: 'milestone', tier: 'bronze', requirement: 1, xp: 100, rarity: 'common' },
		{ id: 'early_bird', title: 'Early Bird', description: 'Complete 10 morning workouts (5AM-12PM)', icon: Sunrise, category: 'milestone', tier: 'silver', requirement: 10, xp: 200, rarity: 'rare' },
		{ id: 'night_owl', title: 'Night Owl', description: 'Complete 10 evening workouts (6PM-12AM)', icon: Moon, category: 'milestone', tier: 'silver', requirement: 10, xp: 200, rarity: 'rare' },
		{ id: 'perfect_week', title: 'Perfect Week', description: 'Complete all scheduled workouts in a week', icon: Calendar, category: 'milestone', tier: 'gold', requirement: 1, xp: 500, rarity: 'epic' },
		{ id: 'double_duty', title: 'Double Duty', description: 'Complete 2 workouts in a single day', icon: Clock, category: 'milestone', tier: 'silver', requirement: 1, xp: 250, rarity: 'rare' },
		{ id: 'weekly_warrior', title: 'Weekly Warrior', description: 'Complete 7 workouts in one week', icon: Shield, category: 'milestone', tier: 'gold', requirement: 7, xp: 400, rarity: 'epic' },
		{ id: 'transformation_start', title: 'Transformation Begins', description: 'Complete your first month of tracking', icon: Compass, category: 'milestone', tier: 'gold', requirement: 30, xp: 600, rarity: 'epic' },
		{ id: 'dedication', title: 'Dedication', description: 'Log workouts for 100 consecutive days', icon: Anchor, category: 'milestone', tier: 'diamond', requirement: 100, xp: 2500, rarity: 'legendary' },

		// Streak Achievements (10)
		{ id: 'getting_started', title: 'Getting Started', description: 'Maintain a 3-day workout streak', icon: Flame, category: 'streak', tier: 'bronze', requirement: 3, xp: 100, rarity: 'common' },
		{ id: 'week_warrior', title: 'Week Warrior', description: 'Maintain a 7-day workout streak', icon: Shield, category: 'streak', tier: 'silver', requirement: 7, xp: 200, rarity: 'rare' },
		{ id: 'iron_will', title: 'Iron Will', description: 'Maintain a 10-day workout streak', icon: Sword, category: 'streak', tier: 'silver', requirement: 10, xp: 300, rarity: 'rare' },
		{ id: 'fortnight_fighter', title: 'Fortnight Fighter', description: 'Maintain a 14-day workout streak', icon: Swords, category: 'streak', tier: 'gold', requirement: 14, xp: 400, rarity: 'epic' },
		{ id: 'relentless', title: 'Relentless', description: 'Maintain a 30-day workout streak', icon: Crown, category: 'streak', tier: 'platinum', requirement: 30, xp: 800, rarity: 'legendary' },
		{ id: 'unstoppable', title: 'Unstoppable Force', description: 'Maintain a 60-day workout streak', icon: Diamond, category: 'streak', tier: 'diamond', requirement: 60, xp: 1500, rarity: 'legendary' },
		{ id: 'steel_resolve', title: 'Steel Resolve', description: 'Maintain a 20-day workout streak', icon: Shield, category: 'streak', tier: 'gold', requirement: 20, xp: 500, rarity: 'epic' },
		{ id: 'diamond_mind', title: 'Diamond Mind', description: 'Maintain a 50-day workout streak', icon: Diamond, category: 'streak', tier: 'platinum', requirement: 50, xp: 1200, rarity: 'legendary' },
		{ id: 'legendary_streak', title: 'Legendary Streak', description: 'Maintain a 90-day workout streak', icon: Crown, category: 'streak', tier: 'diamond', requirement: 90, xp: 3000, rarity: 'legendary' },
		{ id: 'immortal', title: 'Immortal', description: 'Maintain a 365-day workout streak', icon: Skull, category: 'streak', tier: 'diamond', requirement: 365, xp: 10000, rarity: 'legendary' },

		// Exercise Count Achievements (8)
		{ id: 'rookie', title: 'Rookie', description: 'Complete 10 total workouts', icon: Award, category: 'exercise', tier: 'bronze', requirement: 10, xp: 150, rarity: 'common' },
		{ id: 'dedicated', title: 'Dedicated', description: 'Complete 25 total workouts', icon: Medal, category: 'exercise', tier: 'silver', requirement: 25, xp: 300, rarity: 'rare' },
		{ id: 'committed', title: 'Committed', description: 'Complete 50 total workouts', icon: Trophy, category: 'exercise', tier: 'gold', requirement: 50, xp: 600, rarity: 'epic' },
		{ id: 'century_club', title: 'Century Club', description: 'Complete 100 total workouts', icon: Star, category: 'exercise', tier: 'platinum', requirement: 100, xp: 1000, rarity: 'legendary' },
		{ id: 'elite_athlete', title: 'Elite Athlete', description: 'Complete 200 total workouts', icon: Rocket, category: 'exercise', tier: 'diamond', requirement: 200, xp: 2000, rarity: 'legendary' },
		{ id: 'workout_machine', title: 'Workout Machine', description: 'Complete 300 total workouts', icon: Zap, category: 'exercise', tier: 'diamond', requirement: 300, xp: 3500, rarity: 'legendary' },
		{ id: 'fitness_legend', title: 'Fitness Legend', description: 'Complete 500 total workouts', icon: Crown, category: 'exercise', tier: 'diamond', requirement: 500, xp: 5000, rarity: 'legendary' },
		{ id: 'ultimate_warrior', title: 'Ultimate Warrior', description: 'Complete 1000 total workouts', icon: Diamond, category: 'exercise', tier: 'diamond', requirement: 1000, xp: 10000, rarity: 'legendary' },

		// Weight Target Achievements (6)
		{ id: 'target_acquired', title: 'Target Acquired', description: 'Reach 225 lbs weight milestone', icon: Crosshair, category: 'weight', tier: 'gold', requirement: 225, xp: 500, rarity: 'epic' },
		{ id: 'double_century', title: 'Double Century', description: 'Reach 200 lbs weight milestone', icon: Target, category: 'weight', tier: 'platinum', requirement: 200, xp: 800, rarity: 'legendary' },
		{ id: 'mission_complete', title: 'Mission Complete', description: 'Reach target weight of 175 lbs', icon: Trophy, category: 'weight', tier: 'diamond', requirement: 175, xp: 2000, rarity: 'legendary' },
		{ id: 'weight_warrior', title: 'Weight Warrior', description: 'Lose 10 lbs from starting weight', icon: TrendingUp, category: 'weight', tier: 'silver', requirement: 10, xp: 300, rarity: 'rare' },
		{ id: 'transformation', title: 'Transformation', description: 'Lose 25 lbs from starting weight', icon: Sparkles, category: 'weight', tier: 'gold', requirement: 25, xp: 600, rarity: 'epic' },
		{ id: 'new_you', title: 'New You', description: 'Lose 50 lbs from starting weight', icon: Crown, category: 'weight', tier: 'diamond', requirement: 50, xp: 1500, rarity: 'legendary' },

		// Body Composition Achievements (6)
		{ id: 'heavy_lifter', title: 'Heavy Lifter', description: 'Increase muscle mass by 2% from baseline', icon: Dumbbell, category: 'progress', tier: 'gold', requirement: 2, xp: 600, rarity: 'epic' },
		{ id: 'hydra_slayer', title: 'Hydra Slayer', description: 'Achieve visceral fat below 10', icon: Skull, category: 'elite', tier: 'platinum', requirement: 10, xp: 1000, rarity: 'legendary' },
		{ id: 'lean_machine', title: 'Lean Machine', description: 'Achieve body fat percentage below 12%', icon: Gauge, category: 'elite', tier: 'platinum', requirement: 12, xp: 1200, rarity: 'legendary' },
		{ id: 'muscle_builder', title: 'Muscle Builder', description: 'Increase muscle mass by 5% from baseline', icon: Dumbbell, category: 'progress', tier: 'platinum', requirement: 5, xp: 1000, rarity: 'legendary' },
		{ id: 'body_sculptor', title: 'Body Sculptor', description: 'Achieve optimal BMI (22-23)', icon: Target, category: 'elite', tier: 'gold', requirement: 22, xp: 800, rarity: 'epic' },
		{ id: 'metabolic_master', title: 'Metabolic Master', description: 'Achieve metabolic age below actual age', icon: Lightning, category: 'elite', tier: 'diamond', requirement: 1, xp: 2000, rarity: 'legendary' },

		// Strength Achievements (5)
		{ id: 'strength_master', title: 'Strength Master', description: 'Complete 50 strength training sessions', icon: Dumbbell, category: 'strength', tier: 'gold', requirement: 50, xp: 600, rarity: 'epic' },
		{ id: 'pushup_pro', title: 'Pushup Pro', description: 'Complete 100 total pushups in workouts', icon: Activity, category: 'strength', tier: 'silver', requirement: 100, xp: 300, rarity: 'rare' },
		{ id: 'squat_champion', title: 'Squat Champion', description: 'Complete 200 total squats in workouts', icon: Activity, category: 'strength', tier: 'gold', requirement: 200, xp: 500, rarity: 'epic' },
		{ id: 'weight_warrior_30', title: 'Weight Warrior', description: 'Lift 30+ lbs in dumbbell exercises', icon: Dumbbell, category: 'strength', tier: 'silver', requirement: 30, xp: 400, rarity: 'rare' },
		{ id: 'iron_pumper', title: 'Iron Pumper', description: 'Lift 40+ lbs in dumbbell exercises', icon: Dumbbell, category: 'strength', tier: 'gold', requirement: 40, xp: 600, rarity: 'epic' },

		// Endurance & Performance Achievements (5)
		{ id: 'speed_demon', title: 'Speed Demon', description: 'Achieve average pace under 25 min/mile', icon: FastForward, category: 'performance', tier: 'gold', requirement: 25, xp: 500, rarity: 'epic' },
		{ id: 'heart_warrior', title: 'Heart Warrior', description: 'Maintain 150+ BPM average in workout', icon: Heart, category: 'performance', tier: 'silver', requirement: 150, xp: 300, rarity: 'rare' },
		{ id: 'endurance_king', title: 'Endurance King', description: 'Complete workout lasting 60+ minutes', icon: Timer, category: 'endurance', tier: 'gold', requirement: 60, xp: 400, rarity: 'epic' },
		{ id: 'distance_destroyer', title: 'Distance Destroyer', description: 'Walk 100 total miles', icon: Mountain, category: 'endurance', tier: 'platinum', requirement: 100, xp: 800, rarity: 'legendary' },
		{ id: 'marathon_mindset', title: 'Marathon Mindset', description: 'Walk 250 total miles', icon: Footprints, category: 'endurance', tier: 'diamond', requirement: 250, xp: 1500, rarity: 'legendary' }
	];

	onMount(() => {
		calculateAchievements();
	});

	// Reactive updates when data changes
	$: if ($exerciseLogs || $healthMetrics || $userStreaks) {
		calculateAchievements();
	}

	function calculateAchievements() {
		const totalCalories = $exerciseLogs.reduce((sum, log) => sum + log.calories, 0);
		const totalDistance = $exerciseLogs
			.filter(log => log.type === 'walk' && log.distance)
			.reduce((sum, log) => sum + (log.distance || 0), 0);
		const strengthWorkouts = $exerciseLogs.filter(log => 
			log.type === 'dumbbell' || log.type === 'squat' || log.type === 'pushup'
		).length;
		const morningWorkouts = $exerciseLogs.filter(log => {
			const startTime = log.startTime;
			if (!startTime) return false;
			const hour = parseInt(startTime.split(':')[0]);
			return hour >= 5 && hour < 12;
		}).length;
		const nightWorkouts = $exerciseLogs.filter(log => {
			const startTime = log.startTime;
			if (!startTime) return false;
			const hour = parseInt(startTime.split(':')[0]);
			return hour >= 18 || hour < 5;
		}).length;

		// Calculate weight loss
		const baselineWeight = $healthMetrics.length > 0 ? $healthMetrics[$healthMetrics.length - 1].weight : 0;
		const currentWeight = $healthMetrics.length > 0 ? $healthMetrics[0].weight : 0;
		const weightLoss = baselineWeight - currentWeight;

		// Calculate muscle mass increase
		const baselineMetrics = $healthMetrics.length > 0 ? $healthMetrics[$healthMetrics.length - 1] : null;
		const currentMetrics = $healthMetrics.length > 0 ? $healthMetrics[0] : null;
		let muscleMassIncrease = 0;
		if (baselineMetrics && currentMetrics) {
			muscleMassIncrease = ((currentMetrics.muscleMass - baselineMetrics.muscleMass) / baselineMetrics.muscleMass) * 100;
		}

		// Calculate total pushups and squats
		const totalPushups = $exerciseLogs
			.filter(log => log.type === 'pushup')
			.reduce((sum, log) => sum + ((log.sets || 0) * (log.reps || 0)), 0);
		const totalSquats = $exerciseLogs
			.filter(log => log.type === 'squat')
			.reduce((sum, log) => sum + ((log.sets || 0) * (log.reps || 0)), 0);

		// Calculate max weight lifted
		const maxWeight = $exerciseLogs
			.filter(log => log.type === 'dumbbell' && log.weight)
			.reduce((max, log) => Math.max(max, log.weight || 0), 0);

		// Calculate best pace (lowest time per mile)
		const bestPace = $exerciseLogs
			.filter(log => log.type === 'walk' && log.averagePace)
			.map(log => {
				const pace = log.averagePace || '';
				const match = pace.match(/(\d+)'(\d+)"/);
				if (match) {
					return parseInt(match[1]) + (parseInt(match[2]) / 60);
				}
				return 999;
			})
			.reduce((min, pace) => Math.min(min, pace), 999);

		// Calculate max heart rate
		const maxHeartRate = $exerciseLogs
			.filter(log => log.averageHeartRate)
			.reduce((max, log) => Math.max(max, log.averageHeartRate || 0), 0);

		// Calculate longest workout
		const longestWorkout = $exerciseLogs
			.reduce((max, log) => Math.max(max, log.duration || 0), 0);

		achievements = achievementDefinitions.map(def => {
			let currentProgress = 0;
			let unlocked = false;

			switch (def.id) {
				case 'first_step':
					currentProgress = $userStreaks.total_workouts > 0 ? 1 : 0;
					break;
				case 'first_blood':
					currentProgress = $healthMetrics.length > 0 ? 1 : 0;
					break;
				case 'data_tracker':
					currentProgress = $healthMetrics.length > 0 ? 1 : 0;
					break;
				case 'early_bird':
					currentProgress = morningWorkouts;
					break;
				case 'night_owl':
					currentProgress = nightWorkouts;
					break;
				case 'perfect_week':
					// Simplified - would need more complex logic for actual perfect week
					currentProgress = $userStreaks.current_streak >= 7 ? 1 : 0;
					break;
				case 'double_duty':
					// Simplified - would need to check for same-day workouts
					currentProgress = 0;
					break;
				case 'weekly_warrior':
					// Simplified - would need weekly workout counting
					currentProgress = Math.min($userStreaks.total_workouts, 7);
					break;
				case 'transformation_start':
					currentProgress = Math.min($userStreaks.current_streak, 30);
					break;
				case 'dedication':
					currentProgress = $userStreaks.current_streak;
					break;
				case 'getting_started':
				case 'week_warrior':
				case 'iron_will':
				case 'fortnight_fighter':
				case 'relentless':
				case 'unstoppable':
				case 'steel_resolve':
				case 'diamond_mind':
				case 'legendary_streak':
				case 'immortal':
					currentProgress = $userStreaks.current_streak;
					break;
				case 'rookie':
				case 'dedicated':
				case 'committed':
				case 'century_club':
				case 'elite_athlete':
				case 'workout_machine':
				case 'fitness_legend':
				case 'ultimate_warrior':
					currentProgress = $userStreaks.total_workouts;
					break;
				case 'target_acquired':
					currentProgress = currentWeight;
					unlocked = currentWeight <= 225 && currentWeight > 0;
					break;
				case 'double_century':
					currentProgress = currentWeight;
					unlocked = currentWeight <= 200 && currentWeight > 0;
					break;
				case 'mission_complete':
					currentProgress = currentWeight;
					unlocked = currentWeight <= 175 && currentWeight > 0;
					break;
				case 'weight_warrior':
				case 'transformation':
				case 'new_you':
					currentProgress = weightLoss;
					break;
				case 'heavy_lifter':
				case 'muscle_builder':
					currentProgress = muscleMassIncrease;
					break;
				case 'hydra_slayer':
					const visceralFat = currentMetrics?.visceralFat || 999;
					currentProgress = Math.max(0, 15 - visceralFat);
					unlocked = visceralFat < 10 && visceralFat > 0;
					break;
				case 'lean_machine':
					const bodyFat = currentMetrics?.bodyFat || 999;
					currentProgress = Math.max(0, 20 - bodyFat);
					unlocked = bodyFat < 12 && bodyFat > 0;
					break;
				case 'body_sculptor':
					const bmi = currentMetrics?.bmi || 0;
					currentProgress = bmi;
					unlocked = bmi >= 22 && bmi <= 23;
					break;
				case 'metabolic_master':
					const metabolicAge = currentMetrics?.metabolicAge || 999;
					currentProgress = Math.max(0, 37 - metabolicAge);
					unlocked = metabolicAge < 37 && metabolicAge > 0;
					break;
				case 'strength_master':
					currentProgress = strengthWorkouts;
					break;
				case 'pushup_pro':
					currentProgress = totalPushups;
					break;
				case 'squat_champion':
					currentProgress = totalSquats;
					break;
				case 'weight_warrior_30':
				case 'iron_pumper':
					currentProgress = maxWeight;
					break;
				case 'speed_demon':
					currentProgress = bestPace < 999 ? Math.max(0, 30 - bestPace) : 0;
					unlocked = bestPace < 25;
					break;
				case 'heart_warrior':
					currentProgress = maxHeartRate;
					break;
				case 'endurance_king':
					currentProgress = longestWorkout;
					break;
				case 'distance_destroyer':
				case 'marathon_mindset':
					currentProgress = totalDistance;
					break;
				default:
					currentProgress = 0;
			}

			if (!unlocked && !['target_acquired', 'double_century', 'mission_complete', 'hydra_slayer', 'lean_machine', 'body_sculptor', 'metabolic_master', 'speed_demon'].includes(def.id)) {
				unlocked = currentProgress >= def.requirement;
			}

			return {
				...def,
				currentProgress,
				unlocked,
				unlockedDate: unlocked ? new Date().toISOString().split('T')[0] : undefined
			} as Achievement;
		});

		// Calculate totals
		completedAchievements = achievements.filter(a => a.unlocked).length;
		totalXP = achievements.filter(a => a.unlocked).reduce((sum, a) => sum + a.xp, 0);
		currentLevel = Math.floor(totalXP / 1000) + 1;
		xpToNextLevel = (currentLevel * 1000) - totalXP;
	}

	function getTierColor(tier: string): string {
		switch (tier) {
			case 'bronze': return 'text-amber-600';
			case 'silver': return 'text-gray-400';
			case 'gold': return 'text-yellow-400';
			case 'platinum': return 'text-purple-400';
			case 'diamond': return 'text-cyan-400';
			default: return 'text-base-content';
		}
	}

	function getTierBg(tier: string): string {
		switch (tier) {
			case 'bronze': return 'bg-amber-600/20 border-amber-600/30';
			case 'silver': return 'bg-gray-400/20 border-gray-400/30';
			case 'gold': return 'bg-yellow-400/20 border-yellow-400/30';
			case 'platinum': return 'bg-purple-400/20 border-purple-400/30';
			case 'diamond': return 'bg-cyan-400/20 border-cyan-400/30';
			default: return 'bg-base-200 border-base-300';
		}
	}

	function getRarityColor(rarity: string): string {
		switch (rarity) {
			case 'common': return 'text-gray-400';
			case 'rare': return 'text-blue-400';
			case 'epic': return 'text-purple-400';
			case 'legendary': return 'text-orange-400';
			default: return 'text-base-content';
		}
	}

	function getCategoryIcon(category: string) {
		switch (category) {
			case 'streak': return Flame;
			case 'exercise': return Dumbbell;
			case 'progress': return TrendingUp;
			case 'milestone': return Target;
			case 'elite': return Crown;
			case 'legendary': return Diamond;
			case 'weight': return Weight;
			case 'strength': return Dumbbell;
			case 'endurance': return Mountain;
			case 'performance': return Zap;
			case 'consistency': return Shield;
			case 'special': return Star;
			default: return Award;
		}
	}

	function getProgressPercentage(achievement: Achievement): number {
		return Math.min((achievement.currentProgress / achievement.requirement) * 100, 100);
	}

	// Group achievements by category
	$: groupedAchievements = achievements.reduce((groups, achievement) => {
		const category = achievement.category;
		if (!groups[category]) groups[category] = [];
		groups[category].push(achievement);
		return groups;
	}, {} as Record<string, Achievement[]>);

	// Sort achievements within each category by tier and unlock status
	$: Object.keys(groupedAchievements).forEach(category => {
		groupedAchievements[category].sort((a, b) => {
			if (a.unlocked !== b.unlocked) return b.unlocked ? 1 : -1;
			const tierOrder = { bronze: 1, silver: 2, gold: 3, platinum: 4, diamond: 5 };
			return tierOrder[a.tier] - tierOrder[b.tier];
		});
	});

	const categoryNames = {
		milestone: 'Milestones',
		streak: 'Streak Master',
		exercise: 'Exercise Goals',
		progress: 'Progress Tracker',
		elite: 'Elite Status',
		legendary: 'Legendary',
		weight: 'Weight Targets',
		strength: 'Strength Goals',
		endurance: 'Endurance Challenges',
		performance: 'Performance Metrics',
		consistency: 'Consistency Rewards',
		special: 'Special Achievements'
	};
</script>

<div class="space-y-6">
	<div>
		<h1 class="text-3xl font-bold flex items-center gap-3">
			<Trophy class="text-yellow-400" size={32} />
			Achievements
		</h1>
		<p class="text-base-content/70">Unlock rewards and track your fitness journey milestones</p>
	</div>

	<!-- Player Stats -->
	<div class="grid grid-cols-1 md:grid-cols-4 gap-4">
		<div class="card bg-gradient-to-br from-purple-600 to-pink-600 text-white">
			<div class="card-body p-4">
				<div class="flex items-center gap-3">
					<Star size={24} />
					<div>
						<div class="text-2xl font-bold">Level {currentLevel}</div>
						<div class="text-sm opacity-90">Fitness Level</div>
					</div>
				</div>
			</div>
		</div>

		<div class="card bg-gradient-to-br from-blue-600 to-cyan-600 text-white">
			<div class="card-body p-4">
				<div class="flex items-center gap-3">
					<Zap size={24} />
					<div>
						<div class="text-2xl font-bold">{totalXP.toLocaleString()}</div>
						<div class="text-sm opacity-90">Total XP</div>
					</div>
				</div>
			</div>
		</div>

		<div class="card bg-gradient-to-br from-green-600 to-emerald-600 text-white">
			<div class="card-body p-4">
				<div class="flex items-center gap-3">
					<Trophy size={24} />
					<div>
						<div class="text-2xl font-bold">{completedAchievements}</div>
						<div class="text-sm opacity-90">Unlocked</div>
					</div>
				</div>
			</div>
		</div>

		<div class="card bg-gradient-to-br from-orange-600 to-red-600 text-white">
			<div class="card-body p-4">
				<div class="flex items-center gap-3">
					<Target size={24} />
					<div>
						<div class="text-2xl font-bold">{xpToNextLevel}</div>
						<div class="text-sm opacity-90">XP to Level {currentLevel + 1}</div>
					</div>
				</div>
			</div>
		</div>
	</div>

	<!-- Level Progress Bar -->
	<div class="card bg-base-200">
		<div class="card-body p-4">
			<div class="flex items-center justify-between mb-2">
				<span class="font-semibold">Level {currentLevel} Progress</span>
				<span class="text-sm text-base-content/70">{totalXP % 1000} / 1000 XP</span>
			</div>
			<div class="w-full bg-base-300 rounded-full h-3">
				<div 
					class="bg-gradient-to-r from-purple-500 to-pink-500 h-3 rounded-full transition-all duration-500"
					style="width: {((totalXP % 1000) / 1000) * 100}%"
				></div>
			</div>
		</div>
	</div>

	<!-- Achievement Categories -->
	{#each Object.entries(groupedAchievements) as [category, categoryAchievements]}
		<div class="space-y-4">
			<div class="flex items-center gap-3">
				<svelte:component this={getCategoryIcon(category)} size={24} class="text-primary" />
				<h2 class="text-2xl font-bold">{categoryNames[category]}</h2>
				<div class="badge badge-primary">
					{categoryAchievements.filter(a => a.unlocked).length}/{categoryAchievements.length}
				</div>
			</div>

			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
				{#each categoryAchievements as achievement}
					<div class="card {achievement.unlocked ? getTierBg(achievement.tier) : 'bg-base-200 opacity-60'} border-2 hover:scale-105 transition-transform duration-200">
						<div class="card-body p-4">
							<div class="flex items-start justify-between mb-3">
								<div class="flex items-center gap-3">
									{#if achievement.unlocked}
										<svelte:component this={achievement.icon} size={24} class={getTierColor(achievement.tier)} />
									{:else}
										<Lock size={24} class="text-base-content/50" />
									{/if}
									<div>
										<h3 class="font-bold {achievement.unlocked ? getTierColor(achievement.tier) : 'text-base-content/50'}">{achievement.title}</h3>
										<div class="badge badge-xs {getRarityColor(achievement.rarity)} bg-opacity-20">
											{achievement.rarity}
										</div>
									</div>
								</div>
								{#if achievement.unlocked}
									<div class="flex items-center gap-1">
										<Sparkles size={16} class="text-yellow-400" />
										<span class="text-sm font-bold text-yellow-400">+{achievement.xp} XP</span>
									</div>
								{/if}
							</div>

							<p class="text-sm text-base-content/70 mb-3">{achievement.description}</p>

							<!-- Progress Bar -->
							<div class="space-y-2">
								<div class="flex justify-between text-xs">
									<span>{achievement.currentProgress.toLocaleString()}</span>
									<span>{achievement.requirement.toLocaleString()}</span>
								</div>
								<div class="w-full bg-base-300 rounded-full h-2">
									<div 
										class="h-2 rounded-full transition-all duration-500 {achievement.unlocked ? 'bg-gradient-to-r from-green-500 to-emerald-500' : 'bg-gradient-to-r from-gray-400 to-gray-500'}"
										style="width: {getProgressPercentage(achievement)}%"
									></div>
								</div>
								{#if achievement.unlocked}
									<div class="flex items-center gap-1 text-xs text-success">
										<CheckCircle size={12} />
										<span>Unlocked!</span>
										{#if achievement.unlockedDate}
											<span class="text-base-content/50">({achievement.unlockedDate})</span>
										{/if}
									</div>
								{:else}
									<div class="text-xs text-base-content/50">
										{Math.round(getProgressPercentage(achievement))}% Complete
									</div>
								{/if}
							</div>
						</div>
					</div>
				{/each}
			</div>
		</div>
	{/each}

	<!-- Upcoming Achievements -->
	<div class="card bg-gradient-to-r from-primary/20 to-secondary/20">
		<div class="card-body">
			<h2 class="card-title mb-4 flex items-center gap-2">
				<Gift size={24} />
				Next Achievements
			</h2>
			<div class="grid grid-cols-1 md:grid-cols-3 gap-4">
				{#each achievements.filter(a => !a.unlocked && a.currentProgress > 0).slice(0, 3) as achievement}
					<div class="bg-base-200/50 p-4 rounded-lg">
						<div class="flex items-center gap-2 mb-2">
							<svelte:component this={achievement.icon} size={20} class={getTierColor(achievement.tier)} />
							<span class="font-semibold">{achievement.title}</span>
						</div>
						<div class="text-sm text-base-content/70 mb-2">{achievement.description}</div>
						<div class="text-xs">
							<span class="font-bold">{achievement.currentProgress}</span> / {achievement.requirement}
							<span class="text-success ml-2">+{achievement.xp} XP</span>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</div>
</div>