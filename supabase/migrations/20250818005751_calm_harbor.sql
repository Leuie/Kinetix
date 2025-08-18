/*
  # Create Military Fitness Tracker Schema

  1. New Tables
    - `health_metrics`
      - `id` (uuid, primary key)
      - `user_id` (uuid, references auth.users)
      - `weight` (decimal)
      - `bmi` (decimal)
      - `body_fat` (decimal)
      - `fat_free_body_weight` (decimal)
      - `subcutaneous_fat` (decimal)
      - `visceral_fat` (decimal)
      - `body_water` (decimal)
      - `skeletal_muscle` (decimal)
      - `muscle_mass` (decimal)
      - `bone_mass` (decimal)
      - `protein` (decimal)
      - `bmr` (integer)
      - `metabolic_age` (integer)
      - `recorded_date` (date)
      - `created_at` (timestamp)
    
    - `exercise_logs`
      - `id` (uuid, primary key)
      - `user_id` (uuid, references auth.users)
      - `exercise_date` (date)
      - `type` (text)
      - `distance` (decimal, nullable)
      - `duration` (integer, nullable)
      - `sets` (integer, nullable)
      - `reps` (integer, nullable)
      - `weight` (decimal, nullable)
      - `calories` (integer)
      - `steps` (integer, nullable)
      - `active_calories` (integer, nullable)
      - `total_calories` (integer, nullable)
      - `average_pace` (text, nullable)
      - `average_heart_rate` (integer, nullable)
      - `start_time` (text, nullable)
      - `end_time` (text, nullable)
      - `notes` (text, nullable)
      - `created_at` (timestamp)
    
    - `user_settings`
      - `id` (uuid, primary key)
      - `user_id` (uuid, references auth.users)
      - `start_date` (date)
      - `target_weight` (decimal)
      - `current_age` (integer)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)
    
    - `user_streaks`
      - `id` (uuid, primary key)
      - `user_id` (uuid, references auth.users)
      - `current_streak` (integer)
      - `total_workouts` (integer)
      - `badges` (jsonb)
      - `updated_at` (timestamp)

  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated users to manage their own data
*/

-- Create health_metrics table
CREATE TABLE IF NOT EXISTS health_metrics (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  weight decimal(5,1) DEFAULT 0,
  bmi decimal(4,1) DEFAULT 0,
  body_fat decimal(4,1) DEFAULT 0,
  fat_free_body_weight decimal(5,1) DEFAULT 0,
  subcutaneous_fat decimal(4,1) DEFAULT 0,
  visceral_fat decimal(4,1) DEFAULT 0,
  body_water decimal(4,1) DEFAULT 0,
  skeletal_muscle decimal(4,1) DEFAULT 0,
  muscle_mass decimal(5,1) DEFAULT 0,
  bone_mass decimal(4,1) DEFAULT 0,
  protein decimal(4,1) DEFAULT 0,
  bmr integer DEFAULT 0,
  metabolic_age integer DEFAULT 37,
  recorded_date date NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Create exercise_logs table
CREATE TABLE IF NOT EXISTS exercise_logs (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  exercise_date date NOT NULL,
  type text NOT NULL CHECK (type IN ('walk', 'dumbbell', 'squat', 'pushup')),
  distance decimal(5,2),
  duration integer,
  sets integer,
  reps integer,
  weight decimal(5,1),
  calories integer NOT NULL DEFAULT 0,
  steps integer,
  active_calories integer,
  total_calories integer,
  average_pace text,
  average_heart_rate integer,
  start_time text,
  end_time text,
  notes text,
  created_at timestamptz DEFAULT now()
);

-- Create user_settings table
CREATE TABLE IF NOT EXISTS user_settings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL UNIQUE,
  start_date date NOT NULL DEFAULT '2025-08-17',
  target_weight decimal(5,1) DEFAULT 175,
  current_age integer DEFAULT 37,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create user_streaks table
CREATE TABLE IF NOT EXISTS user_streaks (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL UNIQUE,
  current_streak integer DEFAULT 0,
  total_workouts integer DEFAULT 0,
  badges jsonb DEFAULT '[]'::jsonb,
  updated_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE health_metrics ENABLE ROW LEVEL SECURITY;
ALTER TABLE exercise_logs ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_settings ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_streaks ENABLE ROW LEVEL SECURITY;

-- Create policies for health_metrics
CREATE POLICY "Users can read own health metrics"
  ON health_metrics
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own health metrics"
  ON health_metrics
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own health metrics"
  ON health_metrics
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can delete own health metrics"
  ON health_metrics
  FOR DELETE
  TO authenticated
  USING (auth.uid() = user_id);

-- Create policies for exercise_logs
CREATE POLICY "Users can read own exercise logs"
  ON exercise_logs
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own exercise logs"
  ON exercise_logs
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own exercise logs"
  ON exercise_logs
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can delete own exercise logs"
  ON exercise_logs
  FOR DELETE
  TO authenticated
  USING (auth.uid() = user_id);

-- Create policies for user_settings
CREATE POLICY "Users can read own settings"
  ON user_settings
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own settings"
  ON user_settings
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own settings"
  ON user_settings
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

-- Create policies for user_streaks
CREATE POLICY "Users can read own streaks"
  ON user_streaks
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own streaks"
  ON user_streaks
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own streaks"
  ON user_streaks
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS health_metrics_user_date_idx ON health_metrics(user_id, recorded_date DESC);
CREATE INDEX IF NOT EXISTS exercise_logs_user_date_idx ON exercise_logs(user_id, exercise_date DESC);
CREATE INDEX IF NOT EXISTS exercise_logs_type_idx ON exercise_logs(type);