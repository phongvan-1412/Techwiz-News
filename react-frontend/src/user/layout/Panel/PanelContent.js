import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";


class PanelContent extends Component {
  render() {
    const { blog_title, blog_content } = this.props.content;

    return (
      <div className="card card-body mb3 col-md-2 row">
            <h1>slider</h1>
            <div className="col-12">Card image</div>
            {/* <div className="col-12">{blog_title}</div> */}
            <div className="col-12">Card link</div>
      </div>
    );
  }
}
PanelContent.propTypes = {
  content: PropTypes.object.isRequired,
}

export default PanelContent;