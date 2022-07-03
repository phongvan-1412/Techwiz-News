import React, { Component } from "react";
import SecondarySpotLight from "./SecondarySpotLight";

import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getBlogs } from "../../../../../../actions/blogsActions";

class SecondarySpotLights1 extends Component {
  componentDidMount() {
    this.props.getBlogs();
  }
  render() {
    const { spotlights } = this.props;

    return (
      <div className="col-md-12 secondary-spotlights1">
        <div className="row secondary-spotlights1-content">
          {spotlights.map((spotlight) => (
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
SecondarySpotLights1.propTypes = {
  getBlogs: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  spotlights: state.spotlight.spotlights,
});

export default connect(mapStateToProps,{ getBlogs })(SecondarySpotLights1);
