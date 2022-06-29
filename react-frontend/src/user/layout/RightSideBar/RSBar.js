import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

class RSBar extends Component {
  render() {
    const { blog_title, blog_content, category_name } = this.props.content;
    const title = blog_title.replace(" ", "-");
    return (
      <div style={{ borderBottom: "solid 1px rgba(0,0,0,0.25)" }}>
        <ul>
          <li>
            <Link
              to={blog_title}
              style={{ fontSize: "13px", fontWeight: "bold", color: "blue" }}
            >
              {blog_title}
            </Link>
          </li>
          <li>
              <Link
                to={`/${category_name}/${title}`}
                replace
                className="nav-link"
                style={{
                  cursor: "pointer",
                  color: "black",
                }}
              >
                {blog_title}
              </Link>
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
