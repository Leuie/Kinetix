import "clsx";
import { F as sanitize_props, G as spread_props, I as slot, K as store_get, U as ensure_array_like, M as attr_class, N as escape_html, V as maybe_selected, R as attr, Q as stringify, O as unsubscribe_stores, D as pop, A as push } from "../../../chunks/index2.js";
import { e as exerciseLogs, h as healthMetrics, u as userStreaks } from "../../../chunks/fitness.js";
import "../../../chunks/auth.js";
import { a as Trophy, A as Award, T as Trending_up } from "../../../chunks/trophy.js";
import { I as Icon } from "../../../chunks/Icon.js";
import { L as List } from "../../../chunks/list.js";
import { F as Footprints, D as Dumbbell } from "../../../chunks/footprints.js";
import { W as Weight, S as Sunrise, M as Moon, C as Compass, A as Anchor, a as Sword, b as Swords, c as Skull, R as Rocket, d as Crosshair, G as Gauge, e as Activity, F as Fast_forward, T as Timer, f as Mountain } from "../../../chunks/weight.js";
import { C as Calendar } from "../../../chunks/calendar.js";
import { C as Clock } from "../../../chunks/clock.js";
import { S as Shield } from "../../../chunks/shield.js";
import { F as Flame, D as Diamond, M as Medal } from "../../../chunks/medal.js";
import { C as Crown, a as Star, Z as Zap, S as Sparkles, H as Heart } from "../../../chunks/zap.js";
import { T as Target } from "../../../chunks/target.js";
function Filter($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  /**
   * @license lucide-svelte v0.456.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */
  const iconNode = [
    [
      "polygon",
      { "points": "22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" }
    ]
  ];
  Icon($$payload, spread_props([
    { name: "filter" },
    $$sanitized_props,
    {
      /**
       * @component @name Filter
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cG9seWdvbiBwb2ludHM9IjIyIDMgMiAzIDEwIDEyLjQ2IDEwIDE5IDE0IDIxIDE0IDEyLjQ2IDIyIDMiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/filter
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
function Grid_3x3($$payload, $$props) {
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
      { "width": "18", "height": "18", "x": "3", "y": "3", "rx": "2" }
    ],
    ["path", { "d": "M3 9h18" }],
    ["path", { "d": "M3 15h18" }],
    ["path", { "d": "M9 3v18" }],
    ["path", { "d": "M15 3v18" }]
  ];
  Icon($$payload, spread_props([
    { name: "grid-3x3" },
    $$sanitized_props,
    {
      /**
       * @component @name Grid3x3
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cmVjdCB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHg9IjMiIHk9IjMiIHJ4PSIyIiAvPgogIDxwYXRoIGQ9Ik0zIDloMTgiIC8+CiAgPHBhdGggZD0iTTMgMTVoMTgiIC8+CiAgPHBhdGggZD0iTTkgM3YxOCIgLz4KICA8cGF0aCBkPSJNMTUgM3YxOCIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/grid-3x3
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
function Search($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  /**
   * @license lucide-svelte v0.456.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */
  const iconNode = [
    ["circle", { "cx": "11", "cy": "11", "r": "8" }],
    ["path", { "d": "m21 21-4.3-4.3" }]
  ];
  Icon($$payload, spread_props([
    { name: "search" },
    $$sanitized_props,
    {
      /**
       * @component @name Search
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8Y2lyY2xlIGN4PSIxMSIgY3k9IjExIiByPSI4IiAvPgogIDxwYXRoIGQ9Im0yMSAyMS00LjMtNC4zIiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/search
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
function TrophyWall($$payload, $$props) {
  push();
  var $$store_subs;
  let filteredAchievements;
  let achievements = [];
  let earnedAchievements = [];
  let filterTier = "all";
  let filterCategory = "all";
  let filterRarity = "all";
  let searchTerm = "";
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
    const currentWeight = store_get($$store_subs ??= {}, "$healthMetrics", healthMetrics).length > 0 ? store_get($$store_subs ??= {}, "$healthMetrics", healthMetrics)[0].weight : 0;
    const baselineMetrics = store_get($$store_subs ??= {}, "$healthMetrics", healthMetrics).length > 0 ? store_get($$store_subs ??= {}, "$healthMetrics", healthMetrics)[store_get($$store_subs ??= {}, "$healthMetrics", healthMetrics).length - 1] : null;
    const currentMetrics = store_get($$store_subs ??= {}, "$healthMetrics", healthMetrics).length > 0 ? store_get($$store_subs ??= {}, "$healthMetrics", healthMetrics)[0] : null;
    let muscleMassIncrease = 0;
    if (baselineMetrics && currentMetrics) {
      muscleMassIncrease = (currentMetrics.muscleMass - baselineMetrics.muscleMass) / baselineMetrics.muscleMass * 100;
    }
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
        case "streak_3":
        case "streak_7":
        case "relentless":
        case "iron_will":
          currentProgress = store_get($$store_subs ??= {}, "$userStreaks", userStreaks).current_streak;
          break;
        case "target_acquired":
          currentProgress = currentWeight;
          unlocked = currentWeight <= 225 && currentWeight > 0;
          break;
        case "heavy_lifter":
          currentProgress = muscleMassIncrease;
          unlocked = muscleMassIncrease >= 2;
          break;
        case "hydra_slayer":
          const visceralFat = currentMetrics?.visceralFat || 999;
          currentProgress = Math.max(0, 10 - visceralFat);
          unlocked = visceralFat < 10 && visceralFat > 0;
          break;
        default:
          currentProgress = 0;
      }
      if (!unlocked && def.id !== "target_acquired" && def.id !== "heavy_lifter" && def.id !== "hydra_slayer") {
        unlocked = currentProgress >= def.requirement;
      }
      return {
        ...def,
        currentProgress,
        unlocked,
        unlockedDate: unlocked ? (/* @__PURE__ */ new Date()).toISOString().split("T")[0] : void 0
      };
    });
    earnedAchievements = achievements.filter((a) => a.unlocked);
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
        return "bg-gradient-to-br from-amber-600/20 to-amber-800/20 border-amber-600/30";
      case "silver":
        return "bg-gradient-to-br from-gray-400/20 to-gray-600/20 border-gray-400/30";
      case "gold":
        return "bg-gradient-to-br from-yellow-400/20 to-yellow-600/20 border-yellow-400/30";
      case "platinum":
        return "bg-gradient-to-br from-purple-400/20 to-purple-600/20 border-purple-400/30";
      case "diamond":
        return "bg-gradient-to-br from-cyan-400/20 to-cyan-600/20 border-cyan-400/30";
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
  const tierOrder = ["diamond", "platinum", "gold", "silver", "bronze"];
  const tierNames = {
    diamond: "Diamond",
    platinum: "Platinum",
    gold: "Gold",
    silver: "Silver",
    bronze: "Bronze"
  };
  if (store_get($$store_subs ??= {}, "$exerciseLogs", exerciseLogs) || store_get($$store_subs ??= {}, "$healthMetrics", healthMetrics) || store_get($$store_subs ??= {}, "$userStreaks", userStreaks)) {
    calculateAchievements();
  }
  filteredAchievements = earnedAchievements.filter((achievement) => {
    const matchesSearch = searchTerm === "";
    return matchesSearch;
  });
  filteredAchievements.reduce(
    (groups, achievement) => {
      const tier = achievement.tier;
      if (!groups[tier]) groups[tier] = [];
      groups[tier].push(achievement);
      return groups;
    },
    {}
  );
  const each_array = ensure_array_like(tierOrder);
  $$payload.out.push(`<div class="space-y-6"><div class="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between"><div><h1 class="text-3xl font-bold flex items-center gap-3">`);
  Trophy($$payload, { class: "text-yellow-400", size: 32 });
  $$payload.out.push(`<!----> Trophy Wall</h1> <p class="text-base-content/70">Showcase your earned achievements and milestones</p></div> <div class="flex items-center gap-2"><div class="join"><button${attr_class(`btn join-item btn-sm ${stringify("btn-active")}`)}>`);
  Grid_3x3($$payload, { size: 16 });
  $$payload.out.push(`<!----> Grid</button> <button${attr_class(`btn join-item btn-sm ${stringify("btn-outline")}`)}>`);
  List($$payload, { size: 16 });
  $$payload.out.push(`<!----> List</button></div></div></div> <div class="grid grid-cols-2 md:grid-cols-5 gap-4"><!--[-->`);
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let tier = each_array[$$index];
    const tierCount = earnedAchievements.filter((a) => a.tier === tier).length;
    $$payload.out.push(`<div${attr_class(`card ${stringify(getTierBg(tier))} border-2`)}><div class="card-body p-4 text-center"><div${attr_class(`text-2xl font-bold ${stringify(getTierColor(tier))}`)}>${escape_html(tierCount)}</div> <div class="text-sm font-medium">${escape_html(tierNames[tier])}</div></div></div>`);
  }
  $$payload.out.push(`<!--]--></div> <div class="card bg-base-200"><div class="card-body p-4"><div class="flex flex-wrap gap-4 items-center"><div class="flex items-center gap-2">`);
  Filter($$payload, { size: 16 });
  $$payload.out.push(`<!----> <span class="font-medium">Filters:</span></div> <div class="form-control"><select class="select select-sm select-bordered">`);
  $$payload.select_value = filterTier;
  $$payload.out.push(`<option value="all"${maybe_selected($$payload, "all")}>All Tiers</option><option value="diamond"${maybe_selected($$payload, "diamond")}>Diamond</option><option value="platinum"${maybe_selected($$payload, "platinum")}>Platinum</option><option value="gold"${maybe_selected($$payload, "gold")}>Gold</option><option value="silver"${maybe_selected($$payload, "silver")}>Silver</option><option value="bronze"${maybe_selected($$payload, "bronze")}>Bronze</option>`);
  $$payload.select_value = void 0;
  $$payload.out.push(`</select></div> <div class="form-control"><select class="select select-sm select-bordered">`);
  $$payload.select_value = filterCategory;
  $$payload.out.push(`<option value="all"${maybe_selected($$payload, "all")}>All Categories</option><option value="milestone"${maybe_selected($$payload, "milestone")}>Milestones</option><option value="streak"${maybe_selected($$payload, "streak")}>Streaks</option><option value="progress"${maybe_selected($$payload, "progress")}>Progress</option><option value="elite"${maybe_selected($$payload, "elite")}>Elite</option>`);
  $$payload.select_value = void 0;
  $$payload.out.push(`</select></div> <div class="form-control"><select class="select select-sm select-bordered">`);
  $$payload.select_value = filterRarity;
  $$payload.out.push(`<option value="all"${maybe_selected($$payload, "all")}>All Rarities</option><option value="legendary"${maybe_selected($$payload, "legendary")}>Legendary</option><option value="epic"${maybe_selected($$payload, "epic")}>Epic</option><option value="rare"${maybe_selected($$payload, "rare")}>Rare</option><option value="common"${maybe_selected($$payload, "common")}>Common</option>`);
  $$payload.select_value = void 0;
  $$payload.out.push(`</select></div> <div class="form-control flex-1 min-w-48"><div class="relative">`);
  Search($$payload, {
    size: 16,
    class: "absolute left-3 top-1/2 transform -translate-y-1/2 text-base-content/50"
  });
  $$payload.out.push(`<!----> <input type="text" placeholder="Search achievements..." class="input input-sm input-bordered w-full pl-10"${attr("value", searchTerm)}/></div></div></div></div></div> `);
  if (earnedAchievements.length === 0) {
    $$payload.out.push("<!--[-->");
    $$payload.out.push(`<div class="card bg-base-200"><div class="card-body text-center py-12">`);
    Trophy($$payload, { size: 48, class: "mx-auto text-base-content/50 mb-4" });
    $$payload.out.push(`<!----> <h3 class="text-xl font-bold mb-2">No Trophies Yet</h3> <p class="text-base-content/70">Complete workouts and track your progress to earn your first achievements!</p> <a href="/schedule" class="btn btn-primary mt-4">Start Working Out</a></div></div>`);
  } else {
    $$payload.out.push("<!--[!-->");
    if (filteredAchievements.length === 0) {
      $$payload.out.push("<!--[-->");
      $$payload.out.push(`<div class="card bg-base-200"><div class="card-body text-center py-12">`);
      Search($$payload, { size: 48, class: "mx-auto text-base-content/50 mb-4" });
      $$payload.out.push(`<!----> <h3 class="text-xl font-bold mb-2">No Matching Trophies</h3> <p class="text-base-content/70">Try adjusting your filters or search terms.</p></div></div>`);
    } else {
      $$payload.out.push("<!--[!-->");
      {
        $$payload.out.push("<!--[-->");
        const each_array_1 = ensure_array_like(tierOrder);
        $$payload.out.push(`<!--[-->`);
        for (let $$index_2 = 0, $$length = each_array_1.length; $$index_2 < $$length; $$index_2++) {
          let tier = each_array_1[$$index_2];
          const tierAchievements = filteredAchievements.filter((a) => a.tier === tier);
          if (tierAchievements.length > 0) {
            $$payload.out.push("<!--[-->");
            const each_array_2 = ensure_array_like(tierAchievements);
            $$payload.out.push(`<div class="space-y-4"><h2${attr_class(`text-2xl font-bold ${stringify(getTierColor(tier))} flex items-center gap-2`)}><!---->`);
            tierAchievements[0].icon?.($$payload, { size: 24 });
            $$payload.out.push(`<!----> ${escape_html(tierNames[tier])} Trophies <div${attr_class(`badge badge-lg ${stringify(getTierColor(tier))} bg-opacity-20`)}>${escape_html(tierAchievements.length)}</div></h2> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"><!--[-->`);
            for (let $$index_1 = 0, $$length2 = each_array_2.length; $$index_1 < $$length2; $$index_1++) {
              let achievement = each_array_2[$$index_1];
              $$payload.out.push(`<div${attr_class(`card ${stringify(getTierBg(achievement.tier))} border-2 hover:scale-105 transition-transform duration-200`)}><div class="card-body p-4 text-center"><div class="flex justify-center mb-3"><div${attr_class(`w-16 h-16 rounded-full ${stringify(getTierBg(achievement.tier))} flex items-center justify-center border-2 ${stringify(getTierColor(achievement.tier))} border-current`)}><!---->`);
              achievement.icon?.($$payload, { size: 32, class: getTierColor(achievement.tier) });
              $$payload.out.push(`<!----></div></div> <h3${attr_class(`font-bold text-lg ${stringify(getTierColor(achievement.tier))} mb-1`)}>${escape_html(achievement.title)}</h3> <p class="text-sm text-base-content/70 mb-2">${escape_html(achievement.description)}</p> <div class="flex justify-center gap-2 mb-2"><div${attr_class(`badge badge-xs ${stringify(getRarityColor(achievement.rarity))} bg-opacity-20`)}>${escape_html(achievement.rarity)}</div> <div class="badge badge-xs text-yellow-400 bg-yellow-400/20">+${escape_html(achievement.xp)} XP</div></div> `);
              if (achievement.unlockedDate) {
                $$payload.out.push("<!--[-->");
                $$payload.out.push(`<div class="text-xs text-base-content/50">Earned: ${escape_html(achievement.unlockedDate)}</div>`);
              } else {
                $$payload.out.push("<!--[!-->");
              }
              $$payload.out.push(`<!--]--></div></div>`);
            }
            $$payload.out.push(`<!--]--></div></div>`);
          } else {
            $$payload.out.push("<!--[!-->");
          }
          $$payload.out.push(`<!--]-->`);
        }
        $$payload.out.push(`<!--]-->`);
      }
      $$payload.out.push(`<!--]-->`);
    }
    $$payload.out.push(`<!--]-->`);
  }
  $$payload.out.push(`<!--]--> <div class="text-center"><a href="/achievements" class="btn btn-outline">`);
  Award($$payload, { size: 16 });
  $$payload.out.push(`<!----> View All Achievements</a></div></div>`);
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
function _page($$payload) {
  TrophyWall($$payload);
}
export {
  _page as default
};
