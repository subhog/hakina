import HomePage from "./HomePage"
import MessPage from "./MessPage"
import ColorsPage from "./ColorsPage"
import NotFound from "$/blocks/main/NotFound"


export const routes = [{
    path: "/", component: HomePage,
  }, {
    path: "/mess", component: MessPage,
  }, {
    path: "/colors", component: ColorsPage,
  }, {
    path: "*", component: NotFound,
}];




