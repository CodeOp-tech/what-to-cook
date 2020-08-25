import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import HomeView from "./HomeView";
import ErrorView from "./ErrorView";
import CreateView from "./CreateView";

import Recipe from "./Recipe";

import LoginView from "./LoginView";

export default class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact>
          <HomeView />
        </Route>
        <Route path="/create" exact>
          <CreateView />
        </Route>

        <Route path="/recipe" render={(props) => <Recipe {...props}/>}/>
        
        <Route path="/login" exact>
          <LoginView />
        </Route>
        <ErrorView />
      </Switch>
    );
  }
}
