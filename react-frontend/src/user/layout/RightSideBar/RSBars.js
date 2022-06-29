import React, { Component } from "react";
import RSBar from "./RSBar";
import { Consumer } from "../context";

class RSBars extends Component {
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
                <RSBar
                  key={spotlight.blog_id}
                  content={spotlight}
                ></RSBar>
              ))}
            </div>
          );
        }}
      </Consumer>
    );
  }
}
export default RSBars;
