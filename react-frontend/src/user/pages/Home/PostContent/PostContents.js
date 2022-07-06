import React, { Component } from "react";
import PostContent from "./PostContent";
import BlogContext from "../../../../BlogContext";

class PostContents extends Component {
  render() {
    return (
      <BlogContext>
        {(value) => {
          const { spotlights } = value;
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
        }}
      </BlogContext>
    );
  }
}

export default PostContents;
