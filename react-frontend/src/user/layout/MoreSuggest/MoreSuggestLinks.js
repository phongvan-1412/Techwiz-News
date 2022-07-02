import React, { Component } from "react";
import MoreSuggestLink from "./MoreSuggestLink";
import { Consumer } from "../context";

class MoreSuggestLinks extends Component {
  render() {
    return (
      <Consumer>
        {(value) => {
          const { spotlights } = value;
          const q = [];
          const ourSpotlights = q.concat(spotlights);
          ourSpotlights.length = 5;
          return (
            <div className="col-md-12 more-suggest">
              <div className="row more-suggest-content">
                {ourSpotlights.map((spotlight) => (
                  <MoreSuggestLink
                    key={spotlight.blog_id}
                    content={spotlight}
                  ></MoreSuggestLink>
                ))}
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}
export default MoreSuggestLinks;