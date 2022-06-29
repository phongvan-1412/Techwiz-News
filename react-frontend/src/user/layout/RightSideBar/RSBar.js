import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

class RSBar extends Component {
  render() {
    const { blog_title, blog_content, category_name } = this.props.content;
    const title = blog_title.replace(" ", "-");
    return (
      <div style={{ borderBottom: "solid 1px rgba(0,0,0,0.25)" }}>
        <ul style={{padding:'0px',margin:'0px'}}>
          <li>
              <Link to={`/${category_name}/${title}`} replace className="nav-link"style={{color: "#036",fontWeight:'bold'}}>{blog_content}</Link>
          </li>
        </ul>
      </div>
    );
  }
}
RSBar.propTypes = {
  content: PropTypes.object.isRequired,
};

export default RSBar;
