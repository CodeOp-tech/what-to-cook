import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Search from "./search";
import "./NavBar.css";
import { withRouter } from "react-router";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onLogoutPress = (e) => {
    e.preventDefault();
    this.props.userLoggedOut();
    //after logout redirect to home
    this.props.history.push(`/`);
  };

  render() {
    const { userLoggedIn, location } = this.props;
    let appendToUrl = "";
    //console.log(location);
    if (location.pathname) {
      appendToUrl = "?returnUrl=" + location.pathname;
    }
    return (
      <div className="Navbar">
        <nav className="navbar navbar-expand-lg navbar-light">
          <NavLink to="/" exact className="navbar-brand">
            <h1> What To Cook</h1>
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon "></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item ">
                <Search />
              </li>

              {userLoggedIn ? null : (
                <li className="nav-item active ">
                  <NavLink
                    to={`/create${appendToUrl}`}
                    activeClassName="selected"
                  >
                    Create account
                  </NavLink>
                </li>
              )}

              {userLoggedIn ? null : (
                <li className="nav-item ">
                  <NavLink
                    to={`/login${appendToUrl}`}
                    activeClassName="selected"
                  >
                    Login
                  </NavLink>
                </li>
              )}

              {userLoggedIn ? (
                <li className="nav-item active ">
                  <NavLink to="/favourites" activeClassName="selected">
                    Favourites
                  </NavLink>
                </li>
              ) : null}
              {userLoggedIn ? (
                <li onClick={this.onLogoutPress} id="logout">
                  Logout
                </li>
              ) : null}
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default withRouter(NavBar);
