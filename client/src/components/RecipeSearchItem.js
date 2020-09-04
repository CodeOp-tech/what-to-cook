import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class RecipeSearchItem extends Component {
  render() {
    const { title, image, id } = this.props;
    return (
      <div>
        <div className="card mb-4">
          <Link to={`/recipe/${id}`}>
            <div className="mt-4 ml-3 mr-3 mb-4">
              <img
                className="card-img-top"
                alt={title}
                src={image}
                width="80"
                height="80"
              />{" "}
            </div>
            <h4 className="card-title">{title}</h4>
          </Link>
        </div>
      </div>
    );
  }
}
