import React, { Component } from "react";
import { Consumer } from "../context";
import { Link } from "react-router-dom";

class TopBody extends Component {
  render() {
    return (
      <Consumer>
        {(value) => {
          const { spotlights } = value;
          const q = [];
          const ourSpotlights = q.concat(spotlights);
          ourSpotlights.length = 2;
          return (
            <div className="row" style={{textAlign:'center', alignSelf:'center'}}>

              {ourSpotlights.map((spotlight) => (
                <div className="card-header col-md-12 topbody-content" style={{backgroundColor: 'whitesmoke', textAlign:'center'}}>
                  <div className="container">
                  <div className="row" style={{textAlign:'center', alignSelf:'center'}}>
                      <span className="col-md-6" style={{padding: '0px 20px', alignSeft:'center'}}>{spotlight.blog_content}</span>
                      <span className="col-md-6" style={{padding: '0px 20px'}}>{spotlight.blog_content}</span>
                  </div>
                  </div>
                </div>
              ))}
            </div>
          );
        }}
      </Consumer>
    );
  }
}
export default TopBody;
