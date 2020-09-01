import React, { Component } from "react";
import "./Detail.css";
import { getRecipeById } from "../services/DataService";

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
      title: this.state.recipe.title,
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
        await fetch("api/user", {
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

    getRecipeById(id).then((res) => this.setState({ recipe: res }));

    //check if the recipe shown is already a favourite
    this.isUserLoggedIn();
    this.isInFavourites();
    console.log(this.state.recipe);
  }

  render() {
    const { recipe, isFavourite, userLoggedIn } = this.state;
    return (
      <div className="col-sm-6">
        {!recipe ? (
          <span>loading...</span>
        ) : (
          <div>
            <h3 className="float-right mb-4" id="titleDetail">
              {recipe.title}{" "}
              {isFavourite && userLoggedIn ? (
                <i class="fas fa-star" onClick={this.removeFromFavourites}></i>
              ) : (
                <i className="far fa-star" onClick={this.addToFavourites}>
                  {userLoggedIn ? null : (
                    <small>Log in to save the recipe.</small>
                  )}
                </i>
              )}
            </h3>{" "}
            <i className="far fa-clock" id="icon2"></i>
            <i className="fas fa-concierge-bell" id="icon1"></i>
            <div className="float-right" id="allrecipe">
              {recipe.instructions}
            </div>
            <img
              alt={recipe.title}
              src={recipe.image}
              width="250"
              height="250"
              className="float-lef"
              id="imageDetail"
            />
          </div>
        )}
      </div>
    );
  }
}
