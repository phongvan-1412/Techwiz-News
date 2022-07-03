import React, { Component } from "react";
import { Consumer } from "./user/layout/context";
import { BrowserRouter as Router, Route, Routes, Link, NavLink } from "react-router-dom";
import Category from './user/pages/Category/Category'
import Content from "./user/layout/Content/Content";
import HomeContent from "./user/pages/Home/HomeContent";
import Login from "../src/user/pages/Login-Register/Login";
import Register from "../src/user/pages/Login-Register/Register";


class MainRoute extends Component {
  render() {
    return (
      <Consumer>
        {(value) => {
          const { spotlights } = value;
          return (
            <div className="contaier">
              <Routes>
                <Route path="/" element={<HomeContent />}></Route>
                {spotlights.map((spotlight) => (
                  <Route
                    path={`/${
                      spotlight.category_name
                    }/${(spotlight.blog_title.replace(" ", "")).replace(["!@#$%^&*()_><.|,`"], "")}`}
                    element={<Content />}
                  ></Route>
                ))}
                {spotlights.map((spotlight) => (
                  <Route
                    path={`/${
                      spotlight.category_name
                    }`}
                    element={<Category />}
                  ></Route>
                ))}
                <Route path="/login" element={<Login />}></Route>
                <Route path="/register" element={<Register />}></Route>
                
              </Routes>
            </div>
          );
        }}
      </Consumer>
    );
  }
}
export default MainRoute;
