import "clsx";
import { F as sanitize_props, G as spread_props, I as slot } from "../../../chunks/index2.js";
import { I as Icon } from "../../../chunks/Icon.js";
import { C as Circle_check } from "../../../chunks/circle-check.js";
import { S as Shield } from "../../../chunks/shield.js";
import { T as Triangle_alert } from "../../../chunks/triangle-alert.js";
import { C as Clock } from "../../../chunks/clock.js";
function Circle($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  /**
   * @license lucide-svelte v0.456.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */
  const iconNode = [["circle", { "cx": "12", "cy": "12", "r": "10" }]];
  Icon($$payload, spread_props([
    { name: "circle" },
    $$sanitized_props,
    {
      /**
       * @component @name Circle
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIxMCIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/circle
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
function File_text($$payload, $$props) {
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
        "d": "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"
      }
    ],
    ["path", { "d": "M14 2v4a2 2 0 0 0 2 2h4" }],
    ["path", { "d": "M10 9H8" }],
    ["path", { "d": "M16 13H8" }],
    ["path", { "d": "M16 17H8" }]
  ];
  Icon($$payload, spread_props([
    { name: "file-text" },
    $$sanitized_props,
    {
      /**
       * @component @name FileText
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTUgMkg2YTIgMiAwIDAgMC0yIDJ2MTZhMiAyIDAgMCAwIDIgMmgxMmEyIDIgMCAwIDAgMi0yVjdaIiAvPgogIDxwYXRoIGQ9Ik0xNCAydjRhMiAyIDAgMCAwIDIgMmg0IiAvPgogIDxwYXRoIGQ9Ik0xMCA5SDgiIC8+CiAgPHBhdGggZD0iTTE2IDEzSDgiIC8+CiAgPHBhdGggZD0iTTE2IDE3SDgiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/file-text
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
function Gavel($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  /**
   * @license lucide-svelte v0.456.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */
  const iconNode = [
    ["path", { "d": "m14.5 12.5-8 8a2.119 2.119 0 1 1-3-3l8-8" }],
    ["path", { "d": "m16 16 6-6" }],
    ["path", { "d": "m8 8 6-6" }],
    ["path", { "d": "m9 7 8 8" }],
    ["path", { "d": "m21 11-8-8" }]
  ];
  Icon($$payload, spread_props([
    { name: "gavel" },
    $$sanitized_props,
    {
      /**
       * @component @name Gavel
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJtMTQuNSAxMi41LTggOGEyLjExOSAyLjExOSAwIDEgMS0zLTNsOC04IiAvPgogIDxwYXRoIGQ9Im0xNiAxNiA2LTYiIC8+CiAgPHBhdGggZD0ibTggOCA2LTYiIC8+CiAgPHBhdGggZD0ibTkgNyA4IDgiIC8+CiAgPHBhdGggZD0ibTIxIDExLTgtOCIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/gavel
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
function Scale($$payload, $$props) {
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
      { "d": "m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" }
    ],
    [
      "path",
      { "d": "m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" }
    ],
    ["path", { "d": "M7 21h10" }],
    ["path", { "d": "M12 3v18" }],
    ["path", { "d": "M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2" }]
  ];
  Icon($$payload, spread_props([
    { name: "scale" },
    $$sanitized_props,
    {
      /**
       * @component @name Scale
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJtMTYgMTYgMy04IDMgOGMtLjg3LjY1LTEuOTIgMS0zIDFzLTIuMTMtLjM1LTMtMVoiIC8+CiAgPHBhdGggZD0ibTIgMTYgMy04IDMgOGMtLjg3LjY1LTEuOTIgMS0zIDFzLTIuMTMtLjM1LTMtMVoiIC8+CiAgPHBhdGggZD0iTTcgMjFoMTAiIC8+CiAgPHBhdGggZD0iTTEyIDN2MTgiIC8+CiAgPHBhdGggZD0iTTMgN2gyYzIgMCA1LTEgNy0yIDIgMSA1IDIgNyAyaDIiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/scale
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
function Users($$payload, $$props) {
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
    ["path", { "d": "M22 21v-2a4 4 0 0 0-3-3.87" }],
    ["path", { "d": "M16 3.13a4 4 0 0 1 0 7.75" }]
  ];
  Icon($$payload, spread_props([
    { name: "users" },
    $$sanitized_props,
    {
      /**
       * @component @name Users
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTYgMjF2LTJhNCA0IDAgMCAwLTQtNEg2YTQgNCAwIDAgMC00IDR2MiIgLz4KICA8Y2lyY2xlIGN4PSI5IiBjeT0iNyIgcj0iNCIgLz4KICA8cGF0aCBkPSJNMjIgMjF2LTJhNCA0IDAgMCAwLTMtMy44NyIgLz4KICA8cGF0aCBkPSJNMTYgMy4xM2E0IDQgMCAwIDEgMCA3Ljc1IiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/users
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
  $$payload.out.push(`<div class="max-w-4xl mx-auto space-y-8"><div class="text-center"><div class="flex justify-center mb-4"><div class="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center">`);
  File_text($$payload, { size: 32, class: "text-secondary" });
  $$payload.out.push(`<!----></div></div> <h1 class="text-4xl font-bold mb-4">Terms of Service</h1> <p class="text-base-content/70 text-lg">Please read these terms carefully before using Project Glow Up fitness tracking application.</p> <div class="text-sm text-base-content/50 mt-4">Last updated: January 2025</div></div> <div class="card bg-base-200"><div class="card-body"><h2 class="card-title text-2xl mb-4 flex items-center gap-2">`);
  Scale($$payload, { size: 24, class: "text-primary" });
  $$payload.out.push(`<!----> Agreement to Terms</h2> <div class="alert alert-info mb-4">`);
  Circle_check($$payload, { size: 20 });
  $$payload.out.push(`<!----> <div><h3 class="font-bold">By using Project Glow Up, you agree to these terms</h3> <p class="text-sm">Creating an account or using any features constitutes acceptance of this agreement.</p></div></div> <div class="space-y-4"><p class="text-base-content/80">These Terms of Service ("Terms") govern your use of the Project Glow Up fitness tracking application ("Service") 
					created by Miguel Viddy ("we," "us," or "our"). By accessing or using our Service, you agree to be bound by these Terms.</p> <div class="bg-base-300 p-4 rounded-lg"><h3 class="font-semibold mb-2">Key Points:</h3> <ul class="list-disc list-inside space-y-1 text-sm text-base-content/80"><li>You must be at least 13 years old to use this service</li> <li>You are responsible for maintaining account security</li> <li>The service is provided "as is" for personal fitness tracking</li> <li>We reserve the right to modify or discontinue features</li></ul></div></div></div></div> <div class="card bg-base-200"><div class="card-body"><h2 class="card-title text-2xl mb-4 flex items-center gap-2">`);
  Shield($$payload, { size: 24, class: "text-success" });
  $$payload.out.push(`<!----> Service Description</h2> <div class="space-y-4"><p class="text-base-content/80">Project Glow Up is a comprehensive fitness tracking application designed to help users achieve military-grade 
					physical standards through structured training plans, health metric tracking, and achievement systems.</p> <div class="grid grid-cols-1 md:grid-cols-2 gap-4"><div class="bg-base-300 p-4 rounded-lg"><h3 class="font-semibold mb-2 text-primary">What We Provide</h3> <ul class="list-disc list-inside space-y-1 text-sm text-base-content/80"><li>Health metrics tracking (13+ measurements)</li> <li>Progressive 20-week training plans</li> <li>50-achievement gamification system</li> <li>Progress visualization and analytics</li> <li>Secure cloud data storage</li></ul></div> <div class="bg-base-300 p-4 rounded-lg"><h3 class="font-semibold mb-2 text-warning">What We Don't Provide</h3> <ul class="list-disc list-inside space-y-1 text-sm text-base-content/80"><li>Medical advice or diagnosis</li> <li>Professional fitness coaching</li> <li>Guaranteed fitness results</li> <li>Equipment or gym access</li> <li>Nutritional planning services</li></ul></div></div></div></div></div> <div class="card bg-base-200"><div class="card-body"><h2 class="card-title text-2xl mb-4 flex items-center gap-2">`);
  Users($$payload, { size: 24, class: "text-info" });
  $$payload.out.push(`<!----> Your Responsibilities</h2> <div class="space-y-6"><div><h3 class="text-lg font-semibold mb-2 flex items-center gap-2">`);
  Circle_check($$payload, { size: 20, class: "text-success" });
  $$payload.out.push(`<!----> Account Security</h3> <ul class="list-disc list-inside space-y-1 text-base-content/80 ml-6"><li>Provide accurate information during registration</li> <li>Maintain the confidentiality of your login credentials</li> <li>Notify us immediately of any unauthorized account access</li> <li>Use a strong, unique password for your account</li></ul></div> <div><h3 class="text-lg font-semibold mb-2 flex items-center gap-2">`);
  Shield($$payload, { size: 20, class: "text-warning" });
  $$payload.out.push(`<!----> Appropriate Use</h3> <ul class="list-disc list-inside space-y-1 text-base-content/80 ml-6"><li>Use the service only for personal fitness tracking</li> <li>Provide accurate health and fitness data</li> <li>Respect the intellectual property of the application</li> <li>Do not attempt to reverse engineer or hack the service</li> <li>Do not share your account with others</li></ul></div> <div><h3 class="text-lg font-semibold mb-2 flex items-center gap-2">`);
  Triangle_alert($$payload, { size: 20, class: "text-error" });
  $$payload.out.push(`<!----> Health &amp; Safety</h3> <div class="alert alert-warning mb-2">`);
  Triangle_alert($$payload, { size: 16 });
  $$payload.out.push(`<!----> <span class="text-sm"><strong>Important:</strong> Always consult healthcare professionals before starting any fitness program.</span></div> <ul class="list-disc list-inside space-y-1 text-base-content/80 ml-6"><li>Consult a doctor before beginning any exercise program</li> <li>Stop exercising if you experience pain or discomfort</li> <li>Use the app's suggestions as guidance, not medical advice</li> <li>Take responsibility for your own health and safety</li></ul></div></div></div></div> <div class="card bg-base-200"><div class="card-body"><h2 class="card-title text-2xl mb-4 flex items-center gap-2">`);
  Circle($$payload, { size: 24, class: "text-error" });
  $$payload.out.push(`<!----> Prohibited Activities</h2> <div class="alert alert-error mb-4">`);
  Circle($$payload, { size: 20 });
  $$payload.out.push(`<!----> <div><h3 class="font-bold">The following activities are strictly prohibited:</h3></div></div> <div class="grid grid-cols-1 md:grid-cols-2 gap-4"><div><h3 class="font-semibold mb-2 text-error">Technical Violations</h3> <ul class="list-disc list-inside space-y-1 text-sm text-base-content/80"><li>Attempting to hack, crack, or reverse engineer the app</li> <li>Using automated tools to access the service</li> <li>Overloading our servers with excessive requests</li> <li>Attempting to access other users' data</li> <li>Introducing malware or malicious code</li></ul></div> <div><h3 class="font-semibold mb-2 text-error">Content &amp; Conduct</h3> <ul class="list-disc list-inside space-y-1 text-sm text-base-content/80"><li>Providing false or misleading information</li> <li>Using the service for commercial purposes</li> <li>Sharing inappropriate content through the platform</li> <li>Violating any applicable laws or regulations</li> <li>Impersonating others or creating fake accounts</li></ul></div></div></div></div> <div class="card bg-base-200"><div class="card-body"><h2 class="card-title text-2xl mb-4 flex items-center gap-2">`);
  Gavel($$payload, { size: 24, class: "text-accent" });
  $$payload.out.push(`<!----> Intellectual Property</h2> <div class="space-y-4"><div class="grid grid-cols-1 md:grid-cols-2 gap-4"><div class="bg-base-300 p-4 rounded-lg"><h3 class="font-semibold mb-2 text-primary">Our Rights</h3> <p class="text-sm text-base-content/80 mb-2">Project Glow Up and all related content are owned by Miguel Viddy:</p> <ul class="list-disc list-inside space-y-1 text-xs text-base-content/80"><li>Application code and design</li> <li>User interface and user experience</li> <li>Achievement system and gamification</li> <li>Training plans and methodologies</li> <li>Branding, logos, and trademarks</li></ul></div> <div class="bg-base-300 p-4 rounded-lg"><h3 class="font-semibold mb-2 text-success">Your Rights</h3> <p class="text-sm text-base-content/80 mb-2">You retain ownership of your personal data:</p> <ul class="list-disc list-inside space-y-1 text-xs text-base-content/80"><li>Your health and fitness data</li> <li>Personal information and settings</li> <li>Exercise logs and progress records</li> <li>Right to export or delete your data</li> <li>Limited license to use the application</li></ul></div></div> <div class="alert alert-info">`);
  Shield($$payload, { size: 20 });
  $$payload.out.push(`<!----> <div><h3 class="font-bold">License Grant</h3> <p class="text-sm">We grant you a limited, non-exclusive, non-transferable license to use Project Glow Up for personal fitness tracking purposes only.</p></div></div></div></div></div> <div class="card bg-base-200"><div class="card-body"><h2 class="card-title text-2xl mb-4 flex items-center gap-2">`);
  Triangle_alert($$payload, { size: 24, class: "text-warning" });
  $$payload.out.push(`<!----> Disclaimers &amp; Limitations</h2> <div class="space-y-4"><div class="alert alert-warning">`);
  Triangle_alert($$payload, { size: 20 });
  $$payload.out.push(`<!----> <div><h3 class="font-bold">Medical Disclaimer</h3> <p class="text-sm">Project Glow Up is not a medical device and does not provide medical advice. Always consult healthcare professionals for medical guidance.</p></div></div> <div class="grid grid-cols-1 md:grid-cols-2 gap-4"><div><h3 class="font-semibold mb-2">Service Availability</h3> <ul class="list-disc list-inside space-y-1 text-sm text-base-content/80"><li>Service provided "as is" without warranties</li> <li>We don't guarantee 100% uptime</li> <li>Features may change or be discontinued</li> <li>Performance may vary by device/connection</li></ul></div> <div><h3 class="font-semibold mb-2">Limitation of Liability</h3> <ul class="list-disc list-inside space-y-1 text-sm text-base-content/80"><li>Not liable for fitness results or injuries</li> <li>Not responsible for data loss (backup recommended)</li> <li>Limited liability for service interruptions</li> <li>No liability for third-party integrations</li></ul></div></div></div></div></div> <div class="card bg-base-200"><div class="card-body"><h2 class="card-title text-2xl mb-4 flex items-center gap-2">`);
  Clock($$payload, { size: 24, class: "text-error" });
  $$payload.out.push(`<!----> Account Termination</h2> <div class="grid grid-cols-1 md:grid-cols-2 gap-4"><div><h3 class="font-semibold mb-2 text-primary">Your Rights</h3> <p class="text-sm text-base-content/80 mb-2">You may terminate your account at any time:</p> <ul class="list-disc list-inside space-y-1 text-sm text-base-content/80"><li>Delete your account through app settings</li> <li>Export your data before deletion</li> <li>Stop using the service at any time</li> <li>No cancellation fees or penalties</li></ul></div> <div><h3 class="font-semibold mb-2 text-warning">Our Rights</h3> <p class="text-sm text-base-content/80 mb-2">We may suspend or terminate accounts for:</p> <ul class="list-disc list-inside space-y-1 text-sm text-base-content/80"><li>Violation of these terms</li> <li>Suspicious or fraudulent activity</li> <li>Extended periods of inactivity</li> <li>Technical or security reasons</li></ul></div></div> <div class="alert alert-info mt-4">`);
  Shield($$payload, { size: 20 });
  $$payload.out.push(`<!----> <div><h3 class="font-bold">Data Retention</h3> <p class="text-sm">Upon account termination, your data will be deleted within 30 days unless required for legal compliance.</p></div></div></div></div> <div class="card bg-base-200"><div class="card-body"><h2 class="card-title text-2xl mb-4 flex items-center gap-2">`);
  File_text($$payload, { size: 24, class: "text-accent" });
  $$payload.out.push(`<!----> Changes &amp; Contact Information</h2> <div class="grid grid-cols-1 md:grid-cols-2 gap-6"><div><h3 class="font-semibold mb-2">Terms Updates</h3> <p class="text-sm text-base-content/80 mb-2">We may update these terms from time to time. When we do:</p> <ul class="list-disc list-inside space-y-1 text-sm text-base-content/80"><li>We'll update the "Last updated" date</li> <li>Significant changes will be highlighted</li> <li>Continued use means acceptance</li> <li>You can always review current terms here</li></ul></div> <div><h3 class="font-semibold mb-2">Contact Us</h3> <p class="text-sm text-base-content/80 mb-2">Questions about these terms? Contact us:</p> <div class="bg-base-300 p-3 rounded text-sm"><p><strong>Creator:</strong> Miguel Viddy</p> <p><strong>Project:</strong> Project Glow Up</p> <p><strong>Purpose:</strong> First of many life-improving applications</p> <p><strong>Contact:</strong> Through application settings</p></div></div></div></div></div> <div class="text-center py-8"><div class="flex justify-center gap-4 mb-4"><a href="/privacy" class="btn btn-outline btn-sm">Privacy Policy</a> <a href="/about" class="btn btn-outline btn-sm">About Project Glow Up</a> <a href="/" class="btn btn-primary btn-sm">Back to App</a></div> <p class="text-xs text-base-content/50">By using Project Glow Up, you acknowledge that you have read, understood, and agree to these Terms of Service.</p></div></div>`);
}
export {
  _page as default
};
