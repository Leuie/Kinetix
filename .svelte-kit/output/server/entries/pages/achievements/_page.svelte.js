import "clsx";
import { F as sanitize_props, G as spread_props, I as slot, K as store_get, U as ensure_array_like, N as escape_html, T as attr_style, M as attr_class, Q as stringify, O as unsubscribe_stores, D as pop, A as push } from "../../../chunks/index2.js";
import { e as exerciseLogs, h as healthMetrics, u as userStreaks } from "../../../chunks/fitness.js";
import "../../../chunks/auth.js";
import { a as Trophy, T as Trending_up, A as Award } from "../../../chunks/trophy.js";
import { a as Star, Z as Zap, S as Sparkles, C as Crown, H as Heart } from "../../../chunks/zap.js";
import { T as Target } from "../../../chunks/target.js";
import { L as Lock } from "../../../chunks/lock.js";
import { C as Circle_check } from "../../../chunks/circle-check.js";
import { I as Icon } from "../../../chunks/Icon.js";
import { F as Footprints, D as Dumbbell } from "../../../chunks/footprints.js";
import { W as Weight, S as Sunrise, M as Moon, C as Compass, A as Anchor, a as Sword, b as Swords, c as Skull, R as Rocket, d as Crosshair, G as Gauge, e as Activity, F as Fast_forward, T as Timer, f as Mountain } from "../../../chunks/weight.js";
import { C as Calendar } from "../../../chunks/calendar.js";
import { C as Clock } from "../../../chunks/clock.js";
import { S as Shield } from "../../../chunks/shield.js";
import { F as Flame, D as Diamond, M as Medal } from "../../../chunks/medal.js";
function Gift($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  /**
   * @license lucide-svelte v0.456.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */
  const iconNode = [
    [
      "rect",
      { "x": "3", "y": "8", "width": "18", "height": "4", "rx": "1" }
    ],
    ["path", { "d": "M12 8v13" }],
    ["path", { "d": "M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7" }],
    [
      "path",
      {
        "d": "M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5"
      }
    ]
  ];
  Icon($$payload, spread_props([
    { name: "gift" },
    $$sanitized_props,
    {
      /**
       * @component @name Gift
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cmVjdCB4PSIzIiB5PSI4IiB3aWR0aD0iMTgiIGhlaWdodD0iNCIgcng9IjEiIC8+CiAgPHBhdGggZD0iTTEyIDh2MTMiIC8+CiAgPHBhdGggZD0iTTE5IDEydjdhMiAyIDAgMCAxLTIgMkg3YTIgMiAwIDAgMS0yLTJ2LTciIC8+CiAgPHBhdGggZD0iTTcuNSA4YTIuNSAyLjUgMCAwIDEgMC01QTQuOCA4IDAgMCAxIDEyIDhhNC44IDggMCAwIDEgNC41LTUgMi41IDIuNSAwIDAgMSAwIDUiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/gift
       * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
       *
       * @param {Object} props - Lucide icons props and any valid SVG attribute
       * @returns {FunctionalComponent} Svelte component
       *
       */
      iconNode,
      children: ($$payload2) => {
        $$payload2.out.push(`<!---->`);
        slot($$payload2, $$props, "default", {});
        $$payload2.out.push(`<!---->`);
      },
      $$slots: { default: true }
    }
  ]));
}
function Achievements($$payload, $$props) {
  push();
  var $$store_subs;
  let groupedAchievements;
  let achievements = [];
  let totalXP = 0;
  let currentLevel = 1;
  let xpToNextLevel = 100;
  let completedAchievements = 0;
  const achievementDefinitions = [
    {
      id: "first_step",
      title: "First Step",
      description: "Complete your first workout",
      icon: Footprints,
      category: "milestone",
      tier: "bronze",
      requirement: 1,
      xp: 50,
      rarity: "common"
    },
    {
      id: "first_blood",
      title: "First Blood",
      description: "Log your first weight measurement",
      icon: Weight,
      category: "milestone",
      tier: "bronze",
      requirement: 1,
      xp: 75,
      rarity: "common"
    },
    {
      id: "data_tracker",
      title: "Data Tracker",
      description: "Log your first complete health metrics",
      icon: Trending_up,
      category: "milestone",
      tier: "bronze",
      requirement: 1,
      xp: 100,
      rarity: "common"
    },
    {
      id: "early_bird",
      title: "Early Bird",
      description: "Complete 10 morning workouts (5AM-12PM)",
      icon: Sunrise,
      category: "milestone",
      tier: "silver",
      requirement: 10,
      xp: 200,
      rarity: "rare"
    },
    {
      id: "night_owl",
      title: "Night Owl",
      description: "Complete 10 evening workouts (6PM-12AM)",
      icon: Moon,
      category: "milestone",
      tier: "silver",
      requirement: 10,
      xp: 200,
      rarity: "rare"
    },
    {
      id: "perfect_week",
      title: "Perfect Week",
      description: "Complete all scheduled workouts in a week",
      icon: Calendar,
      category: "milestone",
      tier: "gold",
      requirement: 1,
      xp: 500,
      rarity: "epic"
    },
    {
      id: "double_duty",
      title: "Double Duty",
      description: "Complete 2 workouts in a single day",
      icon: Clock,
      category: "milestone",
      tier: "silver",
      requirement: 1,
      xp: 250,
      rarity: "rare"
    },
    {
      id: "weekly_warrior",
      title: "Weekly Warrior",
      description: "Complete 7 workouts in one week",
      icon: Shield,
      category: "milestone",
      tier: "gold",
      requirement: 7,
      xp: 400,
      rarity: "epic"
    },
    {
      id: "transformation_start",
      title: "Transformation Begins",
      description: "Complete your first month of tracking",
      icon: Compass,
      category: "milestone",
      tier: "gold",
      requirement: 30,
      xp: 600,
      rarity: "epic"
    },
    {
      id: "dedication",
      title: "Dedication",
      description: "Log workouts for 100 consecutive days",
      icon: Anchor,
      category: "milestone",
      tier: "diamond",
      requirement: 100,
      xp: 2500,
      rarity: "legendary"
    },
    {
      id: "getting_started",
      title: "Getting Started",
      description: "Maintain a 3-day workout streak",
      icon: Flame,
      category: "streak",
      tier: "bronze",
      requirement: 3,
      xp: 100,
      rarity: "common"
    },
    {
      id: "week_warrior",
      title: "Week Warrior",
      description: "Maintain a 7-day workout streak",
      icon: Shield,
      category: "streak",
      tier: "silver",
      requirement: 7,
      xp: 200,
      rarity: "rare"
    },
    {
      id: "iron_will",
      title: "Iron Will",
      description: "Maintain a 10-day workout streak",
      icon: Sword,
      category: "streak",
      tier: "silver",
      requirement: 10,
      xp: 300,
      rarity: "rare"
    },
    {
      id: "fortnight_fighter",
      title: "Fortnight Fighter",
      description: "Maintain a 14-day workout streak",
      icon: Swords,
      category: "streak",
      tier: "gold",
      requirement: 14,
      xp: 400,
      rarity: "epic"
    },
    {
      id: "relentless",
      title: "Relentless",
      description: "Maintain a 30-day workout streak",
      icon: Crown,
      category: "streak",
      tier: "platinum",
      requirement: 30,
      xp: 800,
      rarity: "legendary"
    },
    {
      id: "unstoppable",
      title: "Unstoppable Force",
      description: "Maintain a 60-day workout streak",
      icon: Diamond,
      category: "streak",
      tier: "diamond",
      requirement: 60,
      xp: 1500,
      rarity: "legendary"
    },
    {
      id: "steel_resolve",
      title: "Steel Resolve",
      description: "Maintain a 20-day workout streak",
      icon: Shield,
      category: "streak",
      tier: "gold",
      requirement: 20,
      xp: 500,
      rarity: "epic"
    },
    {
      id: "diamond_mind",
      title: "Diamond Mind",
      description: "Maintain a 50-day workout streak",
      icon: Diamond,
      category: "streak",
      tier: "platinum",
      requirement: 50,
      xp: 1200,
      rarity: "legendary"
    },
    {
      id: "legendary_streak",
      title: "Legendary Streak",
      description: "Maintain a 90-day workout streak",
      icon: Crown,
      category: "streak",
      tier: "diamond",
      requirement: 90,
      xp: 3e3,
      rarity: "legendary"
    },
    {
      id: "immortal",
      title: "Immortal",
      description: "Maintain a 365-day workout streak",
      icon: Skull,
      category: "streak",
      tier: "diamond",
      requirement: 365,
      xp: 1e4,
      rarity: "legendary"
    },
    {
      id: "rookie",
      title: "Rookie",
      description: "Complete 10 total workouts",
      icon: Award,
      category: "exercise",
      tier: "bronze",
      requirement: 10,
      xp: 150,
      rarity: "common"
    },
    {
      id: "dedicated",
      title: "Dedicated",
      description: "Complete 25 total workouts",
      icon: Medal,
      category: "exercise",
      tier: "silver",
      requirement: 25,
      xp: 300,
      rarity: "rare"
    },
    {
      id: "committed",
      title: "Committed",
      description: "Complete 50 total workouts",
      icon: Trophy,
      category: "exercise",
      tier: "gold",
      requirement: 50,
      xp: 600,
      rarity: "epic"
    },
    {
      id: "century_club",
      title: "Century Club",
      description: "Complete 100 total workouts",
      icon: Star,
      category: "exercise",
      tier: "platinum",
      requirement: 100,
      xp: 1e3,
      rarity: "legendary"
    },
    {
      id: "elite_athlete",
      title: "Elite Athlete",
      description: "Complete 200 total workouts",
      icon: Rocket,
      category: "exercise",
      tier: "diamond",
      requirement: 200,
      xp: 2e3,
      rarity: "legendary"
    },
    {
      id: "workout_machine",
      title: "Workout Machine",
      description: "Complete 300 total workouts",
      icon: Zap,
      category: "exercise",
      tier: "diamond",
      requirement: 300,
      xp: 3500,
      rarity: "legendary"
    },
    {
      id: "fitness_legend",
      title: "Fitness Legend",
      description: "Complete 500 total workouts",
      icon: Crown,
      category: "exercise",
      tier: "diamond",
      requirement: 500,
      xp: 5e3,
      rarity: "legendary"
    },
    {
      id: "ultimate_warrior",
      title: "Ultimate Warrior",
      description: "Complete 1000 total workouts",
      icon: Diamond,
      category: "exercise",
      tier: "diamond",
      requirement: 1e3,
      xp: 1e4,
      rarity: "legendary"
    },
    {
      id: "target_acquired",
      title: "Target Acquired",
      description: "Reach 225 lbs weight milestone",
      icon: Crosshair,
      category: "weight",
      tier: "gold",
      requirement: 225,
      xp: 500,
      rarity: "epic"
    },
    {
      id: "double_century",
      title: "Double Century",
      description: "Reach 200 lbs weight milestone",
      icon: Target,
      category: "weight",
      tier: "platinum",
      requirement: 200,
      xp: 800,
      rarity: "legendary"
    },
    {
      id: "mission_complete",
      title: "Mission Complete",
      description: "Reach target weight of 175 lbs",
      icon: Trophy,
      category: "weight",
      tier: "diamond",
      requirement: 175,
      xp: 2e3,
      rarity: "legendary"
    },
    {
      id: "weight_warrior",
      title: "Weight Warrior",
      description: "Lose 10 lbs from starting weight",
      icon: Trending_up,
      category: "weight",
      tier: "silver",
      requirement: 10,
      xp: 300,
      rarity: "rare"
    },
    {
      id: "transformation",
      title: "Transformation",
      description: "Lose 25 lbs from starting weight",
      icon: Sparkles,
      category: "weight",
      tier: "gold",
      requirement: 25,
      xp: 600,
      rarity: "epic"
    },
    {
      id: "new_you",
      title: "New You",
      description: "Lose 50 lbs from starting weight",
      icon: Crown,
      category: "weight",
      tier: "diamond",
      requirement: 50,
      xp: 1500,
      rarity: "legendary"
    },
    {
      id: "heavy_lifter",
      title: "Heavy Lifter",
      description: "Increase muscle mass by 2% from baseline",
      icon: Dumbbell,
      category: "progress",
      tier: "gold",
      requirement: 2,
      xp: 600,
      rarity: "epic"
    },
    {
      id: "hydra_slayer",
      title: "Hydra Slayer",
      description: "Achieve visceral fat below 10",
      icon: Skull,
      category: "elite",
      tier: "platinum",
      requirement: 10,
      xp: 1e3,
      rarity: "legendary"
    },
    {
      id: "lean_machine",
      title: "Lean Machine",
      description: "Achieve body fat percentage below 12%",
      icon: Gauge,
      category: "elite",
      tier: "platinum",
      requirement: 12,
      xp: 1200,
      rarity: "legendary"
    },
    {
      id: "muscle_builder",
      title: "Muscle Builder",
      description: "Increase muscle mass by 5% from baseline",
      icon: Dumbbell,
      category: "progress",
      tier: "platinum",
      requirement: 5,
      xp: 1e3,
      rarity: "legendary"
    },
    {
      id: "body_sculptor",
      title: "Body Sculptor",
      description: "Achieve optimal BMI (22-23)",
      icon: Target,
      category: "elite",
      tier: "gold",
      requirement: 22,
      xp: 800,
      rarity: "epic"
    },
    {
      id: "metabolic_master",
      title: "Metabolic Master",
      description: "Achieve metabolic age below actual age",
      icon: Zap,
      category: "elite",
      tier: "diamond",
      requirement: 1,
      xp: 2e3,
      rarity: "legendary"
    },
    {
      id: "strength_master",
      title: "Strength Master",
      description: "Complete 50 strength training sessions",
      icon: Dumbbell,
      category: "strength",
      tier: "gold",
      requirement: 50,
      xp: 600,
      rarity: "epic"
    },
    {
      id: "pushup_pro",
      title: "Pushup Pro",
      description: "Complete 100 total pushups in workouts",
      icon: Activity,
      category: "strength",
      tier: "silver",
      requirement: 100,
      xp: 300,
      rarity: "rare"
    },
    {
      id: "squat_champion",
      title: "Squat Champion",
      description: "Complete 200 total squats in workouts",
      icon: Activity,
      category: "strength",
      tier: "gold",
      requirement: 200,
      xp: 500,
      rarity: "epic"
    },
    {
      id: "weight_warrior_30",
      title: "Weight Warrior",
      description: "Lift 30+ lbs in dumbbell exercises",
      icon: Dumbbell,
      category: "strength",
      tier: "silver",
      requirement: 30,
      xp: 400,
      rarity: "rare"
    },
    {
      id: "iron_pumper",
      title: "Iron Pumper",
      description: "Lift 40+ lbs in dumbbell exercises",
      icon: Dumbbell,
      category: "strength",
      tier: "gold",
      requirement: 40,
      xp: 600,
      rarity: "epic"
    },
    {
      id: "speed_demon",
      title: "Speed Demon",
      description: "Achieve average pace under 25 min/mile",
      icon: Fast_forward,
      category: "performance",
      tier: "gold",
      requirement: 25,
      xp: 500,
      rarity: "epic"
    },
    {
      id: "heart_warrior",
      title: "Heart Warrior",
      description: "Maintain 150+ BPM average in workout",
      icon: Heart,
      category: "performance",
      tier: "silver",
      requirement: 150,
      xp: 300,
      rarity: "rare"
    },
    {
      id: "endurance_king",
      title: "Endurance King",
      description: "Complete workout lasting 60+ minutes",
      icon: Timer,
      category: "endurance",
      tier: "gold",
      requirement: 60,
      xp: 400,
      rarity: "epic"
    },
    {
      id: "distance_destroyer",
      title: "Distance Destroyer",
      description: "Walk 100 total miles",
      icon: Mountain,
      category: "endurance",
      tier: "platinum",
      requirement: 100,
      xp: 800,
      rarity: "legendary"
    },
    {
      id: "marathon_mindset",
      title: "Marathon Mindset",
      description: "Walk 250 total miles",
      icon: Footprints,
      category: "endurance",
      tier: "diamond",
      requirement: 250,
      xp: 1500,
      rarity: "legendary"
    }
  ];
  function calculateAchievements() {
    store_get($$store_subs ??= {}, "$exerciseLogs", exerciseLogs).reduce((sum, log) => sum + log.calories, 0);
    const totalDistance = store_get($$store_subs ??= {}, "$exerciseLogs", exerciseLogs).filter((log) => log.type === "walk" && log.distance).reduce((sum, log) => sum + (log.distance || 0), 0);
    const strengthWorkouts = store_get($$store_subs ??= {}, "$exerciseLogs", exerciseLogs).filter((log) => log.type === "dumbbell" || log.type === "squat" || log.type === "pushup").length;
    const morningWorkouts = store_get($$store_subs ??= {}, "$exerciseLogs", exerciseLogs).filter((log) => {
      const startTime = log.startTime;
      if (!startTime) return false;
      const hour = parseInt(startTime.split(":")[0]);
      return hour >= 5 && hour < 12;
    }).length;
    const nightWorkouts = store_get($$store_subs ??= {}, "$exerciseLogs", exerciseLogs).filter((log) => {
      const startTime = log.startTime;
      if (!startTime) return false;
      const hour = parseInt(startTime.split(":")[0]);
      return hour >= 18 || hour < 5;
    }).length;
    const baselineWeight = store_get($$store_subs ??= {}, "$healthMetrics", healthMetrics).length > 0 ? store_get($$store_subs ??= {}, "$healthMetrics", healthMetrics)[store_get($$store_subs ??= {}, "$healthMetrics", healthMetrics).length - 1].weight : 0;
    const currentWeight = store_get($$store_subs ??= {}, "$healthMetrics", healthMetrics).length > 0 ? store_get($$store_subs ??= {}, "$healthMetrics", healthMetrics)[0].weight : 0;
    const weightLoss = baselineWeight - currentWeight;
    const baselineMetrics = store_get($$store_subs ??= {}, "$healthMetrics", healthMetrics).length > 0 ? store_get($$store_subs ??= {}, "$healthMetrics", healthMetrics)[store_get($$store_subs ??= {}, "$healthMetrics", healthMetrics).length - 1] : null;
    const currentMetrics = store_get($$store_subs ??= {}, "$healthMetrics", healthMetrics).length > 0 ? store_get($$store_subs ??= {}, "$healthMetrics", healthMetrics)[0] : null;
    let muscleMassIncrease = 0;
    if (baselineMetrics && currentMetrics) {
      muscleMassIncrease = (currentMetrics.muscleMass - baselineMetrics.muscleMass) / baselineMetrics.muscleMass * 100;
    }
    const totalPushups = store_get($$store_subs ??= {}, "$exerciseLogs", exerciseLogs).filter((log) => log.type === "pushup").reduce((sum, log) => sum + (log.sets || 0) * (log.reps || 0), 0);
    const totalSquats = store_get($$store_subs ??= {}, "$exerciseLogs", exerciseLogs).filter((log) => log.type === "squat").reduce((sum, log) => sum + (log.sets || 0) * (log.reps || 0), 0);
    const maxWeight = store_get($$store_subs ??= {}, "$exerciseLogs", exerciseLogs).filter((log) => log.type === "dumbbell" && log.weight).reduce((max, log) => Math.max(max, log.weight || 0), 0);
    const bestPace = store_get($$store_subs ??= {}, "$exerciseLogs", exerciseLogs).filter((log) => log.type === "walk" && log.averagePace).map((log) => {
      const pace = log.averagePace || "";
      const match = pace.match(/(\d+)'(\d+)"/);
      if (match) {
        return parseInt(match[1]) + parseInt(match[2]) / 60;
      }
      return 999;
    }).reduce((min, pace) => Math.min(min, pace), 999);
    const maxHeartRate = store_get($$store_subs ??= {}, "$exerciseLogs", exerciseLogs).filter((log) => log.averageHeartRate).reduce((max, log) => Math.max(max, log.averageHeartRate || 0), 0);
    const longestWorkout = store_get($$store_subs ??= {}, "$exerciseLogs", exerciseLogs).reduce((max, log) => Math.max(max, log.duration || 0), 0);
    achievements = achievementDefinitions.map((def) => {
      let currentProgress = 0;
      let unlocked = false;
      switch (def.id) {
        case "first_step":
          currentProgress = store_get($$store_subs ??= {}, "$userStreaks", userStreaks).total_workouts > 0 ? 1 : 0;
          break;
        case "first_blood":
          currentProgress = store_get($$store_subs ??= {}, "$healthMetrics", healthMetrics).length > 0 ? 1 : 0;
          break;
        case "data_tracker":
          currentProgress = store_get($$store_subs ??= {}, "$healthMetrics", healthMetrics).length > 0 ? 1 : 0;
          break;
        case "early_bird":
          currentProgress = morningWorkouts;
          break;
        case "night_owl":
          currentProgress = nightWorkouts;
          break;
        case "perfect_week":
          currentProgress = store_get($$store_subs ??= {}, "$userStreaks", userStreaks).current_streak >= 7 ? 1 : 0;
          break;
        case "double_duty":
          currentProgress = 0;
          break;
        case "weekly_warrior":
          currentProgress = Math.min(store_get($$store_subs ??= {}, "$userStreaks", userStreaks).total_workouts, 7);
          break;
        case "transformation_start":
          currentProgress = Math.min(store_get($$store_subs ??= {}, "$userStreaks", userStreaks).current_streak, 30);
          break;
        case "dedication":
          currentProgress = store_get($$store_subs ??= {}, "$userStreaks", userStreaks).current_streak;
          break;
        case "getting_started":
        case "week_warrior":
        case "iron_will":
        case "fortnight_fighter":
        case "relentless":
        case "unstoppable":
        case "steel_resolve":
        case "diamond_mind":
        case "legendary_streak":
        case "immortal":
          currentProgress = store_get($$store_subs ??= {}, "$userStreaks", userStreaks).current_streak;
          break;
        case "rookie":
        case "dedicated":
        case "committed":
        case "century_club":
        case "elite_athlete":
        case "workout_machine":
        case "fitness_legend":
        case "ultimate_warrior":
          currentProgress = store_get($$store_subs ??= {}, "$userStreaks", userStreaks).total_workouts;
          break;
        case "target_acquired":
          currentProgress = currentWeight;
          unlocked = currentWeight <= 225 && currentWeight > 0;
          break;
        case "double_century":
          currentProgress = currentWeight;
          unlocked = currentWeight <= 200 && currentWeight > 0;
          break;
        case "mission_complete":
          currentProgress = currentWeight;
          unlocked = currentWeight <= 175 && currentWeight > 0;
          break;
        case "weight_warrior":
        case "transformation":
        case "new_you":
          currentProgress = weightLoss;
          break;
        case "heavy_lifter":
        case "muscle_builder":
          currentProgress = muscleMassIncrease;
          break;
        case "hydra_slayer":
          const visceralFat = currentMetrics?.visceralFat || 999;
          currentProgress = Math.max(0, 15 - visceralFat);
          unlocked = visceralFat < 10 && visceralFat > 0;
          break;
        case "lean_machine":
          const bodyFat = currentMetrics?.bodyFat || 999;
          currentProgress = Math.max(0, 20 - bodyFat);
          unlocked = bodyFat < 12 && bodyFat > 0;
          break;
        case "body_sculptor":
          const bmi = currentMetrics?.bmi || 0;
          currentProgress = bmi;
          unlocked = bmi >= 22 && bmi <= 23;
          break;
        case "metabolic_master":
          const metabolicAge = currentMetrics?.metabolicAge || 999;
          currentProgress = Math.max(0, 37 - metabolicAge);
          unlocked = metabolicAge < 37 && metabolicAge > 0;
          break;
        case "strength_master":
          currentProgress = strengthWorkouts;
          break;
        case "pushup_pro":
          currentProgress = totalPushups;
          break;
        case "squat_champion":
          currentProgress = totalSquats;
          break;
        case "weight_warrior_30":
        case "iron_pumper":
          currentProgress = maxWeight;
          break;
        case "speed_demon":
          currentProgress = bestPace < 999 ? Math.max(0, 30 - bestPace) : 0;
          unlocked = bestPace < 25;
          break;
        case "heart_warrior":
          currentProgress = maxHeartRate;
          break;
        case "endurance_king":
          currentProgress = longestWorkout;
          break;
        case "distance_destroyer":
        case "marathon_mindset":
          currentProgress = totalDistance;
          break;
        default:
          currentProgress = 0;
      }
      if (!unlocked && ![
        "target_acquired",
        "double_century",
        "mission_complete",
        "hydra_slayer",
        "lean_machine",
        "body_sculptor",
        "metabolic_master",
        "speed_demon"
      ].includes(def.id)) {
        unlocked = currentProgress >= def.requirement;
      }
      return {
        ...def,
        currentProgress,
        unlocked,
        unlockedDate: unlocked ? (/* @__PURE__ */ new Date()).toISOString().split("T")[0] : void 0
      };
    });
    completedAchievements = achievements.filter((a) => a.unlocked).length;
    totalXP = achievements.filter((a) => a.unlocked).reduce((sum, a) => sum + a.xp, 0);
    currentLevel = Math.floor(totalXP / 1e3) + 1;
    xpToNextLevel = currentLevel * 1e3 - totalXP;
  }
  function getTierColor(tier) {
    switch (tier) {
      case "bronze":
        return "text-amber-600";
      case "silver":
        return "text-gray-400";
      case "gold":
        return "text-yellow-400";
      case "platinum":
        return "text-purple-400";
      case "diamond":
        return "text-cyan-400";
      default:
        return "text-base-content";
    }
  }
  function getTierBg(tier) {
    switch (tier) {
      case "bronze":
        return "bg-amber-600/20 border-amber-600/30";
      case "silver":
        return "bg-gray-400/20 border-gray-400/30";
      case "gold":
        return "bg-yellow-400/20 border-yellow-400/30";
      case "platinum":
        return "bg-purple-400/20 border-purple-400/30";
      case "diamond":
        return "bg-cyan-400/20 border-cyan-400/30";
      default:
        return "bg-base-200 border-base-300";
    }
  }
  function getRarityColor(rarity) {
    switch (rarity) {
      case "common":
        return "text-gray-400";
      case "rare":
        return "text-blue-400";
      case "epic":
        return "text-purple-400";
      case "legendary":
        return "text-orange-400";
      default:
        return "text-base-content";
    }
  }
  function getCategoryIcon(category) {
    switch (category) {
      case "streak":
        return Flame;
      case "exercise":
        return Dumbbell;
      case "progress":
        return Trending_up;
      case "milestone":
        return Target;
      case "elite":
        return Crown;
      case "legendary":
        return Diamond;
      case "weight":
        return Weight;
      case "strength":
        return Dumbbell;
      case "endurance":
        return Mountain;
      case "performance":
        return Zap;
      case "consistency":
        return Shield;
      case "special":
        return Star;
      default:
        return Award;
    }
  }
  function getProgressPercentage(achievement) {
    return Math.min(achievement.currentProgress / achievement.requirement * 100, 100);
  }
  const categoryNames = {
    milestone: "Milestones",
    streak: "Streak Master",
    exercise: "Exercise Goals",
    progress: "Progress Tracker",
    elite: "Elite Status",
    legendary: "Legendary",
    weight: "Weight Targets",
    strength: "Strength Goals",
    endurance: "Endurance Challenges",
    performance: "Performance Metrics",
    consistency: "Consistency Rewards",
    special: "Special Achievements"
  };
  if (store_get($$store_subs ??= {}, "$exerciseLogs", exerciseLogs) || store_get($$store_subs ??= {}, "$healthMetrics", healthMetrics) || store_get($$store_subs ??= {}, "$userStreaks", userStreaks)) {
    calculateAchievements();
  }
  groupedAchievements = achievements.reduce(
    (groups, achievement) => {
      const category = achievement.category;
      if (!groups[category]) groups[category] = [];
      groups[category].push(achievement);
      return groups;
    },
    {}
  );
  Object.keys(groupedAchievements).forEach((category) => {
    groupedAchievements[category].sort((a, b) => {
      if (a.unlocked !== b.unlocked) return b.unlocked ? 1 : -1;
      const tierOrder = { bronze: 1, silver: 2, gold: 3, platinum: 4, diamond: 5 };
      return tierOrder[a.tier] - tierOrder[b.tier];
    });
  });
  const each_array = ensure_array_like(Object.entries(groupedAchievements));
  const each_array_2 = ensure_array_like(achievements.filter((a) => !a.unlocked && a.currentProgress > 0).slice(0, 3));
  $$payload.out.push(`<div class="space-y-6"><div><h1 class="text-3xl font-bold flex items-center gap-3">`);
  Trophy($$payload, { class: "text-yellow-400", size: 32 });
  $$payload.out.push(`<!----> Achievements</h1> <p class="text-base-content/70">Unlock rewards and track your fitness journey milestones</p></div> <div class="grid grid-cols-1 md:grid-cols-4 gap-4"><div class="card bg-gradient-to-br from-purple-600 to-pink-600 text-white"><div class="card-body p-4"><div class="flex items-center gap-3">`);
  Star($$payload, { size: 24 });
  $$payload.out.push(`<!----> <div><div class="text-2xl font-bold">Level ${escape_html(currentLevel)}</div> <div class="text-sm opacity-90">Fitness Level</div></div></div></div></div> <div class="card bg-gradient-to-br from-blue-600 to-cyan-600 text-white"><div class="card-body p-4"><div class="flex items-center gap-3">`);
  Zap($$payload, { size: 24 });
  $$payload.out.push(`<!----> <div><div class="text-2xl font-bold">${escape_html(totalXP.toLocaleString())}</div> <div class="text-sm opacity-90">Total XP</div></div></div></div></div> <div class="card bg-gradient-to-br from-green-600 to-emerald-600 text-white"><div class="card-body p-4"><div class="flex items-center gap-3">`);
  Trophy($$payload, { size: 24 });
  $$payload.out.push(`<!----> <div><div class="text-2xl font-bold">${escape_html(completedAchievements)}</div> <div class="text-sm opacity-90">Unlocked</div></div></div></div></div> <div class="card bg-gradient-to-br from-orange-600 to-red-600 text-white"><div class="card-body p-4"><div class="flex items-center gap-3">`);
  Target($$payload, { size: 24 });
  $$payload.out.push(`<!----> <div><div class="text-2xl font-bold">${escape_html(xpToNextLevel)}</div> <div class="text-sm opacity-90">XP to Level ${escape_html(currentLevel + 1)}</div></div></div></div></div></div> <div class="card bg-base-200"><div class="card-body p-4"><div class="flex items-center justify-between mb-2"><span class="font-semibold">Level ${escape_html(currentLevel)} Progress</span> <span class="text-sm text-base-content/70">${escape_html(totalXP % 1e3)} / 1000 XP</span></div> <div class="w-full bg-base-300 rounded-full h-3"><div class="bg-gradient-to-r from-purple-500 to-pink-500 h-3 rounded-full transition-all duration-500"${attr_style(`width: ${stringify(totalXP % 1e3 / 1e3 * 100)}%`)}></div></div></div></div> <!--[-->`);
  for (let $$index_1 = 0, $$length = each_array.length; $$index_1 < $$length; $$index_1++) {
    let [category, categoryAchievements] = each_array[$$index_1];
    const each_array_1 = ensure_array_like(categoryAchievements);
    $$payload.out.push(`<div class="space-y-4"><div class="flex items-center gap-3"><!---->`);
    getCategoryIcon(category)?.($$payload, { size: 24, class: "text-primary" });
    $$payload.out.push(`<!----> <h2 class="text-2xl font-bold">${escape_html(categoryNames[category])}</h2> <div class="badge badge-primary">${escape_html(categoryAchievements.filter((a) => a.unlocked).length)}/${escape_html(categoryAchievements.length)}</div></div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"><!--[-->`);
    for (let $$index = 0, $$length2 = each_array_1.length; $$index < $$length2; $$index++) {
      let achievement = each_array_1[$$index];
      $$payload.out.push(`<div${attr_class(`card ${stringify(achievement.unlocked ? getTierBg(achievement.tier) : "bg-base-200 opacity-60")} border-2 hover:scale-105 transition-transform duration-200`)}><div class="card-body p-4"><div class="flex items-start justify-between mb-3"><div class="flex items-center gap-3">`);
      if (achievement.unlocked) {
        $$payload.out.push("<!--[-->");
        $$payload.out.push(`<!---->`);
        achievement.icon?.($$payload, { size: 24, class: getTierColor(achievement.tier) });
        $$payload.out.push(`<!---->`);
      } else {
        $$payload.out.push("<!--[!-->");
        Lock($$payload, { size: 24, class: "text-base-content/50" });
      }
      $$payload.out.push(`<!--]--> <div><h3${attr_class(`font-bold ${stringify(achievement.unlocked ? getTierColor(achievement.tier) : "text-base-content/50")}`)}>${escape_html(achievement.title)}</h3> <div${attr_class(`badge badge-xs ${stringify(getRarityColor(achievement.rarity))} bg-opacity-20`)}>${escape_html(achievement.rarity)}</div></div></div> `);
      if (achievement.unlocked) {
        $$payload.out.push("<!--[-->");
        $$payload.out.push(`<div class="flex items-center gap-1">`);
        Sparkles($$payload, { size: 16, class: "text-yellow-400" });
        $$payload.out.push(`<!----> <span class="text-sm font-bold text-yellow-400">+${escape_html(achievement.xp)} XP</span></div>`);
      } else {
        $$payload.out.push("<!--[!-->");
      }
      $$payload.out.push(`<!--]--></div> <p class="text-sm text-base-content/70 mb-3">${escape_html(achievement.description)}</p> <div class="space-y-2"><div class="flex justify-between text-xs"><span>${escape_html(achievement.currentProgress.toLocaleString())}</span> <span>${escape_html(achievement.requirement.toLocaleString())}</span></div> <div class="w-full bg-base-300 rounded-full h-2"><div${attr_class(`h-2 rounded-full transition-all duration-500 ${stringify(achievement.unlocked ? "bg-gradient-to-r from-green-500 to-emerald-500" : "bg-gradient-to-r from-gray-400 to-gray-500")}`)}${attr_style(`width: ${stringify(getProgressPercentage(achievement))}%`)}></div></div> `);
      if (achievement.unlocked) {
        $$payload.out.push("<!--[-->");
        $$payload.out.push(`<div class="flex items-center gap-1 text-xs text-success">`);
        Circle_check($$payload, { size: 12 });
        $$payload.out.push(`<!----> <span>Unlocked!</span> `);
        if (achievement.unlockedDate) {
          $$payload.out.push("<!--[-->");
          $$payload.out.push(`<span class="text-base-content/50">(${escape_html(achievement.unlockedDate)})</span>`);
        } else {
          $$payload.out.push("<!--[!-->");
        }
        $$payload.out.push(`<!--]--></div>`);
      } else {
        $$payload.out.push("<!--[!-->");
        $$payload.out.push(`<div class="text-xs text-base-content/50">${escape_html(Math.round(getProgressPercentage(achievement)))}% Complete</div>`);
      }
      $$payload.out.push(`<!--]--></div></div></div>`);
    }
    $$payload.out.push(`<!--]--></div></div>`);
  }
  $$payload.out.push(`<!--]--> <div class="card bg-gradient-to-r from-primary/20 to-secondary/20"><div class="card-body"><h2 class="card-title mb-4 flex items-center gap-2">`);
  Gift($$payload, { size: 24 });
  $$payload.out.push(`<!----> Next Achievements</h2> <div class="grid grid-cols-1 md:grid-cols-3 gap-4"><!--[-->`);
  for (let $$index_2 = 0, $$length = each_array_2.length; $$index_2 < $$length; $$index_2++) {
    let achievement = each_array_2[$$index_2];
    $$payload.out.push(`<div class="bg-base-200/50 p-4 rounded-lg"><div class="flex items-center gap-2 mb-2"><!---->`);
    achievement.icon?.($$payload, { size: 20, class: getTierColor(achievement.tier) });
    $$payload.out.push(`<!----> <span class="font-semibold">${escape_html(achievement.title)}</span></div> <div class="text-sm text-base-content/70 mb-2">${escape_html(achievement.description)}</div> <div class="text-xs"><span class="font-bold">${escape_html(achievement.currentProgress)}</span> / ${escape_html(achievement.requirement)} <span class="text-success ml-2">+${escape_html(achievement.xp)} XP</span></div></div>`);
  }
  $$payload.out.push(`<!--]--></div></div></div></div>`);
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
function _page($$payload) {
  Achievements($$payload);
}
export {
  _page as default
};
