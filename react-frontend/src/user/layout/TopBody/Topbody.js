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
            <div className="col-md-12">
              <div className="row">
                {ourSpotlights.map((spotlight) => (
                  <img
                    src={require(`../TopBody/${spotlight.blog_img_name}.jpg`)}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "center",
                      objectPosition: "center",
                    }}
                  />
                ))}
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}
TopBody.propTypes = {
  content: PropTypes.object.isRequired,
};

export default TopBody;
