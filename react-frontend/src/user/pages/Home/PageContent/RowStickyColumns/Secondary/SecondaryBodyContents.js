import React, { Component } from "react";
import SecondaryBodyContent from "./SecondaryBodyContent";

import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getBlogs } from "../../../../../../actions/blogsActions";

class SecondaryBodyContents extends Component {
  componentDidMount() {
    this.props.getBlogs();
  }
  render() {
    const { spotlights } = this.props;
    return (
      <div className="secondary-bodycontents">
        {spotlights.map((spotlight) => (
          <SecondaryBodyContent
            key={spotlight.blog_id}
            content={spotlight}
          ></SecondaryBodyContent>
        ))}
      </div>
    );
  }
}
SecondaryBodyContents.propTypes = {
  getBlogs: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  spotlights: state.spotlight.spotlights,
});

export default connect(mapStateToProps,{ getBlogs })(SecondaryBodyContents);
