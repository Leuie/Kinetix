import { createClient } from '@supabase/supabase-js';
import { browser } from '$app/environment';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
	auth: {
		autoRefreshToken: true,
		persistSession: browser,
		detectSessionInUrl: browser,
		flowType: 'pkce'
	}
});

// Database types
export interface Database {
	public: {
		Tables: {
			users: {
				Row: {
					id: string;
					email: string;
					created_at: string;
					updated_at: string;
				};
				Insert: {
					id: string;
					email: string;
					created_at?: string;
					updated_at?: string;
				};
				Update: {
					id?: string;
					email?: string;
					created_at?: string;
					updated_at?: string;
				};
			};
			health_metrics: {
				Row: {
					id: string;
					user_id: string;
					weight: number;
					bmi: number;
					body_fat: number;
					fat_free_body_weight: number;
					subcutaneous_fat: number;
					visceral_fat: number;
					body_water: number;
					skeletal_muscle: number;
					muscle_mass: number;
					bone_mass: number;
					protein: number;
					bmr: number;
					metabolic_age: number;
					recorded_date: string;
					created_at: string;
				};
				Insert: {
					id?: string;
					user_id: string;
					weight?: number;
					bmi?: number;
					body_fat?: number;
					fat_free_body_weight?: number;
					subcutaneous_fat?: number;
					visceral_fat?: number;
					body_water?: number;
					skeletal_muscle?: number;
					muscle_mass?: number;
					bone_mass?: number;
					protein?: number;
					bmr?: number;
					metabolic_age?: number;
					recorded_date: string;
					created_at?: string;
				};
				Update: {
					id?: string;
					user_id?: string;
					weight?: number;
					bmi?: number;
					body_fat?: number;
					fat_free_body_weight?: number;
					subcutaneous_fat?: number;
					visceral_fat?: number;
					body_water?: number;
					skeletal_muscle?: number;
					muscle_mass?: number;
					bone_mass?: number;
					protein?: number;
					bmr?: number;
					metabolic_age?: number;
					recorded_date?: string;
					created_at?: string;
				};
			};
			exercise_logs: {
				Row: {
					id: string;
					user_id: string;
					exercise_date: string;
					type: 'walk' | 'dumbbell' | 'squat' | 'pushup';
					distance: number | null;
					duration: number | null;
					sets: number | null;
					reps: number | null;
					weight: number | null;
					calories: number;
					steps: number | null;
					active_calories: number | null;
					total_calories: number | null;
					average_pace: string | null;
					average_heart_rate: number | null;
					start_time: string | null;
					end_time: string | null;
					notes: string | null;
					created_at: string;
				};
				Insert: {
					id?: string;
					user_id: string;
					exercise_date: string;
					type: 'walk' | 'dumbbell' | 'squat' | 'pushup';
					distance?: number | null;
					duration?: number | null;
					sets?: number | null;
					reps?: number | null;
					weight?: number | null;
					calories?: number;
					steps?: number | null;
					active_calories?: number | null;
					total_calories?: number | null;
					average_pace?: string | null;
					average_heart_rate?: number | null;
					start_time?: string | null;
					end_time?: string | null;
					notes?: string | null;
					created_at?: string;
				};
				Update: {
					id?: string;
					user_id?: string;
					exercise_date?: string;
					type?: 'walk' | 'dumbbell' | 'squat' | 'pushup';
					distance?: number | null;
					duration?: number | null;
					sets?: number | null;
					reps?: number | null;
					weight?: number | null;
					calories?: number;
					steps?: number | null;
					active_calories?: number | null;
					total_calories?: number | null;
					average_pace?: string | null;
					average_heart_rate?: number | null;
					start_time?: string | null;
					end_time?: string | null;
					notes?: string | null;
					created_at?: string;
				};
			};
			user_settings: {
				Row: {
					id: string;
					user_id: string;
					start_date: string;
					target_weight: number;
					current_age: number;
					created_at: string;
					updated_at: string;
				};
				Insert: {
					id?: string;
					user_id: string;
					start_date?: string;
					target_weight?: number;
					current_age?: number;
					created_at?: string;
					updated_at?: string;
				};
				Update: {
					id?: string;
					user_id?: string;
					start_date?: string;
					target_weight?: number;
					current_age?: number;
					created_at?: string;
					updated_at?: string;
				};
			};
			user_streaks: {
				Row: {
					id: string;
					user_id: string;
					current_streak: number;
					total_workouts: number;
					badges: any[];
					updated_at: string;
				};
				Insert: {
					id?: string;
					user_id: string;
					current_streak?: number;
					total_workouts?: number;
					badges?: any[];
					updated_at?: string;
				};
				Update: {
					id?: string;
					user_id?: string;
					current_streak?: number;
					total_workouts?: number;
					badges?: any[];
					updated_at?: string;
				};
			};
		};
	};
}