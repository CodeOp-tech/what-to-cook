import React, { Component } from "react";
import RecipeSearchItem from "./RecipeSearchItem";

const RECIPE_API_KEY = process.env.REACT_APP_RECIPE_API_KEY;

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredients: "",
      loading: false,
      recipes: [],
    };
  }

  searchRecipes = (e) => {
    const { ingredients } = this.state;

    this.setState({
      ingredients: "",
      loading: true,
    });
    e.preventDefault();

    fetch(
      `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredients}&number=8&apiKey=${RECIPE_API_KEY}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((res) => this.setState({ recipes: res, loading: false }))
      .catch((err) => {
        console.log(err);
      });
  };

  handleInput = (e) => {
    this.setState({
      ingredients: e.target.value,
    });
  };

  render() {
    const { ingredients, recipes, loading } = this.state;
    return (
<<<<<<< HEAD
      <div className="col input-group-lg">
        WHAT TO COOK..
=======
      <div id="searchbar">
>>>>>>> testingmerge
        <form className="search-form">
          <input
            type="text"
            value={ingredients}
            onChange={this.handleInput}
            className="form-control mb-1"
            maxLength="50"
            placeholder="Find a recipe by adding ingredients.."
          ></input>

          <button
            className="btn btn-outline-secondary"
            onClick={this.searchRecipes}
          >
            search
          </button>
<<<<<<< HEAD
=======
          <i class="fas fa-search"></i>
>>>>>>> testingmerge

          <div>
            {loading ? <span>Loading...</span> : null}
            {recipes.map((recipe) => (
              <RecipeSearchItem
                key={recipe.id}
                image={recipe.image}
                title={recipe.title}
              />
            ))}
          </div>
        </form>
      </div>
    );
  }
}
