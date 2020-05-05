import React from "react";

import {
  Route,
  Switch,
  BrowserRouter as Router,
  Redirect
} from "react-router-dom";

import { HomePage } from "../pages/HomePage";
import { DetailsPage } from "../pages/DetailsPage";

import HeaderBarContainer from "../containers/HeaderBar";

export const MainRouter = () => (
  <Router>
    <div className="app dark">
      <HeaderBarContainer />
      <Switch>
        <Route exact path="/home" component={HomePage} />
        <Route
          exact
          path="/details-page/:city&id=:id"
          render={(props: any) => (
            <DetailsPage
              city={props.match.params.city}
              id={props.match.params.id}
            />
          )}
        />
        <Redirect to="/home" />
      </Switch>
    </div>
  </Router>
);
