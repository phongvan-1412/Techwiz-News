import React, { Component } from "react";
import SecondaryBodyContent from "./SecondaryBodyContent";
import BlogContext from "../../../../../../BlogContext";

class SecondaryBodyContents extends Component {
  render() {
    return (
      <BlogContext>
        {(value) => {
          const { spotlights } = value;
          return (
            <div className="secondary-bodycontents">
              {spotlights.map((spotlight) => (
                <SecondaryBodyContent
                  key={spotlight.blog_id}
                  content={spotlight}
                ></SecondaryBodyContent>
              ))}
            </div>
          );
        }}
      </BlogContext>
    );
  }
}
export default SecondaryBodyContents;
