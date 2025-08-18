import "clsx";
import { F as sanitize_props, G as spread_props, I as slot, N as escape_html, R as attr, M as attr_class, D as pop, A as push } from "../../../chunks/index2.js";
import "../../../chunks/auth.js";
import { M as Mail } from "../../../chunks/mail.js";
import { L as Lock } from "../../../chunks/lock.js";
import { I as Icon } from "../../../chunks/Icon.js";
function Log_in($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  /**
   * @license lucide-svelte v0.456.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */
  const iconNode = [
    ["path", { "d": "M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" }],
    ["polyline", { "points": "10 17 15 12 10 7" }],
    ["line", { "x1": "15", "x2": "3", "y1": "12", "y2": "12" }]
  ];
  Icon($$payload, spread_props([
    { name: "log-in" },
    $$sanitized_props,
    {
      /**
       * @component @name LogIn
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTUgM2g0YTIgMiAwIDAgMSAyIDJ2MTRhMiAyIDAgMCAxLTIgMmgtNCIgLz4KICA8cG9seWxpbmUgcG9pbnRzPSIxMCAxNyAxNSAxMiAxMCA3IiAvPgogIDxsaW5lIHgxPSIxNSIgeDI9IjMiIHkxPSIxMiIgeTI9IjEyIiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/log-in
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
function Auth($$payload, $$props) {
  push();
  let email = "";
  let password = "";
  let loading = false;
  $$payload.out.push(`<div class="min-h-screen flex items-center justify-center bg-base-100 p-4"><div class="card w-full max-w-md bg-base-200 shadow-xl"><div class="card-body"><div class="text-center mb-6"><div class="flex justify-center mb-4"><div class="w-20 h-20 flex items-center justify-center text-5xl">💪</div></div> <h1 class="text-2xl font-bold">Project Glow Up: A Fitness Tracker</h1> <p class="text-base-content/70">${escape_html("Sign in to your account")}</p></div> <form class="space-y-4"><div class="form-control"><label class="label"><span class="label-text" for="email">Email</span></label> <div class="relative"><input type="email" placeholder="Enter your email" class="input input-bordered w-full pl-10" id="email"${attr("value", email)} required/> `);
  Mail($$payload, {
    size: 20,
    class: "absolute left-3 top-1/2 transform -translate-y-1/2 text-base-content/50"
  });
  $$payload.out.push(`<!----></div></div> <div class="form-control"><label class="label"><span class="label-text" for="password">Password</span></label> <div class="relative"><input type="password" placeholder="Enter your password" class="input input-bordered w-full pl-10" id="password"${attr("value", password)} required/> `);
  Lock($$payload, {
    size: 20,
    class: "absolute left-3 top-1/2 transform -translate-y-1/2 text-base-content/50"
  });
  $$payload.out.push(`<!----></div></div> `);
  {
    $$payload.out.push("<!--[!-->");
  }
  $$payload.out.push(`<!--]--> <button type="submit"${attr_class("btn btn-primary w-full", void 0, { "loading": loading })}${attr("disabled", loading, true)}>`);
  {
    $$payload.out.push("<!--[-->");
    {
      $$payload.out.push("<!--[!-->");
      Log_in($$payload, { size: 20 });
      $$payload.out.push(`<!----> Sign In`);
    }
    $$payload.out.push(`<!--]-->`);
  }
  $$payload.out.push(`<!--]--></button></form> <div class="divider">OR</div> <button type="button" class="btn btn-ghost w-full">${escape_html("Don't have an account? Sign up")}</button> <div class="text-center mt-6 pt-4 border-t border-base-300"><p class="text-xs text-base-content/60 mb-2">By ${escape_html("signing in")}, you agree to our</p> <div class="flex justify-center gap-4 text-xs"><a href="/terms" class="link link-hover text-primary">Terms of Service</a> <span class="text-base-content/40">•</span> <a href="/privacy" class="link link-hover text-primary">Privacy Policy</a></div></div></div></div></div>`);
  pop();
}
function _page($$payload) {
  Auth($$payload);
}
export {
  _page as default
};
