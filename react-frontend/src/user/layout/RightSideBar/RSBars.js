import React, { Component } from "react";
import { Link } from "react-router-dom";
import RSBar from "./RSBar";

import BlogContext from "../../../BlogContext";

class RSBars extends Component {
  render() {
    return (
      <BlogContext>
        {(value) => {
          const { spotlights } = value;
          return (
            <div className="row">
              <Link
                to="/"
                style={{
                  textAlign: "center",
                  padding: "10px 0",
                  fontWeight: "bold",
                  color: "black",
                }}
              >
                <h4>ROE V. WADE OVERTURNED</h4>
              </Link>
              {spotlights.map((spotlight) => (
                <RSBar key={spotlight.blog_id} content={spotlight}></RSBar>
              ))}
            </div>
          );
        }}
      </BlogContext>
    );
  }
}

export default RSBars;
