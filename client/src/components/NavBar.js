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
          <li>
            <NavLink to="/create" activeClassName="selected">
              Sign up
            </NavLink>
          </li>
          <li>
            <NavLink to="/login" activeClassName="selected">
              Log in
            </NavLink>
          </li>
          <li>
            <NavLink to="/abcd" activeClassName="selected">
              Bad URL!
            </NavLink>
          </li>
          {userLoggedIn ? (
            <li>
              <NavLink to="/favourites" activeClassName="selected">
                Favourites
              </NavLink>
            </li>
          ) : null}
          {userLoggedIn ? <li onClick={this.onLogoutPress}>Logout</li> : null}
        </ul>
      </nav>
    );
  }
}
