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
                  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 intro-bg">
                    <h3 className="intro">
                      Don't know what to cook? <br></br>We've got you covered!
                    </h3>
                  </div>
                </div>
              </div>
            </section>
            <h1 className="text-center mt-4">Today's specials!</h1>
          </div>
        </div>
        <CardsDisplay />
      </div>
    );
  }
}
