import React, { Component } from "react";
import { Link } from 'react-router-dom';
import {BrowserRouter as Router,} from "react-router-dom";

import RSBars from '../RightSideBar/RSBars'
import HeaderContent from './HeaderContent';
import MainBodyContent from './MainBodyContent';

class Content extends Component {
  render() {
    return (
        <div className="row">
          <div className="col-md-12">
            <HeaderContent />
          </div>

          <div className="col-md-12">
            <div className="col-md-9">
              <MainBodyContent />
            </div>

            <div className="col-md-3">
              <RSBars />
            </div>
          </div>
        </div>
    )
  }
}

export default Content;