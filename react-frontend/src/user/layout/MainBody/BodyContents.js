import React, { Component } from "react";
import Body from "./BodyContent";
import { Consumer } from "../context";

class BodyContents extends Component {
  render() {
    return (
      <Consumer>
        {(value) => {
          const { spotlights } = value;
          return (
            <div className="row col-9">
              <h1>body content</h1>
              {spotlights.map((spotlight) => (
                <Body
                  key={spotlight.blog_id}
                  content={spotlight}
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
