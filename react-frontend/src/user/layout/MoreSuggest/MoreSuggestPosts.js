import React, { Component } from "react";
import MoreSuggestPost from "./MoreSuggestPost";

import BlogContext from "../../../BlogContext";

class MoreSuggestPosts extends Component {
  render() {
    return (
      <BlogContext>
        {(value) => {
          const { spotlights } = value;
          return (
            <div className="col-md-12 more-suggest">
              <div className="row more-suggest-content">
                {spotlights.map((spotlight) => (
                  <MoreSuggestPost
                    key={spotlight.blog_id}
                    content={spotlight}
                  ></MoreSuggestPost>
                ))}
              </div>
            </div>
          );
        }}
      </BlogContext>
    );
  }
}

export default MoreSuggestPosts;
