import React, { Component } from 'react'
import BottomContents from "../BottomContent/BottomContents";
import SpotLights from "../Body/SpotLights";
import BodyContents from "../MainBody/BodyContents";
import TopBody from "../TopBody/Topbody";

 class MainContent extends Component {
  render() {
    return (
        <div className='row'>
            <TopBody />
            <SpotLights/>
            <BodyContents/>
            <BottomContents/>
        </div>
    )
  }
}
export default MainContent;