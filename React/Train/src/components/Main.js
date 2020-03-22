import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";

import Home from "./Home";
import Train from "./Train";

const Main = () => {
  return (
    <Router>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/train">
        <Train />
      </Route>
    </Router>
  );
};

export default Main;
