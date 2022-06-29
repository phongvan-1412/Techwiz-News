import React, { Component } from "react";
import PanelContent from "./PanelContent";
import { Consumer } from "../context";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class PanelContents extends Component {
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
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <Consumer>
        {(value) => {
          const { spotlights } = value;
          const q = [];
          const ourSpotlights = q.concat(spotlights);
          ourSpotlights.length = 10;
          let c = 1;
          return (
            <div className="row">
              <button className="button col-sm-1" onClick={this.previous}>
                Previous
              </button>
              <div className="row col-8">
                <Slider ref={(c) => (this.slider = c)} {...settings}>
                  {ourSpotlights.map((spotlight) => (
                    <PanelContent key={c++} content={spotlight}></PanelContent>
                  ))}
                </Slider>
              </div>
              <button className="button col-sm-1" onClick={this.next}>
                Next
              </button>
            </div>
          );
        }}
      </Consumer>
    );
  }
}
export default PanelContents;
