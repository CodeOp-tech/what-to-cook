import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import "./NavBar.css";
import { getRecipes } from "../services/DataService";

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
      recipes: [],
    });
    e.preventDefault();

    getRecipes(ingredients).then((res) =>
      this.setState({ recipes: res, loading: false })
    );
  };

  handleInput = (e) => {
    this.setState({
      ingredients: e.target.value,
    });
  };
  render() {
    const { ingredients, recipes, loading } = this.state;
    return (
      <div>
        <form>
          <div>
            <input
              type="text"
              value={ingredients}
              onChange={this.handleInput}
              maxLength="50"
              placeholder="Find a recipe by adding ingredients..."
            ></input>

            <button
              className="btn "
              id="searchbutton"
              onClick={this.searchRecipes}
            >
              <i className="fas fa-search fa-lg" id="searchbutton"></i>
            </button>
          </div>
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
}
