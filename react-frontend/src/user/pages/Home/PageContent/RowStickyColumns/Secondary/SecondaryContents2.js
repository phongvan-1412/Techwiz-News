import React, { Component } from "react";
import { Consumer } from "../../../../../layout/context";
import SecondaryContent from "./SecondaryContent";

class SecondaryContents2 extends Component {
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
            <div className="col-md-12 secondary-contents2">
              <div className="row">
                {ourSpotlights.map((spotlight) => (
                  <SecondaryContent
                    key={spotlight.blog_id}
                    content={spotlight}
                  ></SecondaryContent>
                ))}
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}
export default SecondaryContents2;
