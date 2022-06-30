import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagramSquare, FaFlipboard, FaComments, FaPrint} from 'react-icons/fa';
import { MdEmail } from 'react-icons/md'
import { Consumer } from "../context";


class HeaderComponent extends Component {
  render() {
    const { blog_id, blog_title, emp_name, blog_day_open } = this.props.content;
    return(
        <div className="row">
            <div className="header-article"  style={{textAlign:'center',float:'left', marginBottom: '30px'}}>
                <div className="article-date col-md-12">
                    <Link to="#" style={{color:'#036',fontWeight:'bold', marginRight:'10px'}}>RECIPES</Link>
                    <strong style={{marginRight:'10px'}}>Published</strong>
                    <span>{blog_day_open}</span> 
                </div>

                <div className="col-md-12" style={{textAlign:'center'}}>
                    <h1 style={{fontSize:'60px',fontWeight:'bold',lineheight:'66px'}}>{blog_title}</h1>
                </div>

                <div className="col-md-12 sub-headline" style={{fontSize: '24px',lineHeight: '60px'}}>
                    <span>This simple salsa recipe from Gastronotherapy takes only 10 minutes to make</span> 
                </div>

                <div className="col-md-12" style={{}}>
                    <div className="col-md-9" style={{borderTop:'1px solid rgba(0,0,0,0.25)',borderBottom:'1px solid rgba(0,0,0,0.25)',}}>
                        <div className="row">
                            <div className="col-md-6" style={{alignSelf:'center'}}>
                                <span style={{}}>
                                    <Link to='/'><span style={{float:'left', textAlign:'left',fontWeight:'bold',color:'#036',}}>{emp_name} | BuffDog News</span></Link> 
                                </span>
                            </div>

                            <div className="social-icon col-md-6">
                                <ul style={{display:'flex',float:'right'}}>
                                    <Link to='/'><li style={{fontSize:'2rem',marginRight:'10px'}}><FaFacebook style={{color:'white',backgroundColor:'#3b5998',padding:'5px',borderRadius:'25px'}}/></li></Link>
                                    <Link to='/'><li style={{fontSize:'2rem',marginRight:'10px'}}><FaInstagramSquare style={{color:'white',backgroundColor:'#1DA1F2',padding:'5px',borderRadius:'25px'}}/></li></Link>
                                    <Link to='/'><li style={{fontSize:'2rem',marginRight:'10px'}}><FaTwitter style={{color:'white',backgroundColor:'#1DA1F2',padding:'5px',borderRadius:'25px'}} /></li></Link>
                                    <Link to='/'><li style={{fontSize:'2rem',marginRight:'10px'}}><FaFlipboard style={{color:'white',backgroundColor:'#E12828',padding:'5px',borderRadius:'25px'}}/></li></Link>
                                    <Link to='/'><li style={{fontSize:'2rem',marginRight:'10px'}}><FaComments style={{color:'white',backgroundColor:'#003366',padding:'5px',borderRadius:'25px'}}/></li></Link>
                                    <Link to='/'><li style={{fontSize:'2rem',marginRight:'10px'}}><FaPrint style={{color:'white',backgroundColor:'#003366',padding:'5px',borderRadius:'25px'}}/></li></Link>
                                    <Link to='/'><li style={{fontSize:'2rem',marginRight:'10px'}}><MdEmail style={{color:'white',backgroundColor:'#003366',padding:'5px',borderRadius:'25px'}}/></li></Link>
                                </ul>
                            </div>
                        </div>
                        
                        
                        
                    </div>
                    <div className="col-md-3" style={{float:'right', textAlign:'right',}}>
                        
                    </div>
                </div>
            </div>
            
        </div>
    )
  }
}

export default HeaderComponent;