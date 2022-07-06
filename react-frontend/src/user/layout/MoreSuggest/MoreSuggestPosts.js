import React, { Component } from "react";
import MoreSuggestPost from "./MoreSuggestPost";

class MoreSuggestPosts extends Component {
  render() {
    const { spotlights } = this.props;
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
  }
}

export default MoreSuggestPosts;
