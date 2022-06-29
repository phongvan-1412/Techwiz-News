import React, { Component } from "react";
import BottomContent from "./BottomContent";
import { Consumer } from "../context";
import { Link } from 'react-router-dom';


class BottomContents extends Component {
  render() {
    return (
      <Consumer>
        {(value) => {
          const { spotlights } = value;
          const q = [];
          const ourSpotlights = q.concat(spotlights);
          ourSpotlights.length = 12;
          return (
            <div>
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
