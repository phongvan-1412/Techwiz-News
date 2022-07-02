import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagramSquare, FaFlipboard, FaComments, FaPrint } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md'
import { Consumer } from '../context'

import RSBars from '../RightSideBar/RSBars'
import MoreSuggestLinks from "../MoreSuggest/MoreSuggestLinks";
import MoreSuggestPosts from "../MoreSuggest/MoreSuggestPosts";


class Content extends Component {
  render() {
    return (
      <Consumer>
        {(value) => {
          const { spotlights } = value;
          return (
            <div className="App">
              {spotlights.map((spotlight) => (
                <div className="container">
                  <div className="row">
                    <div className="header-article">
                      <div className="article-date col-md-12">
                        <Link to="#">RECIPES</Link>
                        <strong>Published</strong>
                        <span>{spotlight.blog_day_open}</span>
                      </div>

                      <div className="col-md-12 article-title">
                        <h1>{spotlight.blog_title}</h1>
                      </div>

                      <div className="col-md-12 sub-headline">
                        <span>This simple salsa recipe from Gastronotherapy takes only 10 minutes to make</span>
                      </div>

                      <div className="col-md-12">
                        <div className="col-md-9 article-lower">
                          <div className="row">
                            <div className="col-md-6 article-admin-name">
                                <Link to='/'><span>{spotlight.admin_name} | BuffDog News</span></Link>
                            </div>

                            <div className="article-meta-social-icon col-md-6">
                              <ul>
                                <Link to='/'><li><FaFacebook className="meta-facebook"/></li></Link>
                                <Link to='/'><li><FaInstagramSquare className="meta-instagram" /></li></Link>
                                <Link to='/'><li><FaTwitter className="meta-twitter" /></li></Link>
                                <Link to='/'><li><FaFlipboard className="meta-flipboard" /></li></Link>
                                <Link to='/'><li><FaComments className="meta-comment" /></li></Link>
                                <Link to='/'><li><FaPrint className="meta-print" /></li></Link>
                                <Link to='/'><li><MdEmail className="meta-email" /></li></Link>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="row main-content">
                        <div className="col-md-9" >
                          <div className="row main-content-wrapper">
                            <div className="col-md-12 main-content-content">
                              <br /><br />
                              <span>{(spotlight.blog_content).substring(0, 450)}</span>
                              <br /><br />

                              <div className="main-content-video">
                                <iframe width="560" height="315"  src={spotlight.blog_video_name} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                              </div>
                              
                              <br /><br />
                              <span>{(spotlight.blog_content).substring(451, 1000)}</span>
                              <br /><br />

                            </div> 
                          </div>
                        </div>

                        <div className="col-md-3">
                          <RSBars />
                        </div>
                    </div>

                    <div className="row">
                      <span className="admin-name-tips">{spotlight.admin_name} is an associate editor for BuffDog News Digital. Story tips can be sent to {spotlight.admin_name}@buffdog.com.</span>
                    </div>

                    <div className="row more-link-from-buffdog">
                      <div className="col-md-3">
                          <span class="more-suggest-header-text">More From BuffDog News</span>
                          <MoreSuggestLinks/>
                      </div>
                    </div>

                    <div className="row more-post-from-buffdog">
                      <span class="more-suggest-header-text">More From BuffDog News</span>

                      <div className="col-md-3">
                          <MoreSuggestPosts/>
                      </div>

                      <div className="col-md-3">
                          <MoreSuggestPosts/>
                      </div>

                      <div className="col-md-3">
                          <MoreSuggestPosts/>
                      </div>
                    </div>

                  </div>
                </div>
              ))}
            </div>
          );
        }}
      </Consumer>
    )
  }
}

export default Content;