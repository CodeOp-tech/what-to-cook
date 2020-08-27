import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import HomeView from "./HomeView";
import ErrorView from "./ErrorView";
import CreateView from "./CreateView";
import FavouritesView from "./FavouritesView";
import Recipe from "./Recipe";
import LoginView from "./LoginView";
import Detail from "./Detail";

export default class Routes extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Switch>
        <Route path="/" exact>
          <HomeView />
        </Route>
        <Route path="/create" exact>
          <CreateView />
        </Route>
        <Route path="/favourites" exact>
          <FavouritesView />
        </Route>
        
        <Route path="/recipe" render={(props) => <Recipe {...props} />} exact />
        <Route
          path="/recipe/:id"
          render={(props) => <Detail {...props} />}
          exact
        />

        <Route path="/favourites" exact>
          <FavouritesView />
        </Route>

        

        <Route path="/login">
          <LoginView />
        </Route>
        <ErrorView />
      </Switch>
    );
  }
}
