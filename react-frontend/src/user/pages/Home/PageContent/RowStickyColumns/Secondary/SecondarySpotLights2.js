import React, { Component } from "react";
import SecondarySpotLight from "./SecondarySpotLight";

import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getBlogs } from "../../../../../../actions/blogsActions";

class SecondarySpotLights2 extends Component {
  componentDidMount() {
    this.props.getBlogs();
  }
  render() {
    const { spotlights } = this.props;
    const tmpSpotlights = [];
    const localSpotlights = tmpSpotlights.concat(spotlights);
    localSpotlights.length = 2;
    return (
      <div className="col-md-12 secondary-spotlights2">
        <div className="row secondary-spotlights2-content">
          {localSpotlights.map((spotlight) => (
            <SecondarySpotLight
              key={spotlight.blog_id}
              content={spotlight}
            ></SecondarySpotLight>
          ))}
        </div>
      </div>
    );
  }
}
SecondarySpotLights2.propTypes = {
  getBlogs: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  spotlights: state.spotlight.spotlights,
});

export default connect(mapStateToProps,{ getBlogs })(SecondarySpotLights2);
