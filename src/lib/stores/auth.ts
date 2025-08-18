import { writable } from 'svelte/store';
import { supabase } from '$lib/supabase';
import type { User, Session } from '@supabase/supabase-js';

export const user = writable<User | null>(null);
export const session = writable<Session | null>(null);
export const loading = writable(true);

// Initialize auth state
supabase.auth.getSession().then(({ data: { session: initialSession } }) => {
	session.set(initialSession);
	user.set(initialSession?.user ?? null);
	loading.set(false);
});

// Listen for auth changes
supabase.auth.onAuthStateChange((event, newSession) => {
	session.set(newSession);
	user.set(newSession?.user ?? null);
	loading.set(false);
});

// Auth functions
export const signUp = async (email: string, password: string) => {
	const { data, error } = await supabase.auth.signUp({
		email,
		password
	});
	return { data, error };
};

export const signIn = async (email: string, password: string) => {
	const { data, error } = await supabase.auth.signInWithPassword({
		email,
		password
	});
	return { data, error };
};

export const signOut = async () => {
	const { error } = await supabase.auth.signOut();
	return { error };
};