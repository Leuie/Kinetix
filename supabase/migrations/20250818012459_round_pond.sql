/*
  # Fix RLS Policies for User Access

  1. Security Updates
    - Drop and recreate all RLS policies with correct syntax
    - Ensure proper user authentication checks
    - Fix policy naming and conditions
  
  2. Policy Updates
    - Use auth.uid() consistently across all policies
    - Ensure INSERT policies use WITH CHECK clause properly
    - Fix SELECT, UPDATE, DELETE policy conditions
*/

-- Drop existing policies to recreate them properly
DROP POLICY IF EXISTS "Users can read own health metrics" ON health_metrics;
DROP POLICY IF EXISTS "Users can insert own health metrics" ON health_metrics;
DROP POLICY IF EXISTS "Users can update own health metrics" ON health_metrics;
DROP POLICY IF EXISTS "Users can delete own health metrics" ON health_metrics;

DROP POLICY IF EXISTS "Users can read own exercise logs" ON exercise_logs;
DROP POLICY IF EXISTS "Users can insert own exercise logs" ON exercise_logs;
DROP POLICY IF EXISTS "Users can update own exercise logs" ON exercise_logs;
DROP POLICY IF EXISTS "Users can delete own exercise logs" ON exercise_logs;

DROP POLICY IF EXISTS "Users can read own settings" ON user_settings;
DROP POLICY IF EXISTS "Users can insert own settings" ON user_settings;
DROP POLICY IF EXISTS "Users can update own settings" ON user_settings;

DROP POLICY IF EXISTS "Users can read own streaks" ON user_streaks;
DROP POLICY IF EXISTS "Users can insert own streaks" ON user_streaks;
DROP POLICY IF EXISTS "Users can update own streaks" ON user_streaks;

-- Recreate health_metrics policies
CREATE POLICY "health_metrics_select_policy" ON health_metrics
  FOR SELECT TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "health_metrics_insert_policy" ON health_metrics
  FOR INSERT TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "health_metrics_update_policy" ON health_metrics
  FOR UPDATE TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "health_metrics_delete_policy" ON health_metrics
  FOR DELETE TO authenticated
  USING (auth.uid() = user_id);

-- Recreate exercise_logs policies
CREATE POLICY "exercise_logs_select_policy" ON exercise_logs
  FOR SELECT TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "exercise_logs_insert_policy" ON exercise_logs
  FOR INSERT TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "exercise_logs_update_policy" ON exercise_logs
  FOR UPDATE TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "exercise_logs_delete_policy" ON exercise_logs
  FOR DELETE TO authenticated
  USING (auth.uid() = user_id);

-- Recreate user_settings policies
CREATE POLICY "user_settings_select_policy" ON user_settings
  FOR SELECT TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "user_settings_insert_policy" ON user_settings
  FOR INSERT TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "user_settings_update_policy" ON user_settings
  FOR UPDATE TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

-- Recreate user_streaks policies
CREATE POLICY "user_streaks_select_policy" ON user_streaks
  FOR SELECT TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "user_streaks_insert_policy" ON user_streaks
  FOR INSERT TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "user_streaks_update_policy" ON user_streaks
  FOR UPDATE TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

-- Ensure RLS is enabled on all tables
ALTER TABLE health_metrics ENABLE ROW LEVEL SECURITY;
ALTER TABLE exercise_logs ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_settings ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_streaks ENABLE ROW LEVEL SECURITY;