import React, { Component } from "react";
import MoreSuggestLink from "./MoreSuggestLink";

import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getBlogs } from "../../../actions/blogsActions";

class MoreSuggestLinks extends Component {
  componentDidMount() {
    this.props.getBlogs();
  }
  render() {
    const { spotlights } = this.props;

    return (
      <div className="col-md-12 more-suggest">
        <div className="row more-suggest-content">
          {spotlights.map((spotlight) => (
            <MoreSuggestLink
              key={spotlight.blog_id}
              content={spotlight}
            ></MoreSuggestLink>
          ))}
        </div>
      </div>
    );
  }
}
MoreSuggestLinks.propTypes = {
  getBlogs: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  spotlights: state.spotlight.spotlights,
});

export default connect(mapStateToProps, { getBlogs })(MoreSuggestLinks);
