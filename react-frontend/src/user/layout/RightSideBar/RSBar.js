import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";


class RSBar extends Component {
  render() {
    const { blog_id, blog_title, blog_link } = this.props.rsbar;

    return (
        <div className="row" style={{borderBottom:'solid 1px rgba(0,0,0,0.25)'}}>
            <ul className="col-md-8" >
                <li className="" style={{fontSize:'13px', fontWeight:'bold'}}>{blog_title}</li>
                <li className="" style={{fontSize:'13px'}}>{blog_link}</li>
            </ul>
        </div>   
    );
  }
}
RSBar.propTypes = {
    rsbar: PropTypes.object.isRequired,
}

export default RSBar;
