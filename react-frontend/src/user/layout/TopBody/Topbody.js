import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

class TopBodyContent extends Component {
  render() {
    const { blog_title, blog_content, category_name, blog_img_name } =
      this.props.content;
    const title = blog_title.replace(" ", "-");
    return (
<<<<<<< HEAD
      <Consumer>
        {(value) => {
          const { spotlights } = value;
          const q = [];
          const ourSpotlights = q.concat(spotlights);
          ourSpotlights.length = 1;
          return (
            <div className="row" style={{ textAlign: "center" }}>
              {ourSpotlights.map((spotlight) => (
                <div
                  className="card-header mb-3 col-md-12"
                  style={{ backgroundColor: "whitesmoke" }}
                >
                  <div className="col-md-12">
                    <Link to="/">
                      <img
                        src={require('./222222222222.jpg')} //`../TopBody/${spotlight.blog_img_name}.jpg`
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "center",
                          objectPosition: "center",
                        }}
                      />
                    </Link>
                  </div>
                  <h1>
                    <Link
                      to="/bodySpotLight"
                      style={{ cursor: "pointer", color: "#003366", hover: "" }}
                    >
                      {spotlight.blog_title}
                    </Link>
                  </h1>
                </div>
              ))}
            </div>
          );
        }}
      </Consumer>
=======
      <div className="col-md-6">
        <div>
          <Link to={`/${category_name}/${title}`}>
            <img
              src={require(`../TopBody/${blog_img_name}.jpg`)}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "center",
                objectPosition: "center",
              }}
            />
            {blog_content}
          </Link>
        </div>
      </div>
>>>>>>> 44bd4bb9b575f65295f59a3e2f019a08edc101d6
    );
  }
}
TopBodyContent.propTypes = {
  content: PropTypes.object.isRequired,
};

export default TopBodyContent;
