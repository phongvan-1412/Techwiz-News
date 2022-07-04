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

import { connect } from "react-redux";
import PropTypes from "prop-types";
import { GET_BLOGS } from "./actions/types";

class MainRoute extends Component {
  componentDidMount() {
    this.props.getBlogs();
  }
  render() {
    const { spotlights } = this.props;

    return (
      <div className="container">
        <Routes>
          <Route path="/" element={<HomeContent />}></Route>
          {spotlights.map((spotlight) => (
            <Route
              path={`/${spotlight.category_name}/${spotlight.blog_title
                .replace(" ", "")
                .replace(["!@#$%^&*()_><.|,`"], "")}`}
              element={<Content />}
            ></Route>
          ))}
          {spotlights.map((spotlight) => (
            <Route
              path={`/${spotlight.category_name}`}
              element={<Category />}
            ></Route>
          ))}
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
        </Routes>
      </div>
    );
  }
}
MainRoute.propTypes = {
  getBlogs: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  spotlights: state.spotlight.spotlights,
});

const mapDispatchToProps = (dispatch) => ({
  getBlogs: () => dispatch({ type: GET_BLOGS }),
});
export default connect(mapStateToProps,mapDispatchToProps)(MainRoute);
