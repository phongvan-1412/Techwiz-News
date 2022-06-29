import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";


class SpotLight extends Component {
  render() {
    const { blog_title, blog_content } = this.props.content;

    return (
      <div className="card card-body mb3 col-md-6">
        <h1><Link  to="/bodySpotLight" style={{
              cursor: "pointer",
              color: "black",}} >{blog_title}</Link ></h1>
      </div>
    );
  }
}
SpotLight.propTypes = {
  content: PropTypes.object.isRequired,
}

export default SpotLight;
