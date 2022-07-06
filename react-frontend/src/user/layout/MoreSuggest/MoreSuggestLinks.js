import React, { Component } from "react";
import MoreSuggestLink from "./MoreSuggestLink";

import BlogContext from "../../../BlogContext";

class MoreSuggestLinks extends Component {
  render() {
    return (
      <BlogContext>
        {(value) => {
          const { spotlights } = value;
          return (
            <div className="col-md-12 more-suggest">
              <div className="row more-suggest-content">
                {spotlights.map((spotlight) => (
                  <MoreSuggestLink
                    key={spotlight.blog_id}
                    content={spotlight}
                  ></MoreSuggestLink>
                ))}
              </div>
            </div>
          );
        }}
      </BlogContext>
    );
  }
}

export default MoreSuggestLinks;
