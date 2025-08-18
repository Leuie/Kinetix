import "clsx";
import { F as sanitize_props, G as spread_props, I as slot, N as escape_html, M as attr_class, U as ensure_array_like, Q as stringify, D as pop, A as push, K as store_get, O as unsubscribe_stores } from "../../../chunks/index2.js";
import { e as exerciseLogs } from "../../../chunks/fitness.js";
import "../../../chunks/auth.js";
import { L as List } from "../../../chunks/list.js";
import { I as Icon } from "../../../chunks/Icon.js";
import { C as Calendar } from "../../../chunks/calendar.js";
import { C as Clock } from "../../../chunks/clock.js";
import { F as Footprints, D as Dumbbell } from "../../../chunks/footprints.js";
function Chevron_left($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  /**
   * @license lucide-svelte v0.456.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */
  const iconNode = [["path", { "d": "m15 18-6-6 6-6" }]];
  Icon($$payload, spread_props([
    { name: "chevron-left" },
    $$sanitized_props,
    {
      /**
       * @component @name ChevronLeft
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJtMTUgMTgtNi02IDYtNiIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/chevron-left
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
function Chevron_right($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  /**
   * @license lucide-svelte v0.456.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */
  const iconNode = [["path", { "d": "m9 18 6-6-6-6" }]];
  Icon($$payload, spread_props([
    { name: "chevron-right" },
    $$sanitized_props,
    {
      /**
       * @component @name ChevronRight
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJtOSAxOCA2LTYtNi02IiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/chevron-right
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
function Layout_grid($$payload, $$props) {
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
      { "width": "7", "height": "7", "x": "3", "y": "3", "rx": "1" }
    ],
    [
      "rect",
      { "width": "7", "height": "7", "x": "14", "y": "3", "rx": "1" }
    ],
    [
      "rect",
      { "width": "7", "height": "7", "x": "14", "y": "14", "rx": "1" }
    ],
    [
      "rect",
      { "width": "7", "height": "7", "x": "3", "y": "14", "rx": "1" }
    ]
  ];
  Icon($$payload, spread_props([
    { name: "layout-grid" },
    $$sanitized_props,
    {
      /**
       * @component @name LayoutGrid
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSI3IiB4PSIzIiB5PSIzIiByeD0iMSIgLz4KICA8cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSI3IiB4PSIxNCIgeT0iMyIgcng9IjEiIC8+CiAgPHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iNyIgeD0iMTQiIHk9IjE0IiByeD0iMSIgLz4KICA8cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSI3IiB4PSIzIiB5PSIxNCIgcng9IjEiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/layout-grid
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
function Plus($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  /**
   * @license lucide-svelte v0.456.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */
  const iconNode = [["path", { "d": "M5 12h14" }], ["path", { "d": "M12 5v14" }]];
  Icon($$payload, spread_props([
    { name: "plus" },
    $$sanitized_props,
    {
      /**
       * @component @name Plus
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNNSAxMmgxNCIgLz4KICA8cGF0aCBkPSJNMTIgNXYxNCIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/plus
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
function Schedule($$payload, $$props) {
  push();
  var $$store_subs;
  let currentPlan;
  let currentWeek = [];
  let currentWeekNumber = 1;
  let currentMonth = /* @__PURE__ */ new Date();
  const strengthPlan = [
    {
      week: 1,
      dumbbell: { sets: 4, reps: 8, weight: 15 },
      squat: { sets: 4, reps: 10 },
      pushup: { sets: 4, reps: 8 }
    },
    {
      week: 2,
      dumbbell: { sets: 4, reps: 10, weight: 15 },
      squat: { sets: 4, reps: 12 },
      pushup: { sets: 4, reps: 10 }
    },
    {
      week: 3,
      dumbbell: { sets: 4, reps: 12, weight: 20 },
      squat: { sets: 4, reps: 15 },
      pushup: { sets: 4, reps: 12 }
    },
    {
      week: 4,
      dumbbell: { sets: 5, reps: 10, weight: 20 },
      squat: { sets: 5, reps: 12 },
      pushup: { sets: 5, reps: 10 }
    },
    {
      week: 5,
      dumbbell: { sets: 5, reps: 12, weight: 25 },
      squat: { sets: 5, reps: 15 },
      pushup: { sets: 5, reps: 12 }
    },
    {
      week: 6,
      dumbbell: { sets: 5, reps: 15, weight: 25 },
      squat: { sets: 5, reps: 18 },
      pushup: { sets: 5, reps: 15 }
    },
    {
      week: 7,
      dumbbell: { sets: 5, reps: 12, weight: 30 },
      squat: { sets: 5, reps: 20 },
      pushup: { sets: 5, reps: 18 }
    },
    {
      week: 8,
      dumbbell: { sets: 5, reps: 15, weight: 30 },
      squat: { sets: 5, reps: 22 },
      pushup: { sets: 5, reps: 20 }
    }
  ];
  const weeklySchedule = {
    Monday: [
      {
        type: "walk",
        time: "Morning",
        description: "2–3 miles brisk pace (30–50 min)",
        icon: Footprints
      },
      {
        type: "walk",
        time: "Night",
        description: "2–3 miles brisk pace (30–50 min)",
        icon: Footprints
      }
    ],
    Tuesday: [
      {
        type: "walk",
        time: "Any",
        description: "2 miles max brisk pace",
        icon: Footprints
      },
      {
        type: "strength",
        time: "Any",
        description: "Dumbbells + Squats + Pushups",
        icon: Dumbbell
      }
    ],
    Wednesday: [
      {
        type: "walk",
        time: "Morning",
        description: "2–3 miles brisk pace (30–50 min)",
        icon: Footprints
      },
      {
        type: "walk",
        time: "Night",
        description: "2–3 miles brisk pace (30–50 min)",
        icon: Footprints
      }
    ],
    Thursday: [
      {
        type: "walk",
        time: "Any",
        description: "2 miles max brisk pace",
        icon: Footprints
      },
      {
        type: "strength",
        time: "Any",
        description: "Dumbbells + Squats + Pushups",
        icon: Dumbbell
      }
    ],
    Friday: [
      {
        type: "walk",
        time: "Morning",
        description: "2–3 miles brisk pace (30–50 min)",
        icon: Footprints
      },
      {
        type: "walk",
        time: "Night",
        description: "2–3 miles brisk pace (30–50 min)",
        icon: Footprints
      }
    ],
    Saturday: [
      {
        type: "walk",
        time: "Any",
        description: "2 miles max brisk pace",
        icon: Footprints
      },
      {
        type: "strength",
        time: "Any",
        description: "Dumbbells + Squats + Pushups",
        icon: Dumbbell
      }
    ],
    Sunday: [
      {
        type: "rest",
        time: "All Day",
        description: "Rest & Cardio break - Mobility, stretching, or yoga-style flow",
        icon: Clock
      }
    ]
  };
  function generateCalendarDays() {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
    const firstDay = new Date(year, month, 1);
    const startDate = new Date(firstDay);
    startDate.setDate(startDate.getDate() - firstDay.getDay() + 1);
    const days = [];
    const current = new Date(startDate);
    for (let i = 0; i < 42; i++) {
      days.push(new Date(current));
      current.setDate(current.getDate() + 1);
    }
    return days;
  }
  function getCurrentPlan() {
    const plan = strengthPlan.find((p) => p.week === currentWeekNumber) || strengthPlan[0];
    return plan;
  }
  function getDayName(date) {
    return date.toLocaleDateString("en-US", { weekday: "long" });
  }
  function formatDate(date) {
    return date.toISOString().split("T")[0];
  }
  function isToday(date) {
    const today = /* @__PURE__ */ new Date();
    return date.toDateString() === today.toDateString();
  }
  function getDayLogs(date) {
    const dateStr = formatDate(date);
    return store_get($$store_subs ??= {}, "$exerciseLogs", exerciseLogs).filter((log) => log.date === dateStr);
  }
  function getTotalCalories(date) {
    return getDayLogs(date).reduce((total, log) => total + log.calories, 0);
  }
  currentPlan = getCurrentPlan();
  generateCalendarDays();
  $$payload.out.push(`<div class="space-y-6"><div class="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between"><div><h1 class="text-3xl font-bold">Training Schedule</h1> <p class="text-base-content/70">Week ${escape_html(currentWeekNumber)} of your transformation plan</p></div> <div class="flex items-center gap-2"><div class="join"><button${attr_class(`btn join-item btn-sm ${stringify("btn-active")}`)}>`);
  List($$payload, { size: 16 });
  $$payload.out.push(`<!----> List</button> <button${attr_class(`btn join-item btn-sm ${stringify("btn-outline")}`)}>`);
  Layout_grid($$payload, { size: 16 });
  $$payload.out.push(`<!----> Board</button> <button${attr_class(`btn join-item btn-sm ${stringify("btn-outline")}`)}>`);
  Calendar($$payload, { size: 16 });
  $$payload.out.push(`<!----> Calendar</button></div></div></div> <div class="card bg-base-200"><div class="card-body p-4"><h3 class="card-title text-lg mb-4">Week ${escape_html(currentWeekNumber)} Strength Targets</h3> <div class="grid grid-cols-1 md:grid-cols-3 gap-4"><div class="bg-base-300 p-3 rounded-lg"><div class="font-semibold">Dumbbells</div> <div class="text-sm">${escape_html(currentPlan.dumbbell.sets)} sets × ${escape_html(currentPlan.dumbbell.reps)} reps @ ${escape_html(currentPlan.dumbbell.weight)}lbs</div></div> <div class="bg-base-300 p-3 rounded-lg"><div class="font-semibold">Squats</div> <div class="text-sm">${escape_html(currentPlan.squat.sets)} sets × ${escape_html(currentPlan.squat.reps)} reps</div></div> <div class="bg-base-300 p-3 rounded-lg"><div class="font-semibold">Pushups</div> <div class="text-sm">${escape_html(currentPlan.pushup.sets)} sets × ${escape_html(currentPlan.pushup.reps)} reps</div></div></div></div></div> `);
  {
    $$payload.out.push("<!--[-->");
    const each_array = ensure_array_like(currentWeek);
    $$payload.out.push(`<div class="flex items-center justify-between mb-4"><h2 class="text-xl font-semibold text-orange-400 drop-shadow-[0_0_10px_rgba(251,146,60,0.8)]">This Week</h2> <div class="flex gap-2"><button class="btn btn-sm btn-outline">`);
    Chevron_left($$payload, { size: 16 });
    $$payload.out.push(`<!----></button> <button class="btn btn-sm btn-outline">`);
    Chevron_right($$payload, { size: 16 });
    $$payload.out.push(`<!----></button></div></div> <div class="grid gap-4"><!--[-->`);
    for (let dayIndex = 0, $$length = each_array.length; dayIndex < $$length; dayIndex++) {
      let date = each_array[dayIndex];
      const dayName = getDayName(date);
      const activities = weeklySchedule[dayName] || [];
      const dayLogs = getDayLogs(date);
      const totalCalories = getTotalCalories(date);
      const each_array_1 = ensure_array_like(activities);
      $$payload.out.push(`<div${attr_class(`card bg-base-200 ${stringify(isToday(date) ? "ring-2 ring-primary" : "")}`)}><div class="card-body p-4"><div class="flex items-center justify-between mb-4"><div><h3 class="text-lg font-semibold flex items-center gap-2 text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]">${escape_html(dayName)} `);
      if (isToday(date)) {
        $$payload.out.push("<!--[-->");
        $$payload.out.push(`<span class="badge badge-primary">Today</span>`);
      } else {
        $$payload.out.push("<!--[!-->");
      }
      $$payload.out.push(`<!--]--></h3> <p class="text-sm text-yellow-400 drop-shadow-[0_0_6px_rgba(250,204,21,0.8)]">${escape_html(date.toLocaleDateString("en-US", { month: "short", day: "numeric" }))}</p></div> <div class="text-right"><div class="text-sm text-base-content/70">Calories Burned</div> <div class="font-semibold text-success">${escape_html(totalCalories)}</div></div></div> <div class="space-y-3 mb-4"><!--[-->`);
      for (let activityIndex = 0, $$length2 = each_array_1.length; activityIndex < $$length2; activityIndex++) {
        let activity = each_array_1[activityIndex];
        $$payload.out.push(`<div class="flex items-center gap-3 p-3 rounded-lg bg-base-300"><!---->`);
        activity.icon?.($$payload, { size: 16 });
        $$payload.out.push(`<!----> <div class="flex-1"><div class="font-medium">${escape_html(activity.description)}</div> <div class="text-sm text-base-content/70">${escape_html(activity.time)}</div></div> <div${attr_class(`badge ${stringify(activity.type === "walk" ? "badge-info" : activity.type === "strength" ? "badge-warning" : "badge-ghost")}`)}>${escape_html(activity.type)}</div></div>`);
      }
      $$payload.out.push(`<!--]--></div> <div class="flex flex-wrap gap-2 mb-4"><button class="btn btn-sm btn-outline">`);
      Plus($$payload, { size: 14 });
      $$payload.out.push(`<!----> Log Walk</button> `);
      if (dayName === "Tuesday" || dayName === "Thursday" || dayName === "Saturday") {
        $$payload.out.push("<!--[-->");
        $$payload.out.push(`<button class="btn btn-sm btn-outline">`);
        Plus($$payload, { size: 14 });
        $$payload.out.push(`<!----> Log Dumbbells</button> <button class="btn btn-sm btn-outline">`);
        Plus($$payload, { size: 14 });
        $$payload.out.push(`<!----> Log Squats</button> <button class="btn btn-sm btn-outline">`);
        Plus($$payload, { size: 14 });
        $$payload.out.push(`<!----> Log Pushups</button>`);
      } else {
        $$payload.out.push("<!--[!-->");
      }
      $$payload.out.push(`<!--]--></div> `);
      if (dayLogs.length > 0) {
        $$payload.out.push("<!--[-->");
        const each_array_2 = ensure_array_like(dayLogs);
        $$payload.out.push(`<div class="space-y-2"><h4 class="font-semibold text-sm">Completed Exercises:</h4> <!--[-->`);
        for (let $$index_1 = 0, $$length2 = each_array_2.length; $$index_1 < $$length2; $$index_1++) {
          let log = each_array_2[$$index_1];
          $$payload.out.push(`<div class="bg-success/20 p-2 rounded text-sm"><div class="flex justify-between items-start"><div class="flex-1"><span class="font-medium capitalize">${escape_html(log.type)}</span> <div class="text-xs text-base-content/70">`);
          if (log.type === "walk") {
            $$payload.out.push("<!--[-->");
            $$payload.out.push(`${escape_html(log.distance)} miles, ${escape_html(log.duration)} min `);
            if (log.averagePace) {
              $$payload.out.push("<!--[-->");
              $$payload.out.push(`, ${escape_html(log.averagePace)} pace`);
            } else {
              $$payload.out.push("<!--[!-->");
            }
            $$payload.out.push(`<!--]--> `);
            if (log.averageHeartRate) {
              $$payload.out.push("<!--[-->");
              $$payload.out.push(`, ${escape_html(log.averageHeartRate)} BPM avg`);
            } else {
              $$payload.out.push("<!--[!-->");
            }
            $$payload.out.push(`<!--]-->`);
          } else {
            $$payload.out.push("<!--[!-->");
            $$payload.out.push(`${escape_html(log.sets)} sets × ${escape_html(log.reps)} reps `);
            if (log.weight) {
              $$payload.out.push("<!--[-->");
              $$payload.out.push(`@ ${escape_html(log.weight)}lbs`);
            } else {
              $$payload.out.push("<!--[!-->");
            }
            $$payload.out.push(`<!--]-->`);
          }
          $$payload.out.push(`<!--]--> `);
          if (log.startTime && log.endTime) {
            $$payload.out.push("<!--[-->");
            $$payload.out.push(`<div class="text-xs opacity-75">${escape_html(log.startTime)} - ${escape_html(log.endTime)}</div>`);
          } else {
            $$payload.out.push("<!--[!-->");
          }
          $$payload.out.push(`<!--]--></div></div> <div class="flex items-center gap-2"><span class="text-success">${escape_html(log.calories)} cal</span> <button class="btn btn-xs btn-error btn-outline" title="Delete exercise">×</button></div></div></div>`);
        }
        $$payload.out.push(`<!--]--></div>`);
      } else {
        $$payload.out.push("<!--[!-->");
      }
      $$payload.out.push(`<!--]--></div></div>`);
    }
    $$payload.out.push(`<!--]--></div>`);
  }
  $$payload.out.push(`<!--]--> `);
  {
    $$payload.out.push("<!--[!-->");
  }
  $$payload.out.push(`<!--]--> `);
  {
    $$payload.out.push("<!--[!-->");
  }
  $$payload.out.push(`<!--]--></div> `);
  {
    $$payload.out.push("<!--[!-->");
  }
  $$payload.out.push(`<!--]-->`);
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
function _page($$payload) {
  Schedule($$payload);
}
export {
  _page as default
};
