import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaSearch, FaFacebook, FaTwitter, FaInstagramSquare} from 'react-icons/fa';
import { MdEmail } from 'react-icons/md'
import { useRef } from 'react';

import '../css/layout/style-mobile.css';
import '../css/layout/style-tablet.css';
import '../css/layout/style-laptop.css';


const Header = props => {
    const navRef = useRef();

    const showNavbar = ()=> {
        navRef.current.classList.toggle('reponsive_nav');
    }
    return(
        <header>
            <div className="main-nav">
                <div className="primary-nav"  ref={navRef}>
                    <div className="branding">
                        <h3>
                            <Link className="logo" to="#">BuffDogNews</Link>
                        </h3>
                        <div className="current-time">
                            <span className="time">7: 30 </span>
                            <span className="zone">AM</span>
                        </div>
                    </div>
        
                    <div className="main-menu">
                        <Link to="#" className="menu-news">U.S.</Link>
                        <Link to="#" className="menu-politics">Politics</Link>
                        <Link to="#" className="menu-media">Media</Link>
                        <Link to="#" className="menu-opinion">Opinion</Link>
                        <Link to="#" className="menu-business" target="_blank">Business</Link>
                        <Link to="#" className="menu-entertainment">Entertainment</Link>
                        <Link to="#" className="menu-sports">Sports</Link>
                        <Link to="#" className="menu-lifestyle">Lifestyle</Link>
                        <Link to="#" className="menu-weather" target="_blank">Weather</Link>
                        <Link to="#" className="menu-tv">TV</Link>
                        <Link to="#" className="menu-nation">Fox Nation</Link>
                        <Link to="#" className="menu-radio" target="_blank">Listen</Link>
                        <Link to="#" className="menu-more">More</Link>
                        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                            <FaTimes />
                        </button>
                    </div>
                    
                    <button className="nav-btn" onClick={showNavbar}>
                        <FaBars/>
                    </button>

                    <div className="meta">
                        <button className="search-toggle">
                            <FaSearch />
                        </button>

                        <Link to="#" className="login" id="account">Login</Link>
                        <Link to="#" className="watch">WatchTV</Link>

                        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                            <FaTimes/>
                        </button>
                    </div>

                    
                </div>
            
                <div className="secondary-nav">
                    <div className="hot-topics-nav" aria-label="hot topics">
                        <span className="subnav-title">Hot Topics</span>

                        <div className="rotate-items">
                            <Link to="#" className="hot-topics-1">| SCOTUS GUN DECISION</Link>
                            <Link to="#" className="hot-topics-2">| JAN. 6 COMMITTEE</Link>
                            <Link to="#" className="hot-topics-3">| NBA DRAFT</Link>
                            <Link to="#" className="hot-topics-4">| GAS TAX HOLIDAY</Link>
                        </div>
                    </div>

                    <div className="markets-nav">
                        <span className="subnav-title">Markets</span>

                        <div className="rotate-items">
                            <Link to="#" className="stock-1"><span>| SP500</span></Link>
                            <Link to="#" className="stock-2">| I:COMP</Link>
                            <Link to="#" className="stock-3"><span>| I:COMP</span></Link>
                            <Link to="#" className="more-markets" target="_blank">| More</Link>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="expandable-nav">
                <div className="inner">
                    <div className="search">
                        <div className="search-wrap">
                            <form>
                                <fieldset>
                                    <input type="text" aria-label="search foxnews.com" className="resp_site_search js-bound" placeholder="Search foxnews.com"  />
                                    <input type="submit" aria-label="submit search" className="resp_site_submit" value="Search" />
                                </fieldset>
                            </form>
                        </div>
                    </div>
                </div>

                <div className="section-nav">
                    <div className="inner">
                        <div className="inner1">
                            <div className="nav-item">
                                <span className="nav-title">
                                    <Link aria-label="U.S." to="#">U.S.</Link>
                                </span>

                                <ul>
                                    <li>
                                        <Link aria-label="U.S. - Crime" to="#" >Crime</Link>
                                    </li>

                                    <li>
                                        <Link aria-label="U.S. - Military" to="#" >Military</Link>
                                    </li>

                                    <li>
                                        <Link aria-label="U.S. - Education" to="#" >Education</Link>
                                    </li>

                                    <li>
                                        <Link aria-label="U.S. - Terror" to="#" >Terror</Link>
                                    </li>

                                    <li>
                                        <Link aria-label="U.S. - Immigration" to="#" >Immigration</Link>
                                    </li>

                                    <li>
                                        <Link aria-label="U.S. - Economy" to="#" >Economy</Link>
                                    </li>

                                    <li>
                                        <Link aria-label="U.S. - Personal Freedoms" to="#" >Personal Freedoms</Link>
                                    </li>

                                    <li>
                                        <Link aria-label="U.S. - Fox News Investigates" to="#" >Fox News Investigates</Link>
                                    </li>

                                    <li>
                                        <Link aria-label="U.S. - Digital Originals" to="#" >Digital Originals</Link>
                                    </li>
                                </ul>
                            </div>
                            
                            <div className="nav-item">
                                <span className="nav-title">
                                    <Link aria-label="U.S." to="#">U.S.</Link>
                                </span>
                                
                                <ul>
                                    <li>
                                        <Link aria-label="U.S. - Crime" to="#" >Crime</Link>
                                    </li>

                                    <li>
                                        <Link aria-label="U.S. - Military" to="#" >Military</Link>
                                    </li>

                                    <li>
                                        <Link aria-label="U.S. - Education" to="#" >Education</Link>
                                    </li>

                                    <li>
                                        <Link aria-label="U.S. - Terror" to="#" >Terror</Link>
                                    </li>

                                    <li>
                                        <Link aria-label="U.S. - Immigration" to="#" >Immigration</Link>
                                    </li>

                                    <li>
                                        <Link aria-label="U.S. - Economy" to="#" >Economy</Link>
                                    </li>

                                    <li>
                                        <Link aria-label="U.S. - Personal Freedoms" to="#" >Personal Freedoms</Link>
                                    </li>

                                    <li>
                                        <Link aria-label="U.S. - Fox News Investigates" to="#" >Fox News Investigates</Link>
                                    </li>

                                    <li>
                                        <Link aria-label="U.S. - Digital Originals" to="#" >Digital Originals</Link>
                                    </li>
                                </ul>
                            </div>   

                            <div className="nav-item">
                                <span className="nav-title">
                                    <Link aria-label="U.S." to="#">U.S.</Link>
                                </span>
                                
                                <ul>
                                    <li>
                                        <Link aria-label="U.S. - Crime" to="#" >Crime</Link>
                                    </li>

                                    <li>
                                        <Link aria-label="U.S. - Military" to="#" >Military</Link>
                                    </li>

                                    <li>
                                        <Link aria-label="U.S. - Education" to="#" >Education</Link>
                                    </li>

                                    <li>
                                        <Link aria-label="U.S. - Terror" to="#" >Terror</Link>
                                    </li>

                                    <li>
                                        <Link aria-label="U.S. - Immigration" to="#" >Immigration</Link>
                                    </li>

                                    <li>
                                        <Link aria-label="U.S. - Economy" to="#" >Economy</Link>
                                    </li>

                                    <li>
                                        <Link aria-label="U.S. - Personal Freedoms" to="#" >Personal Freedoms</Link>
                                    </li>

                                    <li>
                                        <Link aria-label="U.S. - Fox News Investigates" to="#" >Fox News Investigates</Link>
                                    </li>

                                    <li>
                                        <Link aria-label="U.S. - Digital Originals" to="#" >Digital Originals</Link>
                                    </li>
                                </ul>
                            </div>

                            <div className="nav-item">
                                <span className="nav-title">
                                    <Link aria-label="U.S." to="#">U.S.</Link>
                                </span>
                                
                                <ul>
                                    <li>
                                        <Link aria-label="U.S. - Crime" to="#" >Crime</Link>
                                    </li>

                                    <li>
                                        <Link aria-label="U.S. - Military" to="#" >Military</Link>
                                    </li>

                                    <li>
                                        <Link aria-label="U.S. - Education" to="#" >Education</Link>
                                    </li>

                                    <li>
                                        <Link aria-label="U.S. - Terror" to="#" >Terror</Link>
                                    </li>

                                    <li>
                                        <Link aria-label="U.S. - Immigration" to="#" >Immigration</Link>
                                    </li>

                                    <li>
                                        <Link aria-label="U.S. - Economy" to="#" >Economy</Link>
                                    </li>

                                    <li>
                                        <Link aria-label="U.S. - Personal Freedoms" to="#" >Personal Freedoms</Link>
                                    </li>

                                    <li>
                                        <Link aria-label="U.S. - Fox News Investigates" to="#" >Fox News Investigates</Link>
                                    </li>

                                    <li>
                                        <Link aria-label="U.S. - Digital Originals" to="#" >Digital Originals</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                            
                        <div className="inner2">
                            <div className="nav-item">
                                <span className="nav-title">
                                    <Link aria-label="U.S." to="#">U.S.</Link>
                                </span>
                                
                                <ul>
                                    <li>
                                        <Link aria-label="U.S. - Crime" to="#" >Crime</Link>
                                    </li>

                                    <li>
                                        <Link aria-label="U.S. - Military" to="#" >Military</Link>
                                    </li>

                                    <li>
                                        <Link aria-label="U.S. - Education" to="#" >Education</Link>
                                    </li>

                                    <li>
                                        <Link aria-label="U.S. - Terror" to="#" >Terror</Link>
                                    </li>

                                    <li>
                                        <Link aria-label="U.S. - Immigration" to="#" >Immigration</Link>
                                    </li>

                                    <li>
                                        <Link aria-label="U.S. - Economy" to="#" >Economy</Link>
                                    </li>

                                    <li>
                                        <Link aria-label="U.S. - Personal Freedoms" to="#" >Personal Freedoms</Link>
                                    </li>

                                    <li>
                                        <Link aria-label="U.S. - Fox News Investigates" to="#" >Fox News Investigates</Link>
                                    </li>

                                    <li>
                                        <Link aria-label="U.S. - Digital Originals" to="#" >Digital Originals</Link>
                                    </li>
                                </ul>
                            </div>
                            
                            <div className="nav-item">
                                <span className="nav-title">
                                    <Link aria-label="U.S." to="#">U.S.</Link>
                                </span>
                                
                                <ul>
                                    <li>
                                        <Link aria-label="U.S. - Crime" to="#" >Crime</Link>
                                    </li>

                                    <li>
                                        <Link aria-label="U.S. - Military" to="#" >Military</Link>
                                    </li>

                                    <li>
                                        <Link aria-label="U.S. - Education" to="#" >Education</Link>
                                    </li>

                                    <li>
                                        <Link aria-label="U.S. - Terror" to="#" >Terror</Link>
                                    </li>

                                    <li>
                                        <Link aria-label="U.S. - Immigration" to="#" >Immigration</Link>
                                    </li>

                                    <li>
                                        <Link aria-label="U.S. - Economy" to="#" >Economy</Link>
                                    </li>

                                    <li>
                                        <Link aria-label="U.S. - Personal Freedoms" to="#" >Personal Freedoms</Link>
                                    </li>

                                    <li>
                                        <Link aria-label="U.S. - Fox News Investigates" to="#" >Fox News Investigates</Link>
                                    </li>

                                    <li>
                                        <Link aria-label="U.S. - Digital Originals" to="#" >Digital Originals</Link>
                                    </li>
                                </ul>
                            </div>

                            <div className="nav-item">
                                <span className="nav-title">
                                    <Link aria-label="U.S." to="#">U.S.</Link>
                                </span>
                                
                                <ul>
                                    <li>
                                        <Link aria-label="U.S. - Crime" to="#" >Crime</Link>
                                    </li>

                                    <li>
                                        <Link aria-label="U.S. - Military" to="#" >Military</Link>
                                    </li>

                                    <li>
                                        <Link aria-label="U.S. - Education" to="#" >Education</Link>
                                    </li>

                                    <li>
                                        <Link aria-label="U.S. - Terror" to="#" >Terror</Link>
                                    </li>

                                    <li>
                                        <Link aria-label="U.S. - Immigration" to="#" >Immigration</Link>
                                    </li>

                                    <li>
                                        <Link aria-label="U.S. - Economy" to="#" >Economy</Link>
                                    </li>

                                    <li>
                                        <Link aria-label="U.S. - Personal Freedoms" to="#" >Personal Freedoms</Link>
                                    </li>

                                    <li>
                                        <Link aria-label="U.S. - Fox News Investigates" to="#" >Fox News Investigates</Link>
                                    </li>

                                    <li>
                                        <Link aria-label="U.S. - Digital Originals" to="#" >Digital Originals</Link>
                                    </li>
                                </ul>
                            </div>

                            <div className="nav-item">
                                <span className="nav-title">
                                    <Link aria-label="U.S." to="#">U.S.</Link>
                                </span>
                                
                                <ul>
                                    <li>
                                        <Link aria-label="U.S. - Crime" to="#" >Crime</Link>
                                    </li>

                                    <li>
                                        <Link aria-label="U.S. - Military" to="#" >Military</Link>
                                    </li>

                                    <li>
                                        <Link aria-label="U.S. - Education" to="#" >Education</Link>
                                    </li>

                                    <li>
                                        <Link aria-label="U.S. - Terror" to="#" >Terror</Link>
                                    </li>

                                    <li>
                                        <Link aria-label="U.S. - Immigration" to="#" >Immigration</Link>
                                    </li>

                                    <li>
                                        <Link aria-label="U.S. - Economy" to="#" >Economy</Link>
                                    </li>

                                    <li>
                                        <Link aria-label="U.S. - Personal Freedoms" to="#" >Personal Freedoms</Link>
                                    </li>

                                    <li>
                                        <Link aria-label="U.S. - Fox News Investigates" to="#" >Fox News Investigates</Link>
                                    </li>

                                    <li>
                                        <Link aria-label="U.S. - Digital Originals" to="#" >Digital Originals</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                            
                        <div className="inner3">
                            <div className="nav-item">
                                <span className="nav-title">
                                    <Link aria-label="U.S." to="#">U.S.</Link>
                                </span>
                                
                                <ul>
                                    <li>
                                        <Link aria-label="U.S. - Crime" to="#" >Crime</Link>
                                    </li>

                                    <li>
                                        <Link aria-label="U.S. - Military" to="#" >Military</Link>
                                    </li>

                                    <li>
                                        <Link aria-label="U.S. - Education" to="#" >Education</Link>
                                    </li>

                                    <li>
                                        <Link aria-label="U.S. - Terror" to="#" >Terror</Link>
                                    </li>

                                    <li>
                                        <Link aria-label="U.S. - Immigration" to="#" >Immigration</Link>
                                    </li>

                                    <li>
                                        <Link aria-label="U.S. - Economy" to="#" >Economy</Link>
                                    </li>

                                    <li>
                                        <Link aria-label="U.S. - Personal Freedoms" to="#" >Personal Freedoms</Link>
                                    </li>

                                    <li>
                                        <Link aria-label="U.S. - Fox News Investigates" to="#" >Fox News Investigates</Link>
                                    </li>

                                    <li>
                                        <Link aria-label="U.S. - Digital Originals" to="#" >Digital Originals</Link>
                                    </li>
                                </ul>
                            </div>
                            
                            <div className="nav-item">
                                <span className="nav-title">
                                    <Link aria-label="U.S." to="#">U.S.</Link>
                                </span>
                                
                                <ul>
                                    <li>
                                        <Link aria-label="U.S. - Crime" to="#" >Crime</Link>
                                    </li>

                                    <li>
                                        <Link aria-label="U.S. - Military" to="#" >Military</Link>
                                    </li>

                                    <li>
                                        <Link aria-label="U.S. - Education" to="#" >Education</Link>
                                    </li>

                                    <li>
                                        <Link aria-label="U.S. - Terror" to="#" >Terror</Link>
                                    </li>

                                    <li>
                                        <Link aria-label="U.S. - Immigration" to="#" >Immigration</Link>
                                    </li>

                                    <li>
                                        <Link aria-label="U.S. - Economy" to="#" >Economy</Link>
                                    </li>

                                    <li>
                                        <Link aria-label="U.S. - Personal Freedoms" to="#" >Personal Freedoms</Link>
                                    </li>

                                    <li>
                                        <Link aria-label="U.S. - Fox News Investigates" to="#" >Fox News Investigates</Link>
                                    </li>

                                    <li>
                                        <Link aria-label="U.S. - Digital Originals" to="#" >Digital Originals</Link>
                                    </li>
                                </ul>
                            </div>
                            
                            <div className="nav-item">
                                <span className="nav-title">
                                    <Link aria-label="U.S." to="#">U.S.</Link>
                                </span>
                                
                                <ul>
                                    <li>
                                        <Link aria-label="U.S. - Crime" to="#" >Crime</Link>
                                    </li>

                                    <li>
                                        <Link aria-label="U.S. - Military" to="#" >Military</Link>
                                    </li>

                                    <li>
                                        <Link aria-label="U.S. - Education" to="#" >Education</Link>
                                    </li>

                                    <li>
                                        <Link aria-label="U.S. - Terror" to="#" >Terror</Link>
                                    </li>

                                    <li>
                                        <Link aria-label="U.S. - Immigration" to="#" >Immigration</Link>
                                    </li>

                                    <li>
                                        <Link aria-label="U.S. - Economy" to="#" >Economy</Link>
                                    </li>

                                    <li>
                                        <Link aria-label="U.S. - Personal Freedoms" to="#" >Personal Freedoms</Link>
                                    </li>

                                    <li>
                                        <Link aria-label="U.S. - Fox News Investigates" to="#" >Fox News Investigates</Link>
                                    </li>

                                    <li>
                                        <Link aria-label="U.S. - Digital Originals" to="#" >Digital Originals</Link>
                                    </li>
                                </ul>
                            </div>
                                
                            <div className="nav-item">
                                <span className="nav-title">
                                    <Link aria-label="U.S." to="#">U.S.</Link>
                                </span>
                                
                                <ul>
                                    <li>
                                        <Link aria-label="U.S. - Crime" to="#" >Crime</Link>
                                    </li>

                                    <li>
                                        <Link aria-label="U.S. - Military" to="#" >Military</Link>
                                    </li>

                                    <li>
                                        <Link aria-label="U.S. - Education" to="#" >Education</Link>
                                    </li>

                                    <li>
                                        <Link aria-label="U.S. - Terror" to="#" >Terror</Link>
                                    </li>

                                    <li>
                                        <Link aria-label="U.S. - Immigration" to="#" >Immigration</Link>
                                    </li>

                                    <li>
                                        <Link aria-label="U.S. - Economy" to="#" >Economy</Link>
                                    </li>

                                    <li>
                                        <Link aria-label="U.S. - Personal Freedoms" to="#" >Personal Freedoms</Link>
                                    </li>

                                    <li>
                                        <Link aria-label="U.S. - Fox News Investigates" to="#" >Fox News Investigates</Link>
                                    </li>

                                    <li>
                                        <Link aria-label="U.S. - Digital Originals" to="#" >Digital Originals</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                            

                    </div>
                </div>
                
                <div className="header-lower">
                    <div className="social-icons">
                        <button><FaFacebook /></button>
                        <button><FaTwitter /></button>
                        <button><FaInstagramSquare /></button>
                        <button><MdEmail /></button>
                    </div>
                                       
                    <div className="legal">
                        <div className="links">
                            <Link aria-label="New Terms of Use" to="#">| New Terms of Use</Link>
                            <Link aria-label="New Privacy Policy" to="#">| New Privacy Policy</Link>
                            <Link to="#l">| Do Not Sell my Personal Information</Link>
                            <Link aria-label="Closed Captioning Policy" to="#">| Closed Captioning Policy</Link>
                            <Link aria-label="Help" to="#">| Help</Link>
                            <Link aria-label="Contact Us" to="#t">| Contact Us</Link>
                        </div>
                        <span className="copyright">
                            This material may not be published, broadcast, rewritten, or redistributed. ©2022 FOX News Network, LLC. All rights reserved. Quotes displayed in real-time or delayed by at least 15 minutes. Market data provided by&nbsp;
                            <Link to="#">Factset</Link> 
                            . Powered and implemented by&nbsp;
                            <Link to="#">FactSet Digital Solutions</Link>
                            .&nbsp;
                            <Link to="#">Legal Statement</Link>
                            . Mutual Fund and ETF data provided by&nbsp;
                            <Link to="#">Refinitiv Lipper</Link>.
                        </span>
                    </div>

                    <div className="header-lower-branding">
                        <h3>
                            <Link className="logo" to="#">BuffDog News</Link>
                        </h3>
                        <div className="current-time">
                            <span className="time">7: 30 </span>
                            <span className="zone">AM</span>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;