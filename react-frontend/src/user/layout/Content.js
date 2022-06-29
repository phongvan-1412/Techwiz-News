import React, { Component } from "react";
import { Consumer } from "./context";

class Content extends Component {
  render() {
    return (
      <Consumer>
        {(value) => {
          const { spotlights } = value;
          return (
            <div className="App">
              <div className="container">
                <div className="row col-9">
                  <h1>Content title</h1>
                  <h1>Content image</h1>
                  <h1>Content </h1>
                </div>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}
export default Content;
