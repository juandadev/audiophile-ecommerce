import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" render={() => <div>Hello World!</div>} />
      </Switch>
    </BrowserRouter>
  );
}
