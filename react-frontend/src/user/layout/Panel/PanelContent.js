import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";


class PanelContent extends Component {
  render() {
    const { blog_title, blog_content } = this.props.content;

    return (
      <div className="card card-body mb3">
            <img src={require('../TopBody/image-1.jpg')} alt="" style={{width:'100px',height:'auto',objectFit:'center',objectPosition:'center'}}/>
      </div>
    );
  }
}
PanelContent.propTypes = {
  content: PropTypes.object.isRequired,
}

export default PanelContent;