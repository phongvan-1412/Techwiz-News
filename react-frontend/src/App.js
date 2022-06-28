import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  NavLink,
} from "react-router-dom";
import Header from "./user/layout/Header";
import Footer from "./user/layout/Footer";
import MainContent from "./user/layout/MainContent/MainContent";

import { Provider } from "./user/layout/Body/BodySpotLight";

class App extends Component {
  render() {
    return (
      //<Router>
      <Provider>
        <Router>
          <div className="App">
            <Header branding="Contact Manager"></Header>
            <div className="container">
              <Routes>
              
                
              </Routes>
             <MainContent></MainContent>
            </div>
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
