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
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <a
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </a>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav">
              {userLoggedIn ? null : (
                <li className="nav-item active">
                  <NavLink to="/create" activeClassName="selected">
                    Create account
                  </NavLink>
                </li>
              )}

              {userLoggedIn ? null : (
                <li className="nav-item active">
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
