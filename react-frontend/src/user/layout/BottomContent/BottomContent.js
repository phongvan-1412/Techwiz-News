import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";


class BottomContent extends Component {
  render() {
    const { blog_title, category_name, blog_img_name } = this.props.content;
    const  title  = blog_title.replace(" ","-");
    return (
      <div className="row">
        <div className="col-md-6">
          <Link to={`/${category_name}/${title}`} replace className="nav-link"><img src={require('../TopBody/image-1.jpg')} style={{width:"100%",height:'auto',objectPosition:'center',objectFit:'center'}}/></Link >
        </div>
        <div className="col-md-6">
          <div className="row">
            <Link to={`/${category_name}/${title}`} replace className="nav-link"style={{color: "#036", fontWeight:'bold'}} >{category_name}</Link >
            <Link to={`/${category_name}/${title}`} replace className="nav-link"style={{color: "#036",}} >{blog_title}</Link >
            <Link to={`/${category_name}/${title}`} replace className="nav-link"style={{color: "#036", fontWeight:'bold'}} >{category_name}</Link >
            <Link to={`/${category_name}/${title}`} replace className="nav-link"style={{color: "#036",}} >{blog_title}</Link >
            <Link to={`/${category_name}/${title}`} replace className="nav-link"style={{color: "#036", fontWeight:'bold'}} >{category_name}</Link >
            <Link to={`/${category_name}/${title}`} replace className="nav-link"style={{color: "#036",}} >{blog_title}</Link >
            <Link to={`/${category_name}/${title}`} replace className="nav-link"style={{color: "#036", fontWeight:'bold'}} >{category_name}</Link >
            <Link to={`/${category_name}/${title}`} replace className="nav-link"style={{color: "#036",}} >{blog_title}</Link >
          </div>
        </div>
      </div>
    );
  }
}
BottomContent.propTypes = {
  content: PropTypes.object.isRequired,
}

export default BottomContent;
