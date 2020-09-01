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
    console.log(this.state.recipes);
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
          id: res.recipes[0].id,
        })
      )
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    const { title, image, summary, id } = this.state;
    return (
      <div className="col-sm-6 col-md-4 col-lg- col-xl-3">
        {/*col-xx-x controls the number of cards in a single carousel line*/}
        <div className="card">
          <Link to={`/recipe/${id}`}>
            <img className="card-img-top img-fluid" alt={title} src={image} />
            <div className="card-body">
              <h4 className="card-title">{title}</h4>
              {/* <p className="card-text text-truncate">{summary}</p> */}
            </div>
          </Link>
        </div>
      </div>
    );
  }
}

export default Card;
