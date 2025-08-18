<script lang="ts">
	import { onMount } from 'svelte';
	import { TrendingUp, TrendingDown, Minus, Clock } from 'lucide-svelte';
	import MetricCard from './MetricCard.svelte';
	import StreakTracker from './StreakTracker.svelte';
	import DailyQuote from './DailyQuote.svelte';
	import { getMetricColor, getMetricStatus } from '$lib/utils/metrics';
	import { 
		currentMetrics, 
		baselineMetrics, 
		exerciseLogs, 
		saveHealthMetrics,
		saveExerciseLog 
	} from '$lib/stores/fitness';
	import { user } from '$lib/stores/auth';
	import type { HealthMetrics } from '$lib/types';

	let todayLogs: any[] = [];

	let metricsForm: HealthMetrics = {
		weight: 0,
		bmi: 0,
		bodyFat: 0,
		fatFreeBodyWeight: 0,
		subcutaneousFat: 0,
		visceralFat: 0,
		bodyWater: 0,
		skeletalMuscle: 0,
		muscleMass: 0,
		boneMass: 0,
		protein: 0,
		bmr: 0,
		metabolicAge: 37,
		date: new Date().toISOString().split('T')[0]
	};

	let showMetricInput = false;

	onMount(() => {
		// Initialize form with current metrics if available
		if ($currentMetrics) {
			metricsForm = { ...$currentMetrics };
		}
	});

	async function saveMetrics() {
		if (!$user) return;
		
		try {
			await saveHealthMetrics($user.id, metricsForm);
		} catch (error) {
			console.error('Error saving metrics:', error);
		}
		showMetricInput = false;
	}

	function getTrend(current: number, baseline: number | null): 'up' | 'down' | 'neutral' {
		if (!baseline || baseline === 0) return 'neutral';
		if (current > baseline) return 'up';
		if (current < baseline) return 'down';
		return 'neutral';
	}

	function getTrendIcon(trend: 'up' | 'down' | 'neutral') {
		switch (trend) {
			case 'up': return TrendingUp;
			case 'down': return TrendingDown;
			default: return Minus;
		}
	}

	const metrics = [
		{ key: 'weight', label: 'Weight', unit: 'lbs', positive: false },
		{ key: 'bmi', label: 'BMI', unit: '', positive: false },
		{ key: 'bodyFat', label: 'Body Fat %', unit: '%', positive: false },
		{ key: 'fatFreeBodyWeight', label: 'Fat-Free Body Weight', unit: 'lbs', positive: true },
		{ key: 'subcutaneousFat', label: 'Subcutaneous Fat', unit: '%', positive: false },
		{ key: 'visceralFat', label: 'Visceral Fat', unit: '', positive: false },
		{ key: 'bodyWater', label: 'Body Water %', unit: '%', positive: true },
		{ key: 'skeletalMuscle', label: 'Skeletal Muscle %', unit: '%', positive: true },
		{ key: 'muscleMass', label: 'Muscle Mass', unit: 'lbs', positive: true },
		{ key: 'boneMass', label: 'Bone Mass', unit: 'lbs', positive: true },
		{ key: 'protein', label: 'Protein %', unit: '%', positive: true },
		{ key: 'bmr', label: 'BMR', unit: 'cal', positive: true },
		{ key: 'metabolicAge', label: 'Metabolic Age', unit: 'years', positive: false }
	];
	
	// Calculate today's exercise stats
	$: {
		const today = new Date().toISOString().split('T')[0];
		todayLogs = $exerciseLogs.filter(log => log.date === today);
	}
	$: todayCalories = todayLogs.reduce((total, log) => total + log.calories, 0);
	$: todayExercises = todayLogs.length;
</script>

<div class="space-y-6">
	<div class="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
		<div>
			<h1 class="text-3xl font-bold">Dashboard</h1>
			<p class="text-base-content/70">Track your transformation journey</p>
		</div>
		<button 
			class="btn btn-primary"
			on:click={() => showMetricInput = true}
		>
			Update Metrics
		</button>
	</div>

	<!-- Daily Exercise Summary -->
	<div class="grid grid-cols-1 md:grid-cols-3 gap-4">
		<div class="card bg-gradient-to-br from-green-600 to-emerald-600 text-white">
			<div class="card-body p-4">
				<div class="flex items-center gap-3">
					<TrendingUp size={24} />
					<div>
						<div class="text-2xl font-bold">{todayCalories}</div>
						<div class="text-sm opacity-90">Calories Burned Today</div>
					</div>
				</div>
			</div>
		</div>
		
		<div class="card bg-gradient-to-br from-purple-600 to-pink-600 text-white">
			<div class="card-body p-4">
				<div class="flex items-center gap-3">
					<TrendingUp size={24} />
					<div>
						<div class="text-2xl font-bold">{todayExercises}</div>
						<div class="text-sm opacity-90">Exercises Completed</div>
					</div>
				</div>
			</div>
		</div>
		
		<div class="card bg-gradient-to-br from-yellow-600 to-orange-600 text-white">
			<div class="card-body p-4">
				<div class="flex items-center gap-3">
					<Clock size={24} />
					<div>
						<div class="text-2xl font-bold">8:00 PM</div>
						<div class="text-sm opacity-90">Daily Metrics Time</div>
					</div>
				</div>
			</div>
		</div>
	</div>

	<StreakTracker />

	<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
		{#each metrics as metric (metric.key)}
			<MetricCard
				label={metric.label}
				value={$currentMetrics?.[metric.key] || 0}
				unit={metric.unit}
				color={getMetricColor(metric.key, $currentMetrics?.[metric.key] || 0)}
				status={getMetricStatus(metric.key, $currentMetrics?.[metric.key] || 0)}
				trend={getTrend($currentMetrics?.[metric.key] || 0, $baselineMetrics?.[metric.key] || null)}
				trendIcon={getTrendIcon(getTrend($currentMetrics?.[metric.key] || 0, $baselineMetrics?.[metric.key] || null))}
				positive={metric.positive}
			/>
		{/each}
	</div>

	<DailyQuote />
</div>

<!-- Metric Input Modal -->
{#if showMetricInput}
<div class="modal modal-open">
	<div class="modal-box w-11/12 max-w-2xl">
		<h3 class="font-bold text-lg mb-4">Update Health Metrics</h3>
		
		<div class="grid grid-cols-1 md:grid-cols-2 gap-4 max-h-96 overflow-y-auto">
			{#each metrics as metric (metric.key)}
				<div class="form-control">
					<label class="label">
						<span class="label-text" for="{metric.key}">{metric.label} {metric.unit ? `(${metric.unit})` : ''}</span>
					</label>
					<input 
						type="number" 
						class="input input-bordered" 
						step="0.1"
						id="{metric.key}"
						bind:value={metricsForm[metric.key]} 
					/>
				</div>
			{/each}
		</div>
		
		<div class="modal-action">
			<button class="btn" on:click={() => showMetricInput = false}>Cancel</button>
			<button class="btn btn-primary" on:click={saveMetrics}>Save Metrics</button>
		</div>
	</div>
</div>
{/if}