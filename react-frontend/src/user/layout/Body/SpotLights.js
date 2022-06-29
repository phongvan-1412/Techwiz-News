import React, { Component } from "react";
import SpotLight from "./SpotLight";
import { Consumer } from "../context";

class SpotLights extends Component {
  render() {
    return (
      <Consumer>
        {(value) => {
          const { spotlights } = value;
          const q = [];
          const ourSpotlights = q.concat(spotlights);
          ourSpotlights.length = 2;
          return (
            <div className="row col-9">
              <h1>spotlight</h1>
              {ourSpotlights.map((spotlight) => (
                <SpotLight
                  key={spotlight.blog_id}
                  content={spotlight}
                ></SpotLight>
              ))}
              
            </div>
          );
        }}
      </Consumer>
    );
  }
}
export default SpotLights;
