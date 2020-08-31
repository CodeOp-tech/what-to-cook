import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import Recipe from "./Recipe";

export default class RecipeSearchItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { title, image, id } = this.props;
    return (
      <div className="mt-3">
        <Link to={`/recipe/${id}`}>
          <h3>{title}</h3>
          <img alt={title} src={image} width="100" height="100" />
        </Link>
      </div>
    );
  }
}
