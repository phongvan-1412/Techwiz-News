import React, { Component } from "react";
import SecondarySpotLight from "./SecondarySpotLight";

import BlogContext from "../../../../../../BlogContext";

class SecondarySpotLights2 extends Component {
  componentDidMount() {
    this.props.getBlogs();
  }
  render() {
    return (
      <BlogContext>
        {(value) => {
          const { spotlights } = value;
          const tmpSpotlights = [];
          const localSpotlights = tmpSpotlights.concat(spotlights);
          localSpotlights.length = 2;
          return (
            <div className="col-md-12 secondary-spotlights2">
              <div className="row secondary-spotlights2-content">
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

export default SecondarySpotLights2;
