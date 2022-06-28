import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";


class BodyContent extends Component {
  render() {
    const { blog_title, blog_content } = this.props.spotlight;

    return (
      <div className="card card-body mb3 col-md-6">
        <h1><Link  to="/bodySpotLight" style={{
              cursor: "pointer",
              color: "black",}} >{blog_title}</Link ></h1>
      </div>
    );
  }
}
BodyContent.propTypes = {
    spotlight: PropTypes.object.isRequired,
}

export default BodyContent;
