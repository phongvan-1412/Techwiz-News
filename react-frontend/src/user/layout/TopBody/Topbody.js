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
            <div className="row" style={{ textAlign: "center" }}>
              {ourSpotlights.map((spotlight) => (
                <div
                  className="card-header mb-3 col-md-12"
                  style={{ backgroundColor: "whitesmoke" }}
                >
                  <div className="col-md-12">
                    <Link to="/">
                      <img
                        src={require('./222222222222.jpg')} //`../TopBody/${spotlight.blog_img_name}.jpg`
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "center",
                          objectPosition: "center",
                        }}
                      />
                    </Link>
                  </div>
                  <h1>
                    <Link
                      to="/bodySpotLight"
                      style={{ cursor: "pointer", color: "#003366", hover: "" }}
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
