import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Search from "./search";
import "./NavBar.css";

export default class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onLogoutPress = (e) => {
    e.preventDefault();
    this.props.userLoggedOut();
  };

  render() {
    const { userLoggedIn } = this.props;
    return (
      <div className="Navbar">
        <nav class="navbar navbar-expand-lg navbar-light ">
          <NavLink to="/" exact className="navbar-brand">
            <h1> WHAT TO COOK</h1>
          </NavLink>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li className="nav-item">
                <Search />
              </li>

              {userLoggedIn ? null : (
                <li className="nav-item active">
                  <NavLink to="/create" activeClassName="selected">
                    Create account
                  </NavLink>
                </li>
              )}

              {userLoggedIn ? null : (
                <li className="nav-item">
                  <NavLink to="/login" activeClassName="selected">
                    Login
                  </NavLink>
                </li>
              )}

              {userLoggedIn ? (
                <li className="nav-item active">
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
