import React, { Component } from "react";
import PropTypes from "prop-types";
import { Consumer } from "../context";

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
              <div >
                {ourSpotlights.map((spotlight) => (
                  <div>
                    <img
                      src={require(`../TopBody/${spotlight.blog_img_name}.jpg`)}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "center",
                        objectPosition: "center",
                      }}
                    />
                    <div>
                      <h2>{(spotlight.blog_content).substring(0, 100)}</h2>
                    </div>
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
