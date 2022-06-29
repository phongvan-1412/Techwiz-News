import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";


class LSBar extends Component {
  render() {
    const { blog_id, blog_title, blog_content } = this.props.content;

    return (
        <div className="row" style={{borderBottom:'solid 1px rgba(0,0,0,0.25)'}}>
            <Link to='/' className="col-md-4"><h4 style={{fontSize:'13px', fontWeight:'bold',color:'#036'}}>Title</h4></Link> 
            <ul className="col-md-8" >
                <li className="" style={{fontSize:'13px', fontWeight:'bold',color:'#036'}}>{blog_title}</li>
                <li className="" style={{fontSize:'13px'}}>{blog_content}</li>
            </ul>
        </div>   
    );
  }
}
LSBar.propTypes = {
  content: PropTypes.object.isRequired,
}

export default LSBar;
