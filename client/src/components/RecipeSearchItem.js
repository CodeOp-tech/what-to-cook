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
      <div className="container">
        <div className="row">
          <div className="col-md-8">

            <div className="mt-3 card-deck mx-auto">
              <div className="card">

                <Link to={`/recipe/${id}`}>
                  <h1 className="card-title">{title}</h1>
                  <img className="card-img-top" alt={title} src={image} width="100" height="100" />
                  {/* <p className="card-body">{recipe}</p> add information in the card about the steps to cook the recipe */}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
