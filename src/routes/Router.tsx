import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import DynamicLoader from "./DynamicLoader";
import Albums from "pages/Albums";

const NoMatch = DynamicLoader(() => import("pages/NoMatch"));

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Albums />
        </Route>
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
