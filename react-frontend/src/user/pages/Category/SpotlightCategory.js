import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

class SpotLightCategory extends Component {
  render() {
    const {
      blog_title,
      blog_content,
      blog_day_open,
      blog_thumbnail_name,
      category_name,
    } = this.props.content;
    const tmp_title = blog_title.replace(" ", "");
    const title = tmp_title.replace(["!@#$%^&*()_><.|,`"], "");
    return (
      <div className="col-md-6">
        <div>
          <Link to={`/${category_name}/${title}`}>
            <img
              src={require(`../../img/pages/Home/${blog_thumbnail_name}`)}
              style={{
                width: "100%",
                height: "auto",
                objectFit: "center",
                objectPosition: "center",
              }}
            />
          </Link>
        </div>
        <div>
          <h6>{blog_day_open}</h6>
        </div>
        <div>
          <h4>
            <Link
              to={`/${category_name}/${title}`}
              replace
              className="nav-link"
              style={{
                fontWeight: "bold",
                color: "#036",
              }}
            >
              {blog_title}
            </Link>
          </h4>
        </div>
        <div>
          <Link
            to={`/${category_name}/${title}`}
            replace
            className="nav-link"
            style={{
              color: "#036",
            }}
          >
            {blog_content.substring(0,300)}
          </Link>
        </div>
      </div>
    );
  }
}
SpotLightCategory.propTypes = {
  content: PropTypes.object.isRequired,
};

export default SpotLightCategory;
