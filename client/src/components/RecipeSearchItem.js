import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import Recipe from "./Recipe";

export default class RecipeSearchItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { title, image, id, recipe } = this.props;
    return (
      <div>
        <div className="card mb-4">
          <Link to={`/recipe/${id}`}>
            <h2 className="card-title">{title}</h2>
            <div className="mt-4 ml-3 mr-3 mb-4">
            <img 
            className="card-img-top" 
            alt={title} 
            src={image} 
            width="80" 
            height="80" 
            /> </div>
          </Link>
        </div>
      </div>
    );
  }
}
