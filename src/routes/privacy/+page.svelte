<script lang="ts">
	import { Shield, Eye, Lock, Database, UserCheck, Mail, Calendar, TriangleAlert as AlertTriangle } from 'lucide-svelte';
</script>

<div class="max-w-4xl mx-auto space-y-8">
	<div class="text-center">
		<div class="flex justify-center mb-4">
			<div class="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
				<Shield size={32} class="text-primary" />
			</div>
		</div>
		<h1 class="text-4xl font-bold mb-4">Privacy Policy</h1>
		<p class="text-base-content/70 text-lg">
			Your privacy is important to us. This policy explains how we collect, use, and protect your information.
		</p>
		<div class="text-sm text-base-content/50 mt-4">
			Last updated: January 2025
		</div>
	</div>

	<!-- Information We Collect -->
	<div class="card bg-base-200">
		<div class="card-body">
			<h2 class="card-title text-2xl mb-4 flex items-center gap-2">
				<Eye size={24} class="text-info" />
				Information We Collect
			</h2>
			
			<div class="space-y-6">
				<div>
					<h3 class="text-lg font-semibold mb-2 flex items-center gap-2">
						<UserCheck size={20} class="text-success" />
						Account Information
					</h3>
					<ul class="list-disc list-inside space-y-1 text-base-content/80 ml-6">
						<li>Email address (for account creation and authentication)</li>
						<li>Password (encrypted and securely stored)</li>
						<li>Account creation and last login dates</li>
					</ul>
				</div>

				<div>
					<h3 class="text-lg font-semibold mb-2 flex items-center gap-2">
						<Database size={20} class="text-warning" />
						Health and Fitness Data
					</h3>
					<ul class="list-disc list-inside space-y-1 text-base-content/80 ml-6">
						<li>Body composition metrics (weight, BMI, body fat percentage, etc.)</li>
						<li>Exercise logs (workout type, duration, distance, calories burned)</li>
						<li>Progress tracking data and achievement records</li>
						<li>Personal fitness goals and settings</li>
						<li>Workout streaks and performance statistics</li>
					</ul>
				</div>

				<div>
					<h3 class="text-lg font-semibold mb-2 flex items-center gap-2">
						<Calendar size={20} class="text-accent" />
						Usage Information
					</h3>
					<ul class="list-disc list-inside space-y-1 text-base-content/80 ml-6">
						<li>App usage patterns and feature interactions</li>
						<li>Login frequency and session duration</li>
						<li>Device and browser information (for compatibility)</li>
					</ul>
				</div>
			</div>
		</div>
	</div>

	<!-- How We Use Your Information -->
	<div class="card bg-base-200">
		<div class="card-body">
			<h2 class="card-title text-2xl mb-4 flex items-center gap-2">
				<Database size={24} class="text-primary" />
				How We Use Your Information
			</h2>
			
			<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
				<div>
					<h3 class="font-semibold mb-2 text-success">Core Functionality</h3>
					<ul class="list-disc list-inside space-y-1 text-sm text-base-content/80">
						<li>Provide fitness tracking and progress monitoring</li>
						<li>Calculate health metrics and achievement progress</li>
						<li>Generate personalized workout schedules</li>
						<li>Display progress charts and analytics</li>
					</ul>
				</div>
				
				<div>
					<h3 class="font-semibold mb-2 text-info">Account Management</h3>
					<ul class="list-disc list-inside space-y-1 text-sm text-base-content/80">
						<li>Authenticate and secure your account</li>
						<li>Maintain your personal fitness profile</li>
						<li>Sync data across your devices</li>
						<li>Provide customer support when needed</li>
					</ul>
				</div>
			</div>
		</div>
	</div>

	<!-- Data Security -->
	<div class="card bg-base-200">
		<div class="card-body">
			<h2 class="card-title text-2xl mb-4 flex items-center gap-2">
				<Lock size={24} class="text-success" />
				Data Security & Storage
			</h2>
			
			<div class="space-y-4">
				<div class="alert alert-success">
					<Shield size={20} />
					<div>
						<h3 class="font-bold">Secure Cloud Storage</h3>
						<p class="text-sm">Your data is stored securely using Supabase, a trusted cloud database platform with enterprise-grade security.</p>
					</div>
				</div>
				
				<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
					<div class="bg-base-300 p-4 rounded-lg">
						<h4 class="font-semibold mb-2">Encryption</h4>
						<p class="text-sm text-base-content/80">All data is encrypted in transit and at rest using industry-standard encryption protocols.</p>
					</div>
					
					<div class="bg-base-300 p-4 rounded-lg">
						<h4 class="font-semibold mb-2">Access Control</h4>
						<p class="text-sm text-base-content/80">Row-level security ensures you can only access your own data. No other users can view your information.</p>
					</div>
					
					<div class="bg-base-300 p-4 rounded-lg">
						<h4 class="font-semibold mb-2">Data Backup</h4>
						<p class="text-sm text-base-content/80">Regular automated backups protect against data loss and ensure service continuity.</p>
					</div>
					
					<div class="bg-base-300 p-4 rounded-lg">
						<h4 class="font-semibold mb-2">Monitoring</h4>
						<p class="text-sm text-base-content/80">Continuous security monitoring and logging help detect and prevent unauthorized access.</p>
					</div>
				</div>
			</div>
		</div>
	</div>

	<!-- Your Rights -->
	<div class="card bg-base-200">
		<div class="card-body">
			<h2 class="card-title text-2xl mb-4 flex items-center gap-2">
				<UserCheck size={24} class="text-warning" />
				Your Privacy Rights
			</h2>
			
			<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
				<div>
					<h3 class="font-semibold mb-2 text-primary">Data Access & Control</h3>
					<ul class="list-disc list-inside space-y-1 text-sm text-base-content/80">
						<li>View all your stored data through the app interface</li>
						<li>Update or correct your information at any time</li>
						<li>Export your data in a portable format</li>
						<li>Delete specific data entries or your entire account</li>
					</ul>
				</div>
				
				<div>
					<h3 class="font-semibold mb-2 text-secondary">Privacy Choices</h3>
					<ul class="list-disc list-inside space-y-1 text-sm text-base-content/80">
						<li>Control what data you share with the application</li>
						<li>Opt out of non-essential data collection</li>
						<li>Request data portability to another service</li>
						<li>Contact us with privacy concerns or questions</li>
					</ul>
				</div>
			</div>
		</div>
	</div>

	<!-- Data Sharing -->
	<div class="card bg-base-200">
		<div class="card-body">
			<h2 class="card-title text-2xl mb-4 flex items-center gap-2">
				<AlertTriangle size={24} class="text-error" />
				Data Sharing & Third Parties
			</h2>
			
			<div class="alert alert-info mb-4">
				<Shield size={20} />
				<div>
					<h3 class="font-bold">We Do NOT Sell Your Data</h3>
					<p class="text-sm">Project Glow Up never sells, rents, or trades your personal information to third parties for marketing purposes.</p>
				</div>
			</div>
			
			<div class="space-y-4">
				<div>
					<h3 class="font-semibold mb-2">Limited Sharing Scenarios</h3>
					<p class="text-sm text-base-content/80 mb-2">We may share your information only in these specific circumstances:</p>
					<ul class="list-disc list-inside space-y-1 text-sm text-base-content/80 ml-4">
						<li><strong>Service Providers:</strong> Trusted partners like Supabase who help us operate the service</li>
						<li><strong>Legal Requirements:</strong> When required by law or to protect our legal rights</li>
						<li><strong>Safety:</strong> To prevent harm to you or others in emergency situations</li>
						<li><strong>Business Transfer:</strong> In the unlikely event of a merger or acquisition (with notice)</li>
					</ul>
				</div>
			</div>
		</div>
	</div>

	<!-- Contact & Updates -->
	<div class="card bg-base-200">
		<div class="card-body">
			<h2 class="card-title text-2xl mb-4 flex items-center gap-2">
				<Mail size={24} class="text-accent" />
				Contact & Policy Updates
			</h2>
			
			<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
				<div>
					<h3 class="font-semibold mb-2">Questions or Concerns?</h3>
					<p class="text-sm text-base-content/80 mb-2">
						If you have any questions about this privacy policy or how we handle your data, please contact us:
					</p>
					<div class="bg-base-300 p-3 rounded text-sm">
						<p><strong>Creator:</strong> Miguel Viddy</p>
						<p><strong>Project:</strong> Project Glow Up</p>
						<p><strong>Contact:</strong> Through the application settings</p>
					</div>
				</div>
				
				<div>
					<h3 class="font-semibold mb-2">Policy Updates</h3>
					<p class="text-sm text-base-content/80 mb-2">
						We may update this privacy policy from time to time. When we do:
					</p>
					<ul class="list-disc list-inside space-y-1 text-sm text-base-content/80">
						<li>We'll update the "Last updated" date</li>
						<li>Significant changes will be highlighted in the app</li>
						<li>Continued use constitutes acceptance of updates</li>
						<li>You can always review the current policy here</li>
					</ul>
				</div>
			</div>
		</div>
	</div>

	<!-- Footer -->
	<div class="text-center py-8">
		<div class="flex justify-center gap-4 mb-4">
			<a href="/terms" class="btn btn-outline btn-sm">Terms of Service</a>
			<a href="/about" class="btn btn-outline btn-sm">About Project Glow Up</a>
			<a href="/" class="btn btn-primary btn-sm">Back to App</a>
		</div>
		<p class="text-xs text-base-content/50">
			This privacy policy is designed to be transparent and user-friendly while ensuring your data protection rights.
		</p>
	</div>
</div>