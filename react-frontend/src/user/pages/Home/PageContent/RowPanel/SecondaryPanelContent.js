import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";


class SecondaryPanelContent extends Component {
  render() {
    const { blog_thumbnail_name } = this.props.content;
    
    return (
      <div className="mb-3 secondary-panel">
            <img className="page-content row-panel-img" src={require(`../../../../../../../LaravelAPI/public/upload.product/${blog_thumbnail_name}`)} />
      </div>
    );
  }
}
SecondaryPanelContent.propTypes = {
  content: PropTypes.object.isRequired,
}

export default SecondaryPanelContent;