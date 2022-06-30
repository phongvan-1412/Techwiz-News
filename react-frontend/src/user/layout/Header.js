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
                            <Link className="logo" to="/">BuffDogNews</Link>
                        </h3>
                        <div className="current-time">
                            <span className="time">7: 30 </span>
                            <span className="zone">AM</span>
                        </div>
                    </div>
        
                    <div className="main-menu">
                        <Link to="/" className="menu-news">U.S.</Link>
                        <Link to="/" className="menu-politics">Politics</Link>
                        <Link to="/" className="menu-media">Media</Link>
                        <Link to="/" className="menu-opinion">Opinion</Link>
                        <Link to="/" className="menu-business" target="_blank">Business</Link>
                        <Link to="/" className="menu-entertainment">Entertainment</Link>
                        <Link to="/" className="menu-sports">Sports</Link>
                        <Link to="/" className="menu-lifestyle">Lifestyle</Link>
                        <Link to="/" className="menu-weather" target="_blank">Weather</Link>
                        <Link to="/" className="menu-tv">TV</Link>
                        <Link to="/" className="menu-nation">Fox Nation</Link>
                        <Link to="/" className="menu-radio" target="_blank">Listen</Link>
                        <Link to="/" className="menu-more">More</Link>
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
            
            
        </header>
    )
}

export default Header;