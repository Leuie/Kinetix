<script lang="ts">
	import { onMount } from 'svelte';
	import Chart from 'chart.js/auto';
	import 'chartjs-adapter-date-fns';
	import { TrendingUp, TrendingDown, Clock, Calendar, Filter } from 'lucide-svelte';
	import { healthMetrics, exerciseLogs } from '$lib/stores/fitness';

	let weightChart: HTMLCanvasElement;
	let bodyFatChart: HTMLCanvasElement;
	let calorieChart: HTMLCanvasElement;

	let weightChartInstance: Chart | null = null;
	let bodyFatChartInstance: Chart | null = null;
	let calorieChartInstance: Chart | null = null;
	
	let timePeriod: 'week' | 'month' | 'year' = 'month';

	onMount(() => {
		createCharts();
	});

	// Reactive chart updates
	$: if ($healthMetrics.length > 0 || $exerciseLogs.length > 0 || timePeriod) {
		setTimeout(() => createCharts(), 100);
	}
	
	function getTimeUnit() {
		switch (timePeriod) {
			case 'week': return 'day';
			case 'month': return 'week';
			case 'year': return 'month';
			default: return 'week';
		}
	}
	
	function filterDataByPeriod(data: any[]) {
		if (data.length === 0) return data;
		
		const now = new Date();
		let cutoffDate: Date;
		
		switch (timePeriod) {
			case 'week':
				cutoffDate = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
				break;
			case 'month':
				cutoffDate = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);
				break;
			case 'year':
				cutoffDate = new Date(now.getTime() - 365 * 24 * 60 * 60 * 1000);
				break;
			default:
				return data;
		}
		
		return data.filter(item => new Date(item.x) >= cutoffDate);
	}

	function createCharts() {
		if (!weightChart || !bodyFatChart || !calorieChart) return;
		
		// Destroy existing chart instances before creating new ones
		if (weightChartInstance) {
			weightChartInstance.destroy();
			weightChartInstance = null;
		}
		if (bodyFatChartInstance) {
			bodyFatChartInstance.destroy();
			bodyFatChartInstance = null;
		}
		if (calorieChartInstance) {
			calorieChartInstance.destroy();
			calorieChartInstance = null;
		}
		
		createWeightChart();
		createBodyFatChart();
		createCalorieChart();
	}

	function createWeightChart() {
		const ctx = weightChart.getContext('2d');
		
		// Generate projected weight loss data
		const goalDate = new Date('2026-01-01');
		const startDate = new Date('2025-08-15');
		const projectedData = [];
		const startWeight = 200; // Example starting weight
		const targetWeight = 175; // Target weight
		const weeksToTarget = Math.ceil((goalDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24 * 7));

		for (let week = 0; week <= weeksToTarget; week++) {
			const date = new Date(startDate);
			date.setDate(startDate.getDate() + (week * 7));
			const projectedWeight = startWeight - ((startWeight - targetWeight) * (week / weeksToTarget));
			projectedData.push({
				x: date.toISOString().split('T')[0],
				y: projectedWeight
			});
		}

		const actualData = $healthMetrics.map(entry => ({
			x: entry.date,
			y: entry.weight
		}));
		
		const filteredProjectedData = filterDataByPeriod(projectedData);
		const filteredActualData = filterDataByPeriod(actualData);

		weightChartInstance = new Chart(ctx, {
			type: 'line',
			data: {
				datasets: [
					{
						label: 'Projected Weight',
						data: filteredProjectedData,
						borderColor: 'rgba(59, 130, 246, 0.5)',
						backgroundColor: 'rgba(59, 130, 246, 0.1)',
						borderDash: [5, 5],
						tension: 0.1
					},
					{
						label: 'Actual Weight',
						data: filteredActualData,
						borderColor: 'rgb(34, 197, 94)',
						backgroundColor: 'rgba(34, 197, 94, 0.1)',
						tension: 0.1
					}
				]
			},
			options: {
				responsive: true,
				maintainAspectRatio: false,
				plugins: {
					title: {
						display: true,
						text: 'Weight Progress',
						color: 'rgba(255, 255, 255, 0.8)'
					},
					legend: {
						labels: {
							color: 'rgba(255, 255, 255, 0.8)'
						}
					}
				},
				scales: {
					x: {
						type: 'time',
						time: {
							unit: getTimeUnit()
						},
						ticks: {
							color: 'rgba(255, 255, 255, 0.6)'
						},
						grid: {
							color: 'rgba(255, 255, 255, 0.1)'
						}
					},
					y: {
						beginAtZero: false,
						ticks: {
							color: 'rgba(255, 255, 255, 0.6)'
						},
						grid: {
							color: 'rgba(255, 255, 255, 0.1)'
						}
					}
				}
			}
		});
	}

	function createBodyFatChart() {
		const ctx = bodyFatChart.getContext('2d');
		
		const bodyFatData = $healthMetrics.map(entry => ({
			x: entry.date,
			y: entry.bodyFat
		}));
		
		const filteredBodyFatData = filterDataByPeriod(bodyFatData);

		// Target zones for 37-year-old male
		const zones = [
			{ y: 0, color: 'rgba(239, 68, 68, 0.1)' }, // Red zone
			{ y: 8, color: 'rgba(59, 130, 246, 0.1)' }, // Blue zone (ideal)
			{ y: 11, color: 'rgba(34, 197, 94, 0.1)' }, // Green zone
			{ y: 19, color: 'rgba(245, 158, 11, 0.1)' }, // Yellow zone
			{ y: 25, color: 'rgba(239, 68, 68, 0.1)' }  // Red zone
		];

		bodyFatChartInstance = new Chart(ctx, {
			type: 'line',
			data: {
				datasets: [
					{
						label: 'Body Fat %',
						data: filteredBodyFatData,
						borderColor: 'rgb(168, 85, 247)',
						backgroundColor: 'rgba(168, 85, 247, 0.1)',
						tension: 0.1
					}
				]
			},
			options: {
				responsive: true,
				maintainAspectRatio: false,
				plugins: {
					title: {
						display: true,
						text: 'Body Fat Progress',
						color: 'rgba(255, 255, 255, 0.8)'
					},
					legend: {
						labels: {
							color: 'rgba(255, 255, 255, 0.8)'
						}
					}
				},
				scales: {
					x: {
						type: 'time',
						time: {
							unit: getTimeUnit()
						},
						ticks: {
							color: 'rgba(255, 255, 255, 0.6)'
						},
						grid: {
							color: 'rgba(255, 255, 255, 0.1)'
						}
					},
					y: {
						beginAtZero: false,
						min: 0,
						max: 30,
						ticks: {
							color: 'rgba(255, 255, 255, 0.6)'
						},
						grid: {
							color: 'rgba(255, 255, 255, 0.1)'
						}
					}
				}
			}
		});
	}
	
	function createCalorieChart() {
		const ctx = calorieChart.getContext('2d');
		
		// Group calories by date
		const caloriesByDate = $exerciseLogs.reduce((acc, log) => {
			if (!acc[log.date]) acc[log.date] = 0;
			acc[log.date] += log.calories;
			return acc;
		}, {} as Record<string, number>);
		
		const calorieData = Object.entries(caloriesByDate).map(([date, calories]) => ({
			x: date,
			y: calories
		})).sort((a, b) => a.x.localeCompare(b.x));
		
		const filteredCalorieData = filterDataByPeriod(calorieData);

		calorieChartInstance = new Chart(ctx, {
			type: 'bar',
			data: {
				datasets: [
					{
						label: 'Daily Calories Burned',
						data: filteredCalorieData,
						backgroundColor: 'rgba(34, 197, 94, 0.6)',
						borderColor: 'rgb(34, 197, 94)',
						borderWidth: 1
					}
				]
			},
			options: {
				responsive: true,
				maintainAspectRatio: false,
				plugins: {
					title: {
						display: true,
						text: 'Daily Calorie Burn',
						color: 'rgba(255, 255, 255, 0.8)'
					},
					legend: {
						labels: {
							color: 'rgba(255, 255, 255, 0.8)'
						}
					}
				},
				scales: {
					x: {
						type: 'time',
						time: {
							unit: getTimeUnit()
						},
						ticks: {
							color: 'rgba(255, 255, 255, 0.6)'
						},
						grid: {
							color: 'rgba(255, 255, 255, 0.1)'
						}
					},
					y: {
						beginAtZero: true,
						ticks: {
							color: 'rgba(255, 255, 255, 0.6)'
						},
						grid: {
							color: 'rgba(255, 255, 255, 0.1)'
						}
					}
				}
			}
		});
	}

	// Calculate calorie deficit
	function calculateWeeklyDeficit(): number {
		// Simplified calculation - in reality this would be more complex
		const walksPerWeek = 8; // Based on schedule
		const caloriesPerWalk = 300; // Estimated
		const strengthSessions = 3;
		const caloriesPerStrength = 200;
		
		return (walksPerWeek * caloriesPerWalk) + (strengthSessions * caloriesPerStrength);
	}

	$: weeklyDeficit = calculateWeeklyDeficit();
	$: monthlyProjectedLoss = (weeklyDeficit * 4) / 3500; // 3500 calories = 1 lb
	$: totalCaloriesBurned = $exerciseLogs.reduce((total, log) => total + log.calories, 0);
	$: averageDailyCalories = $exerciseLogs.length > 0 ? Math.round(totalCaloriesBurned / [...new Set($exerciseLogs.map(log => log.date))].length) : 0;
</script>

<div class="space-y-6">
	<div>
		<h1 class="text-3xl font-bold">Progress Tracking</h1>
		<p class="text-base-content/70">Visualize your transformation journey</p>
	</div>
	
	<!-- Time Period Filter -->
	<div class="card bg-base-200">
		<div class="card-body p-4">
			<div class="flex items-center gap-4">
				<div class="flex items-center gap-2">
					<Filter size={16} />
					<span class="font-medium">Time Period:</span>
				</div>
				<div class="join">
					<button 
						class="btn join-item btn-sm {timePeriod === 'week' ? 'btn-active' : 'btn-outline'}"
						on:click={() => timePeriod = 'week'}
					>
						<Calendar size={14} />
						Week
					</button>
					<button 
						class="btn join-item btn-sm {timePeriod === 'month' ? 'btn-active' : 'btn-outline'}"
						on:click={() => timePeriod = 'month'}
					>
						<Calendar size={14} />
						Month
					</button>
					<button 
						class="btn join-item btn-sm {timePeriod === 'year' ? 'btn-active' : 'btn-outline'}"
						on:click={() => timePeriod = 'year'}
					>
						<Calendar size={14} />
						Year
					</button>
				</div>
				<div class="text-sm text-base-content/60">
					Showing data for the last {timePeriod === 'week' ? '7 days' : timePeriod === 'month' ? '30 days' : '365 days'}
				</div>
			</div>
		</div>
	</div>

	<!-- Calorie Deficit Summary -->
	<div class="grid grid-cols-1 md:grid-cols-3 gap-4">
		<div class="stat bg-base-200 rounded-lg">
			<div class="stat-title">Weekly Calorie Deficit</div>
			<div class="stat-value text-primary">{weeklyDeficit.toLocaleString()}</div>
			<div class="stat-desc">From exercise plan</div>
		</div>
		
		<div class="stat bg-base-200 rounded-lg">
			<div class="stat-title">Projected Monthly Loss</div>
			<div class="stat-value text-success">{monthlyProjectedLoss.toFixed(1)} lbs</div>
			<div class="stat-desc">Based on deficit</div>
		</div>
		
		<div class="stat bg-base-200 rounded-lg">
			<div class="stat-title">Total Calories Burned</div>
			<div class="stat-value text-warning">{totalCaloriesBurned.toLocaleString()}</div>
			<div class="stat-desc">Since start date</div>
		</div>
		
		<div class="stat bg-base-200 rounded-lg">
			<div class="stat-title">Avg Daily Calories</div>
			<div class="stat-value text-info">{averageDailyCalories}</div>
			<div class="stat-desc">From exercise</div>
		</div>
	</div>

	<!-- Charts -->
	<div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
		<div class="card bg-base-200">
			<div class="card-body">
				<h3 class="card-title text-sm mb-2">Weight Progress ({timePeriod})</h3>
				<div class="h-80">
					<canvas bind:this={weightChart}></canvas>
				</div>
			</div>
		</div>
		
		<div class="card bg-base-200">
			<div class="card-body">
				<h3 class="card-title text-sm mb-2">Body Fat Progress ({timePeriod})</h3>
				<div class="h-80">
					<canvas bind:this={bodyFatChart}></canvas>
				</div>
			</div>
		</div>
		
		<div class="card bg-base-200">
			<div class="card-body">
				<h3 class="card-title text-sm mb-2">Daily Calorie Burn ({timePeriod})</h3>
				<div class="h-80">
					<canvas bind:this={calorieChart}></canvas>
				</div>
			</div>
		</div>
	</div>

	<!-- Military Standards Reference -->
	<div class="card bg-base-200">
		<div class="card-body">
			<h3 class="card-title mb-4">Military Standards Reference (Male, 37 years)</h3>
			
			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
				<div class="bg-base-300 p-4 rounded-lg">
					<h4 class="font-semibold text-sm mb-2">BMI Ranges</h4>
					<div class="space-y-1 text-xs">
						<div class="flex justify-between"><span>Optimal:</span><span class="text-blue-400">22-23</span></div>
						<div class="flex justify-between"><span>Good:</span><span class="text-green-400">18.5-24.9</span></div>
						<div class="flex justify-between"><span>Overweight:</span><span class="text-yellow-400">25-29.9</span></div>
						<div class="flex justify-between"><span>Obese:</span><span class="text-red-400">&ge;30</span></div>
					</div>
				</div>
				
				<div class="bg-base-300 p-4 rounded-lg">
					<h4 class="font-semibold text-sm mb-2">Body Fat %</h4>
					<div class="space-y-1 text-xs">
						<div class="flex justify-between"><span>Optimal:</span><span class="text-blue-400">8-11%</span></div>
						<div class="flex justify-between"><span>Good:</span><span class="text-green-400">12-19%</span></div>
						<div class="flex justify-between"><span>Fair:</span><span class="text-yellow-400">20-25%</span></div>
						<div class="flex justify-between"><span>Poor:</span><span class="text-red-400">&gt;25%</span></div>
					</div>
				</div>
				
				<div class="bg-base-300 p-4 rounded-lg">
					<h4 class="font-semibold text-sm mb-2">Visceral Fat</h4>
					<div class="space-y-1 text-xs">
						<div class="flex justify-between"><span>Excellent:</span><span class="text-blue-400">&le;4</span></div>
						<div class="flex justify-between"><span>Good:</span><span class="text-green-400">5-9</span></div>
						<div class="flex justify-between"><span>Fair:</span><span class="text-yellow-400">10-15</span></div>
						<div class="flex justify-between"><span>Poor:</span><span class="text-red-400">&gt;15</span></div>
					</div>
				</div>
				
				<div class="bg-base-300 p-4 rounded-lg">
					<h4 class="font-semibold text-sm mb-2">Body Water %</h4>
					<div class="space-y-1 text-xs">
						<div class="flex justify-between"><span>Excellent:</span><span class="text-blue-400">&ge;61%</span></div>
						<div class="flex justify-between"><span>Good:</span><span class="text-green-400">55-60%</span></div>
						<div class="flex justify-between"><span>Fair:</span><span class="text-yellow-400">50-54%</span></div>
						<div class="flex justify-between"><span>Poor:</span><span class="text-red-400">&lt;50%</span></div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>