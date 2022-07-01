import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

class SpotLight extends Component {
  render() {
    const { blog_title, blog_content, category_name, blog_img_name } =
      this.props.content;
    const tmp_title = blog_title.replace(" ", "");
    const title = tmp_title.replace(["!@#$%^&*()_><.|,`"], "");
    
    return (
      <div className="col-md-6">
        <div><Link to={`/${category_name}/${title}`}>
          <img
            src={require(`../TopBody/${blog_img_name}.jpg`)}
            style={{
              width: "100%",
              height: "auto",
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
              fontWeight:'bold',
              color: "#036",
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
            color: "#036",
          }}
        >
          {blog_content.substring(0,100)}
        </Link></div>
        
        
        
      </div>
    );
  }
}
SpotLight.propTypes = {
  content: PropTypes.object.isRequired,
};

export default SpotLight;
