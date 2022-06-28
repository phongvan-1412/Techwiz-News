import React, { Component } from "react";
import SpotLight from "./SpotLight";
import { Consumer } from "./BodySpotLight";

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
              {ourSpotlights.map((spotlight) => (
                <SpotLight
                  key={spotlight.blog_id}
                  spotlight={spotlight}
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
