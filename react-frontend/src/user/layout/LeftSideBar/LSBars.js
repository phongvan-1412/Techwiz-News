import React, { Component } from "react";
import LSBar from "./LSBar";

import BlogContext from "../../../BlogContext";

class LSBars extends Component {
  render() {
    return (
      <BlogContext>
        {(value) => {
          const { spotlights } = value;
          return (
            <div>
              <h6>
                <span
                  style={{
                    fontSize: "15px",
                    fontWeight: "bold",
                    margin: "15px 0",
                  }}
                >
                  Exclusive Clips
                </span>
              </h6>
              {spotlights.map((spotlight) => (
                <LSBar key={spotlight.blog_id} content={spotlight}></LSBar>
              ))}
            </div>
          );
        }}
      </BlogContext>
    );
  }
}

export default LSBars;
