import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Button from "../components/Button/StyledBtn";

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <div>
              <Button type="primary">Primary</Button>
              <Button type="secondary">Secondary</Button>
              <Button type="transparent">Transparent</Button>
            </div>
          )}
        />
      </Switch>
    </BrowserRouter>
  );
}
