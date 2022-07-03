import React, { Component } from "react";
import LSBar from "./LSBar";

import { connect } from "react-redux";
import PropTypes from "prop-types";
import { GET_BLOGS } from "../../../actions/types";

class LSBars extends Component {
  componentDidMount() {
    this.props.getBlogs();
  }
  render() {
    const { spotlights } = this.props;

    return (
      <div>
        <h6>
          <span
            style={{ fontSize: "15px", fontWeight: "bold", margin: "15px 0" }}
          >
            Exclusive Clips
          </span>
        </h6>
        {spotlights.map((spotlight) => (
          <LSBar key={spotlight.blog_id} content={spotlight}></LSBar>
        ))}
      </div>
    );
  }
}
LSBars.propTypes = {
  getBlogs: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  spotlights: state.spotlight.spotlights,
});

const mapDispatchToProps = (dispatch) => ({
  getBlogs: () => dispatch({ type: GET_BLOGS }),
});
export default connect(mapStateToProps,mapDispatchToProps)(LSBars);
