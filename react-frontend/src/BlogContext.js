import React, { Component } from "react";

import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getBlogs } from "./actions/blogsActions";

const Blog = React.createContext();
const BlogConsumer = Blog.Consumer;
export class BlogContext extends Component {
  componentDidMount() {
    this.props.getBlogs();
  }
  render() {
    const { spotlights } = this.props;

    return <Blog.BlogContext value={spotlights}></Blog.BlogContext>;
  }
}
BlogContext.propTypes = {
  getBlogs: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  spotlights: state.spotlight.spotlights,
});

export default connect(mapStateToProps, { getBlogs })(BlogConsumer);
