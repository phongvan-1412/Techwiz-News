import React, { Component } from "react";
import SecondaryContent from "./SecondaryContent";

import BlogContext from "../../../../../../BlogContext";

class SecondaryContents2 extends Component {
  render() {
    return (
      <BlogContext>
        {(value) => {
          const { spotlights } = value;
          const tmpSpotlights = [];
          const localSpotlights = tmpSpotlights.concat(spotlights);
          localSpotlights.reverse();
          localSpotlights.length = 2;
          return (
            <div className="col-md-12 secondary-contents1">
              <div className="row">
                {localSpotlights.map((spotlight) => (
                  <SecondaryContent
                    key={spotlight.blog_id}
                    content={spotlight}
                  ></SecondaryContent>
                ))}
              </div>
            </div>
          );
        }}
      </BlogContext>
    );
  }
}

export default SecondaryContents2;
