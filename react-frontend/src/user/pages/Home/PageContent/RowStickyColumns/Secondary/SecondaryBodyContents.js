import React, { Component } from "react";
import SecondaryBodyContent from "./SecondaryBodyContent";
import { Consumer } from "../../../../../layout/context";

class SecondaryBodyContents extends Component {
  render() {
    return (
      <Consumer>
        {(value) => {
          const { spotlights } = value;
          const q = [];
          const ourSpotlights = q.concat(spotlights);
          ourSpotlights.length = 30;
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
        }}
      </Consumer>
    );
  }
}
export default SecondaryBodyContents;
