<script lang="ts">
	import { onMount } from 'svelte';
	import { Check, Clock, Footprints, Dumbbell, Plus, Calendar, List, LayoutGrid, ChevronLeft, ChevronRight } from 'lucide-svelte';
	import { exerciseLogs, saveExerciseLog, deleteExerciseLog } from '$lib/stores/fitness';
	import { user } from '$lib/stores/auth';
	import type { ProgressiveStrengthPlan, ExerciseLog } from '$lib/types';

	let currentWeek: Date[] = [];
	let showExerciseModal = false;
	let selectedDate = '';
	let selectedExerciseType: 'walk' | 'dumbbell' | 'squat' | 'pushup' = 'walk';
	let currentWeekNumber = 1;
	let viewMode: 'list' | 'board' | 'calendar' = 'list';
	let currentMonth = new Date();

	// Exercise form data
	let exerciseForm = {
		distance: 0,
		duration: 0,
		sets: 0,
		reps: 0,
		weight: 0,
		notes: '',
		startTime: '',
		endTime: '',
		averageHeartRate: 0,
		averagePace: '',
		activeCalories: 0,
		totalCalories: 0,
		steps: 0
	};

	// Progressive strength plan (20 weeks to goal)
	const strengthPlan: ProgressiveStrengthPlan[] = [
		// Week 1-2: Foundation
		{ week: 1, dumbbell: { sets: 4, reps: 8, weight: 15 }, squat: { sets: 4, reps: 10 }, pushup: { sets: 4, reps: 8 } },
		{ week: 2, dumbbell: { sets: 4, reps: 10, weight: 15 }, squat: { sets: 4, reps: 12 }, pushup: { sets: 4, reps: 10 } },
		// Week 3-4: Build
		{ week: 3, dumbbell: { sets: 4, reps: 12, weight: 20 }, squat: { sets: 4, reps: 15 }, pushup: { sets: 4, reps: 12 } },
		{ week: 4, dumbbell: { sets: 5, reps: 10, weight: 20 }, squat: { sets: 5, reps: 12 }, pushup: { sets: 5, reps: 10 } },
		// Week 5-8: Strength
		{ week: 5, dumbbell: { sets: 5, reps: 12, weight: 25 }, squat: { sets: 5, reps: 15 }, pushup: { sets: 5, reps: 12 } },
		{ week: 6, dumbbell: { sets: 5, reps: 15, weight: 25 }, squat: { sets: 5, reps: 18 }, pushup: { sets: 5, reps: 15 } },
		{ week: 7, dumbbell: { sets: 5, reps: 12, weight: 30 }, squat: { sets: 5, reps: 20 }, pushup: { sets: 5, reps: 18 } },
		{ week: 8, dumbbell: { sets: 5, reps: 15, weight: 30 }, squat: { sets: 5, reps: 22 }, pushup: { sets: 5, reps: 20 } },
		// Continue pattern through week 20...
	];

	const weeklySchedule = {
		Monday: [
			{ type: 'walk', time: 'Morning', description: '2–3 miles brisk pace (30–50 min)', icon: Footprints },
			{ type: 'walk', time: 'Night', description: '2–3 miles brisk pace (30–50 min)', icon: Footprints }
		],
		Tuesday: [
			{ type: 'walk', time: 'Any', description: '2 miles max brisk pace', icon: Footprints },
			{ type: 'strength', time: 'Any', description: 'Dumbbells + Squats + Pushups', icon: Dumbbell }
		],
		Wednesday: [
			{ type: 'walk', time: 'Morning', description: '2–3 miles brisk pace (30–50 min)', icon: Footprints },
			{ type: 'walk', time: 'Night', description: '2–3 miles brisk pace (30–50 min)', icon: Footprints }
		],
		Thursday: [
			{ type: 'walk', time: 'Any', description: '2 miles max brisk pace', icon: Footprints },
			{ type: 'strength', time: 'Any', description: 'Dumbbells + Squats + Pushups', icon: Dumbbell }
		],
		Friday: [
			{ type: 'walk', time: 'Morning', description: '2–3 miles brisk pace (30–50 min)', icon: Footprints },
			{ type: 'walk', time: 'Night', description: '2–3 miles brisk pace (30–50 min)', icon: Footprints }
		],
		Saturday: [
			{ type: 'walk', time: 'Any', description: '2 miles max brisk pace', icon: Footprints },
			{ type: 'strength', time: 'Any', description: 'Dumbbells + Squats + Pushups', icon: Dumbbell }
		],
		Sunday: [
			{ type: 'rest', time: 'All Day', description: 'Rest & Cardio break - Mobility, stretching, or yoga-style flow', icon: Clock }
		]
	};

	onMount(() => {
		generateCurrentWeek();
		calculateCurrentWeek();
	});

	function generateCurrentWeek() {
		const today = new Date();
		const startOfWeek = new Date(today);
		startOfWeek.setDate(today.getDate() - today.getDay() + 1); // Monday

		currentWeek = [];
		for (let i = 0; i < 7; i++) {
			const day = new Date(startOfWeek);
			day.setDate(startOfWeek.getDate() + i);
			currentWeek.push(day);
		}
	}

	function generateCalendarDays() {
		const year = currentMonth.getFullYear();
		const month = currentMonth.getMonth();
		
		const firstDay = new Date(year, month, 1);
		const lastDay = new Date(year, month + 1, 0);
		const startDate = new Date(firstDay);
		startDate.setDate(startDate.getDate() - firstDay.getDay() + 1); // Start from Monday
		
		const days = [];
		const current = new Date(startDate);
		
		// Generate 6 weeks (42 days) to fill calendar grid
		for (let i = 0; i < 42; i++) {
			days.push(new Date(current));
			current.setDate(current.getDate() + 1);
		}
		
		return days;
	}

	function calculateCurrentWeek() {
		const startDate = new Date('2025-08-17');
		const today = new Date();
		const diffTime = Math.abs(today.getTime() - startDate.getTime());
		const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
		currentWeekNumber = Math.ceil(diffDays / 7);
	}

	function openExerciseModal(date: Date, type: 'walk' | 'dumbbell' | 'squat' | 'pushup') {
		selectedDate = formatDate(date);
		selectedExerciseType = type;
		showExerciseModal = true;
		
		// Reset form
		exerciseForm = {
			distance: type === 'walk' ? 2 : 0,
			duration: type === 'walk' ? 30 : 0,
			sets: type !== 'walk' ? getCurrentPlan()[type].sets : 0,
			reps: type !== 'walk' ? getCurrentPlan()[type].reps : 0,
			weight: type === 'dumbbell' ? getCurrentPlan().dumbbell.weight : 0,
			notes: '',
			startTime: '',
			endTime: '',
			averageHeartRate: 0,
			averagePace: '',
			activeCalories: 0,
			totalCalories: 0,
			steps: 0
		};
	}

	function getCurrentPlan() {
		const plan = strengthPlan.find(p => p.week === currentWeekNumber) || strengthPlan[0];
		return plan;
	}

	function calculateCalories(type: string, data: any): number {
		switch (type) {
			case 'walk':
				// ~100 calories per mile for average person
				return Math.round(data.distance * 100);
			case 'dumbbell':
				// ~8 calories per minute of strength training
				return Math.round(data.sets * data.reps * 0.5);
			case 'squat':
				// ~0.3 calories per squat
				return Math.round(data.sets * data.reps * 0.3);
			case 'pushup':
				// ~0.5 calories per pushup
				return Math.round(data.sets * data.reps * 0.5);
			default:
				return 0;
		}
	}

	async function logExercise() {
		if (!$user) return;
		
		const calories = exerciseForm.activeCalories || calculateCalories(selectedExerciseType, exerciseForm);
		
		const log = {
			date: selectedDate,
			type: selectedExerciseType,
			calories,
			...exerciseForm,
			duration: Math.round(exerciseForm.duration)
		};

		await saveExerciseLog($user.id, log);
		showExerciseModal = false;
	}

	async function deleteExercise(logId: string) {
		if (!$user) return;
		
		if (confirm('Are you sure you want to delete this exercise?')) {
			try {
				await deleteExerciseLog($user.id, logId);
			} catch (error) {
				console.error('Error deleting exercise:', error);
			}
		}
	}

	function getDayName(date: Date): string {
		return date.toLocaleDateString('en-US', { weekday: 'long' });
	}

	function formatDate(date: Date): string {
		return date.toISOString().split('T')[0];
	}

	function isToday(date: Date): boolean {
		const today = new Date();
		return date.toDateString() === today.toDateString();
	}

	function isCurrentMonth(date: Date): boolean {
		return date.getMonth() === currentMonth.getMonth() && date.getFullYear() === currentMonth.getFullYear();
	}

	function getDayLogs(date: Date): ExerciseLog[] {
		const dateStr = formatDate(date);
		return $exerciseLogs.filter(log => log.date === dateStr);
	}

	function getTotalCalories(date: Date): number {
		return getDayLogs(date).reduce((total, log) => total + log.calories, 0);
	}

	function getScheduleForDate(date: Date) {
		const dayName = getDayName(date);
		return weeklySchedule[dayName] || [];
	}

	function previousMonth() {
		currentMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1);
	}

	function nextMonth() {
		currentMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1);
	}

	function previousWeek() {
		currentWeek = currentWeek.map(date => {
			const newDate = new Date(date);
			newDate.setDate(date.getDate() - 7);
			return newDate;
		});
	}

	function nextWeek() {
		currentWeek = currentWeek.map(date => {
			const newDate = new Date(date);
			newDate.setDate(date.getDate() + 7);
			return newDate;
		});
	}

	$: currentPlan = getCurrentPlan();
	$: calendarDays = generateCalendarDays();
</script>

<div class="space-y-6">
	<div class="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
		<div>
			<h1 class="text-3xl font-bold">Training Schedule</h1>
			<p class="text-base-content/70">Week {currentWeekNumber} of your transformation plan</p>
		</div>
		
		<!-- View Switcher -->
		<div class="flex items-center gap-2">
			<div class="join">
				<button 
					class="btn join-item btn-sm {viewMode === 'list' ? 'btn-active' : 'btn-outline'}"
					on:click={() => viewMode = 'list'}
				>
					<List size={16} />
					List
				</button>
				<button 
					class="btn join-item btn-sm {viewMode === 'board' ? 'btn-active' : 'btn-outline'}"
					on:click={() => viewMode = 'board'}
				>
					<LayoutGrid size={16} />
					Board
				</button>
				<button 
					class="btn join-item btn-sm {viewMode === 'calendar' ? 'btn-active' : 'btn-outline'}"
					on:click={() => viewMode = 'calendar'}
				>
					<Calendar size={16} />
					Calendar
				</button>
			</div>
		</div>
	</div>

	<!-- Current Week Strength Targets -->
	<div class="card bg-base-200">
		<div class="card-body p-4">
			<h3 class="card-title text-lg mb-4">Week {currentWeekNumber} Strength Targets</h3>
			<div class="grid grid-cols-1 md:grid-cols-3 gap-4">
				<div class="bg-base-300 p-3 rounded-lg">
					<div class="font-semibold">Dumbbells</div>
					<div class="text-sm">{currentPlan.dumbbell.sets} sets × {currentPlan.dumbbell.reps} reps @ {currentPlan.dumbbell.weight}lbs</div>
				</div>
				<div class="bg-base-300 p-3 rounded-lg">
					<div class="font-semibold">Squats</div>
					<div class="text-sm">{currentPlan.squat.sets} sets × {currentPlan.squat.reps} reps</div>
				</div>
				<div class="bg-base-300 p-3 rounded-lg">
					<div class="font-semibold">Pushups</div>
					<div class="text-sm">{currentPlan.pushup.sets} sets × {currentPlan.pushup.reps} reps</div>
				</div>
			</div>
		</div>
	</div>

	<!-- LIST VIEW -->
	{#if viewMode === 'list'}
		<div class="flex items-center justify-between mb-4">
			<h2 class="text-xl font-semibold text-orange-400 drop-shadow-[0_0_10px_rgba(251,146,60,0.8)]">This Week</h2>
			<div class="flex gap-2">
				<button class="btn btn-sm btn-outline" on:click={previousWeek}>
					<ChevronLeft size={16} />
				</button>
				<button class="btn btn-sm btn-outline" on:click={nextWeek}>
					<ChevronRight size={16} />
				</button>
			</div>
		</div>
		
		<div class="grid gap-4">
			{#each currentWeek as date, dayIndex}
				{@const dayName = getDayName(date)}
				{@const activities = weeklySchedule[dayName] || []}
				{@const dayLogs = getDayLogs(date)}
				{@const totalCalories = getTotalCalories(date)}
				
				<div class="card bg-base-200 {isToday(date) ? 'ring-2 ring-primary' : ''}">
					<div class="card-body p-4">
						<div class="flex items-center justify-between mb-4">
							<div>
								<h3 class="text-lg font-semibold flex items-center gap-2 text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]">
									{dayName}
									{#if isToday(date)}
										<span class="badge badge-primary">Today</span>
									{/if}
								</h3>
								<p class="text-sm text-yellow-400 drop-shadow-[0_0_6px_rgba(250,204,21,0.8)]">
									{date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
								</p>
							</div>
							<div class="text-right">
								<div class="text-sm text-base-content/70">Calories Burned</div>
								<div class="font-semibold text-success">{totalCalories}</div>
							</div>
						</div>

						<!-- Planned Activities -->
						<div class="space-y-3 mb-4">
							{#each activities as activity, activityIndex}
								<div class="flex items-center gap-3 p-3 rounded-lg bg-base-300">
									<svelte:component this={activity.icon} size={16} />
									<div class="flex-1">
										<div class="font-medium">{activity.description}</div>
										<div class="text-sm text-base-content/70">{activity.time}</div>
									</div>
									<div class="badge {activity.type === 'walk' ? 'badge-info' : activity.type === 'strength' ? 'badge-warning' : 'badge-ghost'}">
										{activity.type}
									</div>
								</div>
							{/each}
						</div>

						<!-- Exercise Logging Buttons -->
						<div class="flex flex-wrap gap-2 mb-4">
							<button class="btn btn-sm btn-outline" on:click={() => openExerciseModal(date, 'walk')}>
								<Plus size={14} />
								Log Walk
							</button>
							{#if dayName === 'Tuesday' || dayName === 'Thursday' || dayName === 'Saturday'}
								<button class="btn btn-sm btn-outline" on:click={() => openExerciseModal(date, 'dumbbell')}>
									<Plus size={14} />
									Log Dumbbells
								</button>
								<button class="btn btn-sm btn-outline" on:click={() => openExerciseModal(date, 'squat')}>
									<Plus size={14} />
									Log Squats
								</button>
								<button class="btn btn-sm btn-outline" on:click={() => openExerciseModal(date, 'pushup')}>
									<Plus size={14} />
									Log Pushups
								</button>
							{/if}
						</div>

						<!-- Logged Exercises -->
						{#if dayLogs.length > 0}
							<div class="space-y-2">
								<h4 class="font-semibold text-sm">Completed Exercises:</h4>
								{#each dayLogs as log}
									<div class="bg-success/20 p-2 rounded text-sm">
										<div class="flex justify-between items-start">
											<div class="flex-1">
											<span class="font-medium capitalize">{log.type}</span>
											<div class="text-xs text-base-content/70">
												{#if log.type === 'walk'}
													{log.distance} miles, {log.duration} min
													{#if log.averagePace}, {log.averagePace} pace{/if}
													{#if log.averageHeartRate}, {log.averageHeartRate} BPM avg{/if}
												{:else}
													{log.sets} sets × {log.reps} reps
													{#if log.weight} @ {log.weight}lbs{/if}
												{/if}
												{#if log.startTime && log.endTime}
													<div class="text-xs opacity-75">{log.startTime} - {log.endTime}</div>
												{/if}
											</div>
											</div>
											<div class="flex items-center gap-2">
												<span class="text-success">{log.calories} cal</span>
												<button 
													class="btn btn-xs btn-error btn-outline"
													on:click={() => deleteExercise(log.id)}
													title="Delete exercise"
												>
													×
												</button>
											</div>
										</div>
									</div>
								{/each}
							</div>
						{/if}
					</div>
				</div>
			{/each}
		</div>
	{/if}

	<!-- BOARD VIEW -->
	{#if viewMode === 'board'}
		<div class="flex items-center justify-between mb-4">
			<h2 class="text-xl font-semibold text-orange-400 drop-shadow-[0_0_10px_rgba(251,146,60,0.8)]">Weekly Board</h2>
			<div class="flex gap-2">
				<button class="btn btn-sm btn-outline" on:click={previousWeek}>
					<ChevronLeft size={16} />
				</button>
				<button class="btn btn-sm btn-outline" on:click={nextWeek}>
					<ChevronRight size={16} />
				</button>
			</div>
		</div>
		
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7 gap-4">
			{#each currentWeek as date}
				{@const dayName = getDayName(date)}
				{@const activities = getScheduleForDate(date)}
				{@const dayLogs = getDayLogs(date)}
				{@const totalCalories = getTotalCalories(date)}
				
				<div class="card bg-base-200 h-fit {isToday(date) ? 'ring-2 ring-primary' : ''}">
					<div class="card-body p-3">
						<div class="text-center mb-3">
							<h3 class="font-semibold text-sm text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]">{dayName.slice(0, 3)}</h3>
							<p class="text-xs text-yellow-400 drop-shadow-[0_0_6px_rgba(250,204,21,0.8)]">
								{date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
							</p>
							{#if isToday(date)}
								<span class="badge badge-primary badge-xs mt-1">Today</span>
							{/if}
						</div>

						<!-- Planned Activities -->
						<div class="space-y-2 mb-3">
							{#each activities as activity}
								<div class="bg-base-300 p-2 rounded text-xs">
									<div class="flex items-center gap-1 mb-1">
										<svelte:component this={activity.icon} size={12} />
										<span class="badge badge-xs {activity.type === 'walk' ? 'badge-info' : activity.type === 'strength' ? 'badge-warning' : 'badge-ghost'}">
											{activity.type}
										</span>
									</div>
									<div class="text-xs">{activity.description}</div>
								</div>
							{/each}
						</div>

						<!-- Quick Actions -->
						<div class="space-y-1">
							<button class="btn btn-xs btn-outline w-full" on:click={() => openExerciseModal(date, 'walk')}>
								<Plus size={10} />
								Walk
							</button>
							{#if dayName === 'Tuesday' || dayName === 'Thursday' || dayName === 'Saturday'}
								<button class="btn btn-xs btn-outline w-full" on:click={() => openExerciseModal(date, 'dumbbell')}>
									<Plus size={10} />
									Strength
								</button>
							{/if}
						</div>

						<!-- Completed Exercises -->
						{#if dayLogs.length > 0}
							<div class="mt-3 pt-2 border-t border-base-300">
								<div class="text-xs font-semibold text-success mb-1">{totalCalories} cal burned</div>
								{#each dayLogs as log}
									<div class="bg-success/20 p-1 rounded text-xs mb-1">
										<span class="capitalize">{log.type}</span>
										{#if log.type === 'walk'}
											- {log.distance}mi
										{:else}
											- {log.sets}×{log.reps}
										{/if}
										<button 
											class="btn btn-xs btn-error btn-outline ml-1 p-0 min-h-0 h-4 w-4"
											on:click={() => deleteExercise(log.id)}
											title="Delete"
										>
											×
										</button>
									</div>
								{/each}
							</div>
						{/if}
					</div>
				</div>
			{/each}
		</div>
	{/if}

	<!-- CALENDAR VIEW -->
	{#if viewMode === 'calendar'}
		<div class="card bg-base-200">
			<div class="card-body p-4">
				<div class="flex items-center justify-between mb-4">
					<h2 class="text-xl font-semibold">
						{currentMonth.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
					</h2>
					<div class="flex gap-2">
						<button class="btn btn-sm btn-outline" on:click={previousMonth}>
							<ChevronLeft size={16} />
						</button>
						<button class="btn btn-sm btn-outline" on:click={nextMonth}>
							<ChevronRight size={16} />
						</button>
					</div>
				</div>

				<!-- Calendar Header -->
				<div class="grid grid-cols-7 gap-1 mb-2">
					{#each ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] as day}
						<div class="text-center text-sm font-semibold p-2 text-base-content/70">
							{day}
						</div>
					{/each}
				</div>

				<!-- Calendar Grid -->
				<div class="grid grid-cols-7 gap-1">
					{#each calendarDays as date}
						{@const dayLogs = getDayLogs(date)}
						{@const totalCalories = getTotalCalories(date)}
						{@const activities = getScheduleForDate(date)}
						
						<div class="aspect-square p-1">
							<div class="h-full w-full rounded border {isCurrentMonth(date) ? 'bg-base-100 border-base-300' : 'bg-base-300/50 border-base-300/50'} {isToday(date) ? 'ring-2 ring-primary' : ''} hover:bg-base-100 transition-colors cursor-pointer relative">
								<div class="p-1 h-full flex flex-col">
									<div class="text-xs font-medium {isCurrentMonth(date) ? 'text-base-content' : 'text-base-content/50'}">
										{date.getDate()}
									</div>
									
									{#if isCurrentMonth(date)}
										<!-- Activity Indicators -->
										<div class="flex-1 flex flex-col justify-center items-center space-y-1">
											{#if activities.length > 0}
												<div class="flex flex-wrap gap-0.5 justify-center">
													{#each activities.slice(0, 2) as activity}
														<div class="w-1.5 h-1.5 rounded-full {activity.type === 'walk' ? 'bg-info' : activity.type === 'strength' ? 'bg-warning' : 'bg-base-content/30'}"></div>
													{/each}
													{#if activities.length > 2}
														<div class="w-1.5 h-1.5 rounded-full bg-base-content/50"></div>
													{/if}
												</div>
											{/if}
											
											{#if dayLogs.length > 0}
												<div class="text-xs text-success font-bold">
													{totalCalories}
												</div>
											{/if}
										</div>
									{/if}
								</div>
								
								<!-- Quick Add Button -->
								{#if isCurrentMonth(date)}
									<button 
										class="absolute bottom-0 right-0 btn btn-xs btn-circle btn-ghost opacity-0 hover:opacity-100 transition-opacity"
										on:click={() => openExerciseModal(date, 'walk')}
									>
										<Plus size={10} />
									</button>
								{/if}
							</div>
						</div>
					{/each}
				</div>
			</div>
		</div>
	{/if}
</div>

<!-- Exercise Logging Modal -->
{#if showExerciseModal}
<div class="modal modal-open">
	<div class="modal-box">
		<h3 class="font-bold text-lg mb-4">Log {selectedExerciseType.charAt(0).toUpperCase() + selectedExerciseType.slice(1)}</h3>
		
		<div class="space-y-4">
			{#if selectedExerciseType === 'walk'}
				<div class="grid grid-cols-2 gap-4">
					<div class="form-control">
						<label class="label">
							<span class="label-text">Distance (miles)</span>
						</label>
						<input type="number" class="input input-bordered" step="0.1" bind:value={exerciseForm.distance} />
					</div>
					<div class="form-control">
						<label class="label">
							<span class="label-text">Duration (minutes)</span>
						</label>
						<input type="number" class="input input-bordered" bind:value={exerciseForm.duration} />
					</div>
				</div>
				
				<div class="grid grid-cols-2 gap-4">
					<div class="form-control">
						<label class="label">
							<span class="label-text">Start Time</span>
						</label>
						<input type="time" class="input input-bordered" bind:value={exerciseForm.startTime} />
					</div>
					<div class="form-control">
						<label class="label">
							<span class="label-text">End Time</span>
						</label>
						<input type="time" class="input input-bordered" bind:value={exerciseForm.endTime} />
					</div>
				</div>
				
				<div class="grid grid-cols-2 gap-4">
					<div class="form-control">
						<label class="label">
							<span class="label-text">Active Calories</span>
						</label>
						<input type="number" class="input input-bordered" bind:value={exerciseForm.activeCalories} />
					</div>
					<div class="form-control">
						<label class="label">
							<span class="label-text">Total Calories</span>
						</label>
						<input type="number" class="input input-bordered" bind:value={exerciseForm.totalCalories} />
					</div>
				</div>
				
				<div class="grid grid-cols-2 gap-4">
					<div class="form-control">
						<label class="label">
							<span class="label-text">Average Pace</span>
						</label>
						<input type="text" class="input input-bordered" placeholder="26'13&quot;/mi" bind:value={exerciseForm.averagePace} />
					</div>
					<div class="form-control">
						<label class="label">
							<span class="label-text">Avg Heart Rate (BPM)</span>
						</label>
						<input type="number" class="input input-bordered" bind:value={exerciseForm.averageHeartRate} />
					</div>
				</div>
				
				<div class="form-control">
					<label class="label">
						<span class="label-text">Steps</span>
					</label>
					<input type="number" class="input input-bordered" bind:value={exerciseForm.steps} />
				</div>
			{:else}
				<div class="grid grid-cols-2 gap-4">
					<div class="form-control">
						<label class="label">
							<span class="label-text">Sets</span>
						</label>
						<input type="number" class="input input-bordered" bind:value={exerciseForm.sets} />
					</div>
					<div class="form-control">
						<label class="label">
							<span class="label-text">Reps</span>
						</label>
						<input type="number" class="input input-bordered" bind:value={exerciseForm.reps} />
					</div>
				</div>
				{#if selectedExerciseType === 'dumbbell'}
					<div class="form-control">
						<label class="label">
							<span class="label-text">Weight (lbs)</span>
						</label>
						<input type="number" class="input input-bordered" bind:value={exerciseForm.weight} />
					</div>
				{/if}
			{/if}
			
			<div class="form-control">
				<label class="label">
					<span class="label-text">Notes (optional)</span>
				</label>
				<textarea class="textarea textarea-bordered" bind:value={exerciseForm.notes}></textarea>
			</div>
			
			<div class="bg-info/20 p-3 rounded">
				<div class="text-sm">
					<strong>Estimated Calories:</strong> {exerciseForm.activeCalories || calculateCalories(selectedExerciseType, exerciseForm)}
				</div>
			</div>
		</div>
		
		<div class="modal-action">
			<button class="btn" on:click={() => showExerciseModal = false}>Cancel</button>
			<button class="btn btn-primary" on:click={logExercise}>Log Exercise</button>
		</div>
	</div>
</div>
{/if}