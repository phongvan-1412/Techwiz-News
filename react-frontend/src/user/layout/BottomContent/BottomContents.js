import React, { Component } from "react";
import BottomContent from "./BottomContent";
import { Consumer } from "../context";

class BottomContents extends Component {
  render() {
    return (
      <Consumer>
        {(value) => {
          const { spotlights } = value;
          const q = [];
          const ourSpotlights = q.concat(spotlights);
          ourSpotlights.length = 2;
          return (
            <div className="row col-9">
              <h1>bottom contents</h1>
              {ourSpotlights.map((spotlight) => (
                <BottomContent
                  key={spotlight.blog_id}
                  content={spotlight}
                ></BottomContent>
              ))}
              
            </div>
          );
        }}
      </Consumer>
    );
  }
}
export default BottomContents;
