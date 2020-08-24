import React, { Component } from "react";
import { Redirect } from "react-router-dom";

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
      <div className="col input-group-lg">
        WHAT TO COOK..
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

          <div>
            {loading ? <span>Loading...</span> : null}
            {recipes.length > 0 ? (
              <Redirect
                to={{ pathname: "/recipe", state: { recipes: recipes } }}
              />
            ) : (
              <Redirect to="/" />
            )}{" "}
            {/* TODO if response empty what? Stay in current location? */}
          </div>
        </form>
      </div>
    );
  }

  render() {
    const { ingredients, recipes, loading } = this.state;
    return (
      <div className="col input-group-lg">
        WHAT TO COOK..
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
