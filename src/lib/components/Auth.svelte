<script lang="ts">
	import { signIn, signUp } from '$lib/stores/auth';
	import { User, Mail, Lock, LogIn, UserPlus } from 'lucide-svelte';

	let email = '';
	let password = '';
	let isSignUp = false;
	let loading = false;
	let error = '';

	async function handleAuth() {
		if (!email || !password) {
			error = 'Please fill in all fields';
			return;
		}

		loading = true;
		error = '';

		try {
			const { error: authError } = isSignUp 
				? await signUp(email, password)
				: await signIn(email, password);

			if (authError) {
				error = authError.message;
			} else if (isSignUp) {
				error = 'Check your email for a confirmation link!';
			}
		} catch (e) {
			error = 'An unexpected error occurred';
		} finally {
			loading = false;
		}
	}

	function toggleMode() {
		isSignUp = !isSignUp;
		error = '';
	}
</script>

<div class="min-h-screen flex items-center justify-center bg-base-100 p-4">
	<div class="card w-full max-w-md bg-base-200 shadow-xl">
		<div class="card-body">
			<div class="text-center mb-6">
				<div class="flex justify-center mb-4">
					<div class="w-20 h-20 flex items-center justify-center text-5xl">💪</div>
				</div>
				<h1 class="text-2xl font-bold">Project Glow Up: A Fitness Tracker</h1>
				<p class="text-base-content/70">
					{isSignUp ? 'Create your account' : 'Sign in to your account'}
				</p>
			</div>

			<form on:submit|preventDefault={handleAuth} class="space-y-4">
				<div class="form-control">
					<label class="label">
						<span class="label-text" for="email">Email</span>
					</label>
					<div class="relative">
						<input
							type="email"
							placeholder="Enter your email"
							class="input input-bordered w-full pl-10"
							id="email"
							bind:value={email}
							required
						/>
						<Mail size={20} class="absolute left-3 top-1/2 transform -translate-y-1/2 text-base-content/50" />
					</div>
				</div>

				<div class="form-control">
					<label class="label">
						<span class="label-text" for="password">Password</span>
					</label>
					<div class="relative">
						<input
							type="password"
							placeholder="Enter your password"
							class="input input-bordered w-full pl-10"
							id="password"
							bind:value={password}
							required
						/>
						<Lock size={20} class="absolute left-3 top-1/2 transform -translate-y-1/2 text-base-content/50" />
					</div>
				</div>

				{#if error}
					<div class="alert alert-error">
						<span>{error}</span>
					</div>
				{/if}

				<button
					type="submit"
					class="btn btn-primary w-full"
					class:loading
					disabled={loading}
				>
					{#if !loading}
						{#if isSignUp}
							<UserPlus size={20} />
							Create Account
						{:else}
							<LogIn size={20} />
							Sign In
						{/if}
					{/if}
				</button>
			</form>

			<div class="divider">OR</div>

			<button
				type="button"
				class="btn btn-ghost w-full"
				on:click={toggleMode}
			>
				{isSignUp ? 'Already have an account? Sign in' : "Don't have an account? Sign up"}
			</button>

			<!-- Legal Links -->
			<div class="text-center mt-6 pt-4 border-t border-base-300">
				<p class="text-xs text-base-content/60 mb-2">
					By {isSignUp ? 'creating an account' : 'signing in'}, you agree to our
				</p>
				<div class="flex justify-center gap-4 text-xs">
					<a href="/terms" class="link link-hover text-primary">Terms of Service</a>
					<span class="text-base-content/40">•</span>
					<a href="/privacy" class="link link-hover text-primary">Privacy Policy</a>
				</div>
			</div>
		</div>
	</div>
</div>