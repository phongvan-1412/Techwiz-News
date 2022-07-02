import React, { Component } from "react";
import PostContent from "./PostContent";
import { Consumer } from "../../../layout/context";
import { Link } from "react-router-dom";

class PostContents extends Component {
  render() {
    return (
      <Consumer>
        {(value) => {
          const { spotlights } = value;
          const q = [];
          const ourSpotlights = q.concat(spotlights);
          ourSpotlights.length = 12;
          return (
            <div>
              {ourSpotlights.map((spotlight) => (
                <PostContent
                  key={spotlight.blog_id}
                  content={spotlight}
                ></PostContent>
              ))}
            </div>
          );
        }}
      </Consumer>
    );
  }
}
export default PostContents;
