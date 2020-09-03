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
                    <h3 className="intro">
                      Are you hungry? Feeling like cooking something new? We are
                      here to help you! Just add the ingredients you want to
                      use... More than 360,000 recipes in our database for you
                      to enjoy cooking !
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
