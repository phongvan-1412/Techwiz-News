import React, { Component } from "react";
import SecondaryContent from "./SecondaryContent";

import { connect } from "react-redux";
import PropTypes from "prop-types";
import { GET_BLOGS } from "../../../../../../actions/types";

class SecondaryContents2 extends Component {
  componentDidMount() {
    this.props.getBlogs();
  }
  render() {
    const { spotlights } = this.props;

    return (
      <div className="col-md-12 secondary-contents2">
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
SecondaryContents2.propTypes = {
  getBlogs: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  spotlights: state.spotlight.spotlights,
});

const mapDispatchToProps = (dispatch) => ({
  getBlogs: () => dispatch({ type: GET_BLOGS }),
});
export default connect(mapStateToProps,mapDispatchToProps)(SecondaryContents2);
