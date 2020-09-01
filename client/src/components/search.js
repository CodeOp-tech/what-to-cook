import React, { Component } from "react";
import { withRouter } from "react-router";
import "./NavBar.css";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredients: "",
      loading: false,
    };
  }

  searchRecipes = (e) => {
    const ingredients = this.state.ingredients.replace(/ /g, ",");
    e.preventDefault();

    this.props.history.push(`/recipe?ingredients=${ingredients}`);
  };

  handleInput = (e) => {
    this.setState({
      ingredients: e.target.value,
    });
  };
  render() {
    const { ingredients, loading } = this.state;
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
            {/* {recipes.length > 0 ? (
              <Redirect
                to={{ pathname: "/recipe", state: { recipes: recipes } }}
              />
            ) : (
              <Redirect to="/" />
            )}{" "} */}
            {/* TODO if response empty what? Stay in current location? */}
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(Search);
