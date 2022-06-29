import React, { Component } from "react";
import PanelContent from "./PanelContent";
import { Consumer } from "../context";

class PanelContents extends Component {
  render() {
    return (
      <Consumer>
        {(value) => {
          const { spotlights } = value;
          const q = [];
          const ourSpotlights = q.concat(spotlights);
          ourSpotlights.length = 10;
          return (
            <div className="row col-12">
              <div className="col-1">
                <button>left arrow</button>
              </div>
              <div className="row col-10">
                {ourSpotlights.map((spotlight) => (
                  <PanelContent
                    key={spotlight.blog_id}
                    content={spotlight}
                  ></PanelContent>
                ))}
              </div>
              <div className="col-1">
                <button>left arrow</button>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}
export default PanelContents;
