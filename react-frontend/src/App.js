import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes } from "react-router-dom";
import Header from "./user/layout/Header";
import Footer from "./user/layout/Footer";
import Advertisement from "./user/layout/Advertisement";
import Login from "./user/pages/Login-Register/Login";
import Register from "./user/layout/Advertisement";
import store from "./store";
import { Provider } from "react-redux";
import MainRoute from "./MainRoute";

import "./user/css/style-mobile.css";
import "./user/css/style-tablet.css";
import "./user/css/style-laptop.css";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
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
