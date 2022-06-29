import React, { Component } from "react";
import { Consumer } from "../context";
import { Link } from "react-router-dom";

class TopBody extends Component {
  render() {
    return (
      <Consumer>
        {(value) => {
          const { spotlights } = value;
          const q = [];
          const ourSpotlights = q.concat(spotlights);
          ourSpotlights.length = 1;
          return (
            <div className="row col-9">
              <div>
                <h1>Top Body Image</h1>
              </div>
              {ourSpotlights.map((spotlight) => (
                <div className="card card-body mb3 col-md-6">
                  <h1>
                    <Link
                      to="/bodySpotLight"
                      style={{
                        cursor: "pointer",
                        color: "black",
                      }}
                    >
                      {spotlight.blog_title}
                    </Link>
                  </h1>
                </div>
              ))}
            </div>
          );
        }}
      </Consumer>
    );
  }
}
export default TopBody;
