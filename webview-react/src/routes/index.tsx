import React from "react";
import { Switch, Route } from "react-router-dom";
import List from "../pages/list/ListPage";

export default function Routes() {
  return (
    <Switch>
      <Route path="/list" component={List} />
    </Switch>
  );
}
