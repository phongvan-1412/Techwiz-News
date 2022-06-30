import React, { Component } from "react";
import SpotLightCategory from "./SpotLightCategory";
import { Consumer } from "../context";

class SpotLightCategories extends Component {
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
                  <SpotLightCategory
                    key={spotlight.blog_id}
                    content={spotlight}
                  ></SpotLightCategory>
                ))}
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}
export default SpotLightCategories;
