import React, { Component } from "react";
import MoreSuggestLink from "./MoreSuggestLink";

class MoreSuggestLinks extends Component {
  render() {
    const { spotlights } = this.props;
    return (
      <div className="col-md-12 more-suggest">
        <div className="row more-suggest-content">
          {spotlights.map((spotlight) => (
            <MoreSuggestLink
              key={spotlight.blog_id}
              content={spotlight}
            ></MoreSuggestLink>
          ))}
        </div>
      </div>
    );
  }
}

export default MoreSuggestLinks;
