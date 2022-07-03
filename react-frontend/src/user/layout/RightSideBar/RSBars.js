import React, { Component } from "react";
import { Link } from "react-router-dom";
import RSBar from "./RSBar";

import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getBlogs } from "../../../actions/blogsActions";

class RSBars extends Component {
  componentDidMount() {
    this.props.getBlogs();
  }
  render() {
    const { spotlights } = this.props;

    return (
      <div className="row">
        <Link
          to="/"
          style={{
            textAlign: "center",
            padding: "10px 0",
            fontWeight: "bold",
            color: "black",
          }}
        >
          <h4>ROE V. WADE OVERTURNED</h4>
        </Link>
        {spotlights.map((spotlight) => (
          <RSBar key={spotlight.blog_id} content={spotlight}></RSBar>
        ))}
      </div>
    );
  }
}
RSBars.propTypes = {
  getBlogs: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  spotlights: state.spotlight.spotlights,
});

export default connect(mapStateToProps,{ getBlogs })(RSBars);
