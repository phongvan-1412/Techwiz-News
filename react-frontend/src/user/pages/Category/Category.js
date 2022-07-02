import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Consumer } from '../../layout/context'
import SecondarySpotLight from "../Home/PageContent/RowStickyColumns/Secondary/SecondarySpotLight";
import LSBars from '../../layout/LeftSideBar/LSBars'
import SecondaryTop from "../Home/PageContent/RowStickyColumns/Secondary/SecondaryTop"
import SpotLightCategories from "./SpotLightCategories";
import SecondaryPanelContents from "../Home/PageContent/RowPanel/SecondaryPanelContents";
import BottomCategories from "./BottomCategories";


class Category extends Component {
  render() {
    return (
      <Consumer>
        {(value) => {
          const { spotlights } = value;
          return (
            <div className="App">
              {spotlights.map((spotlight) => (

                  <div className="container">
                    <div className="row">
                      <div className="col-md-9">
                        <SecondaryTop />
                        <SpotLightCategories />
                        
                        <div className="row">
                            <div className="col-md-12" style={{ border: "1px solid rgba(0,0,0,0.25)",marginBottom: "50px",padding: "20px",}}>
                                <div className="row">
                                    <div className="col-md-12" style={{ padding: "0px", marginBottom: "15px" }} >
                                        <span style={{ fontWeight: "bold" }}>Features and Faces</span>
                                    </div>

                                    <div className="container">
                                        <SecondaryPanelContents />
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