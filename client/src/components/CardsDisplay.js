import React from "react";
import "./CardsDisplay.css";
import Card from "./Card";

class CardsDisplay extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="carousel mt-4">
        <div
          className="carousel slide"
          data-ride="carousel"
          data-interval="5000"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="row">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
              </div>
            </div>

            <div className="carousel-item">
              <div className="row">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
              </div>
            </div>
          </div>
          <a
            class="carousel-control-prev"
            href="#carouselExampleControls"
            role="button"
            data-slide="prev"
          >
            <i class="fas fa-chevron-circle-left fa-lg"></i>
            <span class="sr-only">Previous</span>
          </a>
          <a
            class="carousel-control-next"
            href="#carouselExampleControls"
            role="button"
            data-slide="next"
          >
            <i className="fas fa-chevron-circle-right fa-lg"></i>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
    );
  }
}
export default CardsDisplay;
