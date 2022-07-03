import React, { Component } from "react";
import SecondaryContent from "./SecondaryContent";

import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getBlogs } from "../../../../../../actions/blogsActions";

class SecondaryContents1 extends Component {
  componentDidMount() {
    this.props.getBlogs();
  }
  render() {
    const { spotlights } = this.props;

    return (
      <div className="col-md-12 secondary-contents1">
        <div className="row">
          {spotlights.map((spotlight) => (
            <SecondaryContent
              key={spotlight.blog_id}
              content={spotlight}
            ></SecondaryContent>
          ))}
        </div>
      </div>
    );
  }
}
SecondaryContents1.propTypes = {
  getBlogs: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  spotlights: state.spotlight.spotlights,
});

export default connect(mapStateToProps,{ getBlogs })(SecondaryContents1);
