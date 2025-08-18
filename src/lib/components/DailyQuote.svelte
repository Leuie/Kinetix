<script lang="ts">
	import { onMount } from 'svelte';
	import { Quote, Sparkles } from 'lucide-svelte';
	import { getDailyQuote, getQuoteByCategory, type MotivationalQuote } from '$lib/utils/quotes';

	let dailyQuote: MotivationalQuote;
	let showQuote = false;

	onMount(() => {
		dailyQuote = getDailyQuote();
		// Animate in after a short delay
		setTimeout(() => {
			showQuote = true;
		}, 500);
	});

	function getCategoryColor(category: string): string {
		switch (category) {
			case 'fitness': return 'text-green-400';
			case 'mindset': return 'text-blue-400';
			case 'discipline': return 'text-red-400';
			case 'progress': return 'text-purple-400';
			case 'strength': return 'text-orange-400';
			case 'perseverance': return 'text-yellow-400';
			default: return 'text-primary';
		}
	}

	function getCategoryBg(category: string): string {
		switch (category) {
			case 'fitness': return 'bg-green-400/10';
			case 'mindset': return 'bg-blue-400/10';
			case 'discipline': return 'bg-red-400/10';
			case 'progress': return 'bg-purple-400/10';
			case 'strength': return 'bg-orange-400/10';
			case 'perseverance': return 'bg-yellow-400/10';
			default: return 'bg-primary/10';
		}
	}
</script>

{#if dailyQuote}
<div class="mt-8 mb-4 transition-all duration-1000 {showQuote ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}">
	<div class="card bg-gradient-to-r from-base-200 to-base-300 shadow-lg border border-base-300">
		<div class="card-body p-6">
			<div class="flex items-start gap-4">
				<div class="flex-shrink-0">
					<div class="bg-primary/20 p-3 rounded-full">
						<Quote size={24} class="text-primary" />
					</div>
				</div>
				
				<div class="flex-1">
					<div class="flex items-center gap-2 mb-3">
						<Sparkles size={16} class="text-primary" />
						<span class="text-sm font-semibold text-primary">Daily Motivation</span>
						<div class="badge badge-sm {getCategoryColor(dailyQuote.category)} {getCategoryBg(dailyQuote.category)} border-0">
							{dailyQuote.category}
						</div>
					</div>
					
					<blockquote class="text-lg font-medium text-base-content mb-3 leading-relaxed">
						"{dailyQuote.text}"
					</blockquote>
					
					<cite class="text-sm text-base-content/70 font-medium">
						— {dailyQuote.author}
					</cite>
				</div>
			</div>
		</div>
	</div>
</div>
{/if}

<style>
	blockquote {
		font-style: italic;
	}
	
	cite {
		font-style: normal;
	}
</style>