import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Route, Routes, Link, NavLink } from "react-router-dom";
import Header from "./user/layout/Header";
import Footer from "./user/layout/Footer";
import MainContent from "./user/layout/MainContent/MainContent";

import { Provider } from "../src/user/layout/context";

class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <div className="App">
            <Header branding="Contact Manager"></Header>
            <div className="container">
                <MainContent />
            </div>
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
