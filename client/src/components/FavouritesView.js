import React, { Component } from "react";
import RecipeSearchItem from "./RecipeSearchItem";

export default class FavouritesView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favouriteList: [],
    };
  }

  getUserFavourites = async () => {
    try {
      const results = await fetch("api/favourites/all", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "x-access-token": localStorage.getItem("token"),
        },
      });
      const json = await results.json();
      this.setState({
        favouriteList: json,
      });

      console.log(this.state.favouriteList);
    } catch (err) {
      console.log(err);
    }
  };

  componentDidMount() {
    this.getUserFavourites();
  }

  render() {
    const { favouriteList } = this.state;
    return (
      <div className="row mt-4 ml-4 mr-4 mb-4">
        <div className="col-sm-6 col-md-4 col-lg-3">
        <i className="fas fa-user-alt mb-4" id="user2"></i>
        <div id="name">Username</div>
        </div>
        <div className="col-sm-8 mt-4">
        {favouriteList.map((favourite) => (
          <div className="md-4">
          <RecipeSearchItem
            key={favourite.id}
            id={favourite.recipeId}
            image={favourite.image}
            title={favourite.title}
            className="mb-4"
          />
          </div>
        ))}
        </div>
       
      </div>
    );
  }
}
