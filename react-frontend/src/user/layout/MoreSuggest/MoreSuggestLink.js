import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

class MoreSuggestLink extends Component {
  render() {
    const { blog_title, category_name  } = this.props.content;
    const tmp_title = blog_title.replace(" ", "");
    const title = tmp_title.replace(["!@#$%^&*()_><.|,`"], "");
    
    return (
      <div className="col-md-3 more-suggest">
        <div>
            <span class="more-suggest-header-text">More From BuffDog News</span>
        </div>

        <div className="more-suggest-content">
            <Link to={`/${category_name}/${title}`} replace className="nav-link ob-unit ob-rec-text more-suggest-title">{blog_title}
            <br />
            <Link to='/' className="more-suggest-branding">BuffDog New</Link>
            </Link>
        </div>
        <div className="more-suggest-content">
            <Link to={`/${category_name}/${title}`} replace className="nav-link ob-unit ob-rec-text more-suggest-title">{blog_title}
            <br />
            <Link to='/' className="more-suggest-branding">BuffDog New</Link>
            </Link>
        </div>
        <div className="more-suggest-content">
            <Link to={`/${category_name}/${title}`} replace className="nav-link ob-unit ob-rec-text more-suggest-title">{blog_title}
            <br />
            <Link to='/' className="more-suggest-branding">BuffDog New</Link>
            </Link>
        </div>
        <div className="more-suggest-content">
            <Link to={`/${category_name}/${title}`} replace className="nav-link ob-unit ob-rec-text more-suggest-title">{blog_title}
            <br />
            <Link to='/' className="more-suggest-branding">BuffDog New</Link>
            </Link>
        </div>
        <div className="more-suggest-content">
            <Link to={`/${category_name}/${title}`} replace className="nav-link ob-unit ob-rec-text more-suggest-title">{blog_title}
            <br />
            <Link to='/' className="more-suggest-branding">BuffDog New</Link>
            </Link>
        </div>
      </div>
    );
  }
}
MoreSuggestLink.propTypes = {
  content: PropTypes.object.isRequired,
};

export default MoreSuggestLink;
