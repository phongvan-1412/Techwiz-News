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
            <div className="row">
              <div className="col-md-12">
                <Link to="/"><img src={require('R.jpg').default} alt="" style={{ width: '500px', height: '500px' }} /></Link>
              </div>

              {ourSpotlights.map((spotlight) => (
                <div className="card-header mb-3 col-md-12">
                  <h1>
                    <Link to="/bodySpotLight" style={{ cursor: "pointer", color: "black" }}>
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
