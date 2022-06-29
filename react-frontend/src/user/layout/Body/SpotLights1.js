import React, { Component } from "react";
import SpotLight from "./SpotLight";
import { Consumer } from "../context";

class SpotLights1 extends Component {
  render() {
    return (
      <Consumer>
        {(value) => {
          const { spotlights } = value;
          const q = [];
          const ourSpotlights = q.concat(spotlights);
          ourSpotlights.length = 2;
          return (
            <div className="col-md-12">
              <div className="row">
                {ourSpotlights.map((spotlight) => (
                  <SpotLight
                    key={spotlight.blog_id}
                    content={spotlight}
                  ></SpotLight>
                ))}
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}
export default SpotLights1;
