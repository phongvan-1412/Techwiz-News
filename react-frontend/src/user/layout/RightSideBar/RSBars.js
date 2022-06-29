import React, { Component } from "react";
import { Link } from "react-router-dom";
import RSBar from "./RSBar";
import { Consumer } from "../context";

class RSBars extends Component {
  render() {
    return (
      <Consumer>
         {(value) => {
          const { spotlights } = value;
          const q = [];
          const ourSpotlights = q.concat(spotlights);
          ourSpotlights.length = 10;
          return (
            <div className="row" >
              <Link to='/' style={{textAlign:'center',padding:'10px 0',fontWeight:'bold',color:'black'}}><h4>ROE V. WADE OVERTURNED</h4></Link>
              {ourSpotlights.map((spotlight) => (
                <RSBar
                  key={spotlight.blog_id}
                  content={spotlight}
                ></RSBar>
              ))}
            </div>
          );
        }}
      </Consumer>
    );
  }
}
export default RSBars;
