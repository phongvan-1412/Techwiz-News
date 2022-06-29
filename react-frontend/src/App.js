import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router,} from "react-router-dom";
import Header from "./user/layout/Header";
import Footer from "./user/layout/Footer";
import { Provider } from "../src/user/layout/context";
import MainRoute from "./user/layout/Router/MainRoute";

class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <div className="App">
            <Header branding="Contact Manager"></Header>
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
