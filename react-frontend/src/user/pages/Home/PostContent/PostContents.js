import React, { Component } from "react";
import PostContent from "./PostContent";

import { connect } from "react-redux";
import PropTypes from "prop-types";
import { GET_BLOGS } from "../../../../actions/types";

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

const mapDispatchToProps = (dispatch) => ({
  getBlogs: () => dispatch({ type: GET_BLOGS }),
});
export default connect(mapStateToProps,mapDispatchToProps)(PostContents);
