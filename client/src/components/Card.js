import React from "react";
import { NavLink, Link } from "react-router-dom";

const RECIPE_API_KEY = process.env.REACT_APP_RECIPE_API_KEY;

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: "",
      title: "",
      summary: "",
    };
  }
  componentDidMount = () => {
    this.displayRandomRecipe();
  };

  displayRandomRecipe = () => {
    this.setState({
      recipes: [],
    });

    fetch(
      `https://api.spoonacular.com/recipes/random?number=1&apiKey=${RECIPE_API_KEY}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((res) =>
        this.setState({
          image: res.recipes[0].image,

          title: res.recipes[0].title,
          summary: res.recipes[0].summary,
        })
      )
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    const { title, image, instructions } = this.props;
    return (
      <div className="col-md-3">
        <div className="card">
          <img
            className="card-img-top"
            alt={this.state.title}
            src={this.state.image}
          />
          <div className="card-body">
            <h4 className="card-title">{this.state.title}</h4>
            <p className="card-text">{this.state.summary}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
