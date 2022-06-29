import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";


class PanelContent extends Component {
  render() {
    const { blog_img_name } = this.props.content;
    
    return (
      <div className="mb-3">
            <img src={require(`../TopBody/${blog_img_name}.jpg`)} style={{width:'100%',height:'100%',objectFit:'center',objectPosition:'center'}} />
      </div>
    );
  }
}
PanelContent.propTypes = {
  content: PropTypes.object.isRequired,
}

export default PanelContent;