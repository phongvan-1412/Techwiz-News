import React, { Component } from "react";
import SecondaryContent from "./SecondaryContent";

class SecondaryContents1 extends Component {
  render() {
    const { spotlights } = this.props;
    const tmpSpotlights = [];
    const localSpotlights = tmpSpotlights.concat(spotlights);
    localSpotlights.length = 2;
    return (
      <div className="col-md-12 secondary-contents1">
        <div className="row">
          {localSpotlights.map((spotlight) => (
            <SecondaryContent
              key={spotlight.blog_id}
              content={spotlight}
            ></SecondaryContent>
          ))}
        </div>
      </div>
    );
  }
}

export default SecondaryContents1;
