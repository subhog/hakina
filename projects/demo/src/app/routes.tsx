import { lazy } from "solid-js";

import Layout from "$/blocks/main/Layout"
import HomePage from "$/blocks/main/HomePage"
import SinkPage from "$/blocks/sink/SinkPage"
import { DocsLayout, docsRoutes } from "$/blocks/docs"
import { SandboxLayout, sandboxRoutes } from "$/blocks/sandbox"
import NotFound from "$/blocks/main/NotFound"


export const routes = [{
  path: "/",
  component: Layout,
  children: [
  
    {
      path: "/", component: HomePage,
    }, {
      path: "/sink", component: SinkPage,
    }, {
      path: "/docs", component: DocsLayout, children: docsRoutes,
    }, {
      path: "/sandbox", component: SandboxLayout, children: sandboxRoutes,
    }, {
      path: "*", component: NotFound,
    }
  ],
}];
// export const routes = [{
//   path: "/",
//   component: lazy(() => import("$/blocks/main/Layout")),
//   children: [
  
//     {
//       path: "/", component: lazy(() => import("$/blocks/main/Home")),
//     }, {
//       path: "/body", component: lazy(() => import("$/blocks/sink/body/BodyPage")),
//     }, {
//       path: "/layout", component: lazy(() => import("$/blocks/sink/composition/LayoutPage")),
//     }, {
//       path: "/composition", component: lazy(() => import("$/blocks/sink/composition/CompositionPage")),
//     }, {
//       path: "/static", component: lazy(() => import("$/blocks/sink/static/StaticPage")),
//     }, {
//       path: "/action", component: lazy(() => import("$/blocks/sink/action/ActionPage")),
//     }, {
//       path: "/control", component: lazy(() => import("$/blocks/sink/control/ControlPage")),
//     }, {
//       path: "/display", component: lazy(() => import("$/blocks/sink/display/DisplayPage")),
//     }, {
//       path: "/part", component: lazy(() => import("$/blocks/sink/part/PartPage")),
//     }, {
//       path: "/theme", component: lazy(() => import("$/blocks/sink/theme/ThemePage")),
//     }, {
//       path: "/sandbox", component: lazy(() => import("$/blocks/sandbox/SandboxPage")),
//     }, {
//       path: "*", component: lazy(() => import("$/blocks/main/NotFound")),
//     }
//   ],
// }];




