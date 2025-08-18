import { E as getContext, F as sanitize_props, G as spread_props, I as slot, J as fallback, K as store_get, M as attr_class, N as escape_html, O as unsubscribe_stores, P as bind_props, D as pop, A as push, Q as stringify, R as attr } from "../../chunks/index2.js";
import "@sveltejs/kit/internal";
import "../../chunks/exports.js";
import "../../chunks/utils.js";
import "clsx";
import "../../chunks/state.svelte.js";
import { u as user, l as loading } from "../../chunks/auth.js";
import { h as healthMetrics } from "../../chunks/fitness.js";
import { I as Icon } from "../../chunks/Icon.js";
import { C as Calendar } from "../../chunks/calendar.js";
import { T as Trending_up, A as Award, a as Trophy } from "../../chunks/trophy.js";
const getStores = () => {
  const stores$1 = getContext("__svelte__");
  return {
    /** @type {typeof page} */
    page: {
      subscribe: stores$1.page.subscribe
    },
    /** @type {typeof navigating} */
    navigating: {
      subscribe: stores$1.navigating.subscribe
    },
    /** @type {typeof updated} */
    updated: stores$1.updated
  };
};
const page = {
  subscribe(fn) {
    const store = getStores().page;
    return store.subscribe(fn);
  }
};
function Chrome($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  /**
   * @license lucide-svelte v0.456.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */
  const iconNode = [
    ["circle", { "cx": "12", "cy": "12", "r": "10" }],
    ["circle", { "cx": "12", "cy": "12", "r": "4" }],
    ["line", { "x1": "21.17", "x2": "12", "y1": "8", "y2": "8" }],
    [
      "line",
      { "x1": "3.95", "x2": "8.54", "y1": "6.06", "y2": "14" }
    ],
    [
      "line",
      { "x1": "10.88", "x2": "15.46", "y1": "21.94", "y2": "14" }
    ]
  ];
  Icon($$payload, spread_props([
    { name: "chrome" },
    $$sanitized_props,
    {
      /**
       * @component @name Chrome
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIxMCIgLz4KICA8Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSI0IiAvPgogIDxsaW5lIHgxPSIyMS4xNyIgeDI9IjEyIiB5MT0iOCIgeTI9IjgiIC8+CiAgPGxpbmUgeDE9IjMuOTUiIHgyPSI4LjU0IiB5MT0iNi4wNiIgeTI9IjE0IiAvPgogIDxsaW5lIHgxPSIxMC44OCIgeDI9IjE1LjQ2IiB5MT0iMjEuOTQiIHkyPSIxNCIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/chrome
       * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
       *
       * @param {Object} props - Lucide icons props and any valid SVG attribute
       * @returns {FunctionalComponent} Svelte component
       * @deprecated Brand icons have been deprecated and are due to be removed, please refer to https://github.com/lucide-icons/lucide/issues/670. We recommend using https://simpleicons.org/?q=chrome instead. This icon will be removed in v1.0
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
function Info($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  /**
   * @license lucide-svelte v0.456.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */
  const iconNode = [
    ["circle", { "cx": "12", "cy": "12", "r": "10" }],
    ["path", { "d": "M12 16v-4" }],
    ["path", { "d": "M12 8h.01" }]
  ];
  Icon($$payload, spread_props([
    { name: "info" },
    $$sanitized_props,
    {
      /**
       * @component @name Info
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIxMCIgLz4KICA8cGF0aCBkPSJNMTIgMTZ2LTQiIC8+CiAgPHBhdGggZD0iTTEyIDhoLjAxIiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/info
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
function Panel_left_close($$payload, $$props) {
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
    ["path", { "d": "M9 3v18" }],
    ["path", { "d": "m16 15-3-3 3-3" }]
  ];
  Icon($$payload, spread_props([
    { name: "panel-left-close" },
    $$sanitized_props,
    {
      /**
       * @component @name PanelLeftClose
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cmVjdCB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHg9IjMiIHk9IjMiIHJ4PSIyIiAvPgogIDxwYXRoIGQ9Ik05IDN2MTgiIC8+CiAgPHBhdGggZD0ibTE2IDE1LTMtMyAzLTMiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/panel-left-close
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
function Panel_left_open($$payload, $$props) {
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
    ["path", { "d": "M9 3v18" }],
    ["path", { "d": "m14 9 3 3-3 3" }]
  ];
  Icon($$payload, spread_props([
    { name: "panel-left-open" },
    $$sanitized_props,
    {
      /**
       * @component @name PanelLeftOpen
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cmVjdCB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHg9IjMiIHk9IjMiIHJ4PSIyIiAvPgogIDxwYXRoIGQ9Ik05IDN2MTgiIC8+CiAgPHBhdGggZD0ibTE0IDkgMyAzLTMgMyIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/panel-left-open
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
function Settings($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  /**
   * @license lucide-svelte v0.456.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */
  const iconNode = [
    [
      "path",
      {
        "d": "M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"
      }
    ],
    ["circle", { "cx": "12", "cy": "12", "r": "3" }]
  ];
  Icon($$payload, spread_props([
    { name: "settings" },
    $$sanitized_props,
    {
      /**
       * @component @name Settings
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTIuMjIgMmgtLjQ0YTIgMiAwIDAgMC0yIDJ2LjE4YTIgMiAwIDAgMS0xIDEuNzNsLS40My4yNWEyIDIgMCAwIDEtMiAwbC0uMTUtLjA4YTIgMiAwIDAgMC0yLjczLjczbC0uMjIuMzhhMiAyIDAgMCAwIC43MyAyLjczbC4xNS4xYTIgMiAwIDAgMSAxIDEuNzJ2LjUxYTIgMiAwIDAgMS0xIDEuNzRsLS4xNS4wOWEyIDIgMCAwIDAtLjczIDIuNzNsLjIyLjM4YTIgMiAwIDAgMCAyLjczLjczbC4xNS0uMDhhMiAyIDAgMCAxIDIgMGwuNDMuMjVhMiAyIDAgMCAxIDEgMS43M1YyMGEyIDIgMCAwIDAgMiAyaC40NGEyIDIgMCAwIDAgMi0ydi0uMThhMiAyIDAgMCAxIDEtMS43M2wuNDMtLjI1YTIgMiAwIDAgMSAyIDBsLjE1LjA4YTIgMiAwIDAgMCAyLjczLS43M2wuMjItLjM5YTIgMiAwIDAgMC0uNzMtMi43M2wtLjE1LS4wOGEyIDIgMCAwIDEtMS0xLjc0di0uNWEyIDIgMCAwIDEgMS0xLjc0bC4xNS0uMDlhMiAyIDAgMCAwIC43My0yLjczbC0uMjItLjM4YTIgMiAwIDAgMC0yLjczLS43M2wtLjE1LjA4YTIgMiAwIDAgMS0yIDBsLS40My0uMjVhMiAyIDAgMCAxLTEtMS43M1Y0YTIgMiAwIDAgMC0yLTJ6IiAvPgogIDxjaXJjbGUgY3g9IjEyIiBjeT0iMTIiIHI9IjMiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/settings
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
function Sidebar($$payload, $$props) {
  push();
  var $$store_subs;
  let currentPath, baselineWeight, currentWeight, weightLoss;
  let sidebarDocked = fallback($$props["sidebarDocked"], true);
  let toggleDock = $$props["toggleDock"];
  currentPath = store_get($$store_subs ??= {}, "$page", page).url.pathname;
  baselineWeight = store_get($$store_subs ??= {}, "$healthMetrics", healthMetrics).length > 0 ? store_get($$store_subs ??= {}, "$healthMetrics", healthMetrics)[store_get($$store_subs ??= {}, "$healthMetrics", healthMetrics).length - 1].weight : 0;
  currentWeight = store_get($$store_subs ??= {}, "$healthMetrics", healthMetrics).length > 0 ? store_get($$store_subs ??= {}, "$healthMetrics", healthMetrics)[0].weight : 0;
  weightLoss = baselineWeight > 0 && currentWeight > 0 ? baselineWeight - currentWeight : 0;
  $$payload.out.push(`<aside class="min-h-full w-64 bg-base-200 text-base-content relative">`);
  if (sidebarDocked) {
    $$payload.out.push("<!--[-->");
    $$payload.out.push(`<button class="absolute top-4 right-4 btn btn-xs btn-ghost hidden lg:block z-10" title="Undock sidebar">`);
    Panel_left_close($$payload, { size: 16 });
    $$payload.out.push(`<!----></button>`);
  } else {
    $$payload.out.push("<!--[!-->");
  }
  $$payload.out.push(`<!--]--> <div class="p-4"><div class="flex justify-center mb-4"><div class="w-16 h-16 flex items-center justify-center text-4xl">💪</div></div> <h1 class="text-2xl font-bold text-primary">Project Glow Up</h1> <p class="text-sm text-base-content/70">Your Transformation Journey</p></div> <ul class="menu p-4 space-y-2"><li><a href="/"${attr_class(`flex items-center gap-3 ${stringify(currentPath === "/" ? "active" : "")}`)}>`);
  Chrome($$payload, { size: 20 });
  $$payload.out.push(`<!----> ${escape_html(store_get($$store_subs ??= {}, "$user", user) ? "Dashboard" : "Home")}</a></li> <li><a href="/schedule"${attr_class(`flex items-center gap-3 ${stringify(currentPath === "/schedule" ? "active" : "")}`)}>`);
  Calendar($$payload, { size: 20 });
  $$payload.out.push(`<!----> Schedule</a></li> <li><a href="/progress"${attr_class(`flex items-center gap-3 ${stringify(currentPath === "/progress" ? "active" : "")}`)}>`);
  Trending_up($$payload, { size: 20 });
  $$payload.out.push(`<!----> Progress</a></li> <li><a href="/achievements"${attr_class(`flex items-center gap-3 ${stringify(currentPath === "/achievements" ? "active" : "")}`)}>`);
  Award($$payload, { size: 20 });
  $$payload.out.push(`<!----> Achievements</a></li> <li><a href="/trophy-wall"${attr_class(`flex items-center gap-3 ${stringify(currentPath === "/trophy-wall" ? "active" : "")}`)}>`);
  Trophy($$payload, { size: 20 });
  $$payload.out.push(`<!----> Trophy Wall</a></li> <li><a href="/about"${attr_class(`flex items-center gap-3 ${stringify(currentPath === "/about" ? "active" : "")}`)}>`);
  Info($$payload, { size: 20 });
  $$payload.out.push(`<!----> About</a></li> <li><a href="/settings"${attr_class(`flex items-center gap-3 ${stringify(currentPath === "/settings" ? "active" : "")}`)}>`);
  Settings($$payload, { size: 20 });
  $$payload.out.push(`<!----> Settings</a></li></ul> <div class="p-4"><button class="btn btn-outline btn-sm w-full">Sign Out</button></div> <div class="p-4 mt-8"><div class="bg-base-300 rounded-lg p-4"><h3 class="font-semibold mb-2">Quick Stats</h3> <div class="text-sm space-y-1"><div>Age: 37 years</div> <div>Target: Military Standards</div> <div class="text-success">Started: Aug 17, 2025</div> <div class="text-warning">Goal: Jan 1, 2026</div> `);
  if (weightLoss > 0) {
    $$payload.out.push("<!--[-->");
    $$payload.out.push(`<div class="text-primary font-semibold">Lost: ${escape_html(weightLoss.toFixed(1))} lbs</div>`);
  } else {
    $$payload.out.push("<!--[!-->");
    if (store_get($$store_subs ??= {}, "$healthMetrics", healthMetrics).length > 0) {
      $$payload.out.push("<!--[-->");
      $$payload.out.push(`<div class="text-info">Weight: ${escape_html(currentWeight.toFixed(1))} lbs</div>`);
    } else {
      $$payload.out.push("<!--[!-->");
    }
    $$payload.out.push(`<!--]-->`);
  }
  $$payload.out.push(`<!--]--></div></div></div></aside>`);
  if ($$store_subs) unsubscribe_stores($$store_subs);
  bind_props($$props, { sidebarDocked, toggleDock });
  pop();
}
function _layout($$payload, $$props) {
  push();
  var $$store_subs;
  let isPublicPage, isPublicContentPage;
  let sidebarOpen = false;
  let sidebarDocked = true;
  function toggleDock() {
    sidebarDocked = !sidebarDocked;
  }
  isPublicPage = ["/auth"].includes(store_get($$store_subs ??= {}, "$page", page).url.pathname);
  isPublicContentPage = ["/about", "/achievements"].includes(store_get($$store_subs ??= {}, "$page", page).url.pathname);
  if (store_get($$store_subs ??= {}, "$loading", loading)) {
    $$payload.out.push("<!--[-->");
    $$payload.out.push(`<div class="min-h-screen flex items-center justify-center"><div class="loading loading-spinner loading-lg"></div></div>`);
  } else {
    $$payload.out.push("<!--[!-->");
    if (!store_get($$store_subs ??= {}, "$user", user) && !isPublicPage && !isPublicContentPage) {
      $$payload.out.push("<!--[-->");
      $$payload.out.push(`<script>
		window.location.href = '/auth';
	<\/script><!---->`);
    } else {
      $$payload.out.push("<!--[!-->");
      if (!store_get($$store_subs ??= {}, "$user", user) && isPublicPage) {
        $$payload.out.push("<!--[-->");
        $$payload.out.push(`<main><!---->`);
        slot($$payload, $$props, "default", {});
        $$payload.out.push(`<!----></main>`);
      } else {
        $$payload.out.push("<!--[!-->");
        $$payload.out.push(`<div${attr_class(`drawer ${stringify(sidebarDocked ? "lg:drawer-open" : "")}`)}><input id="drawer-toggle" type="checkbox" class="drawer-toggle"${attr("checked", sidebarOpen, true)}/> <div class="drawer-content flex flex-col"><div${attr_class(`navbar ${stringify(sidebarDocked ? "lg:hidden" : "")} bg-base-200`)}><div class="flex-none"><label for="drawer-toggle" class="btn btn-square btn-ghost"><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg></label></div> <div class="flex-1 flex items-center gap-3"><div class="w-8 h-8 flex items-center justify-center text-2xl">💪</div> <h1 class="text-xl font-bold">Project Glow Up</h1></div> <div class="flex-none hidden lg:block"><button class="btn btn-square btn-ghost"${attr("title", sidebarDocked ? "Undock sidebar" : "Dock sidebar")}>`);
        if (sidebarDocked) {
          $$payload.out.push("<!--[-->");
          Panel_left_close($$payload, { size: 20 });
        } else {
          $$payload.out.push("<!--[!-->");
          Panel_left_open($$payload, { size: 20 });
        }
        $$payload.out.push(`<!--]--></button></div></div> <main${attr_class(`flex-1 p-4 ${stringify(!sidebarDocked ? "lg:ml-0" : "")}`)}><!---->`);
        slot($$payload, $$props, "default", {});
        $$payload.out.push(`<!----></main></div> <div class="drawer-side"><label for="drawer-toggle" class="drawer-overlay"></label> `);
        Sidebar($$payload, { sidebarDocked, toggleDock });
        $$payload.out.push(`<!----></div></div>`);
      }
      $$payload.out.push(`<!--]-->`);
    }
    $$payload.out.push(`<!--]-->`);
  }
  $$payload.out.push(`<!--]-->`);
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
export {
  _layout as default
};
