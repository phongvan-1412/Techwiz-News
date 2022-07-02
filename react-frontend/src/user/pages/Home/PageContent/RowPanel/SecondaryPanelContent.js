import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";


class SecondaryPanelContent extends Component {
  render() {
    const { blog_img_name } = this.props.content;
    
    return (
      <div className="mb-3 secondary-panel">
            <img className="page-content row-panel-img" src={require(`../../../../img/pages/Home/${blog_img_name}.jpg`)} />
      </div>
    );
  }
}
SecondaryPanelContent.propTypes = {
  content: PropTypes.object.isRequired,
}

export default SecondaryPanelContent;