<script lang="ts">
	import { page } from '$app/stores';
	import { signOut, user } from '$lib/stores/auth';
	import { Chrome as Home, Calendar, TrendingUp, Settings, Info, Award, Trophy, PanelLeftClose } from 'lucide-svelte';
	import { healthMetrics } from '$lib/stores/fitness';
	
	export let sidebarDocked = true;
	export let toggleDock: () => void;
	
	$: currentPath = $page.url.pathname;
	
	// Calculate weight loss
	$: baselineWeight = $healthMetrics.length > 0 ? $healthMetrics[$healthMetrics.length - 1].weight : 0;
	$: currentWeight = $healthMetrics.length > 0 ? $healthMetrics[0].weight : 0;
	$: weightLoss = baselineWeight > 0 && currentWeight > 0 ? baselineWeight - currentWeight : 0;

	async function handleSignOut() {
		await signOut();
	}
</script>

<aside class="min-h-full w-64 bg-base-200 text-base-content relative">
	<!-- Dock toggle button - only show when docked on large screens -->
	{#if sidebarDocked}
		<button 
			class="absolute top-4 right-4 btn btn-xs btn-ghost hidden lg:block z-10"
			on:click={toggleDock}
			title="Undock sidebar"
		>
			<PanelLeftClose size={16} />
		</button>
	{/if}
	
	<div class="p-4">
		<div class="flex justify-center mb-4">
			<div class="w-16 h-16 flex items-center justify-center text-4xl">💪</div>
		</div>
		<h1 class="text-2xl font-bold text-primary tracking-wide">Kinetix OS</h1>
		<p class="text-sm text-base-content/70">Human Performance Engine</p>
	</div>
	
	<ul class="menu p-4 space-y-2">
		<li>
			<a 
				href="/" 
				class="flex items-center gap-3 {currentPath === '/' ? 'active' : ''}"
			>
				<Home size={20} />
				{$user ? 'Dashboard' : 'Home'}
			</a>
		</li>
		<li>
			<a 
				href="/schedule" 
				class="flex items-center gap-3 {currentPath === '/schedule' ? 'active' : ''}"
			>
				<Calendar size={20} />
				Schedule
			</a>
		</li>
		<li>
			<a 
				href="/progress" 
				class="flex items-center gap-3 {currentPath === '/progress' ? 'active' : ''}"
			>
				<TrendingUp size={20} />
				Progress
			</a>
		</li>
		<li>
			<a 
				href="/achievements" 
				class="flex items-center gap-3 {currentPath === '/achievements' ? 'active' : ''}"
			>
				<Award size={20} />
				Achievements
			</a>
		</li>
		<li>
			<a 
				href="/trophy-wall" 
				class="flex items-center gap-3 {currentPath === '/trophy-wall' ? 'active' : ''}"
			>
				<Trophy size={20} />
				Trophy Wall
			</a>
		</li>
		<li>
			<a 
				href="/about" 
				class="flex items-center gap-3 {currentPath === '/about' ? 'active' : ''}"
			>
				<Info size={20} />
				About
			</a>
		</li>
		<li>
			<a 
				href="/settings" 
				class="flex items-center gap-3 {currentPath === '/settings' ? 'active' : ''}"
			>
				<Settings size={20} />
				Settings
			</a>
		</li>
	</ul>
	
	<div class="p-4">
		<button class="btn btn-outline btn-sm w-full" on:click={handleSignOut}>
			Sign Out
		</button>
	</div>
	
	<div class="p-4 mt-8">
		<div class="bg-base-300 rounded-lg p-4">
			<h3 class="font-semibold mb-2">Quick Stats</h3>
			<div class="text-sm space-y-1">
				<div>Age: 37 years</div>
				<div>Target: Military Standards</div>
				<div class="text-success">Started: Aug 17, 2025</div>
				<div class="text-warning">Goal: Jan 1, 2026</div>
				{#if weightLoss > 0}
					<div class="text-primary font-semibold">Lost: {weightLoss.toFixed(1)} lbs</div>
				{:else if $healthMetrics.length > 0}
					<div class="text-info">Weight: {currentWeight.toFixed(1)} lbs</div>
				{/if}
			</div>
		</div>
	</div>
</aside>