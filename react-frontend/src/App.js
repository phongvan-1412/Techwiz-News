import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Routes} from "react-router-dom";
import Header from "./user/layout/Header";
import Footer from "./user/layout/Footer";
import Advertisement from "./user/layout/Advertisement";

import { Provider } from "../src/user/layout/context";
import MainRoute from "./MainRoute";

import './user/css/layout/style-mobile.css';
import './user/css/layout/style-tablet.css';
import './user/css/layout/style-laptop.css';

class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <div className="App">
            <Header />
            <Advertisement />
            <div className="row">
              <MainRoute />
            </div>
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
