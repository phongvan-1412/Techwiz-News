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
import SpotLights from "./user/layout/Body/SpotLights";
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
              <SpotLights />
            </div>
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
