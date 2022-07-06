import React, { Component } from "react";
import LSBar from "./LSBar";

class LSBars extends Component {
  render() {
    const {spotlights} = this.props;
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
  }
}

export default LSBars;
