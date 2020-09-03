import React, { Component } from "react";
import "./Detail.css";
import { getRecipeById } from "../services/DataService";
import { toFraction } from "../calculations/fractions";

export default class Detail extends Component {
  state = {
    recipe: null,
    isFavourite: 1,
    userLoggedIn: 0,
  };

  //add recipe to favourites
  addToFavourites = async () => {
    console.log("adding recipe to favourites");
    const bodyToSend = {
      recipeId: this.props.match.params.id,
      image: this.state.recipe.image,
      title: this.state.recipe.title.replace(/'/g, "''"),
    };
    try {
      await fetch("/api/favourites", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-access-token": localStorage.getItem("token"),
        },
        body: JSON.stringify(bodyToSend),
      });
    } catch (err) {
      console.log(err);
    }
    //fetch request to add user-recipe link
    this.setState({
      isFavourite: 1,
    });
  };

  //remove recipe from favourites
  removeFromFavourites = async () => {
    //fetch request to remove user-recipe link
    const recipeId = { recipeId: this.props.match.params.id };
    try {
      await fetch("/api/favourites", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "x-access-token": localStorage.getItem("token"),
        },
        body: JSON.stringify(recipeId),
      });
    } catch (err) {
      console.log(err);
    }
    console.log("removing recipe from favourites");
    this.setState({
      isFavourite: 0,
    });
  };

  //check if recipe is already in favourites
  isInFavourites = async () => {
    const { id } = this.props.match.params;
    //check if recipe in favourites
    //if it is, change state isFavourite 1

    console.log("ID sending to backend", id);
    try {
      const result = await fetch(`/api/favourites/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "x-access-token": localStorage.getItem("token"),
        },
      });
      const json = await result.json();
      //   console.log(json);
      //if the response is not negative meaning a match was found
      if (json.msg !== "Not a favourite") {
        this.setState({ isFavourite: 1 });
      } else {
        this.setState({ isFavourite: 0 });
      }
    } catch (err) {
      console.log(err);
    }
  };

  isUserLoggedIn = async () => {
    //check if user logged in
    //set flag user logged in
    console.log("checking if user is logged in");
    let token = localStorage.getItem("token");
    // console.log("token", token);
    if (token) {
      try {
        await fetch("/api/user", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "x-access-token": token,
          },
        });
        //user is already logged in - changing flag in state
        this.setState({
          userLoggedIn: 1,
        });
      } catch (err) {
        console.log(err);
      }
    } else {
      this.setState({
        userLoggedIn: 0,
      });
    }
  };

  componentDidMount() {
    const { id } = this.props.match.params;
    // localStorage.setItem("recipe", window.location.href);
    // console.log(window.location.href);

    getRecipeById(id).then((res) => this.setState({ recipe: res }));

    //check if user logged in to enable the STAR method
    this.isUserLoggedIn();
    // check if recipe is in favourites to set the STAR filled or not
    this.isInFavourites();
  }

  render() {
    const { recipe, isFavourite, userLoggedIn } = this.state;
    return (
      <div className="h-100 mb-5">
        {!recipe ? (
          <span>loading...</span>
        ) : (
          <div className="row mt-4 h-100">
            <div className="col-sm-6 d-flex justify-content-center align-items-start mt-5">
              <img
                alt={recipe.title}
                src={recipe.image}
                className=""
                id="imageDetail"
              />
            </div>

            <div className="col-sm-6 justify-content-center d-flex align-items-center mt-5 ">
              <div>
                <h3
                  className="mb-5 align-items-left text-left"
                  id="titleDetail"
                >
                  {recipe.title}{" "}
                  {isFavourite && userLoggedIn ? (
                    <i
                      className="fas fa-star align-items-center"
                      onClick={this.removeFromFavourites}
                    ></i>
                  ) : (
                    <i className="far fa-star" onClick={this.addToFavourites}>
                      {userLoggedIn ? null : (
                        <small>Log in to save the recipe.</small>
                      )}
                    </i>
                  )}
                </h3>{" "}
                <div id="allrecipe text-left mt-4">
                  <div className="recipe-sub-title mb-2">INGREDIENTS</div>
                  {recipe.extendedIngredients.map((ingredient) => (
                    <div>
                      {" "}
                      <span className="ingredients">
                        {ingredient.name}{" "}
                      </span> - {toFraction(ingredient.amount)}{" "}
                      {ingredient.unit}{" "}
                    </div>
                  ))}

                  {recipe.analyzedInstructions.length > 0 ? (
                    <div className="instructions mt-3">
                      <div className="recipe-sub-title mb-2">STEPS</div>
                      {recipe.analyzedInstructions[0].steps.map((step) => (
                        <div className="mb-2">
                          <span className="step">{step.number}.</span>{" "}
                          {step.step}
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="instructions mt-3">
                      {recipe.instructions}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}
