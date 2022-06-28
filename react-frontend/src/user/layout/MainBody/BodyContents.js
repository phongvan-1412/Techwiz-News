import React, { Component } from "react";
import Body from "./BodyContent";
import { Consumer } from "../Body/BodySpotLight";

class BodyContents extends Component {
  render() {
    return (
      <Consumer>
        {(value) => {
          const { spotlights } = value;
          return (
            <div className="row col-9">
              <h1>BodyContents</h1>
              {spotlights.map((spotlight) => (
                <Body
                  key={spotlight.blog_id}
                  spotlight={spotlight}
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
