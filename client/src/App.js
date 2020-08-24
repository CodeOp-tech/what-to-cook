import React from "react";
import Search from "./components/search";
import { BrowserRouter, Switch } from "react-router-dom";
import Navbar from "./components/NavBar";
import Routes from "./components/Routes";

import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userLoggedIn: 0,
    };
  }
  //logout button pressed
  userLoggedOut = () => {
    console.log("user logging out");

    this.setState({
      userLoggedIn: 0,
    });
  };

  render() {
    const { userLoggedIn } = this.state;
    return (
      <div className="App">
        <BrowserRouter>
          This is app js
          <Search />
          <Navbar
            userLoggedIn={userLoggedIn}
            userLoggedOut={this.userLoggedOut}
          />
          <Routes />
          <Switch />
        </BrowserRouter>
      </div>
    );
  }
}
export default App;
