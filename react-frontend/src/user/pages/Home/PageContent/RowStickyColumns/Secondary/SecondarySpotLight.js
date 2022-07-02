import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

class SecondarySpotLight extends Component {
  render() {
    const { blog_title, blog_content, category_name, blog_img_name } =
      this.props.content;
    const tmp_title = blog_title.replace(" ", "");
    const title = tmp_title.replace(["!@#$%^&*()_><.|,`"], "");
    
    return (
      <div className="col-md-6 secondary-spotlight">
        <div>
          <Link to={`/${category_name}/${title}`}><img className="secondary-spotlight-img" src={require(`../../../../../img/pages/Home/${blog_img_name}.jpg`)}/></Link>
        </div>

        <div>
          <h4>
            <Link to={`/${category_name}/${title}`} replace className="nav-link secondary-spotlight-title">{blog_title}</Link>
          </h4>
        </div>

        <div>
          <Link to={`/${category_name}/${title}`} replace className="nav-link secondary-spotlight-content">{blog_content.substring(0,100)}</Link>
        </div>
      </div>
    );
  }
}
SecondarySpotLight.propTypes = {
  content: PropTypes.object.isRequired,
};

export default SecondarySpotLight;
