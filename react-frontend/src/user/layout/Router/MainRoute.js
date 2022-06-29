import React, { Component } from "react";
import { Consumer } from "../context";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  NavLink,
} from "react-router-dom";
import Content from "../Content";
import MainContent from "../MainContent/MainContent";

class MainRoute extends Component {
  render() {
    return (
      <Consumer>
        {(value) => {
          const { spotlights } = value;
          return (
            <div className="contaier">
              <Routes>
                <Route path="/" element={<MainContent />}></Route>
                {spotlights.map((spotlight) => (
                  <Route
                    path={`/${
                      spotlight.category_name
                    }/${spotlight.blog_title.replace(" ", "-")}`}
                    element={<Content />}
                  ></Route>
                ))}
              </Routes>
            </div>
          );
        }}
      </Consumer>
    );
  }
}
export default MainRoute;