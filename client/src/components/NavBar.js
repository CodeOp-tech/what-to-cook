import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class NavBar extends Component {
  render() {
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
        </ul>
      </nav>
    );
  }
}
