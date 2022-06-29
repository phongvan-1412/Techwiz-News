import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";


class BodyContent extends Component {
  render() {
    const { blog_img_name, blog_title, category_name } = this.props.content;

    return (
        <div className="col-md-12">
          <div className="row" style={{borderBottom:'1px solid rgba(0, 0, 0, 0.25)', padding:'15px'}}>
            <div className="col-md-3">
              <Link to={`/${category_name}/${title}`}><img src={require(`../TopBody/${blog_img_name}.jpg`)}  alt="" style={{ width:'100%', height:'auto',objectFit:'center',objectPosition:'center'}}/></Link>
            </div>
            <div className="col-md-9">
              <div className="row">

                <div className="col-md-12">
                  <Link to="/adfa" style={{color:'#036', fontWeight:'bold'}}>{category_name}</Link>
                </div>

                <div className="col-md-12">
                  <Link to="/" style={{color:'#036'}}>{blog_title}</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
  }
}
BodyContent.propTypes = {
  content: PropTypes.object.isRequired,
}

export default BodyContent;
