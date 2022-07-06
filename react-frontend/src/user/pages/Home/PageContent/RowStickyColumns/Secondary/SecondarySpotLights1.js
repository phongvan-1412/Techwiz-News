import React, { Component } from "react";
import SecondarySpotLight from "./SecondarySpotLight";

import BlogContext from "../../../../../../BlogContext";

class SecondarySpotLights1 extends Component {
  render() {
    return (
      <BlogContext>
        {(value) => {
          const { spotlights } = value;
          const tmpSpotlights = [];
          const localSpotlights = tmpSpotlights.concat(spotlights);
          localSpotlights.length = 2;
          return (
            <div className="col-md-12 secondary-spotlights1">
              <div className="row secondary-spotlights1-content">
                {localSpotlights.map((spotlight) => (
                  <SecondarySpotLight
                    key={spotlight.blog_id}
                    content={spotlight}
                  ></SecondarySpotLight>
                ))}
              </div>
            </div>
          );
        }}
      </BlogContext>
    );
  }
}

export default SecondarySpotLights1;
