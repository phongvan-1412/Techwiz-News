import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

class LSBar extends Component {
  render() {
    const { blog_title, blog_content, category_name,blog_img_name } = this.props.content;
    const title = blog_title.replace(" ", "-");
    return (
      <div
        className="row"
        style={{ borderBottom: "solid 1px rgba(0,0,0,0.25)" }}
      >
        <h4
          className="col-md-4"
          style={{ fontSize: "13px", fontWeight: "bold" }}
        >
          <img
            src={require(`../TopBody/${blog_img_name}.jpg`)}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "center",
              objectPosition: "center",
            }}
          />
        </h4>
        <ul className="col-md-8">
          <li className="" style={{ fontSize: "13px", fontWeight: "bold" }}>
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
          <li className="" style={{ fontSize: "13px" }}>
            <Link
              to={`/${category_name}/${title}`}
              replace
              className="nav-link"
              style={{
                cursor: "pointer",
                color: "black",
              }}
            >
              {blog_content}
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}
LSBar.propTypes = {
  content: PropTypes.object.isRequired,
};

export default LSBar;
