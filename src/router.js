import React from "react";
import Standings from "./components/standings";
import Scoreboard from "./components/scoreboard/scoreboard";

const routes = {
  "/": () => <Scoreboard />,
  "/scoreboard": () => <Scoreboard />,
  "/standings": () => <Standings />,
};
export default routes;