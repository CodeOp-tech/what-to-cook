import React from "react";
import "./CardsDisplay.css";

class CardsDisplay extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="Carousel mt-4">
        <div className="carousel slide" data-interval="2000">
          <h2 className="text-center">slide 1</h2>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="display-4">
                <div className="card-deck">
                  <div className="card">
                    <img
                      className="card-img-top"
                      src="https://images.unsplash.com/photo-1559620192-032c4bc4674e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=970&q=80"
                      alt="cake"
                    />

                    <div className="card-body text-center">
                      <h4>Recipe card 1</h4>
                      <p className="card-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do
                      </p>
                    </div>
                  </div>
                  <div className="card">
                    <img
                      className="card-img-top"
                      src="https://images.unsplash.com/photo-1559620192-032c4bc4674e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=970&q=80"
                      alt="cake"
                    />
                    <div className="card-body text-center">
                      <h4>Recipe card 2</h4>
                      <p className="card-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do
                      </p>
                    </div>
                  </div>
                  <div className="card">
                    <img
                      className="card-img-top"
                      src="https://images.unsplash.com/photo-1559620192-032c4bc4674e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=970&q=80"
                      alt="cake"
                    />
                    <div className="card-body text-center">
                      <h4>Recipe card 3</h4>
                      <p className="card-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do
                      </p>
                    </div>
                  </div>
                  <div className="card">
                    <img
                      className="card-img-top"
                      src="https://images.unsplash.com/photo-1559620192-032c4bc4674e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=970&q=80"
                      alt="cake"
                    />
                    <div className="card-body text-center">
                      <h4>Recipe card 4</h4>
                      <p className="card-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do
                      </p>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="display-4">slide 2</div>
                </div>

                <div className="carousel-item">
                  <div className="display-4">slide 3</div>
                </div>
              </div>
            </div>
            <button>
              <i className="fas fa-chevron-circle-right"></i>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default CardsDisplay;
