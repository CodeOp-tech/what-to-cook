import React from "react";

class Card extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div class="card-deck mx-auto">
        <div class="card">
          <img
            class="card-img-top"
            src="https://images.unsplash.com/photo-1559620192-032c4bc4674e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=970&q=80"
            alt="cake"
          />
          <div class="card-body">
            <h4 class="card-title">Recipe card 1</h4>
            <p class="card-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et
            </p>
          </div>
        </div>
        <div class="card">
          <img
            class="card-img-top"
            src="https://images.unsplash.com/photo-1559620192-032c4bc4674e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=970&q=80"
            alt="cake"
          />

          <div class="card-body">
            <h4 class="card-title">Recipe card 2</h4>
            <p class="card-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et
            </p>
          </div>
        </div>
        <div class="card">
          <img
            class="card-img-top"
            src="https://images.unsplash.com/photo-1559620192-032c4bc4674e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=970&q=80"
            alt="cake"
          />
          <div class="card-body">
            <h4 class="card-title">Recipe card 3</h4>
            <p class="card-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et
            </p>
          </div>
        </div>
        <div class="card">
          <img
            class="card-img-top"
            src="https://images.unsplash.com/photo-1559620192-032c4bc4674e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=970&q=80"
            alt="cake"
          />
          <div class="card-body">
            <h4 class="card-title">Recipe card 4</h4>
            <p class="card-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
