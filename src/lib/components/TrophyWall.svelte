<script lang="ts">
	import { onMount } from 'svelte';
	import { Trophy, Award, Medal, Star, Crown, Diamond, Filter, Grid3x3 as Grid3X3, List, Search, Crosshair, Skull, Swords, Zap as Lightning, Footprints, Weight, Eye, Brain, Compass, Anchor, Sunrise, Moon, Coffee, Sunset, Hourglass, Repeat, RotateCcw, FastForward, Rewind, Play, Pause, SkipForward, SkipBack, Volume2, VolumeX, Wifi, WifiOff, Battery, BatteryLow, Signal, SignalHigh, SignalLow, SignalMedium, SignalZero, Dumbbell, Activity, Flame, Shield, Sword, Mountain, Rocket, Heart, TrendingUp, Calendar, Clock, Target, Zap, Sparkles, Timer, Gauge } from 'lucide-svelte';
	import { exerciseLogs, healthMetrics, userStreaks } from '$lib/stores/fitness';
	import { user } from '$lib/stores/auth';

	interface Achievement {
		id: string;
		title: string;
		description: string;
		icon: any;
		category: 'streak' | 'exercise' | 'progress' | 'milestone' | 'elite' | 'legendary';
		tier: 'bronze' | 'silver' | 'gold' | 'platinum' | 'diamond';
		requirement: number;
		currentProgress: number;
		unlocked: boolean;
		unlockedDate?: string;
		xp: number;
		rarity: 'common' | 'rare' | 'epic' | 'legendary';
	}

	let achievements: Achievement[] = [];
	let earnedAchievements: Achievement[] = [];
	let viewMode: 'grid' | 'list' = 'grid';
	let filterTier: string = 'all';
	let filterCategory: string = 'all';
	let filterRarity: string = 'all';
	let searchTerm: string = '';

	// Achievement definitions (same as in Achievements.svelte)
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

	$: filteredAchievements = earnedAchievements.filter(achievement => {
		const matchesTier = filterTier === 'all' || achievement.tier === filterTier;
		const matchesCategory = filterCategory === 'all' || achievement.category === filterCategory;
		const matchesRarity = filterRarity === 'all' || achievement.rarity === filterRarity;
		const matchesSearch = searchTerm === '' || 
			achievement.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
			achievement.description.toLowerCase().includes(searchTerm.toLowerCase());
		
		return matchesTier && matchesCategory && matchesRarity && matchesSearch;
	});

	function calculateAchievements() {
		const totalCalories = $exerciseLogs.reduce((sum, log) => sum + log.calories, 0);
		const currentWeight = $healthMetrics.length > 0 ? $healthMetrics[0].weight : 0;
		const baselineMetrics = $healthMetrics.length > 0 ? $healthMetrics[$healthMetrics.length - 1] : null;
		const currentMetrics = $healthMetrics.length > 0 ? $healthMetrics[0] : null;
		
		let muscleMassIncrease = 0;
		if (baselineMetrics && currentMetrics) {
			muscleMassIncrease = ((currentMetrics.muscleMass - baselineMetrics.muscleMass) / baselineMetrics.muscleMass) * 100;
		}

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
				case 'streak_3':
				case 'streak_7':
				case 'relentless':
				case 'iron_will':
					currentProgress = $userStreaks.current_streak;
					break;
				case 'target_acquired':
					currentProgress = currentWeight;
					unlocked = currentWeight <= 225 && currentWeight > 0;
					break;
				case 'heavy_lifter':
					currentProgress = muscleMassIncrease;
					unlocked = muscleMassIncrease >= 2;
					break;
				case 'hydra_slayer':
					const visceralFat = currentMetrics?.visceralFat || 999;
					currentProgress = Math.max(0, 10 - visceralFat);
					unlocked = visceralFat < 10 && visceralFat > 0;
					break;
				default:
					currentProgress = 0;
			}

			if (!unlocked && def.id !== 'target_acquired' && def.id !== 'heavy_lifter' && def.id !== 'hydra_slayer') {
				unlocked = currentProgress >= def.requirement;
			}

			return {
				...def,
				currentProgress,
				unlocked,
				unlockedDate: unlocked ? new Date().toISOString().split('T')[0] : undefined
			} as Achievement;
		});

		earnedAchievements = achievements.filter(a => a.unlocked);
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
			case 'bronze': return 'bg-gradient-to-br from-amber-600/20 to-amber-800/20 border-amber-600/30';
			case 'silver': return 'bg-gradient-to-br from-gray-400/20 to-gray-600/20 border-gray-400/30';
			case 'gold': return 'bg-gradient-to-br from-yellow-400/20 to-yellow-600/20 border-yellow-400/30';
			case 'platinum': return 'bg-gradient-to-br from-purple-400/20 to-purple-600/20 border-purple-400/30';
			case 'diamond': return 'bg-gradient-to-br from-cyan-400/20 to-cyan-600/20 border-cyan-400/30';
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

	// Group achievements by tier
	$: groupedByTier = filteredAchievements.reduce((groups, achievement) => {
		const tier = achievement.tier;
		if (!groups[tier]) groups[tier] = [];
		groups[tier].push(achievement);
		return groups;
	}, {} as Record<string, Achievement[]>);

	const tierOrder = ['diamond', 'platinum', 'gold', 'silver', 'bronze'];
	const tierNames = {
		diamond: 'Diamond',
		platinum: 'Platinum', 
		gold: 'Gold',
		silver: 'Silver',
		bronze: 'Bronze'
	};
</script>

<div class="space-y-6">
	<div class="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
		<div>
			<h1 class="text-3xl font-bold flex items-center gap-3">
				<Trophy class="text-yellow-400" size={32} />
				Trophy Wall
			</h1>
			<p class="text-base-content/70">Showcase your earned achievements and milestones</p>
		</div>
		
		<!-- View Toggle -->
		<div class="flex items-center gap-2">
			<div class="join">
				<button 
					class="btn join-item btn-sm {viewMode === 'grid' ? 'btn-active' : 'btn-outline'}"
					on:click={() => viewMode = 'grid'}
				>
					<Grid3X3 size={16} />
					Grid
				</button>
				<button 
					class="btn join-item btn-sm {viewMode === 'list' ? 'btn-active' : 'btn-outline'}"
					on:click={() => viewMode = 'list'}
				>
					<List size={16} />
					List
				</button>
			</div>
		</div>
	</div>

	<!-- Trophy Statistics -->
	<div class="grid grid-cols-2 md:grid-cols-5 gap-4">
		{#each tierOrder as tier}
			{@const tierCount = earnedAchievements.filter(a => a.tier === tier).length}
			<div class="card {getTierBg(tier)} border-2">
				<div class="card-body p-4 text-center">
					<div class="text-2xl font-bold {getTierColor(tier)}">{tierCount}</div>
					<div class="text-sm font-medium">{tierNames[tier]}</div>
				</div>
			</div>
		{/each}
	</div>

	<!-- Filters and Search -->
	<div class="card bg-base-200">
		<div class="card-body p-4">
			<div class="flex flex-wrap gap-4 items-center">
				<div class="flex items-center gap-2">
					<Filter size={16} />
					<span class="font-medium">Filters:</span>
				</div>
				
				<div class="form-control">
					<select class="select select-sm select-bordered" bind:value={filterTier}>
						<option value="all">All Tiers</option>
						<option value="diamond">Diamond</option>
						<option value="platinum">Platinum</option>
						<option value="gold">Gold</option>
						<option value="silver">Silver</option>
						<option value="bronze">Bronze</option>
					</select>
				</div>
				
				<div class="form-control">
					<select class="select select-sm select-bordered" bind:value={filterCategory}>
						<option value="all">All Categories</option>
						<option value="milestone">Milestones</option>
						<option value="streak">Streaks</option>
						<option value="progress">Progress</option>
						<option value="elite">Elite</option>
					</select>
				</div>
				
				<div class="form-control">
					<select class="select select-sm select-bordered" bind:value={filterRarity}>
						<option value="all">All Rarities</option>
						<option value="legendary">Legendary</option>
						<option value="epic">Epic</option>
						<option value="rare">Rare</option>
						<option value="common">Common</option>
					</select>
				</div>
				
				<div class="form-control flex-1 min-w-48">
					<div class="relative">
						<Search size={16} class="absolute left-3 top-1/2 transform -translate-y-1/2 text-base-content/50" />
						<input 
							type="text" 
							placeholder="Search achievements..." 
							class="input input-sm input-bordered w-full pl-10"
							bind:value={searchTerm}
						/>
					</div>
				</div>
			</div>
		</div>
	</div>

	{#if earnedAchievements.length === 0}
		<div class="card bg-base-200">
			<div class="card-body text-center py-12">
				<Trophy size={48} class="mx-auto text-base-content/50 mb-4" />
				<h3 class="text-xl font-bold mb-2">No Trophies Yet</h3>
				<p class="text-base-content/70">Complete workouts and track your progress to earn your first achievements!</p>
				<a href="/schedule" class="btn btn-primary mt-4">Start Working Out</a>
			</div>
		</div>
	{:else if filteredAchievements.length === 0}
		<div class="card bg-base-200">
			<div class="card-body text-center py-12">
				<Search size={48} class="mx-auto text-base-content/50 mb-4" />
				<h3 class="text-xl font-bold mb-2">No Matching Trophies</h3>
				<p class="text-base-content/70">Try adjusting your filters or search terms.</p>
			</div>
		</div>
	{:else}
		<!-- Trophy Display -->
		{#if viewMode === 'grid'}
			<!-- Grid View by Tier -->
			{#each tierOrder as tier}
				{@const tierAchievements = filteredAchievements.filter(a => a.tier === tier)}
				{#if tierAchievements.length > 0}
					<div class="space-y-4">
						<h2 class="text-2xl font-bold {getTierColor(tier)} flex items-center gap-2">
							<svelte:component this={tierAchievements[0].icon} size={24} />
							{tierNames[tier]} Trophies
							<div class="badge badge-lg {getTierColor(tier)} bg-opacity-20">
								{tierAchievements.length}
							</div>
						</h2>
						
						<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
							{#each tierAchievements as achievement}
								<div class="card {getTierBg(achievement.tier)} border-2 hover:scale-105 transition-transform duration-200">
									<div class="card-body p-4 text-center">
										<div class="flex justify-center mb-3">
											<div class="w-16 h-16 rounded-full {getTierBg(achievement.tier)} flex items-center justify-center border-2 {getTierColor(achievement.tier)} border-current">
												<svelte:component this={achievement.icon} size={32} class={getTierColor(achievement.tier)} />
											</div>
										</div>
										
										<h3 class="font-bold text-lg {getTierColor(achievement.tier)} mb-1">
											{achievement.title}
										</h3>
										
										<p class="text-sm text-base-content/70 mb-2">
											{achievement.description}
										</p>
										
										<div class="flex justify-center gap-2 mb-2">
											<div class="badge badge-xs {getRarityColor(achievement.rarity)} bg-opacity-20">
												{achievement.rarity}
											</div>
											<div class="badge badge-xs text-yellow-400 bg-yellow-400/20">
												+{achievement.xp} XP
											</div>
										</div>
										
										{#if achievement.unlockedDate}
											<div class="text-xs text-base-content/50">
												Earned: {achievement.unlockedDate}
											</div>
										{/if}
									</div>
								</div>
							{/each}
						</div>
					</div>
				{/if}
			{/each}
		{:else}
			<!-- List View -->
			<div class="space-y-2">
				{#each filteredAchievements.sort((a, b) => {
					const tierOrder = { diamond: 5, platinum: 4, gold: 3, silver: 2, bronze: 1 };
					return tierOrder[b.tier] - tierOrder[a.tier];
				}) as achievement}
					<div class="card {getTierBg(achievement.tier)} border-2">
						<div class="card-body p-4">
							<div class="flex items-center gap-4">
								<div class="w-12 h-12 rounded-full {getTierBg(achievement.tier)} flex items-center justify-center border-2 {getTierColor(achievement.tier)} border-current">
									<svelte:component this={achievement.icon} size={24} class={getTierColor(achievement.tier)} />
								</div>
								
								<div class="flex-1">
									<div class="flex items-center gap-2 mb-1">
										<h3 class="font-bold {getTierColor(achievement.tier)}">
											{achievement.title}
										</h3>
										<div class="badge badge-sm {getTierColor(achievement.tier)} bg-opacity-20">
											{achievement.tier}
										</div>
									</div>
									<p class="text-sm text-base-content/70">
										{achievement.description}
									</p>
								</div>
								
								<div class="text-right">
									<div class="flex gap-2 mb-1">
										<div class="badge badge-xs {getRarityColor(achievement.rarity)} bg-opacity-20">
											{achievement.rarity}
										</div>
										<div class="badge badge-xs text-yellow-400 bg-yellow-400/20">
											+{achievement.xp} XP
										</div>
									</div>
									{#if achievement.unlockedDate}
										<div class="text-xs text-base-content/50">
											{achievement.unlockedDate}
										</div>
									{/if}
								</div>
							</div>
						</div>
					</div>
				{/each}
			</div>
		{/if}
	{/if}

	<!-- Back to Achievements -->
	<div class="text-center">
		<a href="/achievements" class="btn btn-outline">
			<Award size={16} />
			View All Achievements
		</a>
	</div>
</div>