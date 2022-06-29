import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";


class BottomContent extends Component {
  render() {
    const { blog_title, category_name, blog_img_name } = this.props.content;
    const  title  = blog_title.replace(" ","-");
    return (
<<<<<<< HEAD
      <div>
        <div className="row">
            <div className="col-md-6" style={{textAlign:'left',fontWeight:'bold',padding:'0px',fontSize:'25px',textTransform:'uppercase'}}>
              <span style={{color:'#036'}}>{category_name}</span>
            </div>
            <div className="col-md-6" style={{textAlign:'right',fontWeight:'bold',padding:'0px'}}>
              <Link to='/'><span style={{color:'#036'}}>View all</span></Link>
            </div>       
=======
      <div className="row">
        <div className="col-md-6">
          <Link to={`/${category_name}/${title}`} replace className="nav-link"><img src={require('../TopBody/image-1.jpg')} style={{width:"100%",height:'auto',objectPosition:'center',objectFit:'center'}}/></Link >
>>>>>>> 44bd4bb9b575f65295f59a3e2f019a08edc101d6
        </div>
      
        <div className="row" style={{ border:'1px solid rgba(0,0,0,0.25)',marginBottom:'100px'}}>
          <div className="col-md-6" style={{padding:'0px'}}>
            <Link to='/' replace className="nav-link" style={{padding:'0px', height:'100%'}}><img src={require('../TopBody/image-1.jpg')} style={{width:"100%",height:'100%',objectPosition:'center',objectFit:'center'}}/></Link >
          </div>
          <div className="col-md-6">
            <div className="row"style={{padding:'10px'}}>
              <Link to={`/${category_name}/${title}`} replace className="nav-link"style={{color: "#036", fontWeight:'bold'}} >{category_name}</Link >
              <Link to={`/${category_name}/${title}`} replace className="nav-link"style={{color: "#036", borderBottom:'1px solid rgba(0,0,0,0.25)'}} >{blog_title}</Link >
              <Link to={`/${category_name}/${title}`} replace className="nav-link"style={{color: "#036", fontWeight:'bold'}} >{category_name}</Link >
              <Link to={`/${category_name}/${title}`} replace className="nav-link"style={{color: "#036", borderBottom:'1px solid rgba(0,0,0,0.25)'}} >{blog_title}</Link >
              <Link to={`/${category_name}/${title}`} replace className="nav-link"style={{color: "#036", fontWeight:'bold'}} >{category_name}</Link >
              <Link to={`/${category_name}/${title}`} replace className="nav-link"style={{color: "#036", borderBottom:'1px solid rgba(0,0,0,0.25)'}} >{blog_title}</Link >
              <Link to={`/${category_name}/${title}`} replace className="nav-link"style={{color: "#036", fontWeight:'bold'}} >{category_name}</Link >
              <Link to={`/${category_name}/${title}`} replace className="nav-link"style={{color: "#036",}} >{blog_title}</Link >
            </div>
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
