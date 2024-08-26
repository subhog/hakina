// import { lazy } from "solid-js";


import HomePage from "./pages/HomePage"
import BodyPage from "./pages/body/BodyPage"
import LayoutPage from "./pages/composition/LayoutPage"
import CompositionPage from "./pages/composition/CompositionPage"
import StaticPage from "./pages/static/StaticPage"
import ActionPage from "./pages/action/ActionPage"
import ControlPage from "./pages/control/ControlPage"
import DisplayPage from "./pages/display/DisplayPage"
import PartPage from "./pages/part/PartPage"
import ThemePage from "./pages/theme/ThemePage"

import NotFound from "$/blocks/main/NotFound"


export default [{
  path: "/", component: HomePage,
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
  path: "*", component: NotFound,
}];


