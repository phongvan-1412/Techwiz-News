import React, { Component } from "react";
import { Link } from "react-router-dom";
import RSBar from "./RSBar";

class RSBars extends Component {
  render() {
    const { spotlights } = this.props;
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
  }
}

export default RSBars;
