import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Navbar extends React.Component {
  render() {
    return (
      <nav>
        <p> this is navbarview</p>
        <ul>
          <li>
            <NavLink to="/" exact activeClassName="selected">
              Home
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
