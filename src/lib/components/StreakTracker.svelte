<script lang="ts">
	import { Flame, Award } from 'lucide-svelte';
	import { userStreaks } from '$lib/stores/fitness';

	$: progressPercentage = Math.min(($userStreaks.current_streak / 30) * 100, 100);
</script>

<div class="grid grid-cols-1 md:grid-cols-3 gap-4">
	<!-- Current Streak -->
	<div class="card bg-gradient-to-br from-orange-600 to-red-600 text-white">
		<div class="card-body p-4">
			<div class="flex items-center gap-3">
				<Flame size={24} />
				<div>
					<div class="text-2xl font-bold">{$userStreaks.current_streak}</div>
					<div class="text-sm opacity-90">Day Streak</div>
				</div>
			</div>
		</div>
	</div>

	<!-- Total Workouts -->
	<div class="card bg-gradient-to-br from-blue-600 to-purple-600 text-white">
		<div class="card-body p-4">
			<div class="flex items-center gap-3">
				<Award size={24} />
				<div>
					<div class="text-2xl font-bold">{$userStreaks.total_workouts}</div>
					<div class="text-sm opacity-90">Total Workouts</div>
				</div>
			</div>
		</div>
	</div>

	<!-- Progress Ring -->
	<div class="card bg-base-200">
		<div class="card-body p-4">
			<div class="flex items-center gap-3">
				<div class="radial-progress text-primary" style="--value:{progressPercentage};" role="progressbar">
					{Math.round(progressPercentage)}%
				</div>
				<div>
					<div class="font-semibold">30-Day Goal</div>
					<div class="text-sm text-base-content/70">Keep going!</div>
				</div>
			</div>
		</div>
	</div>
</div>

<!-- Badges -->
{#if $userStreaks.badges.length > 0}
<div class="mt-4">
	<h3 class="text-lg font-semibold mb-2">Achievements</h3>
	<div class="flex flex-wrap gap-2">
		{#each $userStreaks.badges as badge}
			<div class="badge badge-accent badge-lg gap-1">
				<Award size={14} />
				{badge}
			</div>
		{/each}
	</div>
</div>
{/if}