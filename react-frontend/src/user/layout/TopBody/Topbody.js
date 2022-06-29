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
          ourSpotlights.length = 1;
          return (
            <div className="row" style={{textAlign:'center'}}>
              <div className="col-md-12">
                <Link to="/"><img src={require('./image-1.jpg')} alt="" style={{ width: '100%', height: 'auto',objectFit:'center',objectPosition:'center' }} /></Link>
              </div>

              {ourSpotlights.map((spotlight) => (
                <div className="card-header mb-3 col-md-12" style={{backgroundColor: 'whitesmoke'}}>
                  <h1>
                    <Link to="/bodySpotLight" style={{ cursor: "pointer", color: "#003366", hover:'' }}>
                      {spotlight.blog_title}
                    </Link>
                  </h1>
                  <div className="col-md-12 spotlight-content">
                    <div className="row">
                      <span className="col-md-6" style={{alignSeft:'center',borderRight:'1px solid rba(245,245,245)'}}>{spotlight.blog_title}</span>
                      <span className="col-md-6">{spotlight.blog_title}</span>
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
