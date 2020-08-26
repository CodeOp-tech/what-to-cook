import React, { Component } from "react";
import { NavLink } from "react-router-dom";

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
      <nav>
        <ul>
          <li>
            <NavLink to="/" exact activeClassName="selected">
              Home
            </NavLink>
          </li>
          {userLoggedIn ? null : (
            <li>
              <NavLink to="/create" activeClassName="selected">
                Create account
              </NavLink>
            </li>
          )}

          {userLoggedIn ? null : (
            <li>
              <NavLink to="/login" activeClassName="selected">
                Login
              </NavLink>
            </li>
          )}

          {userLoggedIn ? (
            <li>
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
      </nav>
    );
  }
}
