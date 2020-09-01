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
      <div>
        <div className="carousel mt-4">
          <div
            className="carousel slide row "
            data-ride="carousel"
            data-interval="1500000"
            id="my-slider"
          >
            <div className="col-1 text-center d-flex justify-content-center">
              <a
                class="carousel-control-prev"
                href="#my-slider"
                role="button"
                data-slide="prev"
              >
                <i class="fas fa-chevron-circle-left fa-3x"></i>
                <span class="sr-only">Previous</span>
              </a>
            </div>
            <div className="carousel-inner col">
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
            <div className="col-1 text-center d-flex justify-content-center">
              <a
                class="carousel-control-next"
                href="#my-slider"
                role="button"
                data-slide="next"
              >
                <i className="fas fa-chevron-circle-right fa-3x"></i>
                <span class="sr-only">Next</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default CardsDisplay;
