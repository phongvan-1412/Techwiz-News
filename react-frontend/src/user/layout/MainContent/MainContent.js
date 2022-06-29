import React, { Component } from "react";
import BottomContents from "../BottomContent/BottomContents";
import SpotLights from "../Body/SpotLights";
import BodyContents from "../MainBody/BodyContents";
import TopBody from "../TopBody/Topbody";
import TopBodyContent from "../TopBody/TopbodyContent";
import LSBars from "../LeftSideBar/LSBars";
import RSBars from "../RightSideBar/RSBars";
import PanelContents from "../Panel/PanelContents";
class MainContent extends Component {
  render() {
    return (
      <div>
        
      <div className="row">

        <div className=" col-lg-2 col-md-2" style={{}}>
          <LSBars />
        </div>

        <div className="col-lg-8 col-md-6">
            <TopBody />
            <TopBodyContent />
            <SpotLights />
            <BodyContents />
        </div>

        <div className="col-lg-2 col-md-2">
          <RSBars/>
        </div>
      </div>


      <div className="row">
        <div className=" col-md-12">
          <PanelContents />
        </div>
        
        <div className=" col-md-12">
          <BottomContents />
        </div>
      </div>
    </div>
    );
  }
}
export default MainContent;
