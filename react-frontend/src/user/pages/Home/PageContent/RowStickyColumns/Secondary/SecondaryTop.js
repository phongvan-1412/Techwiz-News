import React, { Component } from "react";

class SecondaryTop extends Component {
  render() {
    const { spotlights } = this.props;
    const tmpSpotlights = [];
    const localSpotlights = tmpSpotlights.concat(spotlights);
    localSpotlights.length = 1;
    return (
      <div className="secondary-top">
        {localSpotlights.map((spotlight) => (
          <div key={spotlight.blog_id}>
            <img
              className="secondary-top-img"
              src={require(`../../../../../../../../LaravelAPI/public/upload.product/${spotlight.blog_thumbnail_name}`)}
            />
            <div className="secondary-title">
              <h2>{spotlight.blog_title}</h2>{" "}
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default SecondaryTop;
