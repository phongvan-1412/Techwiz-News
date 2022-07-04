import { GET_BLOGS, GET_BLOGS_BY_CATEGORY, GET_BLOGS_BY_ID } from "./types";
import axios from "axios";

export const getBlogs = () => async dispatch => {
  const res = await axios.get("http://127.0.0.1:8000/api/selectactiveblog");
  dispatch ({
      type: GET_BLOGS,
      payload: res.data
  });
};

export const getBlogsByCategory = (category_name) => {
  return {
    type: GET_BLOGS_BY_CATEGORY,
    payload: category_name,
  };
};
export const getBlogsById = (blog_id) => {
  return {
    type: GET_BLOGS_BY_ID,
    payload: blog_id,
  };
};
