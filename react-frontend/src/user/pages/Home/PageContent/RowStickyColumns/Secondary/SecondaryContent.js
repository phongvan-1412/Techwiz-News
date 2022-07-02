import React, { Component } from "react";
import { Link } from "react-router-dom";

class SecondaryContent extends Component {
  render() {
    const { blog_content, blog_title, category_name } = this.props.content;

    return (
      <div className="col-md-6 secondary-content">
        <Link to="/" className="secondary-title">
          {blog_title}
        </Link>
      </div>
    );
  }
}
export default SecondaryContent;
