import React, { Component } from "react";
import { Consumer } from "./Body/BodySpotLight";

class BodyContents extends Component {
  render() {
    return (
      <Consumer>
        {(value) => {
          const { spotlights } = value;
          return (
            <div className="App">
              <Header branding="Contact Manager"></Header>
              <div className="container">
                <div className="row col-9">
                  <h1>Content title</h1>
                  <h1>Content image</h1>
                  <h1>Content </h1>
                </div>
              </div>
              <Footer />
            </div>
          );
        }}
      </Consumer>
    );
  }
}
export default BodyContents;
