import React, { Component } from "react";
import { Link } from 'react-router-dom';
import {BrowserRouter as Router,} from "react-router-dom";

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
            {/* <MainBodyContent /> */}
          </div>
        </div>
    )
  }
}

export default Content;