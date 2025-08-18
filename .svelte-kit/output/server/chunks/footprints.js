import { F as sanitize_props, G as spread_props, I as slot } from "./index2.js";
import { I as Icon } from "./Icon.js";
function Dumbbell($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  /**
   * @license lucide-svelte v0.456.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */
  const iconNode = [
    ["path", { "d": "M14.4 14.4 9.6 9.6" }],
    [
      "path",
      {
        "d": "M18.657 21.485a2 2 0 1 1-2.829-2.828l-1.767 1.768a2 2 0 1 1-2.829-2.829l6.364-6.364a2 2 0 1 1 2.829 2.829l-1.768 1.767a2 2 0 1 1 2.828 2.829z"
      }
    ],
    ["path", { "d": "m21.5 21.5-1.4-1.4" }],
    ["path", { "d": "M3.9 3.9 2.5 2.5" }],
    [
      "path",
      {
        "d": "M6.404 12.768a2 2 0 1 1-2.829-2.829l1.768-1.767a2 2 0 1 1-2.828-2.829l2.828-2.828a2 2 0 1 1 2.829 2.828l1.767-1.768a2 2 0 1 1 2.829 2.829z"
      }
    ]
  ];
  Icon($$payload, spread_props([
    { name: "dumbbell" },
    $$sanitized_props,
    {
      /**
       * @component @name Dumbbell
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTQuNCAxNC40IDkuNiA5LjYiIC8+CiAgPHBhdGggZD0iTTE4LjY1NyAyMS40ODVhMiAyIDAgMSAxLTIuODI5LTIuODI4bC0xLjc2NyAxLjc2OGEyIDIgMCAxIDEtMi44MjktMi44MjlsNi4zNjQtNi4zNjRhMiAyIDAgMSAxIDIuODI5IDIuODI5bC0xLjc2OCAxLjc2N2EyIDIgMCAxIDEgMi44MjggMi44Mjl6IiAvPgogIDxwYXRoIGQ9Im0yMS41IDIxLjUtMS40LTEuNCIgLz4KICA8cGF0aCBkPSJNMy45IDMuOSAyLjUgMi41IiAvPgogIDxwYXRoIGQ9Ik02LjQwNCAxMi43NjhhMiAyIDAgMSAxLTIuODI5LTIuODI5bDEuNzY4LTEuNzY3YTIgMiAwIDEgMS0yLjgyOC0yLjgyOWwyLjgyOC0yLjgyOGEyIDIgMCAxIDEgMi44MjkgMi44MjhsMS43NjctMS43NjhhMiAyIDAgMSAxIDIuODI5IDIuODI5eiIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/dumbbell
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
function Footprints($$payload, $$props) {
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
        "d": "M4 16v-2.38C4 11.5 2.97 10.5 3 8c.03-2.72 1.49-6 4.5-6C9.37 2 10 3.8 10 5.5c0 3.11-2 5.66-2 8.68V16a2 2 0 1 1-4 0Z"
      }
    ],
    [
      "path",
      {
        "d": "M20 20v-2.38c0-2.12 1.03-3.12 1-5.62-.03-2.72-1.49-6-4.5-6C14.63 6 14 7.8 14 9.5c0 3.11 2 5.66 2 8.68V20a2 2 0 1 0 4 0Z"
      }
    ],
    ["path", { "d": "M16 17h4" }],
    ["path", { "d": "M4 13h4" }]
  ];
  Icon($$payload, spread_props([
    { name: "footprints" },
    $$sanitized_props,
    {
      /**
       * @component @name Footprints
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNNCAxNnYtMi4zOEM0IDExLjUgMi45NyAxMC41IDMgOGMuMDMtMi43MiAxLjQ5LTYgNC41LTZDOS4zNyAyIDEwIDMuOCAxMCA1LjVjMCAzLjExLTIgNS42Ni0yIDguNjhWMTZhMiAyIDAgMSAxLTQgMFoiIC8+CiAgPHBhdGggZD0iTTIwIDIwdi0yLjM4YzAtMi4xMiAxLjAzLTMuMTIgMS01LjYyLS4wMy0yLjcyLTEuNDktNi00LjUtNkMxNC42MyA2IDE0IDcuOCAxNCA5LjVjMCAzLjExIDIgNS42NiAyIDguNjhWMjBhMiAyIDAgMSAwIDQgMFoiIC8+CiAgPHBhdGggZD0iTTE2IDE3aDQiIC8+CiAgPHBhdGggZD0iTTQgMTNoNCIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/footprints
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
export {
  Dumbbell as D,
  Footprints as F
};
