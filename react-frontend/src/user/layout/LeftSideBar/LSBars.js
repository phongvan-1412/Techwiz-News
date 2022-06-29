import React, { Component } from "react";
import LSBar from "./LSBar";
import { Consumer } from "../context";

class LSBars extends Component {
  render() {
    return (
      <Consumer>
        {(value) => {
          const { spotlights } = value;
          const q = [];
          const ourSpotlights = q.concat(spotlights);
          ourSpotlights.length = 10;
          return (
            <div>
              <h6>
                <span style={{fontSize:'15px',fontWeight:'bold',margin: '15px 0'}}>Exclusive Clips</span>
              </h6>
              {ourSpotlights.map((spotlight) => (
                <LSBar
                  key={spotlight.blog_id}
                  content={spotlight}
                ></LSBar>
              ))}
            </div>
          );
        }}
      </Consumer>
    );
  }
}
export default LSBars;
