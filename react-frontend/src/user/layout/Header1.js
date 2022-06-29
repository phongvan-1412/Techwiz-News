import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagramSquare} from 'react-icons/fa';
import { MdEmail } from 'react-icons/md'
import { useRef } from 'react';

import '../css/layout/style-mobile.css';
import '../css/layout/style-tablet.css';
import '../css/layout/style-laptop.css';           
            
const Header1 = props => {
    const navRef = useRef();

    const showNavbar = ()=> {
        navRef.current.classList.toggle('reponsive_nav');
    }
    return(
        <header>
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
    
export default Header1;