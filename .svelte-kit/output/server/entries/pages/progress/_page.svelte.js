import "clsx";
import { K as store_get, N as escape_html, O as unsubscribe_stores, D as pop, A as push } from "../../../chunks/index2.js";
import "chart.js/auto";
import "chartjs-adapter-date-fns";
import { h as healthMetrics, e as exerciseLogs } from "../../../chunks/fitness.js";
function Progress($$payload, $$props) {
  push();
  var $$store_subs;
  let weeklyDeficit, monthlyProjectedLoss, totalCaloriesBurned, averageDailyCalories;
  function createCharts() {
    return;
  }
  function calculateWeeklyDeficit() {
    const walksPerWeek = 8;
    const caloriesPerWalk = 300;
    const strengthSessions = 3;
    const caloriesPerStrength = 200;
    return walksPerWeek * caloriesPerWalk + strengthSessions * caloriesPerStrength;
  }
  if (store_get($$store_subs ??= {}, "$healthMetrics", healthMetrics).length > 0 || store_get($$store_subs ??= {}, "$exerciseLogs", exerciseLogs).length > 0) {
    setTimeout(() => createCharts(), 100);
  }
  weeklyDeficit = calculateWeeklyDeficit();
  monthlyProjectedLoss = weeklyDeficit * 4 / 3500;
  totalCaloriesBurned = store_get($$store_subs ??= {}, "$exerciseLogs", exerciseLogs).reduce((total, log) => total + log.calories, 0);
  averageDailyCalories = store_get($$store_subs ??= {}, "$exerciseLogs", exerciseLogs).length > 0 ? Math.round(totalCaloriesBurned / [
    ...new Set(store_get($$store_subs ??= {}, "$exerciseLogs", exerciseLogs).map((log) => log.date))
  ].length) : 0;
  $$payload.out.push(`<div class="space-y-6"><div><h1 class="text-3xl font-bold">Progress Tracking</h1> <p class="text-base-content/70">Visualize your transformation journey</p></div> <div class="grid grid-cols-1 md:grid-cols-3 gap-4"><div class="stat bg-base-200 rounded-lg"><div class="stat-title">Weekly Calorie Deficit</div> <div class="stat-value text-primary">${escape_html(weeklyDeficit.toLocaleString())}</div> <div class="stat-desc">From exercise plan</div></div> <div class="stat bg-base-200 rounded-lg"><div class="stat-title">Projected Monthly Loss</div> <div class="stat-value text-success">${escape_html(monthlyProjectedLoss.toFixed(1))} lbs</div> <div class="stat-desc">Based on deficit</div></div> <div class="stat bg-base-200 rounded-lg"><div class="stat-title">Total Calories Burned</div> <div class="stat-value text-warning">${escape_html(totalCaloriesBurned.toLocaleString())}</div> <div class="stat-desc">Since start date</div></div> <div class="stat bg-base-200 rounded-lg"><div class="stat-title">Avg Daily Calories</div> <div class="stat-value text-info">${escape_html(averageDailyCalories)}</div> <div class="stat-desc">From exercise</div></div></div> <div class="grid grid-cols-1 lg:grid-cols-3 gap-6"><div class="card bg-base-200"><div class="card-body"><h3 class="card-title text-sm mb-2">Weight Progress</h3> <div class="h-80"><canvas></canvas></div></div></div> <div class="card bg-base-200"><div class="card-body"><h3 class="card-title text-sm mb-2">Body Fat Progress</h3> <div class="h-80"><canvas></canvas></div></div></div> <div class="card bg-base-200"><div class="card-body"><h3 class="card-title text-sm mb-2">Daily Calorie Burn</h3> <div class="h-80"><canvas></canvas></div></div></div></div> <div class="card bg-base-200"><div class="card-body"><h3 class="card-title mb-4">Military Standards Reference (Male, 37 years)</h3> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"><div class="bg-base-300 p-4 rounded-lg"><h4 class="font-semibold text-sm mb-2">BMI Ranges</h4> <div class="space-y-1 text-xs"><div class="flex justify-between"><span>Optimal:</span><span class="text-blue-400">22-23</span></div> <div class="flex justify-between"><span>Good:</span><span class="text-green-400">18.5-24.9</span></div> <div class="flex justify-between"><span>Overweight:</span><span class="text-yellow-400">25-29.9</span></div> <div class="flex justify-between"><span>Obese:</span><span class="text-red-400">≥30</span></div></div></div> <div class="bg-base-300 p-4 rounded-lg"><h4 class="font-semibold text-sm mb-2">Body Fat %</h4> <div class="space-y-1 text-xs"><div class="flex justify-between"><span>Optimal:</span><span class="text-blue-400">8-11%</span></div> <div class="flex justify-between"><span>Good:</span><span class="text-green-400">12-19%</span></div> <div class="flex justify-between"><span>Fair:</span><span class="text-yellow-400">20-25%</span></div> <div class="flex justify-between"><span>Poor:</span><span class="text-red-400">>25%</span></div></div></div> <div class="bg-base-300 p-4 rounded-lg"><h4 class="font-semibold text-sm mb-2">Visceral Fat</h4> <div class="space-y-1 text-xs"><div class="flex justify-between"><span>Excellent:</span><span class="text-blue-400">≤4</span></div> <div class="flex justify-between"><span>Good:</span><span class="text-green-400">5-9</span></div> <div class="flex justify-between"><span>Fair:</span><span class="text-yellow-400">10-15</span></div> <div class="flex justify-between"><span>Poor:</span><span class="text-red-400">>15</span></div></div></div> <div class="bg-base-300 p-4 rounded-lg"><h4 class="font-semibold text-sm mb-2">Body Water %</h4> <div class="space-y-1 text-xs"><div class="flex justify-between"><span>Excellent:</span><span class="text-blue-400">≥61%</span></div> <div class="flex justify-between"><span>Good:</span><span class="text-green-400">55-60%</span></div> <div class="flex justify-between"><span>Fair:</span><span class="text-yellow-400">50-54%</span></div> <div class="flex justify-between"><span>Poor:</span><span class="text-red-400">&lt;50%</span></div></div></div></div></div></div></div>`);
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
function _page($$payload) {
  Progress($$payload);
}
export {
  _page as default
};
