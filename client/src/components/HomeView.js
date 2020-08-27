import React, { Component } from "react";

export default class HomeView extends Component {
  render() {
    return (
      <div>
        <div id="banneronthetop">
          this is homeview
          <div className="container" id="textinbanner">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud
          </div>
        </div>
        <div class="card-deck">
          <div class="card">
            <img class="card-img-top" src="images/cake.jpg" alt="cake" />

            <div class="card-body text-center">
              <h4>Recipe</h4>
              <p class="card-text">Some text inside the first card</p>
            </div>
          </div>
          <div class="card">
            <div class="card-body text-center">
              <p class="card-text">Some text inside the second card</p>
            </div>
          </div>
          <div class="card">
            <div class="card-body text-center">
              <p class="card-text">Some text inside the third card</p>
            </div>
          </div>
          <div class="card">
            <div class="card-body text-center">
              <p class="card-text">Some text inside the fourth card</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
