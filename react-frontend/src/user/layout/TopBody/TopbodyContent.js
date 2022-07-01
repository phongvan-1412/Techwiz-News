import React, { Component } from "react";
import { Link } from "react-router-dom";

class TopBodyContent extends Component {
  render() {
    const { blog_content, blog_title, category_name } = this.props.content;

    return (
      <div className="col-md-6 secondary-top">
        <Link to="/" style={{ color: "#036" }}>
          {blog_title}
        </Link>
      </div>
    );
  }
}
export default TopBodyContent;
