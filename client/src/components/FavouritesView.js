import React, { Component } from "react";

export default class FavouritesView extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  getUserFavourites = async () => {
    try {
      const results = await fetch("api/favourites", {
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
    } catch (err) {}
  };

  componentDidMount() {
    this.getUserFavourites();
  }

  render() {
    return <div></div>;
  }
}
