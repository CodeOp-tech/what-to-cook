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
          data-interval="15000"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="display-4">
                {" "}
                <Card />
              </div>
            </div>

            <div className="carousel-item">
              <div className="display-4">
                {" "}
                <Card />
              </div>
            </div>

            <div className="carousel-item">
              <div className="display-4">
                {" "}
                <Card />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default CardsDisplay;
