import { F as sanitize_props, G as spread_props, I as slot, D as pop, A as push, N as escape_html, M as attr_class, P as bind_props, Q as stringify, K as store_get, T as attr_style, U as ensure_array_like, O as unsubscribe_stores } from "../../chunks/index2.js";
import { u as user } from "../../chunks/auth.js";
import "clsx";
import { u as userStreaks, e as exerciseLogs, b as baselineMetrics, c as currentMetrics } from "../../chunks/fitness.js";
import { F as Flame, M as Medal, D as Diamond } from "../../chunks/medal.js";
import { A as Award, T as Trending_up, a as Trophy } from "../../chunks/trophy.js";
import { C as Clock } from "../../chunks/clock.js";
import { I as Icon } from "../../chunks/Icon.js";
import { T as Target } from "../../chunks/target.js";
import { C as Code, U as User } from "../../chunks/user.js";
import { S as Sparkles, Z as Zap, a as Star, C as Crown, H as Heart } from "../../chunks/zap.js";
import { C as Calendar } from "../../chunks/calendar.js";
import { S as Shield } from "../../chunks/shield.js";
import { C as Circle_check } from "../../chunks/circle-check.js";
function Arrow_right($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  /**
   * @license lucide-svelte v0.456.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */
  const iconNode = [
    ["path", { "d": "M5 12h14" }],
    ["path", { "d": "m12 5 7 7-7 7" }]
  ];
  Icon($$payload, spread_props([
    { name: "arrow-right" },
    $$sanitized_props,
    {
      /**
       * @component @name ArrowRight
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNNSAxMmgxNCIgLz4KICA8cGF0aCBkPSJtMTIgNSA3IDctNyA3IiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/arrow-right
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
function Minus($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  /**
   * @license lucide-svelte v0.456.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */
  const iconNode = [["path", { "d": "M5 12h14" }]];
  Icon($$payload, spread_props([
    { name: "minus" },
    $$sanitized_props,
    {
      /**
       * @component @name Minus
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNNSAxMmgxNCIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/minus
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
function Play($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  /**
   * @license lucide-svelte v0.456.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */
  const iconNode = [["polygon", { "points": "6 3 20 12 6 21 6 3" }]];
  Icon($$payload, spread_props([
    { name: "play" },
    $$sanitized_props,
    {
      /**
       * @component @name Play
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cG9seWdvbiBwb2ludHM9IjYgMyAyMCAxMiA2IDIxIDYgMyIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/play
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
function Trending_down($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  /**
   * @license lucide-svelte v0.456.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */
  const iconNode = [
    ["polyline", { "points": "22 17 13.5 8.5 8.5 13.5 2 7" }],
    ["polyline", { "points": "16 17 22 17 22 11" }]
  ];
  Icon($$payload, spread_props([
    { name: "trending-down" },
    $$sanitized_props,
    {
      /**
       * @component @name TrendingDown
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cG9seWxpbmUgcG9pbnRzPSIyMiAxNyAxMy41IDguNSA4LjUgMTMuNSAyIDciIC8+CiAgPHBvbHlsaW5lIHBvaW50cz0iMTYgMTcgMjIgMTcgMjIgMTEiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/trending-down
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
function DailyQuote($$payload, $$props) {
  push();
  {
    $$payload.out.push("<!--[!-->");
  }
  $$payload.out.push(`<!--]-->`);
  pop();
}
function MetricCard($$payload, $$props) {
  push();
  let label = $$props["label"];
  let value = $$props["value"];
  let unit = $$props["unit"];
  let color = $$props["color"];
  let status = $$props["status"];
  let trend = $$props["trend"];
  let trendIcon = $$props["trendIcon"];
  let positive = $$props["positive"];
  function getTrendColor(trend2, positive2) {
    if (trend2 === "neutral") return "text-base-content/50";
    if (trend2 === "up") return positive2 ? "text-success" : "text-error";
    return positive2 ? "text-error" : "text-success";
  }
  $$payload.out.push(`<div class="card bg-base-200 shadow-lg hover:shadow-xl transition-shadow duration-200"><div class="card-body p-4"><div class="flex items-start justify-between"><div class="flex-1"><h3 class="text-sm font-medium text-base-content/70 mb-1">${escape_html(label)}</h3> <div class="flex items-baseline gap-2"><span${attr_class(`text-2xl font-bold ${stringify(color)}`)}>${escape_html(value.toFixed(1))}${escape_html(unit)}</span> <div${attr_class(`${stringify(getTrendColor(trend, positive))} flex items-center`)}><!---->`);
  trendIcon?.($$payload, { size: 16 });
  $$payload.out.push(`<!----></div></div> <div class="mt-2"><span${attr_class(`text-xs px-2 py-1 rounded-full ${stringify(color)} bg-opacity-20`)}>${escape_html(status)}</span></div></div></div></div></div>`);
  bind_props($$props, {
    label,
    value,
    unit,
    color,
    status,
    trend,
    trendIcon,
    positive
  });
  pop();
}
function StreakTracker($$payload, $$props) {
  push();
  var $$store_subs;
  let progressPercentage;
  progressPercentage = Math.min(store_get($$store_subs ??= {}, "$userStreaks", userStreaks).current_streak / 30 * 100, 100);
  $$payload.out.push(`<div class="grid grid-cols-1 md:grid-cols-3 gap-4"><div class="card bg-gradient-to-br from-orange-600 to-red-600 text-white"><div class="card-body p-4"><div class="flex items-center gap-3">`);
  Flame($$payload, { size: 24 });
  $$payload.out.push(`<!----> <div><div class="text-2xl font-bold">${escape_html(store_get($$store_subs ??= {}, "$userStreaks", userStreaks).current_streak)}</div> <div class="text-sm opacity-90">Day Streak</div></div></div></div></div> <div class="card bg-gradient-to-br from-blue-600 to-purple-600 text-white"><div class="card-body p-4"><div class="flex items-center gap-3">`);
  Award($$payload, { size: 24 });
  $$payload.out.push(`<!----> <div><div class="text-2xl font-bold">${escape_html(store_get($$store_subs ??= {}, "$userStreaks", userStreaks).total_workouts)}</div> <div class="text-sm opacity-90">Total Workouts</div></div></div></div></div> <div class="card bg-base-200"><div class="card-body p-4"><div class="flex items-center gap-3"><div class="radial-progress text-primary"${attr_style(`--value:${stringify(progressPercentage)};`)} role="progressbar">${escape_html(Math.round(progressPercentage))}%</div> <div><div class="font-semibold">30-Day Goal</div> <div class="text-sm text-base-content/70">Keep going!</div></div></div></div></div></div> `);
  if (store_get($$store_subs ??= {}, "$userStreaks", userStreaks).badges.length > 0) {
    $$payload.out.push("<!--[-->");
    const each_array = ensure_array_like(store_get($$store_subs ??= {}, "$userStreaks", userStreaks).badges);
    $$payload.out.push(`<div class="mt-4"><h3 class="text-lg font-semibold mb-2">Achievements</h3> <div class="flex flex-wrap gap-2"><!--[-->`);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let badge = each_array[$$index];
      $$payload.out.push(`<div class="badge badge-accent badge-lg gap-1">`);
      Award($$payload, { size: 14 });
      $$payload.out.push(`<!----> ${escape_html(badge)}</div>`);
    }
    $$payload.out.push(`<!--]--></div></div>`);
  } else {
    $$payload.out.push("<!--[!-->");
  }
  $$payload.out.push(`<!--]-->`);
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
function getMetricColor(metric, value) {
  switch (metric) {
    case "bmi":
      if (value >= 22 && value <= 23) return "text-blue-400";
      if (value >= 18.5 && value <= 24.9) return "text-green-400";
      if (value >= 25 && value <= 29.9) return "text-yellow-400";
      return "text-red-400";
    case "bodyFat":
      if (value >= 8 && value <= 11) return "text-blue-400";
      if (value >= 12 && value <= 19) return "text-green-400";
      if (value >= 20 && value <= 25) return "text-yellow-400";
      return "text-red-400";
    case "visceralFat":
      if (value <= 4) return "text-blue-400";
      if (value >= 5 && value <= 9) return "text-green-400";
      if (value >= 10 && value <= 15) return "text-yellow-400";
      return "text-red-400";
    case "bodyWater":
      if (value >= 61) return "text-blue-400";
      if (value >= 55 && value <= 60) return "text-green-400";
      if (value >= 50 && value <= 54) return "text-yellow-400";
      return "text-red-400";
    case "skeletalMuscle":
      if (value >= 41) return "text-blue-400";
      if (value >= 35 && value <= 40) return "text-green-400";
      if (value >= 30 && value <= 34) return "text-yellow-400";
      return "text-red-400";
    case "protein":
      if (value >= 18) return "text-blue-400";
      if (value >= 16 && value <= 17) return "text-green-400";
      if (value >= 14 && value <= 15) return "text-yellow-400";
      return "text-red-400";
    case "metabolicAge":
      if (value < 37) return "text-blue-400";
      if (value >= 37 && value <= 41) return "text-green-400";
      if (value >= 42 && value <= 46) return "text-yellow-400";
      return "text-red-400";
    case "bmr":
      if (value >= 1750) return "text-blue-400";
      if (value >= 1600 && value < 1750) return "text-green-400";
      if (value >= 1400 && value < 1600) return "text-yellow-400";
      return "text-red-400";
    default:
      return "text-base-content";
  }
}
function getMetricStatus(metric, value) {
  switch (metric) {
    case "bmi":
      if (value >= 22 && value <= 23) return "Optimal";
      if (value >= 18.5 && value <= 24.9) return "Normal";
      if (value >= 25 && value <= 29.9) return "Overweight";
      return value >= 30 ? "Obese" : "Underweight";
    case "bodyFat":
      if (value >= 8 && value <= 11) return "Optimal";
      if (value >= 12 && value <= 19) return "Good";
      if (value >= 20 && value <= 25) return "Fair";
      return "High";
    case "visceralFat":
      if (value <= 4) return "Excellent";
      if (value >= 5 && value <= 9) return "Good";
      if (value >= 10 && value <= 15) return "Fair";
      return "High";
    case "bodyWater":
      if (value >= 61) return "Excellent";
      if (value >= 55 && value <= 60) return "Good";
      if (value >= 50 && value <= 54) return "Fair";
      return "Low";
    case "skeletalMuscle":
      if (value >= 41) return "Excellent";
      if (value >= 35 && value <= 40) return "Good";
      if (value >= 30 && value <= 34) return "Fair";
      return "Low";
    case "protein":
      if (value >= 18) return "Optimal";
      if (value >= 16 && value <= 17) return "Good";
      if (value >= 14 && value <= 15) return "Fair";
      return "Low";
    case "metabolicAge":
      if (value < 37) return "Younger";
      if (value >= 37 && value <= 41) return "Normal";
      if (value >= 42 && value <= 46) return "Slightly Older";
      return "Much Older";
    case "bmr":
      if (value >= 1750) return "High";
      if (value >= 1600) return "Normal";
      if (value >= 1400) return "Low";
      return "Very Low";
    case "weight":
      return "lbs";
    case "fatFreeBodyWeight":
      return "lbs";
    case "subcutaneousFat":
      return "%";
    case "muscleMass":
      return "lbs";
    case "boneMass":
      return "lbs";
    default:
      return "Normal";
  }
}
function Dashboard($$payload, $$props) {
  push();
  var $$store_subs;
  let todayCalories, todayExercises;
  let todayLogs = [];
  ({
    date: (/* @__PURE__ */ new Date()).toISOString().split("T")[0]
  });
  function getTrend(current, baseline) {
    if (!baseline || baseline === 0) return "neutral";
    if (current > baseline) return "up";
    if (current < baseline) return "down";
    return "neutral";
  }
  function getTrendIcon(trend) {
    switch (trend) {
      case "up":
        return Trending_up;
      case "down":
        return Trending_down;
      default:
        return Minus;
    }
  }
  const metrics = [
    { key: "weight", label: "Weight", unit: "lbs", positive: false },
    { key: "bmi", label: "BMI", unit: "", positive: false },
    {
      key: "bodyFat",
      label: "Body Fat %",
      unit: "%",
      positive: false
    },
    {
      key: "fatFreeBodyWeight",
      label: "Fat-Free Body Weight",
      unit: "lbs",
      positive: true
    },
    {
      key: "subcutaneousFat",
      label: "Subcutaneous Fat",
      unit: "%",
      positive: false
    },
    {
      key: "visceralFat",
      label: "Visceral Fat",
      unit: "",
      positive: false
    },
    {
      key: "bodyWater",
      label: "Body Water %",
      unit: "%",
      positive: true
    },
    {
      key: "skeletalMuscle",
      label: "Skeletal Muscle %",
      unit: "%",
      positive: true
    },
    {
      key: "muscleMass",
      label: "Muscle Mass",
      unit: "lbs",
      positive: true
    },
    {
      key: "boneMass",
      label: "Bone Mass",
      unit: "lbs",
      positive: true
    },
    {
      key: "protein",
      label: "Protein %",
      unit: "%",
      positive: true
    },
    { key: "bmr", label: "BMR", unit: "cal", positive: true },
    {
      key: "metabolicAge",
      label: "Metabolic Age",
      unit: "years",
      positive: false
    }
  ];
  {
    const today = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
    todayLogs = store_get($$store_subs ??= {}, "$exerciseLogs", exerciseLogs).filter((log) => log.date === today);
  }
  todayCalories = todayLogs.reduce((total, log) => total + log.calories, 0);
  todayExercises = todayLogs.length;
  const each_array = ensure_array_like(metrics);
  $$payload.out.push(`<div class="space-y-6"><div class="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between"><div><h1 class="text-3xl font-bold">Dashboard</h1> <p class="text-base-content/70">Track your transformation journey</p></div> <button class="btn btn-primary">Update Metrics</button></div> <div class="grid grid-cols-1 md:grid-cols-3 gap-4"><div class="card bg-gradient-to-br from-green-600 to-emerald-600 text-white"><div class="card-body p-4"><div class="flex items-center gap-3">`);
  Trending_up($$payload, { size: 24 });
  $$payload.out.push(`<!----> <div><div class="text-2xl font-bold">${escape_html(todayCalories)}</div> <div class="text-sm opacity-90">Calories Burned Today</div></div></div></div></div> <div class="card bg-gradient-to-br from-purple-600 to-pink-600 text-white"><div class="card-body p-4"><div class="flex items-center gap-3">`);
  Trending_up($$payload, { size: 24 });
  $$payload.out.push(`<!----> <div><div class="text-2xl font-bold">${escape_html(todayExercises)}</div> <div class="text-sm opacity-90">Exercises Completed</div></div></div></div></div> <div class="card bg-gradient-to-br from-yellow-600 to-orange-600 text-white"><div class="card-body p-4"><div class="flex items-center gap-3">`);
  Clock($$payload, { size: 24 });
  $$payload.out.push(`<!----> <div><div class="text-2xl font-bold">8:00 PM</div> <div class="text-sm opacity-90">Daily Metrics Time</div></div></div></div></div></div> `);
  StreakTracker($$payload);
  $$payload.out.push(`<!----> <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"><!--[-->`);
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let metric = each_array[$$index];
    MetricCard($$payload, {
      label: metric.label,
      value: store_get($$store_subs ??= {}, "$currentMetrics", currentMetrics)?.[metric.key] || 0,
      unit: metric.unit,
      color: getMetricColor(metric.key, store_get($$store_subs ??= {}, "$currentMetrics", currentMetrics)?.[metric.key] || 0),
      status: getMetricStatus(metric.key, store_get($$store_subs ??= {}, "$currentMetrics", currentMetrics)?.[metric.key] || 0),
      trend: getTrend(store_get($$store_subs ??= {}, "$currentMetrics", currentMetrics)?.[metric.key] || 0, store_get($$store_subs ??= {}, "$baselineMetrics", baselineMetrics)?.[metric.key] || null),
      trendIcon: getTrendIcon(getTrend(store_get($$store_subs ??= {}, "$currentMetrics", currentMetrics)?.[metric.key] || 0, store_get($$store_subs ??= {}, "$baselineMetrics", baselineMetrics)?.[metric.key] || null)),
      positive: metric.positive
    });
  }
  $$payload.out.push(`<!--]--></div> `);
  DailyQuote($$payload);
  $$payload.out.push(`<!----></div> `);
  {
    $$payload.out.push("<!--[!-->");
  }
  $$payload.out.push(`<!--]-->`);
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
function _page($$payload, $$props) {
  push();
  var $$store_subs;
  if (store_get($$store_subs ??= {}, "$user", user)) {
    $$payload.out.push("<!--[-->");
    Dashboard($$payload);
  } else {
    $$payload.out.push("<!--[!-->");
    $$payload.out.push(`<div class="min-h-screen"><section class="hero min-h-screen bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20"><div class="hero-content text-center max-w-6xl"><div class="max-w-4xl"><div class="flex justify-center mb-8"><div class="w-32 h-32 flex items-center justify-center text-8xl animate-pulse">💪</div></div> <h1 class="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Project Glow Up</h1> <p class="text-xl md:text-2xl mb-8 text-base-content/80 max-w-3xl mx-auto leading-relaxed">Transform your body with military-grade precision. Track 13+ health metrics, follow structured training plans, 
						and unlock 50 unique achievements on your journey to peak fitness.</p> <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-2xl mx-auto"><div class="stat bg-base-200/50 rounded-lg backdrop-blur-sm"><div class="stat-figure text-primary">`);
    Trophy($$payload, { size: 32 });
    $$payload.out.push(`<!----></div> <div class="stat-title">Achievements</div> <div class="stat-value text-primary">50</div> <div class="stat-desc">Unique rewards to unlock</div></div> <div class="stat bg-base-200/50 rounded-lg backdrop-blur-sm"><div class="stat-figure text-secondary">`);
    Trending_up($$payload, { size: 32 });
    $$payload.out.push(`<!----></div> <div class="stat-title">Health Metrics</div> <div class="stat-value text-secondary">13+</div> <div class="stat-desc">Comprehensive tracking</div></div> <div class="stat bg-base-200/50 rounded-lg backdrop-blur-sm"><div class="stat-figure text-accent">`);
    Target($$payload, { size: 32 });
    $$payload.out.push(`<!----></div> <div class="stat-title">Training Plan</div> <div class="stat-value text-accent">20</div> <div class="stat-desc">Week transformation</div></div></div> <div class="flex flex-col sm:flex-row gap-4 justify-center mb-12"><a href="/auth" class="btn btn-primary btn-lg">`);
    Play($$payload, { size: 20 });
    $$payload.out.push(`<!----> Start Your Transformation `);
    Arrow_right($$payload, { size: 20 });
    $$payload.out.push(`<!----></a> <a href="/about" class="btn btn-outline btn-lg">`);
    Trophy($$payload, { size: 20 });
    $$payload.out.push(`<!----> Learn More</a></div> <div class="inline-flex items-center gap-2 px-4 py-2 bg-base-200/50 rounded-full backdrop-blur-sm">`);
    Code($$payload, { size: 16, class: "text-accent" });
    $$payload.out.push(`<!----> <span class="text-sm">Created by <strong class="text-primary">Miguel Viddy</strong> • First of Many</span> `);
    Sparkles($$payload, { size: 16, class: "text-accent" });
    $$payload.out.push(`<!----></div></div></div></section> <section class="py-20 bg-base-100"><div class="container mx-auto px-4"><div class="text-center mb-16"><h2 class="text-4xl font-bold mb-4">Why Choose Project Glow Up?</h2> <p class="text-xl text-base-content/70 max-w-2xl mx-auto">Built with military precision and gamification elements to keep you motivated throughout your transformation journey.</p></div> <div${attr_class(`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ${stringify("opacity-0")}`, "svelte-1fdgpxa")}><div class="card bg-base-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"><div class="card-body text-center"><div class="flex justify-center mb-4"><div class="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">`);
    Trending_up($$payload, { size: 32, class: "text-primary" });
    $$payload.out.push(`<!----></div></div> <h3 class="card-title justify-center mb-2">Comprehensive Tracking</h3> <p class="text-base-content/70">Monitor 13+ health metrics including BMI, body fat, muscle mass, visceral fat, and metabolic age with military-grade precision.</p></div></div> <div class="card bg-base-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"><div class="card-body text-center"><div class="flex justify-center mb-4"><div class="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center">`);
    Calendar($$payload, { size: 32, class: "text-secondary" });
    $$payload.out.push(`<!----></div></div> <h3 class="card-title justify-center mb-2">Structured Training</h3> <p class="text-base-content/70">Follow a progressive 20-week training plan with walking schedules and strength training designed for optimal results.</p></div></div> <div class="card bg-base-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"><div class="card-body text-center"><div class="flex justify-center mb-4"><div class="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center">`);
    Trophy($$payload, { size: 32, class: "text-accent" });
    $$payload.out.push(`<!----></div></div> <h3 class="card-title justify-center mb-2">50 Achievements</h3> <p class="text-base-content/70">Unlock rewards across 5 tiers and 4 rarity levels. From "First Blood" to "Ultimate Warrior" - every milestone matters.</p></div></div> <div class="card bg-base-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"><div class="card-body text-center"><div class="flex justify-center mb-4"><div class="w-16 h-16 rounded-full bg-success/20 flex items-center justify-center">`);
    Shield($$payload, { size: 32, class: "text-success" });
    $$payload.out.push(`<!----></div></div> <h3 class="card-title justify-center mb-2">Military Standards</h3> <p class="text-base-content/70">All metrics calibrated to military fitness standards for 37-year-old males, ensuring scientifically-backed goals.</p></div></div> <div class="card bg-base-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"><div class="card-body text-center"><div class="flex justify-center mb-4"><div class="w-16 h-16 rounded-full bg-warning/20 flex items-center justify-center">`);
    Zap($$payload, { size: 32, class: "text-warning" });
    $$payload.out.push(`<!----></div></div> <h3 class="card-title justify-center mb-2">Real-time Analytics</h3> <p class="text-base-content/70">Interactive charts showing weight trends, calorie burn patterns, and body composition changes with goal projections.</p></div></div> <div class="card bg-base-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"><div class="card-body text-center"><div class="flex justify-center mb-4"><div class="w-16 h-16 rounded-full bg-info/20 flex items-center justify-center">`);
    Star($$payload, { size: 32, class: "text-info" });
    $$payload.out.push(`<!----></div></div> <h3 class="card-title justify-center mb-2">Trophy Wall</h3> <p class="text-base-content/70">Showcase your earned achievements with beautiful trophy displays, filtering, and progress tracking.</p></div></div></div></div></section> <section class="py-16 bg-base-200"><div class="container mx-auto px-4"><div class="max-w-4xl mx-auto"><div class="text-center mb-8"><h2 class="text-3xl font-bold mb-4">Daily Motivation</h2> <p class="text-base-content/70">Get inspired with carefully curated motivational quotes</p></div> `);
    DailyQuote($$payload);
    $$payload.out.push(`<!----></div></div></section> <section class="py-20 bg-base-100"><div class="container mx-auto px-4"><div class="text-center mb-16"><h2 class="text-4xl font-bold mb-4">Achievement System</h2> <p class="text-xl text-base-content/70 max-w-2xl mx-auto">Unlock 50 unique achievements across 5 tiers and 4 rarity levels</p></div> <div class="grid grid-cols-1 md:grid-cols-5 gap-6 max-w-4xl mx-auto"><div class="text-center"><div class="w-20 h-20 mx-auto mb-4 rounded-full bg-amber-600/20 flex items-center justify-center border-2 border-amber-600/30">`);
    Award($$payload, { size: 32, class: "text-amber-600" });
    $$payload.out.push(`<!----></div> <h3 class="font-bold text-amber-600">Bronze</h3> <p class="text-sm text-base-content/70">Starting achievements</p></div> <div class="text-center"><div class="w-20 h-20 mx-auto mb-4 rounded-full bg-gray-400/20 flex items-center justify-center border-2 border-gray-400/30">`);
    Medal($$payload, { size: 32, class: "text-gray-400" });
    $$payload.out.push(`<!----></div> <h3 class="font-bold text-gray-400">Silver</h3> <p class="text-sm text-base-content/70">Consistent progress</p></div> <div class="text-center"><div class="w-20 h-20 mx-auto mb-4 rounded-full bg-yellow-400/20 flex items-center justify-center border-2 border-yellow-400/30">`);
    Trophy($$payload, { size: 32, class: "text-yellow-400" });
    $$payload.out.push(`<!----></div> <h3 class="font-bold text-yellow-400">Gold</h3> <p class="text-sm text-base-content/70">Major milestones</p></div> <div class="text-center"><div class="w-20 h-20 mx-auto mb-4 rounded-full bg-purple-400/20 flex items-center justify-center border-2 border-purple-400/30">`);
    Crown($$payload, { size: 32, class: "text-purple-400" });
    $$payload.out.push(`<!----></div> <h3 class="font-bold text-purple-400">Platinum</h3> <p class="text-sm text-base-content/70">Elite performance</p></div> <div class="text-center"><div class="w-20 h-20 mx-auto mb-4 rounded-full bg-cyan-400/20 flex items-center justify-center border-2 border-cyan-400/30">`);
    Diamond($$payload, { size: 32, class: "text-cyan-400" });
    $$payload.out.push(`<!----></div> <h3 class="font-bold text-cyan-400">Diamond</h3> <p class="text-sm text-base-content/70">Ultimate mastery</p></div></div></div></section> <section class="py-20 bg-gradient-to-r from-primary/20 to-secondary/20"><div class="container mx-auto px-4 text-center"><div class="max-w-3xl mx-auto"><h2 class="text-4xl font-bold mb-6">Ready to Transform Your Life?</h2> <p class="text-xl mb-8 text-base-content/80">Join the journey to military-grade fitness with comprehensive tracking, structured training, and rewarding achievements.</p> <div class="flex flex-col sm:flex-row gap-4 justify-center mb-8"><a href="/auth" class="btn btn-primary btn-lg">`);
    User($$payload, { size: 20 });
    $$payload.out.push(`<!----> Create Free Account</a> <a href="/achievements" class="btn btn-outline btn-lg">`);
    Trophy($$payload, { size: 20 });
    $$payload.out.push(`<!----> View All Achievements</a></div> <div class="flex flex-wrap justify-center gap-6 text-sm text-base-content/70"><div class="flex items-center gap-2">`);
    Circle_check($$payload, { size: 16, class: "text-success" });
    $$payload.out.push(`<!----> <span>Free to use</span></div> <div class="flex items-center gap-2">`);
    Circle_check($$payload, { size: 16, class: "text-success" });
    $$payload.out.push(`<!----> <span>Secure data storage</span></div> <div class="flex items-center gap-2">`);
    Circle_check($$payload, { size: 16, class: "text-success" });
    $$payload.out.push(`<!----> <span>Military-grade standards</span></div> <div class="flex items-center gap-2">`);
    Circle_check($$payload, { size: 16, class: "text-success" });
    $$payload.out.push(`<!----> <span>50 achievements</span></div></div></div></div></section> <footer class="footer footer-center p-10 bg-base-200 text-base-content"><div><div class="w-12 h-12 flex items-center justify-center text-3xl mb-4">💪</div> <p class="font-bold text-lg">Project Glow Up</p> <p class="text-base-content/70">Transform your body with military precision</p></div> <div><div class="grid grid-flow-col gap-4"><a href="/about" class="link link-hover">About</a> <a href="/achievements" class="link link-hover">Achievements</a> <a href="/privacy" class="link link-hover">Privacy</a> <a href="/terms" class="link link-hover">Terms</a></div></div> <div><p class="flex items-center gap-2">`);
    Heart($$payload, { size: 16, class: "text-red-500" });
    $$payload.out.push(`<!----> Created by <strong class="text-primary">Miguel Viddy</strong> `);
    Code($$payload, { size: 16, class: "text-accent" });
    $$payload.out.push(`<!----></p> <p class="text-sm text-base-content/50">First application of many • Built to improve life through technology</p></div></footer></div>`);
  }
  $$payload.out.push(`<!--]-->`);
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
export {
  _page as default
};
