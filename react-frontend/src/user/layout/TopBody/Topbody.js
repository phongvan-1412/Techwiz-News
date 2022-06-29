import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

class TopBodyContent extends Component {
  render() {
    const { blog_title, blog_content, category_name, blog_img_name } =
      this.props.content;
    const title = blog_title.replace(" ", "-");
    return (
      <div className="col-md-6">
        <div>
          <Link to={`/${category_name}/${title}`}>
            <img
              src={require('./222222222222.jpg')} //`../TopBody/${blog_img_name}.jpg`
              style={{
                width: "100%",
                height: "100%",
                objectFit: "center",
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
TopBodyContent.propTypes = {
  content: PropTypes.object.isRequired,
};

export default TopBodyContent;
