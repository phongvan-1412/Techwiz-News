import React, { Component } from "react";
import SecondarySpotLight from "./SecondarySpotLight";
import { Consumer } from "../../../../../layout/context";

class SecondarySpotLights2 extends Component {
  render() {
    return (
      <Consumer>
        {(value) => {
          const { spotlights } = value;
          const q = [];
          const ourSpotlights = q.concat(spotlights);
          ourSpotlights.length = 4;
          ourSpotlights.reverse();
          ourSpotlights.length = 2;
          return (
            <div className="col-md-12 secondary-spotlights2">
              <div className="row secondary-spotlights2-content">
                {ourSpotlights.map((spotlight) => (
                  <SecondarySpotLight
                    key={spotlight.blog_id}
                    content={spotlight}
                  ></SecondarySpotLight>
                ))}
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}
export default SecondarySpotLights2;
