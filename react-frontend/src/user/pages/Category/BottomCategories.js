import React, { Component } from "react";
import BottomCategory from "./BottomCategory";
import { Consumer } from "../../layout/context";
import { Link } from 'react-router-dom';


class BottomCategories extends Component {
  render() {
    return (
      <Consumer>
        {(value) => {
          const { spotlights } = value;
          const q = [];
          const ourSpotlights = q.concat(spotlights);
          ourSpotlights.length = 15;
          return (
            <div>
              
              {ourSpotlights.map((spotlight) => (
                <BottomCategory
                  key={spotlight.blog_id}
                  content={spotlight}
                ></BottomCategory>
              ))}
            </div>
            
          );
        }}
      </Consumer>
    );
  }
}
export default BottomCategories;
