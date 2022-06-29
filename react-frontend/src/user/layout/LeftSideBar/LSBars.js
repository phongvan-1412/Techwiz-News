import React, { Component } from "react";
import LSBar from "./LSBar";
import { Consumer } from "../context";

class LSBars extends Component {
  render() {
    return (
      <Consumer>
        {(value) => {
          const { spotlights } = value;
          const q = [];
          const ourSpotlights = q.concat(spotlights);
          ourSpotlights.length = 10;
          return (
            <div className="row col-2">
              <h6 className="">
                <span className="">Exclusive Clips</span>
              </h6>
              {ourSpotlights.map((spotlight) => (
                <LSBar
                  key={spotlight.blog_id}
                  content={spotlight}
                ></LSBar>
              ))}
            </div>
          );
        }}
      </Consumer>
    );
  }
}
export default LSBars;
