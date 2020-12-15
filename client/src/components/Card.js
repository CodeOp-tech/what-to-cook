import React from "react";
import { Link } from "react-router-dom";
import { getRandomRecipe } from "../services/DataService";

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
    //this.displayRandomRecipe(); //uncomment for live data
  };

  displayRandomRecipe = () => {
    this.setState({
      recipes: [],
    });

    getRandomRecipe().then((res) =>
      this.setState({
        image: res.recipes[0].image,
        title: res.recipes[0].title,
        summary: res.recipes[0].summary,
        id: res.recipes[0].id,
      })
    );
  };

  render() {
    const { title, image, id } = this.state;
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
