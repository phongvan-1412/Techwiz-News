import React, { Component } from "react";
import SecondaryBodyContent from "./SecondaryBodyContent";

class SecondaryBodyContents extends Component {
  render() {
    const { spotlights } = this.props;
    const tmpSpotlights = [];
    const localSpotlights = tmpSpotlights.concat(spotlights);
    localSpotlights.length = 2;
    return (
      <div className="secondary-bodycontents">
        {spotlights.map((spotlight) => (
          <SecondaryBodyContent
            key={spotlight.blog_id}
            content={spotlight}
          ></SecondaryBodyContent>
        ))}
      </div>
    );
  }
}
export default SecondaryBodyContents;
