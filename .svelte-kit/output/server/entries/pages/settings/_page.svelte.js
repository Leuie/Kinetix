import "clsx";
import { K as store_get, R as attr, N as escape_html, O as unsubscribe_stores, D as pop, A as push } from "../../../chunks/index2.js";
import { a as userSettings } from "../../../chunks/fitness.js";
import "../../../chunks/auth.js";
import { T as Target } from "../../../chunks/target.js";
function Settings($$payload, $$props) {
  push();
  var $$store_subs;
  let daysSinceStart, daysUntilGoal;
  daysSinceStart = Math.floor(((/* @__PURE__ */ new Date()).getTime() - new Date(store_get($$store_subs ??= {}, "$userSettings", userSettings).start_date).getTime()) / (1e3 * 60 * 60 * 24));
  daysUntilGoal = Math.floor(((/* @__PURE__ */ new Date("2026-01-01")).getTime() - (/* @__PURE__ */ new Date()).getTime()) / (1e3 * 60 * 60 * 24));
  $$payload.out.push(`<div class="space-y-6"><div><h1 class="text-3xl font-bold">Settings</h1> <p class="text-base-content/70">Customize your transformation tracker</p></div> <div class="card bg-base-200"><div class="card-body"><h2 class="card-title mb-4">Personal Information</h2> <div class="grid grid-cols-1 md:grid-cols-2 gap-4"><div class="form-control"><label class="label"><span class="label-text">Current Age</span></label> <input type="number" class="input input-bordered"${attr("value", store_get($$store_subs ??= {}, "$userSettings", userSettings).current_age)} readonly/> <label class="label"><span class="label-text-alt">Fixed for fitness standards calculation</span></label></div> <div class="form-control"><label class="label"><span class="label-text">Start Date (37th Birthday)</span></label> <input type="date" class="input input-bordered"${attr("value", store_get($$store_subs ??= {}, "$userSettings", userSettings).start_date)}/> <label class="label"><span class="label-text-alt">`);
  if (daysSinceStart < 0) {
    $$payload.out.push("<!--[-->");
    $$payload.out.push(`${escape_html(Math.abs(daysSinceStart))} days until start`);
  } else {
    $$payload.out.push("<!--[!-->");
    $$payload.out.push(`${escape_html(daysSinceStart)} days since start`);
  }
  $$payload.out.push(`<!--]--></span></label></div> <div class="form-control"><label class="label"><span class="label-text">Goal Date</span></label> <input type="date" class="input input-bordered" value="2026-01-01" readonly/> <label class="label"><span class="label-text-alt">${escape_html(daysUntilGoal)} days until goal weight</span></label></div></div></div></div> <div class="card bg-base-200"><div class="card-body"><h2 class="card-title mb-4 flex items-center gap-2">`);
  Target($$payload, { size: 20 });
  $$payload.out.push(`<!----> Goals &amp; Targets</h2> <div class="grid grid-cols-1 md:grid-cols-2 gap-4"><div class="form-control"><label class="label"><span class="label-text">Target Weight (lbs)</span></label> <input type="number" class="input input-bordered"${attr("value", store_get($$store_subs ??= {}, "$userSettings", userSettings).target_weight)} step="0.1"/> <label class="label"><span class="label-text-alt">Fitness standard weight goal</span></label></div> <div class="form-control"><label class="label"><span class="label-text">Target Body Fat %</span></label> <input type="number" class="input input-bordered"${attr("value", 12)} readonly/> <label class="label"><span class="label-text-alt">Optimal for 37-year-old male</span></label></div></div> <div class="mt-4"><button class="btn btn-primary">Save Settings</button></div></div></div> <div class="card bg-base-200"><div class="card-body"><h2 class="card-title mb-4">Data Management</h2> <div class="grid grid-cols-1 md:grid-cols-3 gap-4"><div class="alert alert-success"><span>✅ Your data is now stored securely in Supabase cloud database!</span></div></div></div></div> <div class="card bg-base-200"><div class="card-body"><h2 class="card-title mb-4">Fitness Standards (Male, Age 37)</h2> <div class="overflow-x-auto"><table class="table"><thead><tr><th>Metric</th><th class="text-blue-400">Excellent</th><th class="text-green-400">Good</th><th class="text-yellow-400">Fair</th><th class="text-red-400">Poor</th></tr></thead><tbody><tr><td>BMI</td><td>22-23</td><td>18.5-24.9</td><td>25-29.9</td><td>≥30 or &lt;18.5</td></tr><tr><td>Body Fat %</td><td>8-11%</td><td>12-19%</td><td>20-25%</td><td>>25%</td></tr><tr><td>Visceral Fat</td><td>≤4</td><td>5-9</td><td>10-15</td><td>>15</td></tr><tr><td>Body Water %</td><td>≥61%</td><td>55-60%</td><td>50-54%</td><td>&lt;50%</td></tr><tr><td>Skeletal Muscle %</td><td>≥41%</td><td>35-40%</td><td>30-34%</td><td>&lt;30%</td></tr><tr><td>Protein %</td><td>≥18%</td><td>16-17%</td><td>14-15%</td><td>&lt;14%</td></tr></tbody></table></div></div></div></div>`);
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
function _page($$payload) {
  Settings($$payload);
}
export {
  _page as default
};
