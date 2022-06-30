import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { Consumer } from "../context";


class MainBodyComponent extends Component {
  render() {
    const { blog_id, blog_title, emp_name, blog_day_open } = this.props.content;
    return(
        <div className="row">

        </div>
    )
    }
}

export default MainBodyComponent;