import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

class SecondaryBodyContent extends Component {
  render() {
    const { blog_thumbnail_name, blog_title, category_name } = this.props.content;
    const tmp_title = blog_title.replace(" ", "");
    const title = tmp_title.replace(["!@#$%^&*()_><.|,`"], "");
    return (
      <div className="col-md-12">
        <div className="row secondary-bodycontent">
          <div className="col-md-3">
            <Link to={`/${category_name}/${title}`}>
              <img className="secondary-bodycontent-img" src={require(`../../../../../img/pages/Home/${blog_thumbnail_name}`)} alt=""/>
            </Link>
          </div>
          <div className="col-md-9 secondary-bodycontent-content">
            <div className="row">
              <div className="col-md-12">
                <Link to={`/${category_name}/${title}`} className="secondary-categoryname">
                  {category_name}
                </Link>
              </div>

              <div className="col-md-12">
                <Link to={`/${category_name}/${title}`} className="secondary-title">
                  {title}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
SecondaryBodyContent.propTypes = {
  content: PropTypes.object.isRequired,
};

export default SecondaryBodyContent;
