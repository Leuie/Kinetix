<script lang="ts">
	import { Download, Upload, RotateCcw, Target } from 'lucide-svelte';
	import { userSettings, saveUserSettings } from '$lib/stores/fitness';
	import { user } from '$lib/stores/auth';

	async function handleSaveSettings() {
		if (!$user) return;
		
		await saveUserSettings($user.id, $userSettings);

		// Show success message
		const toast = document.createElement('div');
		toast.className = 'toast toast-top toast-center';
		toast.innerHTML = '<div class="alert alert-success"><span>Settings saved successfully!</span></div>';
		document.body.appendChild(toast);
		setTimeout(() => {
			document.body.removeChild(toast);
		}, 3000);
	}

	// Calculate days since start
	$: daysSinceStart = Math.floor((new Date().getTime() - new Date($userSettings.start_date).getTime()) / (1000 * 60 * 60 * 24));
	$: daysUntilGoal = Math.floor((new Date('2026-01-01').getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24));
</script>

<div class="space-y-6">
	<div>
		<h1 class="text-3xl font-bold">Settings</h1>
		<p class="text-base-content/70">Customize your transformation tracker</p>
	</div>

	<!-- Personal Information -->
	<div class="card bg-base-200">
		<div class="card-body">
			<h2 class="card-title mb-4">Personal Information</h2>
			
			<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
				<div class="form-control">
					<label class="label">
						<span class="label-text">Current Age</span>
					</label>
					<input 
						type="number" 
						class="input input-bordered" 
						bind:value={$userSettings.current_age}
						readonly
					/>
					<label class="label">
						<span class="label-text-alt">Fixed for fitness standards calculation</span>
					</label>
				</div>
				
				<div class="form-control">
					<label class="label">
						<span class="label-text">Start Date (37th Birthday)</span>
					</label>
					<input 
						type="date" 
						class="input input-bordered" 
						bind:value={$userSettings.start_date}
					/>
					<label class="label">
						<span class="label-text-alt">
							{#if daysSinceStart < 0}
								{Math.abs(daysSinceStart)} days until start
							{:else}
								{daysSinceStart} days since start
							{/if}
						</span>
					</label>
				</div>
				
				<div class="form-control">
					<label class="label">
						<span class="label-text">Goal Date</span>
					</label>
					<input 
						type="date" 
						class="input input-bordered" 
						value="2026-01-01"
						readonly
					/>
					<label class="label">
						<span class="label-text-alt">
							{daysUntilGoal} days until goal weight
						</span>
					</label>
				</div>
			</div>
		</div>
	</div>

	<!-- Goals -->
	<div class="card bg-base-200">
		<div class="card-body">
			<h2 class="card-title mb-4 flex items-center gap-2">
				<Target size={20} />
				Goals & Targets
			</h2>
			
			<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
				<div class="form-control">
					<label class="label">
						<span class="label-text">Target Weight (lbs)</span>
					</label>
					<input 
						type="number" 
						class="input input-bordered" 
						bind:value={$userSettings.target_weight}
						step="0.1"
					/>
					<label class="label">
						<span class="label-text-alt">Fitness standard weight goal</span>
					</label>
				</div>
				
				<div class="form-control">
					<label class="label">
						<span class="label-text">Target Body Fat %</span>
					</label>
					<input 
						type="number" 
						class="input input-bordered" 
						value={12}
						readonly
					/>
					<label class="label">
						<span class="label-text-alt">Optimal for 37-year-old male</span>
					</label>
				</div>
			</div>
			
			<div class="mt-4">
				<button class="btn btn-primary" on:click={handleSaveSettings}>
					Save Settings
				</button>
			</div>
		</div>
	</div>

	<!-- Data Management -->
	<div class="card bg-base-200">
		<div class="card-body">
			<h2 class="card-title mb-4">Data Management</h2>
			
			<div class="grid grid-cols-1 md:grid-cols-3 gap-4">
				<div class="alert alert-success">
					<span>✅ Your data is now stored securely in Supabase cloud database!</span>
				</div>
			</div>
			
		</div>
	</div>

	<!-- Military Standards Reference -->
	<div class="card bg-base-200">
		<div class="card-body">
			<h2 class="card-title mb-4">Fitness Standards (Male, Age 37)</h2>
			
			<div class="overflow-x-auto">
				<table class="table">
					<thead>
						<tr>
							<th>Metric</th>
							<th class="text-blue-400">Excellent</th>
							<th class="text-green-400">Good</th>
							<th class="text-yellow-400">Fair</th>
							<th class="text-red-400">Poor</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>BMI</td>
							<td>22-23</td>
							<td>18.5-24.9</td>
							<td>25-29.9</td>
							<td>≥30 or &lt;18.5</td>
						</tr>
						<tr>
							<td>Body Fat %</td>
							<td>8-11%</td>
							<td>12-19%</td>
							<td>20-25%</td>
							<td>&gt;25%</td>
						</tr>
						<tr>
							<td>Visceral Fat</td>
							<td>≤4</td>
							<td>5-9</td>
							<td>10-15</td>
							<td>&gt;15</td>
						</tr>
						<tr>
							<td>Body Water %</td>
							<td>≥61%</td>
							<td>55-60%</td>
							<td>50-54%</td>
							<td>&lt;50%</td>
						</tr>
						<tr>
							<td>Skeletal Muscle %</td>
							<td>≥41%</td>
							<td>35-40%</td>
							<td>30-34%</td>
							<td>&lt;30%</td>
						</tr>
						<tr>
							<td>Protein %</td>
							<td>≥18%</td>
							<td>16-17%</td>
							<td>14-15%</td>
							<td>&lt;14%</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	</div>
</div>