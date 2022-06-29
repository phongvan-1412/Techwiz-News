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
            <div className="row">

              {ourSpotlights.map((spotlight) => (
                <div className="card-header col-md-12 topbody-content" style={{backgroundColor:'rgb(245,245,245)'}}>
                  <div className="container">
                  <div className="row" style={{alignSelf:'center',borderLeft:'1px solid rgba(0,0,0,0.25)'}}>
                      <Link to='/' className="col-md-6"><span style={{padding: '10px 0px', color:'#036', fontWeight:'bold', fontSize:'13px'}}>{spotlight.blog_content}</span></Link> 
                      <Link to='/' className="col-md-6"><span style={{padding: '10px 0px', color:'#036', fontWeight:'bold', fontSize:'13px'}}>{spotlight.blog_content}</span></Link> 
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
