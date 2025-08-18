import "clsx";
import { S as Shield } from "../../../chunks/shield.js";
import { F as sanitize_props, G as spread_props, I as slot } from "../../../chunks/index2.js";
import { I as Icon } from "../../../chunks/Icon.js";
import { C as Calendar } from "../../../chunks/calendar.js";
import { L as Lock } from "../../../chunks/lock.js";
import { T as Triangle_alert } from "../../../chunks/triangle-alert.js";
import { M as Mail } from "../../../chunks/mail.js";
function Database($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  /**
   * @license lucide-svelte v0.456.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */
  const iconNode = [
    ["ellipse", { "cx": "12", "cy": "5", "rx": "9", "ry": "3" }],
    ["path", { "d": "M3 5V19A9 3 0 0 0 21 19V5" }],
    ["path", { "d": "M3 12A9 3 0 0 0 21 12" }]
  ];
  Icon($$payload, spread_props([
    { name: "database" },
    $$sanitized_props,
    {
      /**
       * @component @name Database
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8ZWxsaXBzZSBjeD0iMTIiIGN5PSI1IiByeD0iOSIgcnk9IjMiIC8+CiAgPHBhdGggZD0iTTMgNVYxOUE5IDMgMCAwIDAgMjEgMTlWNSIgLz4KICA8cGF0aCBkPSJNMyAxMkE5IDMgMCAwIDAgMjEgMTIiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/database
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
function Eye($$payload, $$props) {
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
        "d": "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"
      }
    ],
    ["circle", { "cx": "12", "cy": "12", "r": "3" }]
  ];
  Icon($$payload, spread_props([
    { name: "eye" },
    $$sanitized_props,
    {
      /**
       * @component @name Eye
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMi4wNjIgMTIuMzQ4YTEgMSAwIDAgMSAwLS42OTYgMTAuNzUgMTAuNzUgMCAwIDEgMTkuODc2IDAgMSAxIDAgMCAxIDAgLjY5NiAxMC43NSAxMC43NSAwIDAgMS0xOS44NzYgMCIgLz4KICA8Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIzIiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/eye
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
function User_check($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  /**
   * @license lucide-svelte v0.456.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */
  const iconNode = [
    ["path", { "d": "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" }],
    ["circle", { "cx": "9", "cy": "7", "r": "4" }],
    ["polyline", { "points": "16 11 18 13 22 9" }]
  ];
  Icon($$payload, spread_props([
    { name: "user-check" },
    $$sanitized_props,
    {
      /**
       * @component @name UserCheck
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTYgMjF2LTJhNCA0IDAgMCAwLTQtNEg2YTQgNCAwIDAgMC00IDR2MiIgLz4KICA8Y2lyY2xlIGN4PSI5IiBjeT0iNyIgcj0iNCIgLz4KICA8cG9seWxpbmUgcG9pbnRzPSIxNiAxMSAxOCAxMyAyMiA5IiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/user-check
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
function _page($$payload) {
  $$payload.out.push(`<div class="max-w-4xl mx-auto space-y-8"><div class="text-center"><div class="flex justify-center mb-4"><div class="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">`);
  Shield($$payload, { size: 32, class: "text-primary" });
  $$payload.out.push(`<!----></div></div> <h1 class="text-4xl font-bold mb-4">Privacy Policy</h1> <p class="text-base-content/70 text-lg">Your privacy is important to us. This policy explains how we collect, use, and protect your information.</p> <div class="text-sm text-base-content/50 mt-4">Last updated: January 2025</div></div> <div class="card bg-base-200"><div class="card-body"><h2 class="card-title text-2xl mb-4 flex items-center gap-2">`);
  Eye($$payload, { size: 24, class: "text-info" });
  $$payload.out.push(`<!----> Information We Collect</h2> <div class="space-y-6"><div><h3 class="text-lg font-semibold mb-2 flex items-center gap-2">`);
  User_check($$payload, { size: 20, class: "text-success" });
  $$payload.out.push(`<!----> Account Information</h3> <ul class="list-disc list-inside space-y-1 text-base-content/80 ml-6"><li>Email address (for account creation and authentication)</li> <li>Password (encrypted and securely stored)</li> <li>Account creation and last login dates</li></ul></div> <div><h3 class="text-lg font-semibold mb-2 flex items-center gap-2">`);
  Database($$payload, { size: 20, class: "text-warning" });
  $$payload.out.push(`<!----> Health and Fitness Data</h3> <ul class="list-disc list-inside space-y-1 text-base-content/80 ml-6"><li>Body composition metrics (weight, BMI, body fat percentage, etc.)</li> <li>Exercise logs (workout type, duration, distance, calories burned)</li> <li>Progress tracking data and achievement records</li> <li>Personal fitness goals and settings</li> <li>Workout streaks and performance statistics</li></ul></div> <div><h3 class="text-lg font-semibold mb-2 flex items-center gap-2">`);
  Calendar($$payload, { size: 20, class: "text-accent" });
  $$payload.out.push(`<!----> Usage Information</h3> <ul class="list-disc list-inside space-y-1 text-base-content/80 ml-6"><li>App usage patterns and feature interactions</li> <li>Login frequency and session duration</li> <li>Device and browser information (for compatibility)</li></ul></div></div></div></div> <div class="card bg-base-200"><div class="card-body"><h2 class="card-title text-2xl mb-4 flex items-center gap-2">`);
  Database($$payload, { size: 24, class: "text-primary" });
  $$payload.out.push(`<!----> How We Use Your Information</h2> <div class="grid grid-cols-1 md:grid-cols-2 gap-6"><div><h3 class="font-semibold mb-2 text-success">Core Functionality</h3> <ul class="list-disc list-inside space-y-1 text-sm text-base-content/80"><li>Provide fitness tracking and progress monitoring</li> <li>Calculate health metrics and achievement progress</li> <li>Generate personalized workout schedules</li> <li>Display progress charts and analytics</li></ul></div> <div><h3 class="font-semibold mb-2 text-info">Account Management</h3> <ul class="list-disc list-inside space-y-1 text-sm text-base-content/80"><li>Authenticate and secure your account</li> <li>Maintain your personal fitness profile</li> <li>Sync data across your devices</li> <li>Provide customer support when needed</li></ul></div></div></div></div> <div class="card bg-base-200"><div class="card-body"><h2 class="card-title text-2xl mb-4 flex items-center gap-2">`);
  Lock($$payload, { size: 24, class: "text-success" });
  $$payload.out.push(`<!----> Data Security &amp; Storage</h2> <div class="space-y-4"><div class="alert alert-success">`);
  Shield($$payload, { size: 20 });
  $$payload.out.push(`<!----> <div><h3 class="font-bold">Secure Cloud Storage</h3> <p class="text-sm">Your data is stored securely using Supabase, a trusted cloud database platform with enterprise-grade security.</p></div></div> <div class="grid grid-cols-1 md:grid-cols-2 gap-4"><div class="bg-base-300 p-4 rounded-lg"><h4 class="font-semibold mb-2">Encryption</h4> <p class="text-sm text-base-content/80">All data is encrypted in transit and at rest using industry-standard encryption protocols.</p></div> <div class="bg-base-300 p-4 rounded-lg"><h4 class="font-semibold mb-2">Access Control</h4> <p class="text-sm text-base-content/80">Row-level security ensures you can only access your own data. No other users can view your information.</p></div> <div class="bg-base-300 p-4 rounded-lg"><h4 class="font-semibold mb-2">Data Backup</h4> <p class="text-sm text-base-content/80">Regular automated backups protect against data loss and ensure service continuity.</p></div> <div class="bg-base-300 p-4 rounded-lg"><h4 class="font-semibold mb-2">Monitoring</h4> <p class="text-sm text-base-content/80">Continuous security monitoring and logging help detect and prevent unauthorized access.</p></div></div></div></div></div> <div class="card bg-base-200"><div class="card-body"><h2 class="card-title text-2xl mb-4 flex items-center gap-2">`);
  User_check($$payload, { size: 24, class: "text-warning" });
  $$payload.out.push(`<!----> Your Privacy Rights</h2> <div class="grid grid-cols-1 md:grid-cols-2 gap-6"><div><h3 class="font-semibold mb-2 text-primary">Data Access &amp; Control</h3> <ul class="list-disc list-inside space-y-1 text-sm text-base-content/80"><li>View all your stored data through the app interface</li> <li>Update or correct your information at any time</li> <li>Export your data in a portable format</li> <li>Delete specific data entries or your entire account</li></ul></div> <div><h3 class="font-semibold mb-2 text-secondary">Privacy Choices</h3> <ul class="list-disc list-inside space-y-1 text-sm text-base-content/80"><li>Control what data you share with the application</li> <li>Opt out of non-essential data collection</li> <li>Request data portability to another service</li> <li>Contact us with privacy concerns or questions</li></ul></div></div></div></div> <div class="card bg-base-200"><div class="card-body"><h2 class="card-title text-2xl mb-4 flex items-center gap-2">`);
  Triangle_alert($$payload, { size: 24, class: "text-error" });
  $$payload.out.push(`<!----> Data Sharing &amp; Third Parties</h2> <div class="alert alert-info mb-4">`);
  Shield($$payload, { size: 20 });
  $$payload.out.push(`<!----> <div><h3 class="font-bold">We Do NOT Sell Your Data</h3> <p class="text-sm">Project Glow Up never sells, rents, or trades your personal information to third parties for marketing purposes.</p></div></div> <div class="space-y-4"><div><h3 class="font-semibold mb-2">Limited Sharing Scenarios</h3> <p class="text-sm text-base-content/80 mb-2">We may share your information only in these specific circumstances:</p> <ul class="list-disc list-inside space-y-1 text-sm text-base-content/80 ml-4"><li><strong>Service Providers:</strong> Trusted partners like Supabase who help us operate the service</li> <li><strong>Legal Requirements:</strong> When required by law or to protect our legal rights</li> <li><strong>Safety:</strong> To prevent harm to you or others in emergency situations</li> <li><strong>Business Transfer:</strong> In the unlikely event of a merger or acquisition (with notice)</li></ul></div></div></div></div> <div class="card bg-base-200"><div class="card-body"><h2 class="card-title text-2xl mb-4 flex items-center gap-2">`);
  Mail($$payload, { size: 24, class: "text-accent" });
  $$payload.out.push(`<!----> Contact &amp; Policy Updates</h2> <div class="grid grid-cols-1 md:grid-cols-2 gap-6"><div><h3 class="font-semibold mb-2">Questions or Concerns?</h3> <p class="text-sm text-base-content/80 mb-2">If you have any questions about this privacy policy or how we handle your data, please contact us:</p> <div class="bg-base-300 p-3 rounded text-sm"><p><strong>Creator:</strong> Miguel Viddy</p> <p><strong>Project:</strong> Project Glow Up</p> <p><strong>Contact:</strong> Through the application settings</p></div></div> <div><h3 class="font-semibold mb-2">Policy Updates</h3> <p class="text-sm text-base-content/80 mb-2">We may update this privacy policy from time to time. When we do:</p> <ul class="list-disc list-inside space-y-1 text-sm text-base-content/80"><li>We'll update the "Last updated" date</li> <li>Significant changes will be highlighted in the app</li> <li>Continued use constitutes acceptance of updates</li> <li>You can always review the current policy here</li></ul></div></div></div></div> <div class="text-center py-8"><div class="flex justify-center gap-4 mb-4"><a href="/terms" class="btn btn-outline btn-sm">Terms of Service</a> <a href="/about" class="btn btn-outline btn-sm">About Project Glow Up</a> <a href="/" class="btn btn-primary btn-sm">Back to App</a></div> <p class="text-xs text-base-content/50">This privacy policy is designed to be transparent and user-friendly while ensuring your data protection rights.</p></div></div>`);
}
export {
  _page as default
};
