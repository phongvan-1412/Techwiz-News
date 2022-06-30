import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";


class BottomCategory extends Component {
  render() {
    const { blog_title, category_name, blog_img_name, blog_content, blog_day_open } = this.props.content;
    const title = blog_title.replace(" ", "-");
    return (
      <div>
        <div className="row" style={{ border: '1px solid rgba(0,0,0,0.25)', padding: '0px' }}>

            <div className="col-md-6" style={{ padding: '0px' }}>
                <Link to='/' replace className="nav-link" style={{ padding: '0px', height: '100%' }}><img src={require('../TopBody/image-1.jpg')} style={{ width: "100%", height: '100%', objectPosition: 'center', objectFit: 'center' }} /></Link >
            </div>

            <div className="col-md-6">
                <div className="row" style={{ padding: '10px' }}>
                    <Link to={`/${category_name}`} replace className="nav-link" style={{ color: "#036", fontWeight: 'bold', marginRight:'10px' }} >{category_name}
                        <span> | {blog_day_open}</span>
                    </Link >

                    
                    <Link to={`/${category_name}/${title}`} replace className="nav-link" style={{ color: "#036", borderBottom: '1px solid rgba(0,0,0,0.25)' }} >{blog_title}</Link >
                    <Link to={`/${category_name}/${title}`} replace className="nav-link" style={{ color: "#036", fontWeight: 'bold' }} >{blog_content}</Link >
                </div>
            </div>
        </div>
      </div>



    );
  }
}
BottomCategory.propTypes = {
  content: PropTypes.object.isRequired,
}

export default BottomCategory;
