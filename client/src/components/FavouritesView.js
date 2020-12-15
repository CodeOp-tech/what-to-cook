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

        {favouriteList.length > 0 ? (
          favouriteList.map((favourite) => (
            <div className="col-sm-6 col-md-4 col-lg-3">
            <RecipeSearchItem
              key={favourite.id}
              id={favourite.recipeId}
              image={favourite.image}
              title={favourite.title}
              className="mb-4"
            />
            </div>
          ))
        ) : (
          <p>You don't have any favourite recipes. Why don't you add some?</p>
        )}
      </div>
    );
  }
}
