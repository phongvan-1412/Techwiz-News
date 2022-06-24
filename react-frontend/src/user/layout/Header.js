import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import '../css/layout/header.css'

const Header = props => {
    return(
        <header className="site-header">
            <div class="branding">
                <h1>
                    <a class="logo" href="https://www.foxnews.com">Fox News</a>
                </h1>
                <div class="current-time" style="">          
                    <span class="time" style="">7:30 </span>
                    <span class="zone" style="">AM</span>
                </div>
            </div>
            
            <div class="nav-row nav-row-upper">
                <div class="inner">
                    <div class="primary-nav tablet-desktop">
                        <nav id="main-nav">
                            <ul>
                                <li class="menu-news">
                                    <a href="https://www.foxnews.com/us" data-omtr-intcmp="hp1navus">U.S.</a>
                                </li>
                                
                                <li class="menu-politics">
                                    <a href="https://www.foxnews.com/politics" data-omtr-intcmp="hp1navpol">Politics</a>
                                </li>
                                
                                <li class="menu-media">
                                    <a href="https://www.foxnews.com/media" data-omtr-intcmp="hp1navmed">Media</a>
                                </li>
                                
                                <li class="menu-opinion">
                                    <a href="https://www.foxnews.com/opinion" data-omtr-intcmp="hp1navop">Opinion</a>
                                </li>
                                
                                <li class="menu-business">
                                    <a href="https://www.foxbusiness.com" data-omtr-intcmp="hp1navbus" target="_blank">Business</a>
                                </li>
                                
                                <li class="menu-entertainment">
                                    <a href="https://www.foxnews.com/entertainment" data-omtr-intcmp="hp1navent">Entertainment</a>
                                </li>
                                
                                <li class="menu-sports">
                                    <a href="https://www.foxnews.com/sports" data-omtr-intcmp="hp1navsports">Sports</a>
                                </li>
                                
                                <li class="menu-lifestyle">
                                    <a href="https://www.foxnews.com/lifestyle" data-omtr-intcmp="hp1navlf">Lifestyle</a>
                                </li>
                                
                                <li class="menu-fox-weather">
                                    <a href="https://www.foxweather.com" data-omtr-intcmp="hp1navwea" target="_blank">Weather</a>
                                </li>
                                
                                <li class="menu-tv">
                                    <a href="https://www.foxnews.com/shows" data-omtr-intcmp="hp1navtv">TV</a>
                                </li>
                                
                                <li class="menu-nation">
                                    <a href="https://www.foxnews.com/shows/fox-nation" data-omtr-intcmp="hp1navnation">Fox Nation</a>
                                </li>
                                
                                <li class="menu-radio">
                                    <a href="https://radio.foxnews.com/podcast/" data-omtr-intcmp="hp1navpod" target="_blank">Listen</a>
                                </li>
                                
                                <li class="menu-more">
                                    <a href="#" class="js-menu-toggle" data-omtr-intcmp="hp1navmo">More</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    
                    <div class="meta">
                        <div class="search-toggle tablet-desktop">
                            <a href="#" class="js-focus-search">Expand / Collapse search</a>
                        </div>

                        <div class="network-access logged-out logged-in" id="account">
                            <div class="user-profile user-login button">
                                <a href="#" class="login" data-omtr-intcmp="hp1navlg">Login</a>
                            </div>
                        </div>
                        
                        <div class="button watch">
                            <a href="https://video.foxnews.com/v/5614615980001/?#sp=watch-live" data-omtr-intcmp="hp1navwt">Watch TV</a>
                        </div>
                        
                        <div class="menu mobile">
                            <a aria-label="Mobile Menu" href="#" class="js-menu-toggle">Menu</a>
                        </div>
                        
                    </div>
                </div>
            </div>
            
            <div class="nav-row nav-row-lower tablet-desktop">
                <div class="inner">
                    <div class="secondary-nav">
                        <nav class="hot-topics" aria-label="hot topics">
                            <span class="subnav-title">Hot Topics</span>
                            <ul class="rotate-items">
                                <li>
                                    <a href="https://www.foxnews.com/politics/supreme-court-gun-decision-shoots-down-ny-rule-high-bar-concealed-carry-licenses" data-omtr-intcmp="hp1ht_1" data-adv="hp1ht">SCOTUS GUN DECISION</a>
                                </li>
                                
                                <li>
                                    <a href="https://www.foxnews.com/live-news/jan-6-committee-watch-live-thursday-hearing" data-omtr-intcmp="hp1ht_2" data-adv="hp1ht">JAN. 6 COMMITTEE</a>
                                </li>
                                
                                <li>
                                    <a href="https://www.foxnews.com/sports/nba-draft-2022-magic-thunder-rockets-kings" data-omtr-intcmp="hp1ht_3" data-adv="hp1ht">NBA DRAFT</a>
                                </li>
                                
                                <li>
                                    <a href="https://www.foxnews.com/media/cnn-abc-msnbc-cbs-hype-biden-gas-tax-holiday-claim-president-affect-prices-no-brainer" data-omtr-intcmp="hp1ht_4" data-adv="hp1ht">GAS TAX HOLIDAY</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    
                    <div class="markets-nav">
                        <nav class="market-data">
                            <span class="subnav-title">Markets</span>
                            <ul class="rotate-items">
                                <li class="stock" data-stock-ticker="SP500">
                                    <a href="#" data-omtr-intcmp="hp1mt_1">SP500
                                        <span></span>
                                    </a>
                                </li>
                                
                                <li class="stock" data-stock-ticker="I:COMP">
                                    <a href="#" data-omtr-intcmp="hp1mt_2">I:COMP
                                        <span></span>
                                    </a>
                                </li>
                                
                                <li class="stock" data-stock-ticker="I:DJI">
                                    <a href="#" data-omtr-intcmp="hp1mt_3">I:DJI
                                        <span></span>
                                    </a>
                                </li>
                                
                                <li class="more-markets">
                                    <a href="//www.foxbusiness.com/markets" data-omtr-intcmp="hp1mtmo" target="_blank">More</a>
                                </li>
                            </ul>
                        </nav>
                        <div class="market-sponsor tablet-desktop">
                            <div class="ad-container sponsor desktop ad-h-31 ad-w-88" style="display: none;">
                                <span class="advert-txt">Sponsored by</span>
                                <div class="ad gam ad-h-31 ad-w-88" id="desk-hp-mktupdte" data-ad-size="88x31" data-google-query-id="CNOA2eKLxvgCFQ0H1QodiywEXQ" data-ad-slot-rendered="1" data-ad-slot-empty="1" style="display: none;">
                                    <div id="google_ads_iframe_/4145/fnc/desk/hp/mktupdte_0__container__" style="border: 0pt none; width: 88px; height: 0px;"></div>
                                </div>
                                <script>
                                    window.foxstrike = window.foxstrike || {}; window.foxstrike.cmd = window.foxstrike.cmd || []; window.foxstrike.cmd.push
                                    (function(Strike){
                                        Strike.loadAd({
                                            target: '#desk-hp-mktupdte',
                                            iu: 'desk/hp/mktupdte',
                                            sizes: ['88x31'],
                                            pos: 'stocksearch'
                                        })
                                    });
                                </script>
                                
                            </div>
                            
                            <div class="ad-container sponsor tablet ad-h-31 ad-w-88">
                                <span class="advert-txt">Sponsored by</span>
                                <div class="ad gam ad-h-31 ad-w-88" id="tablet-hp-mktupdte" data-ad-size="88x31"></div>
                                <script>
                                    window.foxstrike = window.foxstrike || {}; window.foxstrike.cmd = window.foxstrike.cmd || []; window.foxstrike.cmd.push
                                    (function(Strike){
                                        Strike.loadAd({
                                            target: '#tablet-hp-mktupdte',
                                            iu: 'tw/hp/mktupdte',
                                            sizes: ['88x31'],
                                            pos: 'stocksearch'
                                        })
                                    });
                                </script>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="expandable-nav">
                <div class="inner">
                    <div class="search">
                        <div class="search-wrap">
                            <form action="/search-results/search" method="get">
                                <fieldset>
                                    <input type="text" aria-label="search foxnews.com" placeholder="Search foxnews.com" name="q" class="resp_site_search js-bound" autocomplete="off" /> 
                                    <input type="submit" aria-label="submit search" class="resp_site_submit" value="Search" />
                                </fieldset>
                            </form>
                        </div>
                    </div>
                </div>
            
                <div class="section-nav">
                    <div class="inner">
                        <nav>
                            <h6 class="nav-title">
                                <a aria-label="U.S." href="https://www.foxnews.com/us" data-omtr-intcmp="hp1ms1" data-adv="hp1ms">U.S.</a>
                            </h6>
                            <ul>
                                <li class="nav-item">
                                    <a aria-label="U.S. - Crime" href="https://www.foxnews.com/category/us/crime" data-omtr-intcmp="hp1ms1_1" data-adv="hp1ms">Crime</a>
                                </li>
                                
                                <li class="nav-item">
                                    <a aria-label="U.S. - Military" href="https://www.foxnews.com/category/us/military" data-omtr-intcmp="hp1ms1_2" data-adv="hp1ms">Military</a>
                                </li>
                                
                                <li class="nav-item">
                                    <a aria-label="U.S. - Education" href="https://www.foxnews.com/category/us/education" data-omtr-intcmp="hp1ms1_3" data-adv="hp1ms">Education</a>
                                </li>
                                
                                <li class="nav-item">
                                    <a aria-label="U.S. - Terror" href="https://www.foxnews.com/category/us/terror" data-omtr-intcmp="hp1ms1_4" data-adv="hp1ms">Terror</a>
                                </li>
                                
                                <li class="nav-item">
                                    <a aria-label="U.S. - Immigration" href="https://www.foxnews.com/category/us/immigration" data-omtr-intcmp="hp1ms1_5" data-adv="hp1ms">Immigration</a>
                                </li>
                                
                                <li class="nav-item">
                                    <a aria-label="U.S. - Economy" href="https://www.foxnews.com/category/us/economy" data-omtr-intcmp="hp1ms1_6" data-adv="hp1ms">Economy</a>
                                </li>
                                
                                <li class="nav-item">
                                    <a aria-label="U.S. - Personal Freedoms" href="https://www.foxnews.com/category/us/personal-freedoms" data-omtr-intcmp="hp1ms1_7" data-adv="hp1ms">Personal Freedoms</a>
                                </li>
                                
                                <li class="nav-item">
                                    <a aria-label="U.S. - Fox News Investigates" href="https://www.foxnews.com/category/news-events/fox-news-investigates" data-omtr-intcmp="hp1ms1_8" data-adv="hp1ms">Fox News Investigates</a>
                                </li>
                                
                                <li class="nav-item">
                                    <a aria-label="U.S. - Digital Originals" href="https://www.foxnews.com/category/us/digital-originals" data-omtr-intcmp="hp1ms1_9" data-adv="hp1ms">Digital Originals</a>
                                </li>
                            </ul>
                        </nav>
                        
                        <nav>
                            <h6 class="nav-title">
                                <a aria-label="World" href="https://www.foxnews.com/world" data-omtr-intcmp="hp1ms2" data-adv="hp1ms">World</a>
                            </h6>
                            <ul>
                                <li class="nav-item">
                                    <a aria-label="World - U.N." href="https://www.foxnews.com/category/world/united-nations" data-omtr-intcmp="hp1ms2_1" data-adv="hp1ms">U.N.</a>
                                </li>
                                
                                <li class="nav-item">
                                    <a aria-label="World - Conflicts" href="https://www.foxnews.com/category/world/conflicts" data-omtr-intcmp="hp1ms2_2" data-adv="hp1ms">Conflicts</a>
                                </li>
                                
                                <li class="nav-item">
                                    <a aria-label="World - Terrorism" href="https://www.foxnews.com/category/world/terrorism" data-omtr-intcmp="hp1ms2_3" data-adv="hp1ms">Terrorism</a>
                                </li>
                                
                                <li class="nav-item">
                                    <a aria-label="World - Disasters" href="https://www.foxnews.com/category/world/disasters" data-omtr-intcmp="hp1ms2_4" data-adv="hp1ms">Disasters</a>
                                </li>
                                
                                <li class="nav-item">
                                    <a aria-label="World - Global Economy" href="https://www.foxnews.com/category/world/global-economy" data-omtr-intcmp="hp1ms2_5" data-adv="hp1ms">Global Economy</a>
                                </li>
                                
                                <li class="nav-item">
                                    <a aria-label="World - Environment" href="https://www.foxnews.com/category/world/environment" data-omtr-intcmp="hp1ms2_6" data-adv="hp1ms">Environment</a>
                                </li>
                                
                                <li class="nav-item">
                                    <a aria-label="World - Religion" href="https://www.foxnews.com/category/world/world-religion" data-omtr-intcmp="hp1ms2_7" data-adv="hp1ms">Religion</a>
                                </li>
                                
                                <li class="nav-item">
                                    <a aria-label="World - Scandals" href="https://www.foxnews.com/category/world/scandals" data-omtr-intcmp="hp1ms2_8" data-adv="hp1ms">Scandals</a>
                                </li>
                            </ul>
                        </nav>
                        
                        <nav class="mobile">
                            <h6 class="nav-title">
                                <a aria-label="Opinion" href="https://www.foxnews.com/opinion" data-omtr-intcmp="hp1ms3" data-adv="hp1ms">Opinion</a>
                            </h6>
                        </nav>

                        <nav>
                            <h6 class="nav-title">
                                <a aria-label="Politics" href="https://www.foxnews.com/politics" data-omtr-intcmp="hp1ms4" data-adv="hp1ms">Politics</a>
                            </h6>
                            <ul>
                                <li class="nav-item">
                                    <a aria-label="Politics - Executive" href="https://www.foxnews.com/category/politics/executive" data-omtr-intcmp="hp1ms4_1" data-adv="hp1ms">Executive</a>
                                </li>
                                
                                <li class="nav-item">
                                    <a aria-label="Politics - Senate" href="https://www.foxnews.com/category/politics/senate" data-omtr-intcmp="hp1ms4_2" data-adv="hp1ms">Senate</a>
                                </li>
                                
                                <li class="nav-item">
                                    <a aria-label="Politics - House" href="https://www.foxnews.com/category/politics/house-of-representatives" data-omtr-intcmp="hp1ms4_3" data-adv="hp1ms">House</a>
                                </li>
                                
                                <li class="nav-item">
                                    <a aria-label="Politics - Judiciary" href="https://www.foxnews.com/category/politics/judiciary" data-omtr-intcmp="hp1ms4_4" data-adv="hp1ms">Judiciary</a>
                                </li>
                                
                                <li class="nav-item">
                                    <a aria-label="Politics - Foreign Policy" href="https://www.foxnews.com/category/politics/foreign-policy" data-omtr-intcmp="hp1ms4_5" data-adv="hp1ms">Foreign Policy</a>
                                </li>
                                
                                <li class="nav-item">
                                    <a aria-label="Politics - Polls" href="https://www.foxnews.com/official-polls" data-omtr-intcmp="hp1ms4_6" data-adv="hp1ms">Polls</a>
                                </li>
                                
                                <li class="nav-item">
                                    <a aria-label="Politics - Elections" href="https://www.foxnews.com/elections" data-omtr-intcmp="hp1ms4_7" data-adv="hp1ms">Elections</a>
                                </li>
                            </ul>
                        </nav>
                        
                        <nav>
                            <h6 class="nav-title">
                                <a aria-label="Entertainment" href="https://www.foxnews.com/entertainment" data-omtr-intcmp="hp1ms5" data-adv="hp1ms">Entertainment</a>
                            </h6>
                            <ul>
                                <li class="nav-item">
                                    <a aria-label="Entertainment - Celebrity News" href="https://www.foxnews.com/category/entertainment/celebrity-news" data-omtr-intcmp="hp1ms5_1" data-adv="hp1ms">Celebrity News</a>
                                </li>
                                
                                <li class="nav-item">
                                    <a aria-label="Entertainment - Movies" href="https://www.foxnews.com/category/entertainment/movies" data-omtr-intcmp="hp1ms5_2" data-adv="hp1ms">Movies</a>
                                </li>
                                
                                <li class="nav-item">
                                    <a aria-label="Entertainment - TV News" href="https://www.foxnews.com/category/entertainment/tv" data-omtr-intcmp="hp1ms5_3" data-adv="hp1ms">TV News</a>
                                </li>
                                
                                <li class="nav-item">
                                    <a aria-label="Entertainment - Music News" href="https://www.foxnews.com/category/entertainment/music" data-omtr-intcmp="hp1ms5_4" data-adv="hp1ms">Music News</a>
                                </li>
                                
                                <li class="nav-item">
                                    <a aria-label="Entertainment - Style News" href="https://www.foxnews.com/category/entertainment/style" data-omtr-intcmp="hp1ms5_5" data-adv="hp1ms">Style News</a>
                                </li>
                                
                                <li class="nav-item">
                                    <a aria-label="Entertainment - Entertainment Video" href="https://video.foxnews.com/playlist/entertainment-latest-entertainment/" data-omtr-intcmp="hp1ms5_6" data-adv="hp1ms">Entertainment Video</a>
                                </li>
                            </ul>
                        </nav>
                        
                        <nav>
                            <h6 class="nav-title">
                                <a aria-label="Business" href="https://www.foxbusiness.com/" data-omtr-intcmp="hp1ms6" data-adv="hp1ms" target="_blank">Business</a>
                            </h6>
                            <ul>
                                <li class="nav-item">
                                    <a aria-label="Business - Personal Finance" href="https://www.foxbusiness.com/personal-finance" data-omtr-intcmp="hp1ms6_1" data-adv="hp1ms" target="_blank">Personal Finance</a>
                                </li>
                                
                                <li class="nav-item">
                                    <a aria-label="Business - Economy" href="https://www.foxbusiness.com/economy" data-omtr-intcmp="hp1ms6_2" data-adv="hp1ms" target="_blank">Economy</a>
                                </li>
                                
                                <li class="nav-item">
                                    <a aria-label="Business - Markets" href="https://www.foxbusiness.com/markets" data-omtr-intcmp="hp1ms6_3" data-adv="hp1ms" target="_blank">Markets</a>
                                </li>
                                
                                <li class="nav-item">
                                    <a aria-label="Business - Watchlist" href="https://www.foxbusiness.com/watchlist" data-omtr-intcmp="hp1ms6_4" data-adv="hp1ms" target="_blank">Watchlist</a>
                                </li>
                                
                                <li class="nav-item">
                                    <a aria-label="Business - Lifestyle" href="https://www.foxbusiness.com/lifestyle" data-omtr-intcmp="hp1ms6_5" data-adv="hp1ms" target="_blank">Lifestyle</a>
                                </li>
                                
                                <li class="nav-item">
                                    <a aria-label="Business - Real Estate" href="https://www.foxbusiness.com/real-estate" data-omtr-intcmp="hp1ms6_6" data-adv="hp1ms" target="_blank">Real Estate</a>
                                </li>
                                
                                <li class="nav-item">
                                    <a aria-label="Business - Technology" href="https://www.foxbusiness.com/technology" data-omtr-intcmp="hp1ms6_7" data-adv="hp1ms" target="_blank">Tech</a>
                                </li>
                            </ul>
                        </nav>
                        
                        <nav>
                            <h6 class="nav-title">
                                <a aria-label="Lifestyle" href="https://www.foxnews.com/lifestyle" data-omtr-intcmp="hp1ms7" data-adv="hp1ms">Lifestyle</a>
                            </h6>
                            <ul>
                                <li class="nav-item">
                                    <a aria-label="Lifestyle - Food + Drink" href="https://www.foxnews.com/food-drink" data-omtr-intcmp="hp1ms7_1" data-adv="hp1ms">Food + Drink</a>
                                </li>
                                
                                <li class="nav-item">
                                    <a aria-label="Lifestyle - Cars + Trucks" href="https://www.foxnews.com/auto" data-omtr-intcmp="hp1ms7_2" data-adv="hp1ms">Cars + Trucks</a>
                                </li>
                                
                                <li class="nav-item">
                                    <a aria-label="Lifestyle - Travel + Outdoors" href="https://www.foxnews.com/travel" data-omtr-intcmp="hp1ms7_3" data-adv="hp1ms">Travel + Outdoors</a>
                                </li>
                                
                                <li class="nav-item">
                                    <a aria-label="Lifestyle - House + Home" href="https://www.foxnews.com/category/real-estate" data-omtr-intcmp="hp1ms7_4" data-adv="hp1ms">House + Home</a>
                                </li>
                                
                                <li class="nav-item">
                                    <a aria-label="Lifestyle - Fitness + Well-being" href="https://www.foxnews.com/category/fitness-and-wellbeing" data-omtr-intcmp="hp1ms7_5" data-adv="hp1ms">Fitness + Well-being</a>
                                </li>
                                
                                <li class="nav-item">
                                    <a aria-label="Lifestyle - Style + Beauty" href="https://www.foxnews.com/category/style-and-beauty" data-omtr-intcmp="hp1ms7_6" data-adv="hp1ms">Style + Beauty</a>
                                </li>
                                
                                <li class="nav-item">
                                    <a aria-label="Lifestyle - Family" href="https://www.foxnews.com/family" data-omtr-intcmp="hp1ms7_7" data-adv="hp1ms">Family</a>
                                </li>
                                
                                <li class="nav-item">
                                    <a aria-label="Lifestyle - Faith" href="https://www.foxnews.com/category/faith-values/faith" data-omtr-intcmp="hp1ms7_8" data-adv="hp1ms">Faith</a>
                                </li>
                            </ul>
                        </nav>
                        
                        <nav>
                            <h6 class="nav-title">
                                <a aria-label="Science" href="https://www.foxnews.com/science" data-omtr-intcmp="hp1ms8" data-adv="hp1ms">Science</a>
                            </h6>
                            <ul>
                                <li class="nav-item">
                                    <a aria-label="Science - Archaeology" href="https://www.foxnews.com/category/science/archaeology" data-omtr-intcmp="hp1ms8_1" data-adv="hp1ms">Archaeology</a>
                                </li>
                                
                                <li class="nav-item">
                                    <a aria-label="Science - Air &amp; Space" href="https://www.foxnews.com/category/science/air-and-space" data-omtr-intcmp="hp1ms8_2" data-adv="hp1ms">Air &amp; Space</a>
                                </li>
                                
                                <li class="nav-item">
                                    <a aria-label="Science - Planet Earth" href="https://www.foxnews.com/category/science/planet-earth" data-omtr-intcmp="hp1ms8_3" data-adv="hp1ms">Planet Earth</a>
                                </li>
                                
                                <li class="nav-item">
                                    <a aria-label="Science - Wild Nature" href="https://www.foxnews.com/category/science/wild-nature" data-omtr-intcmp="hp1ms8_4" data-adv="hp1ms">Wild Nature</a>
                                </li>
                                
                                <li class="nav-item">
                                    <a aria-label="Science - Natural Science" href="https://www.foxnews.com/category/science/natural-science" data-omtr-intcmp="hp1ms8_5" data-adv="hp1ms">Natural Science</a>
                                </li>
                                
                                <li class="nav-item">
                                    <a aria-label="Science - Dinosaurs" href="https://www.foxnews.com/category/science/archaeology/dinosaurs" data-omtr-intcmp="hp1ms8_6" data-adv="hp1ms">Dinosaurs</a>
                                </li>
                            </ul>
                        </nav>
                        
                        <nav>
                            <h6 class="nav-title">
                                <a aria-label="Tech" href="https://www.foxnews.com/tech" data-omtr-intcmp="hp1ms9" data-adv="hp1ms">Tech</a>
                            </h6>
                            <ul>
                                <li class="nav-item">
                                    <a aria-label="Tech - Security" href="https://www.foxnews.com/category/tech/topics/security" data-omtr-intcmp="hp1ms9_1" data-adv="hp1ms">Security</a>
                                </li>
                                
                                <li class="nav-item">
                                    <a aria-label="Tech - Innovation" href="https://www.foxnews.com/category/tech/topics/innovation" data-omtr-intcmp="hp1ms9_2" data-adv="hp1ms">Innovation</a>
                                </li>
                                
                                <li class="nav-item">
                                    <a aria-label="Tech - Drones" href="https://www.foxnews.com/category/tech/technologies/drones" data-omtr-intcmp="hp1ms9_3" data-adv="hp1ms">Drones</a>
                                </li>
                                
                                <li class="nav-item">
                                    <a aria-label="Tech - Computers" href="https://www.foxnews.com/category/tech/topics/computers" data-omtr-intcmp="hp1ms9_4" data-adv="hp1ms">Computers</a>
                                </li>
                                
                                <li class="nav-item">
                                    <a aria-label="Tech - Video Games" href="https://www.foxnews.com/category/tech/topics/video-games" data-omtr-intcmp="hp1ms9_5" data-adv="hp1ms">Video Games</a>
                                </li>
                                
                                <li class="nav-item">
                                    <a aria-label="Tech - Military Tech" href="https://www.foxnews.com/category/tech/topics/military-tech" data-omtr-intcmp="hp1ms9_6" data-adv="hp1ms">Military Tech</a>
                                </li>
                            </ul>
                        </nav>
                        
                        <nav>
                            <h6 class="nav-title">
                                <a aria-label="Health" href="https://www.foxnews.com/health" data-omtr-intcmp="hp1ms10" data-adv="hp1ms">Health</a>
                            </h6>
                            <ul>
                                <li class="nav-item">
                                    <a aria-label="Health - Healthy Living" href="https://www.foxnews.com/category/health/healthy-living" data-omtr-intcmp="hp1ms10_1" data-adv="hp1ms">Healthy Living</a>
                                </li>
                                
                                <li class="nav-item">
                                    <a aria-label="Health - Medical Research" href="https://www.foxnews.com/category/health/medical-research" data-omtr-intcmp="hp1ms10_2" data-adv="hp1ms">Medical Research</a>
                                </li>
                                
                                <li class="nav-item">
                                    <a aria-label="Health - Mental Health" href="https://www.foxnews.com/category/health/mental-health" data-omtr-intcmp="hp1ms10_3" data-adv="hp1ms">Mental Health</a>
                                </li>
                                
                                <li class="nav-item">
                                    <a aria-label="Health - Cancer" href="https://www.foxnews.com/category/health/cancer" data-omtr-intcmp="hp1ms10_4" data-adv="hp1ms">Cancer</a>
                                </li>
                                
                                <li class="nav-item">
                                    <a aria-label="Health - Heart Health" href="https://www.foxnews.com/category/health/heart-health" data-omtr-intcmp="hp1ms10_5" data-adv="hp1ms">Heart Health</a>
                                </li>
                                
                                <li class="nav-item">
                                    <a aria-label="Health - Children's Health" href="https://www.foxnews.com/category/health/healthy-living/childrens-health" data-omtr-intcmp="hp1ms10_6" data-adv="hp1ms">Children's Health</a>
                                </li>
                            </ul>
                        </nav>
                        
                        <nav>
                            <h6 class="nav-title">
                                <a aria-label="TV" href="https://www.foxnews.com/shows" data-omtr-intcmp="hp1ms11" data-adv="hp1ms">TV</a>
                            </h6>
                            <ul>
                                <li class="nav-item">
                                    <a aria-label="TV - Shows" href="https://www.foxnews.com/shows" data-omtr-intcmp="hp1ms11_1" data-adv="hp1ms">Shows</a>
                                </li>
                                
                                <li class="nav-item">
                                    <a aria-label="TV - Personalities" href="https://www.foxnews.com/person/personalities" data-omtr-intcmp="hp1ms11_2" data-adv="hp1ms">Personalities</a>
                                </li>
                                
                                <li class="nav-item">
                                    <a aria-label="TV - Watch Live" href="https://video.foxnews.com/v/5614615980001/?#sp=watch-live" data-omtr-intcmp="hp1ms11_3" data-adv="hp1ms">Watch Live</a>
                                </li>
                                
                                <li class="nav-item">
                                    <a aria-label="TV - Full Episodes" href="https://video.foxnews.com/playlist/episodic-most-recent-episodes/" data-omtr-intcmp="hp1ms11_4" data-adv="hp1ms">Full Episodes</a>
                                </li>
                                
                                <li class="nav-item">
                                    <a aria-label="TV - Show Clips" href="https://video.foxnews.com/#sp=show-clips" data-omtr-intcmp="hp1ms11_5" data-adv="hp1ms">Show Clips</a>
                                </li>
                                
                                <li class="nav-item">
                                    <a aria-label="TV - News Clips" href="https://video.foxnews.com/#sp=news-clips" data-omtr-intcmp="hp1ms11_6" data-adv="hp1ms">News Clips</a>
                                </li>
                            </ul>
                        </nav>
                        
                        <nav>
                            <h6 class="nav-title">About</h6>
                            <ul>
                                <li class="nav-item">
                                    <a aria-label="About - Contact Us" href="https://www.foxnews.com/contact" data-omtr-intcmp="hp1ms12_1" data-adv="hp1ms">Contact Us</a>
                                </li>
                                
                                <li class="nav-item">
                                    <a aria-label="About - Careers" href="https://foxcareers.com/Search/SearchResults?brand=Fox%20News%20Careers" data-omtr-intcmp="hp1ms12_2" data-adv="hp1ms">Careers</a>
                                </li>
                                
                                <li class="nav-item">
                                    <a aria-label="About - Fox Around the World" href="https://www.foxnews.com/foxaroundtheworld/" data-omtr-intcmp="hp1ms12_3" data-adv="hp1ms">Fox Around the World</a>
                                </li>
                                
                                <li class="nav-item">
                                    <a aria-label="About - Advertise With Us" href="mailto:adsales@foxnews.com?subject=Advertising%20Inquiry" data-omtr-intcmp="hp1ms12_4" data-adv="hp1ms">Advertise With Us</a>
                                </li>
                                
                                <li class="nav-item">
                                    <a aria-label="About - Media Relations" href="https://press.foxnews.com/media-contacts" data-omtr-intcmp="hp1ms12_5" data-adv="hp1ms">Media Relations</a>
                                </li>
                                
                                <li class="nav-item">
                                    <a aria-label="About - Corporate Information" href="https://press.foxnews.com" data-omtr-intcmp="hp1ms12_6" data-adv="hp1ms">Corporate Information</a>
                                </li>
                                
                                <li class="nav-item">
                                    <a aria-label="About - Compliance" href="https://www.foxnews.com/compliance" data-omtr-intcmp="hp1ms12_7" data-adv="hp1ms">Compliance</a>
                                </li>
                                
                                <li class="nav-item">
                                    <a aria-label="About - Supplier Diversity" href="https://supplierdiversity.foxnews.com/" data-omtr-intcmp="hp1ms12_8" data-adv="hp1ms">Supplier Diversity</a>
                                </li>
                            </ul>
                        </nav>
                            
                        <nav>
                            <h6 class="nav-title">Other</h6>
                            <ul>
                                <li class="nav-item">
                                    <a aria-label="Other - Fox Weather" href="https://www.foxweather.com" target="_blank" data-omtr-intcmp="hp1ms13_1" data-adv="hp1ms">Fox Weather</a>
                                </li>
                                
                                <li class="nav-item">
                                    <a aria-label="Other - Fox Nation" href="https://www.foxnews.com/shows/fox-nation" data-omtr-intcmp="hp1ms13_2" data-adv="hp1ms">Fox Nation</a>
                                </li>
                                
                                <li class="nav-item">
                                    <a aria-label="Other - Fox News Shop" href="https://shop.foxnews.com" data-omtr-intcmp="hp1ms13_3" data-adv="hp1ms">Fox News Shop</a>
                                </li>
                                
                                <li class="nav-item">
                                    <a aria-label="Other - Fox News Go" href="https://www.foxnews.com/go" data-omtr-intcmp="hp1ms13_4" data-adv="hp1ms">Fox News Go</a>
                                </li>
                                
                                <li class="nav-item">
                                    <a aria-label="Other - Fox News Radio" href="https://radio.foxnews.com/" data-omtr-intcmp="hp1ms13_5" data-adv="hp1ms" target="_blank">Fox News Radio</a>
                                </li>
                                
                                <li class="nav-item">
                                    <a aria-label="Other - Newsletters" href="https://www.foxnews.com/newsletters" data-omtr-intcmp="hp1ms13_6" data-adv="hp1ms">Newsletters</a>
                                </li>
                                
                                <li class="nav-item">
                                    <a aria-label="Other - Podcasts" href="https://radio.foxnews.com/podcast/" data-omtr-intcmp="hp1ms13_7" data-adv="hp1ms" target="_blank">Podcasts</a>
                                </li>
                                
                                <li class="nav-item">
                                    <a aria-label="Other - Apps &amp; Products" href="https://www.foxnews.com/apps-products" data-omtr-intcmp="hp1ms13_8" data-adv="hp1ms">Apps &amp; Products</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
                
                <div class="header-lower">
                    <div class="social-icons">
                        <ul>
                            <li class="fb">
                                <a aria-label="Facebook" href="https://www.facebook.com/FoxNews">Facebook</a>
                            </li>
                            
                            <li class="tw">
                                <a aria-label="Twitter" href="https://twitter.com/foxnews">Twitter</a>
                            </li>
                            
                            <li class="ig">
                                <a aria-label="Instagram" href="https://www.instagram.com/foxnews">Instagram</a>
                            </li>
                            
                            <li class="rss">
                                <a aria-label="RSS" href="https://www.foxnews.com/about/rss/">RSS</a>
                            </li>
                            
                            <li class="email">
                                <a aria-label="Email" href="https://www.foxnews.com/newsletters">Email</a>
                            </li>
                        </ul>
                    </div>
                    
                    <div class="branding">
                        <a class="logo" href="https://www.foxnews.com">Fox News</a>
                    </div>
                    
                    <div class="legal">
                        <ul>
                            <li>
                                <a aria-label="New Terms of Use" href="https://www.foxnews.com/terms-of-use">New Terms of Use</a>
                            </li>
                            
                            <li>
                                <a aria-label="New Privacy Policy" href="https://www.foxnews.com/privacy-policy">New Privacy Policy</a>
                            </li>
                            
                            <li>
                                <a href="https://www.foxnews.com/donotsell">Do Not Sell my Personal Information</a>
                            </li>
                            
                            <li>
                                <a aria-label="Closed Captioning Policy" href="https://www.foxnews.com/closed-captioning">Closed Captioning Policy</a>
                            </li>
                            
                            <li>
                                <a aria-label="Help" href="https://help.foxnews.com">Help</a>
                            </li>
                            
                            <li>
                                <a aria-label="Contact Us" href="https://www.foxnews.com/contact">Contact Us</a>
                            </li>
                        </ul>
                        <p class="copyright">
                            This material may not be published, broadcast, rewritten, or redistributed. ©2022 FOX News Network, LLC. All rights reserved. Quotes displayed in real-time or delayed by at least 15 minutes. Market data provided by&nbsp;
                            <a href="https://www.factset.com/">Factset</a> 
                            . Powered and implemented by&nbsp;
                            <a href="https://www.factset.com/solutions/business-needs/digital-solutions">FactSet Digital Solutions</a>
                            .&nbsp;
                            <a href="https://www.factset.com/privacy">Legal Statement</a>
                            . Mutual Fund and ETF data provided by&nbsp;
                            <a href="https://lipperalpha.refinitiv.com/">Refinitiv Lipper</a>.
                        </p>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;