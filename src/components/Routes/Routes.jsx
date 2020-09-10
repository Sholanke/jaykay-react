import React from "react";
import { Switch, Route, Router } from "react-router";
import HomePage from "../HomePage";
import { createHashHistory } from "history";
export default function Routes() {
  return (
    <Router history={createHashHistory()}>
      <Switch>
        <Route component={HomePage} />
      </Switch>
    </Router>
  );
}
