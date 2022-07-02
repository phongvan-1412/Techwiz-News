import React, { Component } from "react";
import LSBars from "../../layout/LeftSideBar/LSBars";
import RSBars from "../../layout/RightSideBar/RSBars";

import SecondaryTop from "./PageContent/RowStickyColumns/Secondary/SecondaryTop";
import SecondaryContents1 from "./PageContent/RowStickyColumns/Secondary/SecondaryContents1";
import SecondaryContents2 from "./PageContent/RowStickyColumns/Secondary/SecondaryContents2";
import SecondarySpotLights1 from "./PageContent/RowStickyColumns/Secondary/SecondarySpotLights1";
import SecondarySpotLights2 from "./PageContent/RowStickyColumns/Secondary/SecondarySpotLights2";
import SecondaryBodyContents from "./PageContent/RowStickyColumns/Secondary/SecondaryBodyContents";

import SecondaryPanelContents from "./PageContent/RowPanel/SecondaryPanelContents";

import PostContents from "./PostContent/PostContents";


class HomeContent extends Component {
  render() {
    return (
      <div className="container home-content">
        <div className="row page-content row-sticky-columns">
          <div className=" col-lg-2 col-md-2 col-xs-0 left-sidebar">
            <LSBars />
          </div>

          <div className="col-lg-8 col-md-6 secondary-col">
            <SecondaryTop />
            <SecondaryContents1 />
            <SecondaryContents2 />
            <SecondarySpotLights1 />
            <SecondarySpotLights2 />
            <SecondaryBodyContents />
          </div>

          <div className="col-lg-2 col-md-2 col-xs-0 right-sidebar">
            <RSBars />
          </div>
        </div>

        <div className="row page-content row-panel">
          <div className="col-md-12 page-content row-panel wrapper">
            <div className="row">
              <div className="col-md-12 page-content row-panel first-row">
                <span>Features and Faces</span>
              </div>

              <div className="container page-content row-panel panel">
                <SecondaryPanelContents />
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-12 post-content">
          <PostContents />
        </div>
      </div>
    );
  }
}
export default HomeContent;
