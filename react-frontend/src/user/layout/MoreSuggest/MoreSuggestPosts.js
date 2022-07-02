import React, { Component } from "react";
import MoreSuggestPost from "./MoreSuggestPost";
import { Consumer } from "../context";

class MoreSuggestPosts extends Component {
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
                  <MoreSuggestPost
                    key={spotlight.blog_id}
                    content={spotlight}
                  ></MoreSuggestPost>
                ))}
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}
export default MoreSuggestPosts;