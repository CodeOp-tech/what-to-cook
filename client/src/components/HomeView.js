import React, { Component } from "react";
import CardsDisplay from "./CardsDisplay";

export default class HomeView extends Component {
  render() {
    return (
      <div className="container-fluid mt-3">
        <div className="row">
          <div className="col">
            <section className="bgimage">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <h3>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud
                    </h3>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
        <CardsDisplay />
      </div>
    );
  }
}
