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
            <div className="row" style={{textAlign:'center'}}>

              {ourSpotlights.map((spotlight) => (
                <div className="card-header mb-3 col-md-12" style={{backgroundColor: 'whitesmoke'}}>
                  <div className="col-md-12 topbody-content" >
                    <div className="row">
                      <span className="col-md-6" style={{alignSeft:'center'}}>{spotlight.blog_content}</span>
                      <span className="col-md-6">{spotlight.blog_content}</span>
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
