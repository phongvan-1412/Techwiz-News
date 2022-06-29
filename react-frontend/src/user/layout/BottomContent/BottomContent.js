import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";


class BottomContent extends Component {
  render() {
    const { blog_title, category_name } = this.props.content;
    const  title  = blog_title.replace(" ","-");
    return (
      <div className="nav-item">
        <h1><Link to={`/${category_name}/${title}`} replace className="nav-link"style={{
              cursor: "pointer",
              color: "black",}} >{blog_title}</Link ></h1>
      </div>
    );
  }
}
BottomContent.propTypes = {
  content: PropTypes.object.isRequired,
}

export default BottomContent;
