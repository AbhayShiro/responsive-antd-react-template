import React from "react";
import { BrowserRouter as Router, Switch, Redirect } from "react-router-dom";

import Route from "./helpers";

//import all pages
import HomePage from "../pages/home";
import FormPage from "../pages/form";

//import layouts
import Dashboard from "../layouts/dashboard";
import AnotherDashboard from "../layouts/another";

export default (location, ...rest) => (
  <Router>
    <Switch>
      <Route
        exact
        path="/home"
        layout={Dashboard}
        component={HomePage}
        location={location}
        {...rest}
      />
      <Route
        exact
        path="/form"
        layout={AnotherDashboard}
        component={FormPage}
        location={location}
        {...rest}
      />
      <Redirect from="/*" to="/home" />
    </Switch>
  </Router>
);
