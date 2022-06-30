import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Consumer } from '../context'
import SpotLight from "../Body/SpotLight";
import LSBars from '../LeftSideBar/LSBars'
import TopBody from "../TopBody/TopBody";
import SpotLightCategories from "./SpotlightCategories";
import PanelContents from "../Panel/PanelContents";
import BottomCategories from "../BottomCategory/BottomCategories";


class Category extends Component {
  render() {
    return (
      <Consumer>
        {(value) => {
          const { spotlights } = value;
          return (
            <div className="App">
              {spotlights.map((spotlight) => (
                <div className="row">
                  <div className="col-md-9">
                    <TopBody />
                    <SpotLightCategories />
                    <div className="row">
                        <div className="col-md-12" style={{ border: "1px solid rgba(0,0,0,0.25)",marginBottom: "50px",padding: "20px",}}>
                            <div className="row">
                                <div className="col-md-12" style={{ padding: "0px", marginBottom: "15px" }} >
                                    <span style={{ fontWeight: "bold" }}>Features and Faces</span>
                                </div>

                                <div className="container">
                                    <PanelContents />
                                </div>
                            </div>
                        </div>
                    </div>
                    <BottomCategories />
                    
                  </div>
                  <div className="col-md-3">
                        <LSBars />
                    </div>
                </div>
              ))}
            </div>
          );
        }}
      </Consumer>
    )
  }
}

export default Category;