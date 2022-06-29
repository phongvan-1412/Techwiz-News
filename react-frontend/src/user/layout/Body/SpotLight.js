import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";


class SpotLight extends Component {
  render() {
    const { blog_title, blog_content } = this.props.content;

    return (
      <div className="row">
        
        <div className="col-md-6">
          <Link to='/'><img src={require('../TopBody/image-1.jpg')} alt="" style={{width:'100%',height:'auto',objectFit:'center',objectPosition:'center'}}/></Link>
          <h4><Link  to="/bodySpotLight" style={{color: "#003366",fontWeight:'bold'}} >{blog_title}</Link></h4>
          <Link to='/'><span style={{fontSize:'10px',color:'#003366'}}>{blog_title}</span></Link>
        </div>

        <div className="col-md-6">
          <Link to='/'><img src={require('../TopBody/image-1.jpg')} alt="" style={{width:'100%',height:'auto',objectFit:'center',objectPosition:'center'}}/></Link>
          <h4><Link  to="/bodySpotLight" style={{color: "#003366",fontWeight:'bold'}} >{blog_title}</Link></h4>
          <Link to='/'><span style={{fontSize:'10px',color:'#003366'}}>{blog_title}</span></Link>
        </div>

      </div>
    );
  }
}
SpotLight.propTypes = {
  content: PropTypes.object.isRequired,
}

export default SpotLight;
