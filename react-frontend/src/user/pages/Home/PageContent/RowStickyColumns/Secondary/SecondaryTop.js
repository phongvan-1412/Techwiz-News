import React, { Component } from "react";
import PropTypes from "prop-types";
import { Consumer } from "../../../../../layout/context";

class SecondaryTop extends Component {
  render() {
    return (
      <Consumer>
        {(value) => {
          const { spotlights } = value;
          const q = [];
          const ourSpotlights = q.concat(spotlights);
          ourSpotlights.length = 1;
          return (
              <div className="secondary-top">
                {ourSpotlights.map((spotlight) => (
                  <div>
                    <img className="secondary-top-img" src={require('../../../../../img/pages/Home/222222222222.jpg')}/>{/* `../SecondaryTop/${spotlight.blog_img_name}.jpg` */}
                    
                    <div className="secondary-title">
                      <h2>{(spotlight.blog_content).substring(0, 100)}</h2> {/* later: replace by blog_title */}
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

export default SecondaryTop;
