import React, { Component } from "react";

import { connect } from "react-redux";
import PropTypes from "prop-types";
import { GET_BLOGS } from "../../../../../../actions/types";

class SecondaryTop extends Component {
  componentDidMount() {
    this.props.getBlogs();
  }
  render() {
    const { spotlights } = this.props;
    const tmpSpotlights = [];
    const localSpotlights =  tmpSpotlights.concat(spotlights);
    localSpotlights.length = 1;
    return (
      <div className="secondary-top">
        {localSpotlights.map((spotlight) => (
          <div>
            <img
              className="secondary-top-img"
              src={require(`../../../../../../../../LaravelAPI/public/upload.product/${spotlight.blog_thumbnail_name}`)}
            />
            {/* `../SecondaryTop/${spotlight.blog_img_name}.jpg` */}

            <div className="secondary-title">
              <h2>{spotlight.blog_title}</h2>{" "}
              {/* later: replace by blog_title */}
            </div>
          </div>
        ))}
      </div>
    );
  }
}

SecondaryTop.propTypes = {
  getBlogs: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  spotlights: state.spotlight.spotlights,
});

const mapDispatchToProps = (dispatch) => ({
  getBlogs: () => dispatch({ type: GET_BLOGS }),
});
export default connect(mapStateToProps,mapDispatchToProps)(SecondaryTop);
