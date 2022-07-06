import React, { Component } from "react";
import PostContent from "./PostContent";

class PostContents extends Component {
  render() {
    const { spotlights } = this.props;

    return (
      <div>
        {spotlights.map((spotlight) => (
          <PostContent
            key={spotlight.blog_id}
            content={spotlight}
          ></PostContent>
        ))}
      </div>
    );
  }
}

export default PostContents;
