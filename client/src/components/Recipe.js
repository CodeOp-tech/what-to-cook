import React, { Component } from "react";
import { withRouter } from "react-router";
import RecipeSearchItem from "./RecipeSearchItem";
import queryString from "query-string";
import { getRecipes } from "../services/DataService";

class Recipe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [],
    };
  }

  componentDidMount() {
    const values = queryString.parse(this.props.location.search);
    this.getData(values.ingredients);
  }

  componentDidUpdate(prevProps, prevState) {
    //check if input values changed
    const values = queryString.parse(this.props.location.search);
    const previousValues = queryString.parse(prevProps.location.search);
    if (values.ingredients !== previousValues.ingredients) {
      this.getData(values.ingredients);
    }
  }

  getData(ingredients) {
    // fetch recipe list from external API
    getRecipes(ingredients)
      .then((res) => this.setState({ recipes: res }))
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    const { recipes } = this.state;
    return (
      //put the information in one block with 8 options in the right)
      <div className="row">
        <div className="col-sm-6" id="options">
          {recipes.map((recipe) => (
            <RecipeSearchItem
              key={recipe.id}
              id={recipe.id}
              image={recipe.image}
              title={recipe.title}
              instrus
            />
          ))}
        </div>
      </div>
    );
  }
}

export default withRouter(Recipe);
