import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

class PostContent extends Component {
  render() {
    const { category_id, blog_thumbnail_name, blog_title } = this.props.content;
    //const title = blog_title.replace(" ", "-");
    return (
      <div>
        <div className="row">
          <div
            className="col-md-6"
            style={{
              textAlign: "left",
              fontWeight: "bold",
              padding: "0px",
              fontSize: "25px",
              textTransform: "uppercase",
            }}
          >
            <span style={{ color: "#036" }}>{category_id}</span>
          </div>

          <div
            className="col-md-6"
            style={{ textAlign: "right", fontWeight: "bold", padding: "0px" }}
          >
            <Link to={`/${category_id}`}>
              <span style={{ color: "#036" }}>View all</span>
            </Link>
          </div>
        </div>

        <div
          className="row"
          style={{
            border: "1px solid rgba(0,0,0,0.25)",
            marginBottom: "100px",
            padding: "0px",
          }}
        >
          <div className="col-md-6" style={{ padding: "0px" }}>
            <Link
              to="/"
              replace
              className="nav-link"
              style={{ padding: "0px", height: "100%" }}
            >
              <img
                src={require(`../../../img/pages/Home/${blog_thumbnail_name}`)}
                style={{
                  width: "100%",
                  height: "100%",
                  objectPosition: "center",
                  objectFit: "center",
                }}
              />
            </Link>
          </div>

          <div className="col-md-6">
            <div className="row" style={{ padding: "10px" }}>
              <Link
                to={`/${category_id}`}
                replace
                className="nav-link"
                style={{ color: "#036", fontWeight: "bold" }}
              >
                {category_id}
              </Link>
              <Link
                to={`/${category_id}/${category_id}`}
                replace
                className="nav-link"
                style={{
                  color: "#036",
                  borderBottom: "1px solid rgba(0,0,0,0.25)",
                }}
              >
                {blog_title}
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
PostContent.propTypes = {
  content: PropTypes.object.isRequired,
};

export default PostContent;
