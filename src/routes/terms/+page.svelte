<script lang="ts">
	import { FileText, Shield, TriangleAlert as AlertTriangle, CircleCheck as CheckCircle, Circle as XCircle, Scale, Gavel, Users, Clock } from 'lucide-svelte';
</script>

<div class="max-w-4xl mx-auto space-y-8">
	<div class="text-center">
		<div class="flex justify-center mb-4">
			<div class="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center">
				<FileText size={32} class="text-secondary" />
			</div>
		</div>
		<h1 class="text-4xl font-bold mb-4">Terms of Service</h1>
		<p class="text-base-content/70 text-lg">
			Please read these terms carefully before using Project Glow Up fitness tracking application.
		</p>
		<div class="text-sm text-base-content/50 mt-4">
			Last updated: January 2025
		</div>
	</div>

	<!-- Agreement -->
	<div class="card bg-base-200">
		<div class="card-body">
			<h2 class="card-title text-2xl mb-4 flex items-center gap-2">
				<Scale size={24} class="text-primary" />
				Agreement to Terms
			</h2>
			
			<div class="alert alert-info mb-4">
				<CheckCircle size={20} />
				<div>
					<h3 class="font-bold">By using Project Glow Up, you agree to these terms</h3>
					<p class="text-sm">Creating an account or using any features constitutes acceptance of this agreement.</p>
				</div>
			</div>
			
			<div class="space-y-4">
				<p class="text-base-content/80">
					These Terms of Service ("Terms") govern your use of the Project Glow Up fitness tracking application ("Service") 
					created by Miguel Viddy ("we," "us," or "our"). By accessing or using our Service, you agree to be bound by these Terms.
				</p>
				
				<div class="bg-base-300 p-4 rounded-lg">
					<h3 class="font-semibold mb-2">Key Points:</h3>
					<ul class="list-disc list-inside space-y-1 text-sm text-base-content/80">
						<li>You must be at least 13 years old to use this service</li>
						<li>You are responsible for maintaining account security</li>
						<li>The service is provided "as is" for personal fitness tracking</li>
						<li>We reserve the right to modify or discontinue features</li>
					</ul>
				</div>
			</div>
		</div>
	</div>

	<!-- Service Description -->
	<div class="card bg-base-200">
		<div class="card-body">
			<h2 class="card-title text-2xl mb-4 flex items-center gap-2">
				<Shield size={24} class="text-success" />
				Service Description
			</h2>
			
			<div class="space-y-4">
				<p class="text-base-content/80">
					Project Glow Up is a comprehensive fitness tracking application designed to help users achieve military-grade 
					physical standards through structured training plans, health metric tracking, and achievement systems.
				</p>
				
				<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
					<div class="bg-base-300 p-4 rounded-lg">
						<h3 class="font-semibold mb-2 text-primary">What We Provide</h3>
						<ul class="list-disc list-inside space-y-1 text-sm text-base-content/80">
							<li>Health metrics tracking (13+ measurements)</li>
							<li>Progressive 20-week training plans</li>
							<li>50-achievement gamification system</li>
							<li>Progress visualization and analytics</li>
							<li>Secure cloud data storage</li>
						</ul>
					</div>
					
					<div class="bg-base-300 p-4 rounded-lg">
						<h3 class="font-semibold mb-2 text-warning">What We Don't Provide</h3>
						<ul class="list-disc list-inside space-y-1 text-sm text-base-content/80">
							<li>Medical advice or diagnosis</li>
							<li>Professional fitness coaching</li>
							<li>Guaranteed fitness results</li>
							<li>Equipment or gym access</li>
							<li>Nutritional planning services</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>

	<!-- User Responsibilities -->
	<div class="card bg-base-200">
		<div class="card-body">
			<h2 class="card-title text-2xl mb-4 flex items-center gap-2">
				<Users size={24} class="text-info" />
				Your Responsibilities
			</h2>
			
			<div class="space-y-6">
				<div>
					<h3 class="text-lg font-semibold mb-2 flex items-center gap-2">
						<CheckCircle size={20} class="text-success" />
						Account Security
					</h3>
					<ul class="list-disc list-inside space-y-1 text-base-content/80 ml-6">
						<li>Provide accurate information during registration</li>
						<li>Maintain the confidentiality of your login credentials</li>
						<li>Notify us immediately of any unauthorized account access</li>
						<li>Use a strong, unique password for your account</li>
					</ul>
				</div>

				<div>
					<h3 class="text-lg font-semibold mb-2 flex items-center gap-2">
						<Shield size={20} class="text-warning" />
						Appropriate Use
					</h3>
					<ul class="list-disc list-inside space-y-1 text-base-content/80 ml-6">
						<li>Use the service only for personal fitness tracking</li>
						<li>Provide accurate health and fitness data</li>
						<li>Respect the intellectual property of the application</li>
						<li>Do not attempt to reverse engineer or hack the service</li>
						<li>Do not share your account with others</li>
					</ul>
				</div>

				<div>
					<h3 class="text-lg font-semibold mb-2 flex items-center gap-2">
						<AlertTriangle size={20} class="text-error" />
						Health & Safety
					</h3>
					<div class="alert alert-warning mb-2">
						<AlertTriangle size={16} />
						<span class="text-sm"><strong>Important:</strong> Always consult healthcare professionals before starting any fitness program.</span>
					</div>
					<ul class="list-disc list-inside space-y-1 text-base-content/80 ml-6">
						<li>Consult a doctor before beginning any exercise program</li>
						<li>Stop exercising if you experience pain or discomfort</li>
						<li>Use the app's suggestions as guidance, not medical advice</li>
						<li>Take responsibility for your own health and safety</li>
					</ul>
				</div>
			</div>
		</div>
	</div>

	<!-- Prohibited Activities -->
	<div class="card bg-base-200">
		<div class="card-body">
			<h2 class="card-title text-2xl mb-4 flex items-center gap-2">
				<XCircle size={24} class="text-error" />
				Prohibited Activities
			</h2>
			
			<div class="alert alert-error mb-4">
				<XCircle size={20} />
				<div>
					<h3 class="font-bold">The following activities are strictly prohibited:</h3>
				</div>
			</div>
			
			<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
				<div>
					<h3 class="font-semibold mb-2 text-error">Technical Violations</h3>
					<ul class="list-disc list-inside space-y-1 text-sm text-base-content/80">
						<li>Attempting to hack, crack, or reverse engineer the app</li>
						<li>Using automated tools to access the service</li>
						<li>Overloading our servers with excessive requests</li>
						<li>Attempting to access other users' data</li>
						<li>Introducing malware or malicious code</li>
					</ul>
				</div>
				
				<div>
					<h3 class="font-semibold mb-2 text-error">Content & Conduct</h3>
					<ul class="list-disc list-inside space-y-1 text-sm text-base-content/80">
						<li>Providing false or misleading information</li>
						<li>Using the service for commercial purposes</li>
						<li>Sharing inappropriate content through the platform</li>
						<li>Violating any applicable laws or regulations</li>
						<li>Impersonating others or creating fake accounts</li>
					</ul>
				</div>
			</div>
		</div>
	</div>

	<!-- Intellectual Property -->
	<div class="card bg-base-200">
		<div class="card-body">
			<h2 class="card-title text-2xl mb-4 flex items-center gap-2">
				<Gavel size={24} class="text-accent" />
				Intellectual Property
			</h2>
			
			<div class="space-y-4">
				<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
					<div class="bg-base-300 p-4 rounded-lg">
						<h3 class="font-semibold mb-2 text-primary">Our Rights</h3>
						<p class="text-sm text-base-content/80 mb-2">Project Glow Up and all related content are owned by Miguel Viddy:</p>
						<ul class="list-disc list-inside space-y-1 text-xs text-base-content/80">
							<li>Application code and design</li>
							<li>User interface and user experience</li>
							<li>Achievement system and gamification</li>
							<li>Training plans and methodologies</li>
							<li>Branding, logos, and trademarks</li>
						</ul>
					</div>
					
					<div class="bg-base-300 p-4 rounded-lg">
						<h3 class="font-semibold mb-2 text-success">Your Rights</h3>
						<p class="text-sm text-base-content/80 mb-2">You retain ownership of your personal data:</p>
						<ul class="list-disc list-inside space-y-1 text-xs text-base-content/80">
							<li>Your health and fitness data</li>
							<li>Personal information and settings</li>
							<li>Exercise logs and progress records</li>
							<li>Right to export or delete your data</li>
							<li>Limited license to use the application</li>
						</ul>
					</div>
				</div>
				
				<div class="alert alert-info">
					<Shield size={20} />
					<div>
						<h3 class="font-bold">License Grant</h3>
						<p class="text-sm">We grant you a limited, non-exclusive, non-transferable license to use Project Glow Up for personal fitness tracking purposes only.</p>
					</div>
				</div>
			</div>
		</div>
	</div>

	<!-- Disclaimers -->
	<div class="card bg-base-200">
		<div class="card-body">
			<h2 class="card-title text-2xl mb-4 flex items-center gap-2">
				<AlertTriangle size={24} class="text-warning" />
				Disclaimers & Limitations
			</h2>
			
			<div class="space-y-4">
				<div class="alert alert-warning">
					<AlertTriangle size={20} />
					<div>
						<h3 class="font-bold">Medical Disclaimer</h3>
						<p class="text-sm">Project Glow Up is not a medical device and does not provide medical advice. Always consult healthcare professionals for medical guidance.</p>
					</div>
				</div>
				
				<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
					<div>
						<h3 class="font-semibold mb-2">Service Availability</h3>
						<ul class="list-disc list-inside space-y-1 text-sm text-base-content/80">
							<li>Service provided "as is" without warranties</li>
							<li>We don't guarantee 100% uptime</li>
							<li>Features may change or be discontinued</li>
							<li>Performance may vary by device/connection</li>
						</ul>
					</div>
					
					<div>
						<h3 class="font-semibold mb-2">Limitation of Liability</h3>
						<ul class="list-disc list-inside space-y-1 text-sm text-base-content/80">
							<li>Not liable for fitness results or injuries</li>
							<li>Not responsible for data loss (backup recommended)</li>
							<li>Limited liability for service interruptions</li>
							<li>No liability for third-party integrations</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>

	<!-- Termination -->
	<div class="card bg-base-200">
		<div class="card-body">
			<h2 class="card-title text-2xl mb-4 flex items-center gap-2">
				<Clock size={24} class="text-error" />
				Account Termination
			</h2>
			
			<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
				<div>
					<h3 class="font-semibold mb-2 text-primary">Your Rights</h3>
					<p class="text-sm text-base-content/80 mb-2">You may terminate your account at any time:</p>
					<ul class="list-disc list-inside space-y-1 text-sm text-base-content/80">
						<li>Delete your account through app settings</li>
						<li>Export your data before deletion</li>
						<li>Stop using the service at any time</li>
						<li>No cancellation fees or penalties</li>
					</ul>
				</div>
				
				<div>
					<h3 class="font-semibold mb-2 text-warning">Our Rights</h3>
					<p class="text-sm text-base-content/80 mb-2">We may suspend or terminate accounts for:</p>
					<ul class="list-disc list-inside space-y-1 text-sm text-base-content/80">
						<li>Violation of these terms</li>
						<li>Suspicious or fraudulent activity</li>
						<li>Extended periods of inactivity</li>
						<li>Technical or security reasons</li>
					</ul>
				</div>
			</div>
			
			<div class="alert alert-info mt-4">
				<Shield size={20} />
				<div>
					<h3 class="font-bold">Data Retention</h3>
					<p class="text-sm">Upon account termination, your data will be deleted within 30 days unless required for legal compliance.</p>
				</div>
			</div>
		</div>
	</div>

	<!-- Changes & Contact -->
	<div class="card bg-base-200">
		<div class="card-body">
			<h2 class="card-title text-2xl mb-4 flex items-center gap-2">
				<FileText size={24} class="text-accent" />
				Changes & Contact Information
			</h2>
			
			<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
				<div>
					<h3 class="font-semibold mb-2">Terms Updates</h3>
					<p class="text-sm text-base-content/80 mb-2">
						We may update these terms from time to time. When we do:
					</p>
					<ul class="list-disc list-inside space-y-1 text-sm text-base-content/80">
						<li>We'll update the "Last updated" date</li>
						<li>Significant changes will be highlighted</li>
						<li>Continued use means acceptance</li>
						<li>You can always review current terms here</li>
					</ul>
				</div>
				
				<div>
					<h3 class="font-semibold mb-2">Contact Us</h3>
					<p class="text-sm text-base-content/80 mb-2">
						Questions about these terms? Contact us:
					</p>
					<div class="bg-base-300 p-3 rounded text-sm">
						<p><strong>Creator:</strong> Miguel Viddy</p>
						<p><strong>Project:</strong> Project Glow Up</p>
						<p><strong>Purpose:</strong> First of many life-improving applications</p>
						<p><strong>Contact:</strong> Through application settings</p>
					</div>
				</div>
			</div>
		</div>
	</div>

	<!-- Footer -->
	<div class="text-center py-8">
		<div class="flex justify-center gap-4 mb-4">
			<a href="/privacy" class="btn btn-outline btn-sm">Privacy Policy</a>
			<a href="/about" class="btn btn-outline btn-sm">About Project Glow Up</a>
			<a href="/" class="btn btn-primary btn-sm">Back to App</a>
		</div>
		<p class="text-xs text-base-content/50">
			By using Project Glow Up, you acknowledge that you have read, understood, and agree to these Terms of Service.
		</p>
	</div>
</div>