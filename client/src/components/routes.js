import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Homeview from "./homeview";
import Errorview from "./errorview";

export default class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact>
          <Homeview />
        </Route>

        <Errorview />
      </Switch>
    );
  }
}
