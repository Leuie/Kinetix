<script lang="ts">
	import { onMount } from 'svelte';
	import { user } from '$lib/stores/auth';
	import { TrendingUp, Target, Award, Calendar, Shield, Zap, Trophy, Star, Crown, Diamond, User, Heart, Code, Sparkles, ArrowRight, CircleCheck as CheckCircle, Play, Medal, Activity } from 'lucide-svelte';
	import DailyQuote from '$lib/components/DailyQuote.svelte';
	import Dashboard from '$lib/components/Dashboard.svelte';
	import GuidedStretchingPlayer from '$lib/components/GuidedStretchingPlayer.svelte';

	let showFeatures = false;

	onMount(() => {
		setTimeout(() => {
			showFeatures = true;
		}, 800);
	});
</script>

<div class="space-y-8 p-4 md:p-6 max-w-7xl mx-auto">
	<!-- Guided Stretching & Joint Mobility Player -->
	<GuidedStretchingPlayer />

	{#if $user}
		<!-- Show dashboard for logged in users -->
		<Dashboard />
	{:else}
		<!-- Home page overview -->
		<div class="space-y-8">
			<section class="rounded-2xl bg-gradient-to-br from-[#0c101d] via-[#101526] to-[#070a13] p-8 border border-[#20273c] text-center shadow-xl">
				<div class="max-w-3xl mx-auto space-y-4 mb-10">
					<div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-semibold uppercase">
						<Activity size={14} />
						Autonomous Performance Operating System
					</div>
					<h1 class="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
						KINETIX OS
					</h1>
					<p class="text-slate-300 text-sm sm:text-base leading-relaxed">
						Consolidated physical conditioning engine. Combining Dr Suzanne Martin guided stretching cadences, deep squat VMO glide knee rehabilitation, and sanitized functional bodyweight progressions with zero military terminology.
					</p>
				</div>
					
				<!-- Key Stats -->
				<div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-2xl mx-auto">
					<div class="stat bg-base-200/50 rounded-lg backdrop-blur-sm">
						<div class="stat-figure text-primary">
							<Trophy size={32} />
						</div>
						<div class="stat-title">Achievements</div>
						<div class="stat-value text-primary">50</div>
						<div class="stat-desc">Unique rewards to unlock</div>
					</div>
					
					<div class="stat bg-base-200/50 rounded-lg backdrop-blur-sm">
						<div class="stat-figure text-secondary">
							<TrendingUp size={32} />
						</div>
						<div class="stat-title">Health Metrics</div>
						<div class="stat-value text-secondary">13+</div>
						<div class="stat-desc">Comprehensive tracking</div>
					</div>
					
					<div class="stat bg-base-200/50 rounded-lg backdrop-blur-sm">
						<div class="stat-figure text-accent">
							<Target size={32} />
						</div>
						<div class="stat-title">Training Plan</div>
						<div class="stat-value text-accent">20</div>
						<div class="stat-desc">Week transformation</div>
					</div>
				</div>
				
				<!-- CTA Buttons -->
				<div class="flex flex-col sm:flex-row gap-4 justify-center mb-12">
					<a href="/auth" class="btn btn-primary btn-lg">
						<Play size={20} />
						Start Your Transformation
						<ArrowRight size={20} />
					</a>
					<a href="/about" class="btn btn-outline btn-lg">
						<Trophy size={20} />
						Learn More
					</a>
				</div>
				
				<!-- Creator Badge -->
				<div class="inline-flex items-center gap-2 px-4 py-2 bg-base-200/50 rounded-full backdrop-blur-sm">
					<Code size={16} class="text-accent" />
					<span class="text-sm">Created by <strong class="text-primary">Miguel Viddy</strong> • First of Many</span>
					<Sparkles size={16} class="text-accent" />
				</div>
			</section>

		<!-- Features Section -->
		<section class="py-20 bg-base-100">
			<div class="container mx-auto px-4">
				<div class="text-center mb-16">
					<h2 class="text-4xl font-bold mb-4">Why Choose Kinetix OS?</h2>
					<p class="text-xl text-base-content/70 max-w-2xl mx-auto">
						Built with anatomical precision and gamification mechanics to keep you motivated throughout your physical longevity journey.
					</p>
				</div>
				
				<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 {showFeatures ? 'animate-fade-in' : 'opacity-0'}">
					<!-- Feature 1 -->
					<div class="card bg-base-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
						<div class="card-body text-center">
							<div class="flex justify-center mb-4">
								<div class="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
									<TrendingUp size={32} class="text-primary" />
								</div>
							</div>
							<h3 class="card-title justify-center mb-2">Comprehensive Tracking</h3>
							<p class="text-base-content/70">
								Monitor 13+ health metrics including BMI, body fat, muscle mass, visceral fat, and metabolic age with laboratory grade precision.
							</p>
						</div>
					</div>
					
					<!-- Feature 2 -->
					<div class="card bg-base-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
						<div class="card-body text-center">
							<div class="flex justify-center mb-4">
								<div class="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center">
									<Calendar size={32} class="text-secondary" />
								</div>
							</div>
							<h3 class="card-title justify-center mb-2">Structured Training</h3>
							<p class="text-base-content/70">
								Follow a progressive 20 week training plan with walking schedules and strength training designed for optimal results.
							</p>
						</div>
					</div>
					
					<!-- Feature 3 -->
					<div class="card bg-base-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
						<div class="card-body text-center">
							<div class="flex justify-center mb-4">
								<div class="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center">
									<Trophy size={32} class="text-accent" />
								</div>
							</div>
							<h3 class="card-title justify-center mb-2">50 Achievements</h3>
							<p class="text-base-content/70">
								Unlock rewards across 5 tiers and 4 rarity levels. From Novice to Grandmaster, every milestone accelerates your physical sovereignty.
							</p>
						</div>
					</div>
					
					<!-- Feature 4 -->
					<div class="card bg-base-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
						<div class="card-body text-center">
							<div class="flex justify-center mb-4">
								<div class="w-16 h-16 rounded-full bg-success/20 flex items-center justify-center">
									<Shield size={32} class="text-success" />
								</div>
							</div>
							<h3 class="card-title justify-center mb-2">Functional Benchmarks</h3>
							<p class="text-base-content/70">
								All metrics calibrated to functional calisthenics benchmarks for peak adult performance, ensuring scientifically validated longevity.
							</p>
						</div>
					</div>
					
					<!-- Feature 5 -->
					<div class="card bg-base-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
						<div class="card-body text-center">
							<div class="flex justify-center mb-4">
								<div class="w-16 h-16 rounded-full bg-warning/20 flex items-center justify-center">
									<Zap size={32} class="text-warning" />
								</div>
							</div>
							<h3 class="card-title justify-center mb-2">Real Time Analytics</h3>
							<p class="text-base-content/70">
								Interactive charts showing weight trends, calorie burn patterns, and body composition changes with goal projections.
							</p>
						</div>
					</div>
					
					<!-- Feature 6 -->
					<div class="card bg-base-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
						<div class="card-body text-center">
							<div class="flex justify-center mb-4">
								<div class="w-16 h-16 rounded-full bg-info/20 flex items-center justify-center">
									<Star size={32} class="text-info" />
								</div>
							</div>
							<h3 class="card-title justify-center mb-2">Trophy Wall</h3>
							<p class="text-base-content/70">
								Showcase your earned achievements with beautiful trophy displays, filtering, and progress tracking.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>

		<!-- Daily Quote Section -->
		<section class="py-16 bg-base-200">
			<div class="container mx-auto px-4">
				<div class="max-w-4xl mx-auto">
					<div class="text-center mb-8">
						<h2 class="text-3xl font-bold mb-4">Daily Motivation</h2>
						<p class="text-base-content/70">Get inspired with carefully curated motivational quotes</p>
					</div>
					<DailyQuote />
				</div>
			</div>
		</section>

		<!-- Achievement Tiers Preview -->
		<section class="py-20 bg-base-100">
			<div class="container mx-auto px-4">
				<div class="text-center mb-16">
					<h2 class="text-4xl font-bold mb-4">Achievement System</h2>
					<p class="text-xl text-base-content/70 max-w-2xl mx-auto">
						Unlock 50 unique achievements across 5 tiers and 4 rarity levels
					</p>
				</div>
				
				<div class="grid grid-cols-1 md:grid-cols-5 gap-6 max-w-4xl mx-auto">
					<div class="text-center">
						<div class="w-20 h-20 mx-auto mb-4 rounded-full bg-amber-600/20 flex items-center justify-center border-2 border-amber-600/30">
							<Award size={32} class="text-amber-600" />
						</div>
						<h3 class="font-bold text-amber-600">Bronze</h3>
						<p class="text-sm text-base-content/70">Starting achievements</p>
					</div>
					
					<div class="text-center">
						<div class="w-20 h-20 mx-auto mb-4 rounded-full bg-gray-400/20 flex items-center justify-center border-2 border-gray-400/30">
							<Medal size={32} class="text-gray-400" />
						</div>
						<h3 class="font-bold text-gray-400">Silver</h3>
						<p class="text-sm text-base-content/70">Consistent progress</p>
					</div>
					
					<div class="text-center">
						<div class="w-20 h-20 mx-auto mb-4 rounded-full bg-yellow-400/20 flex items-center justify-center border-2 border-yellow-400/30">
							<Trophy size={32} class="text-yellow-400" />
						</div>
						<h3 class="font-bold text-yellow-400">Gold</h3>
						<p class="text-sm text-base-content/70">Major milestones</p>
					</div>
					
					<div class="text-center">
						<div class="w-20 h-20 mx-auto mb-4 rounded-full bg-purple-400/20 flex items-center justify-center border-2 border-purple-400/30">
							<Crown size={32} class="text-purple-400" />
						</div>
						<h3 class="font-bold text-purple-400">Platinum</h3>
						<p class="text-sm text-base-content/70">Elite performance</p>
					</div>
					
					<div class="text-center">
						<div class="w-20 h-20 mx-auto mb-4 rounded-full bg-cyan-400/20 flex items-center justify-center border-2 border-cyan-400/30">
							<Diamond size={32} class="text-cyan-400" />
						</div>
						<h3 class="font-bold text-cyan-400">Diamond</h3>
						<p class="text-sm text-base-content/70">Ultimate mastery</p>
					</div>
				</div>
			</div>
		</section>

		<!-- CTA Section -->
		<section class="py-20 bg-gradient-to-r from-primary/20 to-secondary/20">
			<div class="container mx-auto px-4 text-center">
				<div class="max-w-3xl mx-auto">
					<h2 class="text-4xl font-bold mb-6">Ready to Transform Your Life?</h2>
					<p class="text-xl mb-8 text-base-content/80">
						Join the journey to sovereign physical mastery with comprehensive tracking, structured training, and rewarding achievements.
					</p>
					
					<div class="flex flex-col sm:flex-row gap-4 justify-center mb-8">
						<a href="/auth" class="btn btn-primary btn-lg">
							<User size={20} />
							Create Free Account
						</a>
						<a href="/achievements" class="btn btn-outline btn-lg">
							<Trophy size={20} />
							View All Achievements
						</a>
					</div>
					
					<div class="flex flex-wrap justify-center gap-6 text-sm text-base-content/70">
						<div class="flex items-center gap-2">
							<CheckCircle size={16} class="text-success" />
							<span>Free to use</span>
						</div>
						<div class="flex items-center gap-2">
							<CheckCircle size={16} class="text-success" />
							<span>Secure data storage</span>
						</div>
						<div class="flex items-center gap-2">
							<CheckCircle size={16} class="text-success" />
							<span>Sovereign athletic standards</span>
						</div>
						<div class="flex items-center gap-2">
							<CheckCircle size={16} class="text-success" />
							<span>50 achievements</span>
						</div>
					</div>
				</div>
			</div>
		</section>

		<!-- Footer -->
		<footer class="footer footer-center p-10 bg-base-200 text-base-content">
			<div>
				<div class="w-12 h-12 flex items-center justify-center text-3xl mb-4">💪</div>
				<p class="font-bold text-lg">Kinetix OS</p>
				<p class="text-base-content/70">Transform your body with anatomical precision</p>
			</div>
			<div>
				<div class="grid grid-flow-col gap-4">
					<a href="/about" class="link link-hover">About</a>
					<a href="/achievements" class="link link-hover">Achievements</a>
					<a href="/privacy" class="link link-hover">Privacy</a>
					<a href="/terms" class="link link-hover">Terms</a>
				</div>
			</div>
			<div>
				<p class="flex items-center gap-2">
					<Heart size={16} class="text-red-500" />
					Created by <strong class="text-primary">Miguel Viddy</strong>
					<Code size={16} class="text-accent" />
				</p>
				<p class="text-sm text-base-content/50">First application of many • Built to improve life through technology</p>
			</div>
		</footer>
	</div>
{/if}
</div>

<style>
	@keyframes fade-in {
		from {
			opacity: 0;
			transform: translateY(20px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}
	
	.animate-fade-in {
		animation: fade-in 0.8s ease-out forwards;
	}
</style>