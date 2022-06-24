import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import '../css/layout/header.css'

const Header = props => {
    return(
        <header className="site-header">
            <div className="branding">
                <h1>
                    <Link className="logo" to="#">Fox News</Link>
                </h1>
                <div className="current-time">
                    <span className="time">7: 30 </span>
                    <span className="zone">AM</span>
                </div>
            </div>

            <div className="nav-row nav-row-upper">
                <div className="inner">
                    <div className="primary-nav tablet-desktop">
                        <nav id="main-nav">
                            <ul>
                                <li className="menu-news">
                                    <Link to="#">U.S.</Link>
                                </li>

                                <li className="menu-politics">
                                    <Link to="#">Politics</Link>
                                </li>

                                <li className="menu-media">
                                    <Link to="#">Media</Link>
                                </li>

                                <li className="menu-opinion">
                                    <Link to="#">Opinion</Link>
                                </li>

                                <li className="menu-business">
                                    <Link to="#" target="_blank">Business</Link>
                                </li>

                                <li className="menu-entertainment">
                                    <Link to="#">Entertainment</Link>
                                </li>

                                <li className="menu-sports">
                                    <Link to="#">Sports</Link>
                                </li>

                                <li className="menu-lifestyle">
                                    <Link to="#">Lifestyle</Link>
                                </li>

                                <li className="menu-fox-weather">
                                    <Link to="#" target="_blank">Weather</Link>
                                </li>

                                <li className="menu-tv">
                                    <Link to="#">TV</Link>
                                </li>

                                <li className="menu-nation">
                                    <Link to="#">Fox Nation</Link>
                                </li>

                                <li className="menu-radio">
                                    <Link to="#" target="_blank">Listen</Link>
                                </li>

                                <li className="menu-more">
                                    <Link to="#" className="js-menu-toggle">More</Link>
                                </li>
                            </ul>
                        </nav>
                    </div>

                    <div className="meta">
                        <div className="search-toggle tablet-desktop">
                            <Link to="#" className="js-focus-search">Expand / Collapse search</Link>
                        </div>

                        <div className="network-access logged-out logged-in" id="account">
                            <div className="user-profile user-login button">
                                <Link to="#" className="login">Login</Link>
                            </div>
                        </div>

                        <div className="button watch">
                            <Link to="#">Watch TV</Link>
                        </div>

                        <div className="menu mobile">
                            <Link aria-label="Mobile Menu" to="#" className="js-menu-toggle">Menu</Link>
                        </div>

                    </div>
                </div>
            </div>

            <div className="nav-row nav-row-lower tablet-desktop">
                <div className="inner">
                    <div className="secondary-nav">
                        <nav className="hot-topics" aria-label="hot topics">
                            <span className="subnav-title">Hot Topics</span>

                            <ul className="rotate-items">
                                <li>
                                    <Link to="#">SCOTUS GUN DECISION</Link>
                                </li>

                                <li>
                                    <Link to="#">JAN. 6 COMMITTEE</Link>
                                </li>

                                <li>
                                    <Link to="#">NBA DRAFT</Link>
                                </li>

                                <li>
                                    <Link to="#">GAS TAX HOLIDAY</Link>
                                </li>
                            </ul>
                        </nav>
                    </div>

                    <div className="markets-nav">
                        <nav className="market-data">
                            <span className="subnav-title">Markets</span>
                            <ul className="rotate-items">
                                <li className="stock">
                                    <Link to="#"><span>SP500</span></Link>
                                </li>

                                <li className="stock">
                                    <Link to="#">I:COMP</Link>
                                </li>

                                <li className="stock">
                                    <Link to="#"><span>I:COMP</span></Link>
                                </li>

                                <li className="more-markets">
                                    <Link to="#" target="_blank">More</Link>
                                </li>
                            </ul>
                        </nav>

                        <div className="market-sponsor tablet-desktop">
                            <div className="ad-container sponsor desktop ad-h-31 ad-w-88" style={{ display: "none" }}>
                                <span className="advert-txt">Sponsored by</span>

                                <div className="ad gam ad-h-31 ad-w-88" id="#" style={{ display: "none" }}></div>
                            </div>

                            <div className="ad-container sponsor tablet ad-h-31 ad-w-88">
                                <span className="advert-txt">Sponsored by</span>
                                <div className="ad gam ad-h-31 ad-w-88" id="tablet-hp-mktupdte" data-ad-size="88x31"></div>
                            </div>
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
                                    <input type="text" aria-label="search foxnews.com" placeholder="Search foxnews.com" name="q" className="resp_site_search js-bound" />
                                    <input type="submit" aria-label="submit search" className="resp_site_submit" value="Search" />
                                </fieldset>
                            </form>
                        </div>
                    </div>
                </div>

                <div className="section-nav">
                    <div className="inner">
                        <nav>
                            <h6 className="nav-title">
                                <Link aria-label="U.S." to="#">U.S.</Link>
                            </h6>
                            <ul>
                                <li className="nav-item">
                                    <Link aria-label="U.S. - Crime" to="#">Crime</Link>
                                </li>

                                <li className="nav-item">
                                    <Link aria-label="U.S. - Military" to="#">Military</Link>
                                </li>

                                <li className="nav-item">
                                    <Link aria-label="U.S. - Education" to="#">Education</Link>
                                </li>

                                <li className="nav-item">
                                    <Link aria-label="U.S. - Terror" to="#">Terror</Link>
                                </li>

                                <li className="nav-item">
                                    <Link aria-label="U.S. - Immigration" to="#">Immigration</Link>
                                </li>

                                <li className="nav-item">
                                    <Link aria-label="U.S. - Economy" to="#">Economy</Link>
                                </li>
                                    
                                <li className="nav-item">
                                    <Link aria-label="U.S. - Personal Freedoms" to="#">Personal Freedoms</Link>
                                </li>
                                
                                <li className="nav-item">
                                    <Link aria-label="U.S. - Fox News Investigates" to="#">Fox News Investigates</Link>
                                </li>
                                
                                <li className="nav-item">
                                    <Link aria-label="U.S. - Digital Originals" to="#">Digital Originals</Link>
                                </li>
                            </ul>
                        </nav>
                        
                        <nav>
                            <h6 className="nav-title">
                                <Link aria-label="World" to="#">World</Link>
                            </h6>
                            <ul>
                                <li className="nav-item">
                                    <Link aria-label="World - U.N." to="#">U.N.</Link>
                                </li>
                                
                                <li className="nav-item">
                                    <Link aria-label="World - Conflicts" to="#">Conflicts</Link>
                                </li>
                                
                                <li className="nav-item">
                                    <Link aria-label="World - Terrorism" to="#">Terrorism</Link>
                                </li>
                                
                                <li className="nav-item">
                                    <Link aria-label="World - Disasters" to="#">Disasters</Link>
                                </li>
                                
                                <li className="nav-item">
                                    <Link aria-label="World - Global Economy" to="#">Global Economy</Link>
                                </li>
                                
                                <li className="nav-item">
                                    <Link aria-label="World - Environment" to="#">Environment</Link>
                                </li>
                                
                                <li className="nav-item">
                                    <Link aria-label="World - Religion" to="#">Religion</Link>
                                </li>
                                
                                <li className="nav-item">
                                    <Link aria-label="World - Scandals" to="#">Scandals</Link>
                                </li>
                            </ul>
                        </nav>
                        
                        <nav className="mobile">
                            <h6 className="nav-title">
                                <Link aria-label="Opinion" to="https://www.foxnews.com/opinion">Opinion</Link>
                            </h6>
                        </nav>

                        <nav>
                            <h6 className="nav-title">
                                <Link aria-label="Politics" to="#">Politics</Link>
                            </h6>

                            <ul>
                                <li className="nav-item">
                                    <Link aria-label="Politics - Executive" to="#">Executive</Link>
                                </li>
                                
                                <li className="nav-item">
                                    <Link aria-label="Politics - Senate" to="#">Senate</Link>
                                </li>
                                
                                <li className="nav-item">
                                    <Link aria-label="Politics - House" to="#">House</Link>
                                </li>
                                
                                <li className="nav-item">
                                    <Link aria-label="Politics - Judiciary" to="#">Judiciary</Link>
                                </li>
                                
                                <li className="nav-item">
                                    <Link aria-label="Politics - Foreign Policy" to="#">Foreign Policy</Link>
                                </li>
                                
                                <li className="nav-item">
                                    <Link aria-label="Politics - Polls" to="#">Polls</Link>
                                </li>
                                
                                <li className="nav-item">
                                    <Link aria-label="Politics - Elections" to="#">Elections</Link>
                                </li>
                            </ul>
                        </nav>
                        
                        <nav>
                            <h6 className="nav-title">
                                <Link aria-label="Entertainment" to="#">Entertainment</Link>
                            </h6>

                            <ul>
                                <li className="nav-item">
                                    <Link aria-label="Entertainment - Celebrity News" to="#">Celebrity News</Link>
                                </li>
                                
                                <li className="nav-item">
                                    <Link aria-label="Entertainment - Movies" to="#">Movies</Link>
                                </li>
                                
                                <li className="nav-item">
                                    <Link aria-label="Entertainment - TV News" to="#">TV News</Link>
                                </li>
                                
                                <li className="nav-item">
                                    <Link aria-label="Entertainment - Music News" to="#">Music News</Link>
                                </li>
                                
                                <li className="nav-item">
                                    <Link aria-label="Entertainment - Style News" to="#">Style News</Link>
                                </li>
                                
                                <li className="nav-item">
                                    <Link aria-label="Entertainment - Entertainment Video" to="#">Entertainment Video</Link>
                                </li>
                            </ul>
                        </nav>
                        
                        <nav>
                            <h6 className="nav-title">
                                <Link aria-label="Business" to="#" target="_blank">Business</Link>
                            </h6>

                            <ul>
                                <li className="nav-item">
                                    <Link aria-label="Business - Personal Finance" to="#" target="_blank">Personal Finance</Link>
                                </li>
                                
                                <li className="nav-item">
                                    <Link aria-label="Business - Economy" to="#"  target="_blank">Economy</Link>
                                </li>
                                
                                <li className="nav-item">
                                    <Link aria-label="Business - Markets" to="#" target="_blank">Markets</Link>
                                </li>
                                
                                <li className="nav-item">
                                    <Link aria-label="Business - Watchlist" to="#" target="_blank">Watchlist</Link>
                                </li>
                                
                                <li className="nav-item">
                                    <Link aria-label="Business - Lifestyle" to="#" target="_blank">Lifestyle</Link>
                                </li>
                                
                                <li className="nav-item">
                                    <Link aria-label="Business - Real Estate" to="#" target="_blank">Real Estate</Link>
                                </li>
                                
                                <li className="nav-item">
                                    <Link aria-label="Business - Technology" to="#" target="_blank">Tech</Link>
                                </li>
                            </ul>
                        </nav>
                        
                        <nav>
                            <h6 className="nav-title">
                                <Link aria-label="Lifestyle" to="#">Lifestyle</Link>
                            </h6>

                            <ul>
                                <li className="nav-item">
                                    <Link aria-label="Lifestyle - Food + Drink" to="#">Food + Drink</Link>
                                </li>
                                
                                <li className="nav-item">
                                    <Link aria-label="Lifestyle - Cars + Trucks" to="#">Cars + Trucks</Link>
                                </li>
                                
                                <li className="nav-item">
                                    <Link aria-label="Lifestyle - Travel + Outdoors" to="#">Travel + Outdoors</Link>
                                </li>
                                
                                <li className="nav-item">
                                    <Link aria-label="Lifestyle - House + Home" to="#">House + Home</Link>
                                </li>
                                
                                <li className="nav-item">
                                    <Link aria-label="Lifestyle - Fitness + Well-being" to="#">Fitness + Well-being</Link>
                                </li>
                                
                                <li className="nav-item">
                                    <Link aria-label="Lifestyle - Style + Beauty" to="#">Style + Beauty</Link>
                                </li>
                                
                                <li className="nav-item">
                                    <Link aria-label="Lifestyle - Family" to="#">Family</Link>
                                </li>
                                
                                <li className="nav-item">
                                    <Link aria-label="Lifestyle - Faith" to="#">Faith</Link>
                                </li>
                            </ul>
                        </nav>
                        
                        <nav>
                            <h6 className="nav-title">
                                <Link aria-label="Science" to="#">Science</Link>
                            </h6>

                            <ul>
                                <li className="nav-item">
                                    <Link aria-label="Science - Archaeology" to="#">Archaeology</Link>
                                </li>
                                
                                <li className="nav-item">
                                    <Link aria-label="Science - Air &amp; Space" to="#">Air &amp; Space</Link>
                                </li>
                                
                                <li className="nav-item">
                                    <Link aria-label="Science - Planet Earth" to="#">Planet Earth</Link>
                                </li>
                                
                                <li className="nav-item">
                                    <Link aria-label="Science - Wild Nature" to="#">Wild Nature</Link>
                                </li>
                                
                                <li className="nav-item">
                                    <Link aria-label="Science - Natural Science" to="#">Natural Science</Link>
                                </li>
                                
                                <li className="nav-item">
                                    <Link aria-label="Science - Dinosaurs" to="#">Dinosaurs</Link>
                                </li>
                            </ul>
                        </nav>
                        
                        <nav>
                            <h6 className="nav-title">
                                <Link aria-label="Tech" to="#">Tech</Link>
                            </h6>

                            <ul>
                                <li className="nav-item">
                                    <Link aria-label="Tech - Security" to="#">Security</Link>
                                </li>
                                
                                <li className="nav-item">
                                    <Link aria-label="Tech - Innovation" to="#">Innovation</Link>
                                </li>
                                
                                <li className="nav-item">
                                    <Link aria-label="Tech - Drones" to="#">Drones</Link>
                                </li>
                                
                                <li className="nav-item">
                                    <Link aria-label="Tech - Computers" to="#">Computers</Link>
                                </li>
                                
                                <li className="nav-item">
                                    <Link aria-label="Tech - Video Games" to="#">Video Games</Link>
                                </li>
                                
                                <li className="nav-item">
                                    <Link aria-label="Tech - Military Tech" to="#">Military Tech</Link>
                                </li>
                            </ul>
                        </nav>
                        
                        <nav>
                            <h6 className="nav-title">
                                <Link aria-label="Health" to="#">Health</Link>
                            </h6>

                            <ul>
                                <li className="nav-item">
                                    <Link aria-label="Health - Healthy Living" to="#">Healthy Living</Link>
                                </li>
                                
                                <li className="nav-item">
                                    <Link aria-label="Health - Medical Research" to="#">Medical Research</Link>
                                </li>
                                
                                <li className="nav-item">
                                    <Link aria-label="Health - Mental Health" to="#">Mental Health</Link>
                                </li>
                                
                                <li className="nav-item">
                                    <Link aria-label="Health - Cancer" to="#">Cancer</Link>
                                </li>
                                
                                <li className="nav-item">
                                    <Link aria-label="Health - Heart Health" to="#">Heart Health</Link>
                                </li>
                                
                                <li className="nav-item">
                                    <Link aria-label="Health - Children's Health" to="#">Children's Health</Link>
                                </li>
                            </ul>
                        </nav>
                        
                        <nav>
                            <h6 className="nav-title">
                                <Link aria-label="TV" to="#">TV</Link>
                            </h6>

                            <ul>
                                <li className="nav-item">
                                    <Link aria-label="TV - Shows" to="#">Shows</Link>
                                </li>
                                
                                <li className="nav-item">
                                    <Link aria-label="TV - Personalities" to="#">Personalities</Link>
                                </li>
                                
                                <li className="nav-item">
                                    <Link aria-label="TV - Watch Live" to="#">Watch Live</Link>
                                </li>
                                
                                <li className="nav-item">
                                    <Link aria-label="TV - Full Episodes" to="#">Full Episodes</Link>
                                </li>
                                
                                <li className="nav-item">
                                    <Link aria-label="TV - Show Clips" to="#" >Show Clips</Link>
                                </li>
                                
                                <li className="nav-item">
                                    <Link aria-label="TV - News Clips" to="#">News Clips</Link>
                                </li>
                            </ul>
                        </nav>
                        
                        <nav>
                            <h6 className="nav-title">About</h6>

                            <ul>
                                <li className="nav-item">
                                    <Link aria-label="About - Contact Us" to="#">Contact Us</Link>
                                </li>
                                
                                <li className="nav-item">
                                    <Link aria-label="About - Careers" to="#">Careers</Link>
                                </li>
                                
                                <li className="nav-item">
                                    <Link aria-label="About - Fox Around the World" to="#">Fox Around the World</Link>
                                </li>
                                
                                <li className="nav-item">
                                    <Link aria-label="About - Advertise With Us" to="#">Advertise With Us</Link>
                                </li>
                                
                                <li className="nav-item">
                                    <Link aria-label="About - Media Relations" to="#">Media Relations</Link>
                                </li>
                                
                                <li className="nav-item">
                                    <Link aria-label="About - Corporate Information" to="#">Corporate Information</Link>
                                </li>
                                
                                <li className="nav-item">
                                    <Link aria-label="About - Compliance" to="#">Compliance</Link>
                                </li>
                                
                                <li className="nav-item">
                                    <Link aria-label="About - Supplier Diversity" to="#">Supplier Diversity</Link>
                                </li>
                            </ul>
                        </nav>
                            
                        <nav>
                            <h6 className="nav-title">Other</h6>

                            <ul>
                                <li className="nav-item">
                                    <Link aria-label="Other - Fox Weather" to="#" target="_blank">Fox Weather</Link>
                                </li>
                                
                                <li className="nav-item">
                                    <Link aria-label="Other - Fox Nation" to="#">Fox Nation</Link>
                                </li>
                                
                                <li className="nav-item">
                                    <Link aria-label="Other - Fox News Shop" to="#">Fox News Shop</Link>
                                </li>
                                
                                <li className="nav-item">
                                    <Link aria-label="Other - Fox News Go" to="#">Fox News Go</Link>
                                </li>
                                
                                <li className="nav-item">
                                    <Link aria-label="Other - Fox News Radio" to="#" target="_blank">Fox News Radio</Link>
                                </li>
                                
                                <li className="nav-item">
                                    <Link aria-label="Other - Newsletters" to="#">Newsletters</Link>
                                </li>
                                
                                <li className="nav-item">
                                    <Link aria-label="Other - Podcasts" to="#" target="_blank">Podcasts</Link>
                                </li>
                                
                                <li className="nav-item">
                                    <Link aria-label="Other - Apps &amp; Products" to="#">Apps &amp; Products</Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
                
                <div className="header-lower">
                    <div className="social-icons">
                        <ul>
                            <li className="fb">
                                <Link aria-label="Facebook" to="#">Facebook</Link>
                            </li>
                            
                            <li className="tw">
                                <Link aria-label="Twitter" to="#">Twitter</Link>
                            </li>
                            
                            <li className="ig">
                                <Link aria-label="Instagram" to="#">Instagram</Link>
                            </li>
                            
                            <li className="rss">
                                <Link aria-label="RSS" to="#">RSS</Link>
                            </li>
                            
                            <li className="email">
                                <Link aria-label="Email" to="https://www.foxnews.com/newsletters">Email</Link>
                            </li>
                        </ul>
                    </div>
                    
                    <div className="branding">
                        <Link className="logo" to="#">Fox News</Link>
                    </div>
                    
                    <div className="legal">
                        <ul>
                            <li>
                                <Link aria-label="New Terms of Use" to="#">New Terms of Use</Link>
                            </li>
                            
                            <li>
                                <Link aria-label="New Privacy Policy" to="#">New Privacy Policy</Link>
                            </li>
                            
                            <li>
                                <Link to="#l">Do Not Sell my Personal Information</Link>
                            </li>
                            
                            <li>
                                <Link aria-label="Closed Captioning Policy" to="#">Closed Captioning Policy</Link>
                            </li>
                            
                            <li>
                                <Link aria-label="Help" to="#">Help</Link>
                            </li>
                            
                            <li>
                                <Link aria-label="Contact Us" to="#t">Contact Us</Link>
                            </li>
                        </ul>

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
                </div>
            </div>
        </header>
    )
}

export default Header;