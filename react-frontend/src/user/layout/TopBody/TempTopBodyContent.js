import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

class TempTopBodyContent extends Component {
  render() {
    const { blog_title, blog_content, category_name, blog_img_name } =
      this.props.content;
    const title = blog_title.replace(" ", "-");
    return (
      <div className="col-md-6">
        <div>
          <Link to={`/${category_name}/${title}`}>
            <img
              style={{
                width: "100%",
                height: "100%",
                color: "blue",
                objectPosition: "center",
              }}
            />
            {blog_content}
          </Link>
        </div>
      </div>
    );
  }
}
TempTopBodyContent.propTypes = {
  content: PropTypes.object.isRequired,
};

export default TempTopBodyContent;
