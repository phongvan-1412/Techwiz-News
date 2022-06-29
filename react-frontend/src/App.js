import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router,Route,Routes,Link,NavLink,} from "react-router-dom";
import Header from "./user/layout/Header";
import Footer from "./user/layout/Footer";
import MainContent from "./user/layout/MainContent/MainContent";
import LSBars from "./user/layout/LeftSideBar/LSBars";
import RSBars from "./user/layout/RightSideBar/RSBars";



import { Provider } from "./user/layout/Body/context";

class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <div className="App">
            <Header branding="Contact Manager"></Header>
            <div className="container">
              <div className="row" >
              <Routes>
                <Route path="/" element={<LSBars/>} />
                <Route path="/" element={<MainContent/>} />
                <Route path="/" element={<RSBars/>} />
              </Routes>
              </div>
              
            </div>
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
