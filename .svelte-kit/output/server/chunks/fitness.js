import { d as derived, g as get, w as writable } from "./index.js";
import { u as user, s as supabase } from "./auth.js";
const healthMetrics = writable([]);
const exerciseLogs = writable([]);
const userSettings = writable({
  start_date: "2025-08-17",
  target_weight: 175,
  current_age: 37
});
const userStreaks = writable({
  current_streak: 0,
  total_workouts: 0,
  badges: []
});
const currentMetrics = derived(healthMetrics, ($metrics) => {
  if ($metrics.length === 0) return null;
  return $metrics.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())[0];
});
const baselineMetrics = derived(healthMetrics, ($metrics) => {
  if ($metrics.length === 0) return null;
  return $metrics.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())[0];
});
const loadHealthMetrics = async (userId) => {
  try {
    const { data, error } = await supabase.from("health_metrics").select("*").eq("user_id", userId).order("recorded_date", { ascending: false });
    if (error) {
      console.error("Error loading health metrics:", error);
      return;
    }
    if (!data) {
      healthMetrics.set([]);
      return;
    }
    const metrics = data.map((row) => ({
      weight: row.weight,
      bmi: row.bmi,
      bodyFat: row.body_fat,
      fatFreeBodyWeight: row.fat_free_body_weight,
      subcutaneousFat: row.subcutaneous_fat,
      visceralFat: row.visceral_fat,
      bodyWater: row.body_water,
      skeletalMuscle: row.skeletal_muscle,
      muscleMass: row.muscle_mass,
      boneMass: row.bone_mass,
      protein: row.protein,
      bmr: row.bmr,
      metabolicAge: row.metabolic_age,
      date: row.recorded_date
    }));
    healthMetrics.set(metrics);
  } catch (error) {
    console.error("Error in loadHealthMetrics:", error);
    healthMetrics.set([]);
  }
};
const loadExerciseLogs = async (userId) => {
  try {
    const { data, error } = await supabase.from("exercise_logs").select("*").eq("user_id", userId).order("exercise_date", { ascending: false });
    if (error) {
      console.error("Error loading exercise logs:", error);
      return;
    }
    if (!data) {
      exerciseLogs.set([]);
      return;
    }
    const logs = data.map((row) => ({
      id: row.id,
      date: row.exercise_date,
      type: row.type,
      distance: row.distance,
      duration: row.duration,
      sets: row.sets,
      reps: row.reps,
      weight: row.weight,
      calories: row.calories,
      steps: row.steps,
      activeCalories: row.active_calories,
      totalCalories: row.total_calories,
      averagePace: row.average_pace,
      averageHeartRate: row.average_heart_rate,
      startTime: row.start_time,
      endTime: row.end_time,
      notes: row.notes
    }));
    exerciseLogs.set(logs);
    await updateStreaks(userId, logs);
  } catch (error) {
    console.error("Error in loadExerciseLogs:", error);
    exerciseLogs.set([]);
  }
};
const saveExerciseLog = async (userId, log) => {
  const { error } = await supabase.from("exercise_logs").insert({
    user_id: userId,
    exercise_date: log.date,
    type: log.type,
    distance: log.distance,
    duration: log.duration,
    sets: log.sets,
    reps: log.reps,
    weight: log.weight,
    calories: log.calories,
    steps: log.steps,
    active_calories: log.activeCalories,
    total_calories: log.totalCalories,
    average_pace: log.averagePace,
    average_heart_rate: log.averageHeartRate,
    start_time: log.startTime,
    end_time: log.endTime,
    notes: log.notes
  });
  if (error) {
    console.error("Error saving exercise log:", error);
    throw error;
  }
  await loadExerciseLogs(userId);
};
const loadUserSettings = async (userId) => {
  try {
    const { data, error } = await supabase.from("user_settings").select("*").eq("user_id", userId).maybeSingle();
    if (error) {
      console.error("Error loading user settings:", error);
      return;
    }
    if (data) {
      userSettings.set({
        start_date: data.start_date,
        target_weight: data.target_weight,
        current_age: data.current_age
      });
    } else {
      await saveUserSettings(userId, {
        start_date: "2025-08-17",
        target_weight: 175,
        current_age: 37
      });
    }
  } catch (error) {
    console.error("Error in loadUserSettings:", error);
  }
};
const saveUserSettings = async (userId, settings) => {
  const { error } = await supabase.from("user_settings").upsert({
    user_id: userId,
    start_date: settings.start_date,
    target_weight: settings.target_weight,
    current_age: settings.current_age,
    updated_at: (/* @__PURE__ */ new Date()).toISOString()
  });
  if (error) {
    console.error("Error saving user settings:", error);
    throw error;
  }
  userSettings.set(settings);
};
const updateStreaks = async (userId, logs) => {
  try {
    const totalWorkouts = logs.length;
    const uniqueDays = [...new Set(logs.map((log) => log.date))].sort();
    let currentStreak = 0;
    const today = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
    const todayDate = new Date(today);
    for (let i = 0; i < 30; i++) {
      const checkDate = new Date(todayDate);
      checkDate.setDate(todayDate.getDate() - i);
      const checkDateStr = checkDate.toISOString().split("T")[0];
      if (uniqueDays.includes(checkDateStr)) {
        currentStreak++;
      } else if (i > 0) {
        break;
      }
    }
    const badges = [];
    if (currentStreak >= 7) badges.push("7-Day Streak");
    if (currentStreak >= 30) badges.push("30-Day Warrior");
    if (totalWorkouts >= 50) badges.push("50 Workouts");
    if (totalWorkouts >= 100) badges.push("Century Club");
    const streakData = {
      current_streak: currentStreak,
      total_workouts: totalWorkouts,
      badges
    };
    const { error } = await supabase.from("user_streaks").upsert([{
      user_id: userId,
      ...streakData,
      updated_at: (/* @__PURE__ */ new Date()).toISOString()
    }], {
      onConflict: "user_id"
    });
    if (error) {
      console.error("Error updating streaks:", error);
      return;
    }
    userStreaks.set(streakData);
  } catch (error) {
    console.error("Error in updateStreaks:", error);
  }
};
const loadUserStreaks = async (userId) => {
  try {
    const { data, error } = await supabase.from("user_streaks").select("*").eq("user_id", userId).maybeSingle();
    if (error) {
      console.error("Error loading user streaks:", error);
      return;
    }
    if (data) {
      userStreaks.set({
        current_streak: data.current_streak,
        total_workouts: data.total_workouts,
        badges: data.badges
      });
    } else {
      userStreaks.set({
        current_streak: 0,
        total_workouts: 0,
        badges: []
      });
    }
  } catch (error) {
    console.error("Error in loadUserStreaks:", error);
    userStreaks.set({
      current_streak: 0,
      total_workouts: 0,
      badges: []
    });
  }
};
const ensureHistoricalWorkouts = async (userId, currentLogs) => {
  try {
    const existingHistoricalLogs = currentLogs.filter(
      (log) => log.date === "2025-08-15" || log.date === "2025-08-17"
    );
    if (existingHistoricalLogs.length === 0) {
      await saveExerciseLog(userId, {
        date: "2025-08-15",
        type: "walk",
        distance: 2.68,
        duration: Math.round(81.47),
        // 1h 21min 28sec in minutes
        calories: 820,
        activeCalories: 820,
        totalCalories: 1040,
        averagePace: `30'18"/mi`,
        averageHeartRate: 148,
        startTime: "12:39",
        endTime: "14:19",
        notes: "Outdoor Walk - Historical data entry"
      });
      await saveExerciseLog(userId, {
        date: "2025-08-17",
        type: "walk",
        distance: 2.84,
        duration: Math.round(74.5),
        // 1h 14min 30sec in minutes
        calories: 786,
        activeCalories: 786,
        totalCalories: 986,
        averagePace: `26'13"/mi`,
        averageHeartRate: 143,
        startTime: "17:24",
        endTime: "18:58",
        notes: "Outdoor Walk - Historical data entry"
      });
    }
  } catch (error) {
    console.error("Error ensuring historical workouts:", error);
  }
};
user.subscribe(async ($user) => {
  if ($user) {
    await Promise.all([
      loadHealthMetrics($user.id),
      loadExerciseLogs($user.id),
      loadUserSettings($user.id),
      loadUserStreaks($user.id)
    ]);
    const currentLogs = get(exerciseLogs);
    await ensureHistoricalWorkouts($user.id, currentLogs);
  } else {
    healthMetrics.set([]);
    exerciseLogs.set([]);
    userSettings.set({
      start_date: "2025-08-17",
      target_weight: 175,
      current_age: 37
    });
    userStreaks.set({
      current_streak: 0,
      total_workouts: 0,
      badges: []
    });
  }
});
export {
  userSettings as a,
  baselineMetrics as b,
  currentMetrics as c,
  exerciseLogs as e,
  healthMetrics as h,
  userStreaks as u
};
