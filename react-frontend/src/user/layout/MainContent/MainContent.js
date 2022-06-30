import React, { Component } from "react";
import BottomContents from "../BottomContent/BottomContents";
import SpotLights1 from "../Body/SpotLights1";
import SpotLights2 from "../Body/SpotLights2";
import BodyContents from "../MainBody/BodyContents";
import TopBody from "../TopBody/TopBody";
import TopBodyContents2 from "../TopBody/TopBodyContents2";
import tmpTopBodyContents1 from "../TopBody/tmpTopBodyContent1";
import LSBars from "../LeftSideBar/LSBars";
import RSBars from "../RightSideBar/RSBars";
import PanelContents from "../Panel/PanelContents";

class MainContent extends Component {
  render() {
    return (
    <div>
        
      <div className="row" style={{border:'1px solid rgba(0,0,0,0.25)', marginBottom:'20px'}}>

        <div className=" col-lg-2 col-md-2 col-xs-0" style={{}}>
          <LSBars />
        </div>

        <div className="col-lg-8 col-md-6" style={{border:'1px solid rgba(0,0,0,0.25)',borderBottom:'none'}}>
            <TopBody />
            <tmpTopBodyContents1 />
            <TopBodyContents2 />
            <SpotLights1 />
            <SpotLights2 />
            <BodyContents />
        </div>

        <div className="col-lg-2 col-md-2">
          <RSBars/>
        </div>
      </div>

      <div className="row">
        <div className="col-md-12" style={{border:'1px solid rgba(0,0,0,0.25)',marginBottom:'50px',padding:'20px'}}> 
          <div className="row">
            <div className="col-md-12" style={{padding:'0px', marginBottom:'15px'}}>
              <span style={{fontWeight:'bold'}}>Features and Faces</span>
            </div>
          
            <div className="container">
              <PanelContents />
            </div>
          </div>
        </div> 
      </div>

      <div className="col-md-12" style={{marginBottom:'50px'}}>
        <BottomContents />
      </div>
    </div>
    );
  }
}
export default MainContent;
