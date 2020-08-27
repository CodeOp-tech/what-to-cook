import React, { Component } from "react";

export default class Detailrecipe extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { recipe } = this.props;
    return (
      <div>
        <h3>{recipe.title}</h3>
        <img alt={recipe.title} src={recipe.image} width="100" height="100" />
      </div>
    );
  }
}
