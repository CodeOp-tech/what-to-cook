import React from "react";
import Search from "./components/search";
import { BrowserRouter, Link, NavLink, Route, Switch } from "react-router-dom";
import Navbar from "./components/navbar";
import Routes from "./components/routes";
import Homeview from "./components/homeview";
import Errorview from "./components/errorview";

import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          This is app js
          <Search />
          <Navbar />
          <Routes />
          <Switch />
        </BrowserRouter>
      </div>
    );
  }
}
export default App;
