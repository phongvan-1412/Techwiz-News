import React, { Component } from "react";
import SpotLight from "./SpotLight";
import { Consumer } from "./BodySpotLight";

class SpotLights extends Component {
  render() {
    return (
      <Consumer>
        {(value) => {
          const { spotlights } = value;
          spotlights.length = 2;
          return (
            <div className="row col-9">
              {spotlights.map((spotlight) => (
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
