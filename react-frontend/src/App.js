import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Routes} from "react-router-dom";
import Header from "./user/layout/Header";
import Footer from "./user/layout/Footer";
import Advertisement from "./user/layout/Advertisement";

import { Provider } from "../src/user/layout/context";
import MainRoute from "./user/layout/Router/MainRoute";

class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <div className="App">
            <Header />
            <Advertisement />
            <div className="container">
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
