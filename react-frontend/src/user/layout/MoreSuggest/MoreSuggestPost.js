import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

class MoreSuggestPost extends Component {
  render() {
    const { blog_title, category_name, blog_thumbnail_name  } = this.props.content;
    const tmp_title = blog_title.replace(" ", "");
    const title = tmp_title.replace(["!@#$%^&*()_><.|,`"], "");
    return (
      <div className="col-md-12 more-suggest-post">
          <Link to='#' replace><img className="nav-link more-suggest-post-img" src={require(`../../img/pages/Home/${blog_thumbnail_name}`)} alt="" /></Link>
          <Link to={`/${category_name}/${title}`} replace className="nav-link more-suggest-title">{blog_title}</Link>
      </div>
    );
  }
}
MoreSuggestPost.propTypes = {
  content: PropTypes.object.isRequired,
};

export default MoreSuggestPost;