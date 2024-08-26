// import { lazy } from "solid-js";


import Layout from "$/blocks/main/Layout"
import HomePage from "$/blocks/main/HomePage"
import SinkPage from "$/blocks/sink/SinkPage"
import BodyPage from "$/blocks/docs/body/BodyPage"
import LayoutPage from "$/blocks/docs/composition/LayoutPage"
import CompositionPage from "$/blocks/docs/composition/CompositionPage"
import StaticPage from "$/blocks/docs/static/StaticPage"
import ActionPage from "$/blocks/docs/action/ActionPage"
import ControlPage from "$/blocks/docs/control/ControlPage"
import DisplayPage from "$/blocks/docs/display/DisplayPage"
import PartPage from "$/blocks/docs/part/PartPage"
import ThemePage from "$/blocks/docs/theme/ThemePage"
import SandboxLayout from "$/blocks/sandbox/SandboxLayout"
import sandboxRoutes from "$/blocks/sandbox/sandboxRoutes"
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
      path: "/body", component: BodyPage,
    }, {
      path: "/layout", component: LayoutPage,
    }, {
      path: "/composition", component: CompositionPage,
    }, {
      path: "/static", component: StaticPage,
    }, {
      path: "/action", component: ActionPage,
    }, {
      path: "/control", component: ControlPage,
    }, {
      path: "/display", component: DisplayPage,
    }, {
      path: "/part", component: PartPage,
    }, {
      path: "/theme", component: ThemePage,
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




