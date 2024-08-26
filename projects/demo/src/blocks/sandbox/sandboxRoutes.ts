import HomePage from "./pages/HomePage"
import MessPage from "./pages/MessPage"
import ColorsPage from "./pages/ColorsPage"
import NotFound from "$/blocks/main/NotFound"


export default [{
    path: "/", component: HomePage,
  }, {
    path: "/mess", component: MessPage,
  }, {
    path: "/colors", component: ColorsPage,
  }, {
    path: "*", component: NotFound,
}];




