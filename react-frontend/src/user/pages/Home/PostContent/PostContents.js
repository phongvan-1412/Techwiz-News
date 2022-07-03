import React, { Component } from "react";
import PostContent from "./PostContent";

import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getBlogs } from "../../../../actions/blogsActions";

class PostContents extends Component {
  componentDidMount() {
    this.props.getBlogs();
  }
  render() {
    const { spotlights } = this.props;

    return (
      <div>
        {spotlights.map((spotlight) => (
          <PostContent
            key={spotlight.blog_id}
            content={spotlight}
          ></PostContent>
        ))}
      </div>
    );
  }
}
PostContents.propTypes = {
  getBlogs: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  spotlights: state.spotlight.spotlights,
});

export default connect(mapStateToProps,{ getBlogs })(PostContents);
