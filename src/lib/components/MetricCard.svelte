<script lang="ts">
	import type { ComponentType } from 'svelte';

	export let label: string;
	export let value: number;
	export let unit: string;
	export let color: string;
	export let status: string;
	export let trend: 'up' | 'down' | 'neutral';
	export let trendIcon: ComponentType;
	export let positive: boolean;

	function getTrendColor(trend: 'up' | 'down' | 'neutral', positive: boolean): string {
		if (trend === 'neutral') return 'text-base-content/50';
		if (trend === 'up') return positive ? 'text-success' : 'text-error';
		return positive ? 'text-error' : 'text-success';
	}
</script>

<div class="card bg-base-200 shadow-lg hover:shadow-xl transition-shadow duration-200">
	<div class="card-body p-4">
		<div class="flex items-start justify-between">
			<div class="flex-1">
				<h3 class="text-sm font-medium text-base-content/70 mb-1">{label}</h3>
				<div class="flex items-baseline gap-2">
					<span class="text-2xl font-bold {color}">
						{value.toFixed(1)}{unit}
					</span>
					<div class="{getTrendColor(trend, positive)} flex items-center">
						<svelte:component this={trendIcon} size={16} />
					</div>
				</div>
				<div class="mt-2">
					<span class="text-xs px-2 py-1 rounded-full {color} bg-opacity-20">
						{status}
					</span>
				</div>
			</div>
		</div>
	</div>
</div>