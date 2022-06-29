import React, { Component } from "react";
import BottomContents from "../BottomContent/BottomContents";
import SpotLights from "../Body/SpotLights";
import BodyContents from "../MainBody/BodyContents";
import TopBody from "../TopBody/Topbody";
import LSBars from "../LeftSideBar/LSBars";
import RSBars from "../RightSideBar/RSBars";
import PanelContents from "../Panel/PanelContents";
class MainContent extends Component {
  render() {
    return (
      <div className="row">
        <div className="row col-2">
          <LSBars />
        </div>
        <div className="row col-8">
          <TopBody />
          <SpotLights />
          <BodyContents />
        </div>
        <div className="row col-2">
          <RSBars />
        </div>
        <div className="row col-12">
          <PanelContents />
        </div>
        <div className="row col-12">
          <BottomContents />
        </div>
      </div>
    );
  }
}
export default MainContent;
