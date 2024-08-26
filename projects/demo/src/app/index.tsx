/* @refresh reload */
import { render } from "solid-js/web"
import { Router } from "@solidjs/router";

// import "./theme-dusk.css";


import "@fontsource/fira-mono";
import "@fontsource-variable/signika";
import "@hakina/theme-horizon/dist/style.css";
import "@hakina/ui/dist/style.css";
import "@hakina/ui";

import { routes } from "$/app/routes";

render(() => (
  <Router>
    {routes}
  </Router>
), document.getElementById("root")!)


