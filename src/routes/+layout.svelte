<script lang="ts">
	import '../app.css';
	import Sidebar from '$lib/components/Sidebar.svelte';
	import { onMount } from 'svelte';
	import { user, loading } from '$lib/stores/auth';
	import { page } from '$app/stores';
	import { PanelLeftClose, PanelLeftOpen } from 'lucide-svelte';

	let sidebarOpen = false;
	let sidebarDocked = true;

	function toggleSidebar() {
		sidebarOpen = !sidebarOpen;
	}

	function toggleDock() {
		sidebarDocked = !sidebarDocked;
	}

	// Public pages that don't require authentication
	$: isPublicPage = ['/auth'].includes($page.url.pathname);
	$: isPublicContentPage = ['/about', '/achievements'].includes($page.url.pathname);
</script>

{#if $loading}
	<div class="min-h-screen flex items-center justify-center">
		<div class="loading loading-spinner loading-lg"></div>
	</div>
{:else if !$user && !isPublicPage && !isPublicContentPage}
	<!-- Redirect to auth page for protected routes -->
	<script>
		window.location.href = '/auth';
	</script>
{:else if !$user && isPublicPage}
	<!-- Auth page without sidebar -->
	<main>
		<slot />
	</main>
{:else}
	<!-- Layout with sidebar for all other pages -->
	<div class="drawer {sidebarDocked ? 'lg:drawer-open' : ''}">
		<input id="drawer-toggle" type="checkbox" class="drawer-toggle" bind:checked={sidebarOpen} />
		
		<div class="drawer-content flex flex-col">
			<!-- Mobile header -->
			<div class="navbar {sidebarDocked ? 'lg:hidden' : ''} bg-base-200">
				<div class="flex-none">
					<label for="drawer-toggle" class="btn btn-square btn-ghost">
						<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
						</svg>
					</label>
				</div>
				<div class="flex-1 flex items-center gap-3">
					<div class="w-8 h-8 flex items-center justify-center text-2xl">💪</div>
					<h1 class="text-xl font-bold">Project Glow Up</h1>
				</div>
				<!-- Dock toggle button - only show on larger screens -->
				<div class="flex-none hidden lg:block">
					<button 
						class="btn btn-square btn-ghost" 
						on:click={toggleDock}
						title={sidebarDocked ? 'Undock sidebar' : 'Dock sidebar'}
					>
						{#if sidebarDocked}
							<PanelLeftClose size={20} />
						{:else}
							<PanelLeftOpen size={20} />
						{/if}
					</button>
				</div>
			</div>
			
			<!-- Main content -->
			<main class="flex-1 p-4 {!sidebarDocked ? 'lg:ml-0' : ''}">
				<slot />
			</main>
		</div>
		
		<div class="drawer-side">
			<label for="drawer-toggle" class="drawer-overlay"></label>
			<Sidebar {sidebarDocked} {toggleDock} />
		</div>
	</div>
{/if}