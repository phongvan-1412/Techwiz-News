import React, { Component } from "react";
import BottomContent from "./BottomContent";
import { Consumer } from "../Body/context";

class BottomContents extends Component {
  render() {
    return (
      <Consumer>
        {(value) => {
          const { spotlights } = value;
          return (
            <div className="row col-9">
              <h1>BottomContents</h1>
              {spotlights.map((spotlight) => (
                <BottomContent
                  key={spotlight.blog_id}
                  spotlight={spotlight}
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
