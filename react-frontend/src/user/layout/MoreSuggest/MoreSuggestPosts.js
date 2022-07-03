import React, { Component } from "react";
import MoreSuggestPost from "./MoreSuggestPost";

import { connect } from "react-redux";
import PropTypes from "prop-types";
import { GET_BLOGS } from "../../../actions/types";

class MoreSuggestPosts extends Component {
  componentDidMount() {
    this.props.getBlogs();
  }
  render() {
    const { spotlights } = this.props;

    return (
      <div className="col-md-12 more-suggest">
        <div className="row more-suggest-content">
          {spotlights.map((spotlight) => (
            <MoreSuggestPost
              key={spotlight.blog_id}
              content={spotlight}
            ></MoreSuggestPost>
          ))}
        </div>
      </div>
    );
  }
}
MoreSuggestPosts.propTypes = {
  getBlogs: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  spotlights: state.spotlight.spotlights,
});

const mapDispatchToProps = (dispatch) => ({
  getBlogs: () => dispatch({ type: GET_BLOGS }),
});
export default connect(mapStateToProps, mapDispatchToProps)(MoreSuggestPosts);
