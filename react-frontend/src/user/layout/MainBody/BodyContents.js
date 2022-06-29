import React, { Component } from "react";
import Body from "./BodyContent";
import { Consumer } from "../context";

class BodyContents extends Component {
  render() {
    return (
      <Consumer>
        {(value) => {
          const { spotlights } = value;
          const q = [];
          const ourSpotlights = q.concat(spotlights);
          ourSpotlights.length = 30;
          return (
            <div className="">
              {spotlights.map((spotlight) => (
                <Body
                  key={spotlight.blog_id}
                  content={spotlight}
                ></Body>
              ))}
            </div>
          );
        }}
      </Consumer>
    );
  }
}
export default BodyContents;
