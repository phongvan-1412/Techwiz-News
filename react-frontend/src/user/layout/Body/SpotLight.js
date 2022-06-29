import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

class SpotLight extends Component {
  render() {
    const { blog_title, blog_content, category_name, blog_img_name } =
      this.props.content;
    const title = blog_title.replace(" ", "-");
    return (
      <div className="col-md-6">
        <div><Link to={`/${category_name}/${title}`}>
          <img
            src={require(`../TopBody/${blog_img_name}.jpg`)}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "center",
              objectPosition: "center",
            }}
          />
        </Link></div>
        <div><h4>
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
        </h4></div>
        <div><Link
          to={`/${category_name}/${title}`}
          replace
          className="nav-link"
          style={{
            cursor: "pointer",
            color: "black",
          }}
        >
          {blog_content}
        </Link></div>
        
        
        
      </div>
    );
  }
}
SpotLight.propTypes = {
  content: PropTypes.object.isRequired,
};

export default SpotLight;
