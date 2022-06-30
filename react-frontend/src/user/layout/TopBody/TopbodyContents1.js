import React, { Component } from "react";
import { Consumer } from "../context";
import TempTopBodyContent from "./TempTopBodyContent";

class TopBodyContents1 extends Component {
  render() {
    return (
      <Consumer>
         {(value) => {
          const { spotlights } = value;
          const q = [];
          const ourSpotlights = q.concat(spotlights);
          ourSpotlights.length = 2;
          return (
            <div className="col-md-12">
              <div className="row">
                {ourSpotlights.map((spotlight) => (
                  <TempTopBodyContent
                    key={spotlight.blog_id}
                    content={spotlight}
                  ></TempTopBodyContent>
                ))}
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}
export default TopBodyContents1;
