import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
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
            <div className="row">
              {ourSpotlights.map((spotlight) => (
                <div
                  className="card-header col-md-12 topbody-content"
                  style={{ backgroundColor: "rgb(245,245,245)" }}
                >
                  <div className="container">
                    <Link to={`/${spotlight.category_name}/${spotlight.title}`} className="col-md-6">
                      <img
                        src={require(`../TopBody/${spotlight.blog_img_name}.jpg`)}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "center",
                          objectPosition: "center",
                        }}
                      />
                    </Link>
                    <Link to={`/${spotlight.category_name}/${spotlight.title}`} className="col-md-6">
                      <span
                        style={{
                          padding: "10px 0px",
                          color: "#036",
                          fontWeight: "bold",
                          fontSize: "13px",
                        }}
                      >
                        {spotlight.blog_content}
                      </span>
                    </Link>
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
TopBody.propTypes = {
  content: PropTypes.object.isRequired,
};

export default TopBody;
