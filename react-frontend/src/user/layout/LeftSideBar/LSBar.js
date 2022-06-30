import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

class LSBar extends Component {
  render() {
    const { blog_id, blog_title, blog_content, category_name, blog_img_name } =
      this.props.content;
      const tmp_title = blog_title.replace(" ", "");
      const title = tmp_title.replace(["!@#$%^&*()_><.|,`"], "");
    return (
      <div
        className="row"
        style={{ borderBottom: "solid 1px rgba(0,0,0,0.25)" }}
      >
        <div className="col-md-12" style={{ margin: "5px 0" }}>
          <img
            src={require(`../TopBody/${blog_img_name}.jpg`)}
            style={{
              width: "100%",
              height: "auto",
              objectFit: "center",
              objectPosition: "center",
            }}
          />
        </div>
        <div className="col-md-12" style={{ padding: "0px", margin: "0px" }}>
          <ul style={{ padding: "0px", margin: "0px" }}>
            <li style={{ fontSize: "13px", fontWeight: "bold" }}>
              <Link
                to={`/${category_name}/${title}/${blog_id}`}
                replace
                className="nav-link"
                style={{ fontWeight: "bold", color: "#C20017" }}
              >
                {blog_title}
              </Link>
            </li>
            <li style={{ fontSize: "13px" }}>
              <Link
                to={`/${category_name}/${title}`}
                replace
                className="nav-link"
                style={{ fontWeight: "bold", color: "#036" }}
              >
                {blog_content}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
LSBar.propTypes = {
  content: PropTypes.object.isRequired,
};

export default LSBar;
