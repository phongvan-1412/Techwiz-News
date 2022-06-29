import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";


class RSBar extends Component {
  render() {
    const { blog_id, blog_title, blog_link } = this.props.content;

    return (
        <div style={{borderBottom:'solid 1px rgba(0,0,0,0.25)'}}>
            <ul>
                <li>
                  <Link to={blog_title} style={{fontSize:'13px', fontWeight:'bold',color:'blue'}}>{blog_title}</Link></li>
                <li >
                  <a href={blog_link} style={{fontSize:'13px',color:'blue'}}>{blog_link}</a></li>
            </ul>
        </div>   
    );
  }
}
RSBar.propTypes = {
  content: PropTypes.object.isRequired,
}

export default RSBar;
