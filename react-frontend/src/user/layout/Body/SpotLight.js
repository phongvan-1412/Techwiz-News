import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";


class SpotLight extends Component {
  render() {
    const { blog_title, blog_content } = this.props.spotlight;

    return (
      <div className="card card-body mb3 col-md-6">
        <h1><Link  to="/bodySpotLight" style={{
              cursor: "pointer",
              color: "black",}} >12312</Link ></h1>
        <h2>{blog_content}</h2>
      </div>
      //   <Consumer>
      //     {(value) => {

      //     }}
      //   </Consumer>
    );
  }
}
SpotLight.propTypes = {
    spotlight: PropTypes.object.isRequired,
}

export default SpotLight;
