import React, { Component } from "react";
import SecondaryPanelContent from "./SecondaryPanelContent";
import { Consumer } from "../../../../layout/context";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class SecondaryPanelContents extends Component {
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
      slidesToShow: 4,
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
              <button className="button previous col-1" onClick={this.previous}>
                Previous
              </button>

              <div className="col-10 panel-content">
                <Slider ref={(c) => (this.slider = c)} {...settings}>
                  {ourSpotlights.map((spotlight) => (
                    <SecondaryPanelContent key={spotlight.blog_id} content={spotlight}></SecondaryPanelContent>
                  ))}
                </Slider>
              </div>

              <button className="button next col-1" onClick={this.next} >
                Next
              </button>
            </div>
                  
          );
        }}
      </Consumer>
    );
  }
}
export default SecondaryPanelContents;
