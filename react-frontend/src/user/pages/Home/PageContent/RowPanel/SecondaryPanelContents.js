import React, { Component } from "react";
import SecondaryPanelContent from "./SecondaryPanelContent";
import { Consumer } from "../../../../layout/context";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getBlogs } from "../../../../../actions/blogsActions";

class SecondaryPanelContents extends Component {
  componentDidMount() {
    this.props.getBlogs();
  }
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }

  render() {
    const { spotlights } = this.props;

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
    };
    return (
      <div className="row">
        <button className="button previous col-1" onClick={this.previous}>
          Previous
        </button>

        <div className="col-10 panel-content">
          <Slider ref={(c) => (this.slider = c)} {...settings}>
            {spotlights.map((spotlight) => (
              <SecondaryPanelContent
                key={spotlight.blog_id}
                content={spotlight}
              ></SecondaryPanelContent>
            ))}
          </Slider>
        </div>

        <button className="button next col-1" onClick={this.next}>
          Next
        </button>
      </div>
    );
  }
}
SecondaryPanelContents.propTypes = {
  getBlogs: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  spotlights: state.spotlight.spotlights,
});

export default connect(mapStateToProps, { getBlogs })(SecondaryPanelContents);
