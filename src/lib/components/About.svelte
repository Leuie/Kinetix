<script lang="ts">
	import { Target, TrendingUp, Calendar, Award, Shield, Zap, Trophy, Star, Crown, Diamond, User, Heart, Code, Sparkles } from 'lucide-svelte';
</script>

<div class="space-y-6">
	<div>
		<h1 class="text-3xl font-bold">About Project Glow Up</h1>
		<p class="text-base-content/70">Your comprehensive military fitness transformation tracker</p>
	</div>

	<!-- Hero Section -->
	<div class="card bg-gradient-to-br from-primary/20 to-secondary/20">
		<div class="card-body text-center">
			<div class="flex justify-center mb-4">
				<div class="w-24 h-24 flex items-center justify-center text-6xl">💪</div>
			</div>
			<h2 class="text-2xl font-bold mb-4">Transform Your Body, Elevate Your Life</h2>
			<p class="text-lg max-w-2xl mx-auto">
				Project Glow Up is a comprehensive fitness tracking application designed specifically for achieving military-grade physical standards. 
				Track your journey from day one to peak performance with precision metrics and structured training plans.
			</p>
			
			<!-- Creator Information -->
			<div class="mt-6 p-4 bg-base-200/50 rounded-lg max-w-lg mx-auto">
				<div class="flex items-center justify-center gap-3 mb-2">
					<User size={20} class="text-primary" />
					<span class="font-semibold text-primary">Created by Miguel Viddy</span>
				</div>
				<p class="text-sm text-base-content/70">
					This is my first application of many, built with the mission to improve and better some part of my life through technology.
				</p>
				<div class="flex items-center justify-center gap-2 mt-2">
					<Code size={16} class="text-accent" />
					<span class="text-xs text-accent">First of Many Life-Improving Applications</span>
				</div>
			</div>
		</div>
	</div>

	<!-- Mission Statement -->
	<div class="card bg-base-200">
		<div class="card-body">
			<h2 class="card-title mb-4 flex items-center gap-2">
				<Shield size={24} class="text-primary" />
				Our Mission
			</h2>
			<p class="text-lg leading-relaxed">
				To provide a structured, data-driven approach to achieving optimal physical fitness based on military standards. 
				We believe in the power of consistent tracking, progressive training, and measurable results to transform not just your body, 
				but your entire approach to health and wellness.
			</p>
		</div>
	</div>

	<!-- Key Features -->
	<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
		<div class="card bg-base-200">
			<div class="card-body">
				<div class="flex items-center gap-3 mb-3">
					<TrendingUp size={24} class="text-success" />
					<h3 class="card-title text-lg">Progress Tracking</h3>
				</div>
				<p>
					Comprehensive body composition analysis with 13+ health metrics including BMI, body fat percentage, 
					visceral fat, muscle mass, and metabolic age tracking.
				</p>
			</div>
		</div>

		<div class="card bg-base-200">
			<div class="card-body">
				<div class="flex items-center gap-3 mb-3">
					<Calendar size={24} class="text-info" />
					<h3 class="card-title text-lg">Structured Training</h3>
				</div>
				<p>
					Progressive 20-week strength training program with walking schedules designed to build endurance, 
					strength, and achieve target weight goals systematically.
				</p>
			</div>
		</div>

		<div class="card bg-base-200">
			<div class="card-body">
				<div class="flex items-center gap-3 mb-3">
					<Trophy size={24} class="text-warning" />
					<h3 class="card-title text-lg">50-Achievement System</h3>
				</div>
				<p>
					Comprehensive gamification with 50 unique achievements across 5 tiers (Bronze to Diamond) and 4 rarity levels. 
					Earn XP, unlock trophies, and showcase your progress on the Trophy Wall.
				</p>
			</div>
		</div>

		<div class="card bg-base-200">
			<div class="card-body">
				<div class="flex items-center gap-3 mb-3">
					<Target size={24} class="text-error" />
					<h3 class="card-title text-lg">Military Standards</h3>
				</div>
				<p>
					All metrics and goals are calibrated to military fitness standards for optimal health, 
					ensuring you're working toward scientifically-backed fitness benchmarks.
				</p>
			</div>
		</div>

		<div class="card bg-base-200">
			<div class="card-body">
				<div class="flex items-center gap-3 mb-3">
					<Zap size={24} class="text-accent" />
					<h3 class="card-title text-lg">Real-time Analytics</h3>
				</div>
				<p>
					Interactive charts and visualizations showing weight loss trends, calorie burn patterns, 
					and body composition changes over time with projected goal achievement.
				</p>
			</div>
		</div>

		<div class="card bg-base-200">
			<div class="card-body">
				<div class="flex items-center gap-3 mb-3">
					<Shield size={24} class="text-primary" />
					<h3 class="card-title text-lg">Secure Data</h3>
				</div>
				<p>
					Your health data is securely stored in Supabase cloud database with user authentication, 
					ensuring privacy and accessibility across all your devices.
				</p>
			</div>
		</div>
	</div>

	<!-- Achievement System Deep Dive -->
	<div class="card bg-base-200">
		<div class="card-body">
			<h2 class="card-title mb-4 flex items-center gap-2">
				<Trophy size={24} class="text-yellow-400" />
				Complete Achievement System
			</h2>
			
			<div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
				<div>
					<h3 class="font-semibold mb-3 flex items-center gap-2">
						<Star size={20} class="text-primary" />
						Achievement Categories (50 Total)
					</h3>
					<div class="space-y-2 text-sm">
						<div class="flex justify-between">
							<span>🎯 Milestones</span>
							<span class="badge badge-outline">10 achievements</span>
						</div>
						<div class="flex justify-between">
							<span>🔥 Streak Master</span>
							<span class="badge badge-outline">10 achievements</span>
						</div>
						<div class="flex justify-between">
							<span>💪 Exercise Goals</span>
							<span class="badge badge-outline">8 achievements</span>
						</div>
						<div class="flex justify-between">
							<span>⚖️ Weight Targets</span>
							<span class="badge badge-outline">6 achievements</span>
						</div>
						<div class="flex justify-between">
							<span>🏋️ Body Composition</span>
							<span class="badge badge-outline">6 achievements</span>
						</div>
						<div class="flex justify-between">
							<span>💥 Strength Goals</span>
							<span class="badge badge-outline">5 achievements</span>
						</div>
						<div class="flex justify-between">
							<span>🏃 Endurance & Performance</span>
							<span class="badge badge-outline">5 achievements</span>
						</div>
					</div>
				</div>
				
				<div>
					<h3 class="font-semibold mb-3 flex items-center gap-2">
						<Crown size={20} class="text-yellow-400" />
						Tier & Rarity System
					</h3>
					<div class="space-y-3">
						<div>
							<h4 class="font-medium mb-2">Achievement Tiers:</h4>
							<div class="flex flex-wrap gap-2">
								<span class="badge text-amber-600 bg-amber-600/20">Bronze</span>
								<span class="badge text-gray-400 bg-gray-400/20">Silver</span>
								<span class="badge text-yellow-400 bg-yellow-400/20">Gold</span>
								<span class="badge text-purple-400 bg-purple-400/20">Platinum</span>
								<span class="badge text-cyan-400 bg-cyan-400/20">Diamond</span>
							</div>
						</div>
						<div>
							<h4 class="font-medium mb-2">Rarity Levels:</h4>
							<div class="flex flex-wrap gap-2">
								<span class="badge text-gray-400 bg-gray-400/20">Common</span>
								<span class="badge text-blue-400 bg-blue-400/20">Rare</span>
								<span class="badge text-purple-400 bg-purple-400/20">Epic</span>
								<span class="badge text-orange-400 bg-orange-400/20">Legendary</span>
							</div>
						</div>
						<div>
							<h4 class="font-medium mb-2">XP Rewards:</h4>
							<div class="text-sm space-y-1">
								<div>• Basic: 50-200 XP</div>
								<div>• Advanced: 300-800 XP</div>
								<div>• Elite: 1,000-2,500 XP</div>
								<div>• Ultimate: 5,000-10,000 XP</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			
			<div class="mt-6 p-4 bg-gradient-to-r from-yellow-400/10 to-orange-400/10 rounded-lg">
				<h4 class="font-semibold mb-2 flex items-center gap-2">
					<Sparkles size={16} class="text-yellow-400" />
					Featured Achievements
				</h4>
				<div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
					<div>
						<strong>"First Blood":</strong> Log your first weight measurement
					</div>
					<div>
						<strong>"Relentless":</strong> Maintain a 30-day workout streak
					</div>
					<div>
						<strong>"Heavy Lifter":</strong> Increase muscle mass 2% from baseline
					</div>
					<div>
						<strong>"Hydra Slayer":</strong> Achieve visceral fat below 10
					</div>
					<div>
						<strong>"Target Acquired":</strong> Reach 225 lbs weight milestone
					</div>
					<div>
						<strong>"Iron Will":</strong> Maintain a 10-day workout streak
					</div>
				</div>
			</div>
		</div>
	</div>

	<!-- Trophy Wall Feature -->
	<div class="card bg-base-200">
		<div class="card-body">
			<h2 class="card-title mb-4 flex items-center gap-2">
				<Trophy size={24} class="text-primary" />
				Trophy Wall
			</h2>
			<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
				<div>
					<h3 class="font-semibold mb-3">Visual Achievement Showcase</h3>
					<ul class="space-y-2 text-sm">
						<li class="flex items-start gap-2">
							<span class="text-success">✓</span>
							<span>Beautiful trophy display with tier-based colors and styling</span>
						</li>
						<li class="flex items-start gap-2">
							<span class="text-success">✓</span>
							<span>Grid and list view modes for different preferences</span>
						</li>
						<li class="flex items-start gap-2">
							<span class="text-success">✓</span>
							<span>Advanced filtering by tier, category, and rarity</span>
						</li>
						<li class="flex items-start gap-2">
							<span class="text-success">✓</span>
							<span>Earned date tracking for each achievement</span>
						</li>
					</ul>
				</div>
				<div>
					<h3 class="font-semibold mb-3">Gamification Features</h3>
					<ul class="space-y-2 text-sm">
						<li class="flex items-start gap-2">
							<span class="text-info">→</span>
							<span>Level progression system based on total XP</span>
						</li>
						<li class="flex items-start gap-2">
							<span class="text-info">→</span>
							<span>Trophy statistics showing counts by tier</span>
						</li>
						<li class="flex items-start gap-2">
							<span class="text-info">→</span>
							<span>Search functionality to find specific achievements</span>
						</li>
						<li class="flex items-start gap-2">
							<span class="text-info">→</span>
							<span>Real-time progress tracking and updates</span>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>

	<!-- Target Audience -->
	<div class="card bg-base-200">
		<div class="card-body">
			<h2 class="card-title mb-4">Who Is This For?</h2>
			<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
				<div>
					<h3 class="font-semibold mb-2 text-primary">Perfect For:</h3>
					<ul class="space-y-2">
						<li class="flex items-start gap-2">
							<span class="text-success">✓</span>
							<span>Individuals seeking military-grade fitness standards</span>
						</li>
						<li class="flex items-start gap-2">
							<span class="text-success">✓</span>
							<span>People who want structured, progressive training</span>
						</li>
						<li class="flex items-start gap-2">
							<span class="text-success">✓</span>
							<span>Data-driven fitness enthusiasts</span>
						</li>
						<li class="flex items-start gap-2">
							<span class="text-success">✓</span>
							<span>Those preparing for military service</span>
						</li>
						<li class="flex items-start gap-2">
							<span class="text-success">✓</span>
							<span>Anyone wanting comprehensive body composition tracking</span>
						</li>
					</ul>
				</div>
				<div>
					<h3 class="font-semibold mb-2 text-warning">Key Benefits:</h3>
					<ul class="space-y-2">
						<li class="flex items-start gap-2">
							<span class="text-info">→</span>
							<span>Achieve optimal body composition</span>
						</li>
						<li class="flex items-start gap-2">
							<span class="text-info">→</span>
							<span>Build sustainable fitness habits</span>
						</li>
						<li class="flex items-start gap-2">
							<span class="text-info">→</span>
							<span>Track measurable progress over time</span>
						</li>
						<li class="flex items-start gap-2">
							<span class="text-info">→</span>
							<span>Stay motivated with achievement system</span>
						</li>
						<li class="flex items-start gap-2">
							<span class="text-info">→</span>
							<span>Follow scientifically-backed training protocols</span>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>

	<!-- Technical Specifications -->
	<div class="card bg-base-200">
		<div class="card-body">
			<h2 class="card-title mb-4">Technical Features</h2>
			<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
				<div>
					<h3 class="font-semibold mb-3">Health Metrics Tracked:</h3>
					<div class="grid grid-cols-2 gap-2 text-sm">
						<span class="badge badge-outline">Weight</span>
						<span class="badge badge-outline">BMI</span>
						<span class="badge badge-outline">Body Fat %</span>
						<span class="badge badge-outline">Visceral Fat</span>
						<span class="badge badge-outline">Body Water %</span>
						<span class="badge badge-outline">Skeletal Muscle %</span>
						<span class="badge badge-outline">Muscle Mass</span>
						<span class="badge badge-outline">Bone Mass</span>
						<span class="badge badge-outline">Protein %</span>
						<span class="badge badge-outline">BMR</span>
						<span class="badge badge-outline">Metabolic Age</span>
						<span class="badge badge-outline">Fat-Free Weight</span>
					</div>
				</div>
				<div>
					<h3 class="font-semibold mb-3">Exercise Types Supported:</h3>
					<div class="space-y-2">
						<div class="flex items-center gap-2">
							<span class="badge badge-info">Walking</span>
							<span class="text-sm">Distance, pace, heart rate, calories</span>
						</div>
						<div class="flex items-center gap-2">
							<span class="badge badge-warning">Strength</span>
							<span class="text-sm">Sets, reps, weight progression</span>
						</div>
						<div class="flex items-center gap-2">
							<span class="badge badge-success">Bodyweight</span>
							<span class="text-sm">Squats, pushups, calisthenics</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

	<!-- Call to Action -->
	<div class="card bg-gradient-to-r from-primary/20 to-secondary/20">
		<div class="card-body text-center">
			<h2 class="text-2xl font-bold mb-4">Ready to Start Your Transformation?</h2>
			<p class="text-lg mb-6">
				Begin tracking your fitness journey today with military-grade precision and structured progression.
			</p>
			<div class="flex flex-wrap gap-4 justify-center">
				<a href="/schedule" class="btn btn-primary">
					<Calendar size={20} />
					View Training Schedule
				</a>
				<a href="/progress" class="btn btn-secondary">
					<TrendingUp size={20} />
					Track Progress
				</a>
				<a href="/achievements" class="btn btn-accent">
					<Trophy size={20} />
					View Achievements
				</a>
				<a href="/trophy-wall" class="btn btn-warning">
					<Award size={20} />
					Trophy Wall
				</a>
			</div>
		</div>
	</div>

	<!-- Creator's Vision -->
	<div class="card bg-gradient-to-r from-primary/10 to-accent/10">
		<div class="card-body text-center">
			<div class="flex justify-center mb-4">
				<div class="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
					<Heart size={32} class="text-primary" />
				</div>
			</div>
			<h2 class="text-xl font-bold mb-4">A Personal Journey</h2>
			<p class="text-base-content/80 max-w-2xl mx-auto mb-4">
				Project Glow Up represents more than just a fitness app—it's the beginning of a journey to create technology 
				that genuinely improves lives. Built by Miguel Viddy as his first application, it embodies the belief that 
				every tool we create should serve a meaningful purpose in bettering our daily existence.
			</p>
			<div class="flex items-center justify-center gap-2">
				<Code size={16} class="text-accent" />
				<span class="text-sm font-medium text-accent">First Application • Many More to Come</span>
			</div>
		</div>
	</div>

	<!-- Footer -->
	<footer class="footer footer-center p-10 bg-base-200 text-base-content">
		<div>
			<div class="w-12 h-12 flex items-center justify-center text-3xl mb-4">💪</div>
			<p class="font-bold text-lg">Project Glow Up</p>
			<p class="text-base-content/70">Transform your body with military precision</p>
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