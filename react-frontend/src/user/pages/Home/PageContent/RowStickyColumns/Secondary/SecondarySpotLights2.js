import React, { Component } from "react";
import SecondarySpotLight from "./SecondarySpotLight";

import { connect } from "react-redux";
import PropTypes from "prop-types";
import { GET_BLOGS } from "../../../../../../actions/types";

class SecondarySpotLights2 extends Component {
  componentDidMount() {
    this.props.getBlogs();
  }
  render() {
    const { spotlights } = this.props;
    return (
      <div className="col-md-12 secondary-spotlights2">
        <div className="row secondary-spotlights2-content">
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
SecondarySpotLights2.propTypes = {
  getBlogs: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  spotlights: state.spotlight.spotlights,
});

const mapDispatchToProps = (dispatch) => ({
  getBlogs: () => dispatch({ type: GET_BLOGS }),
});
export default connect(mapStateToProps,mapDispatchToProps)(SecondarySpotLights2);
