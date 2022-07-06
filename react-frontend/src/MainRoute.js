import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  NavLink,
} from "react-router-dom";
import Category from "./user/pages/Category/Category";
import Content from "./user/layout/Content/Content";
import HomeContent from "./user/pages/Home/HomeContent";
import Login from "../src/user/pages/Login-Register/Login";
import Register from "../src/user/pages/Login-Register/Register";

import { BlogConsumer } from "./BlogContext";

class MainRoute extends Component {
  render() {
    return (
      <BlogConsumer>
        {(value) => {
          const { spotlights } = value;
          console.log(spotlights);

          return (
            <div className="contaier">
              <Routes>
                <Route path="/" element={<HomeContent />}></Route>
                {spotlights.map((spotlight) => (
                  <Route
                    key={spotlight.blog_id}
                    path={`/${spotlight.category_name}/${spotlight.blog_title}/${spotlight.blog_id}}`}
                    element={<Content />}
                  ></Route>
                ))}
                {spotlights.map((spotlight) => (
                  <Route
                    key={spotlight.blog_id}
                    path={`/${spotlight.category_name}/${spotlight.blog_title}/:spotlight.blog_id`}
                    element={<Category />}
                  ></Route>
                ))}
                <Route path="/login" element={<Login />}></Route>
                <Route path="/register" element={<Register />}></Route>
              </Routes>
            </div>
          );
        }}
      </BlogConsumer>
    );
  }
}

export default MainRoute;
