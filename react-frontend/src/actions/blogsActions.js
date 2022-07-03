import { GET_BLOGS,GET_BLOGS_BY_CATEGORY,GET_BLOGS_BY_ID } from "./types";

export const getBlogs = () => {
    return {
        type: GET_BLOGS
    };
};

export const getBlogsByCategory = (category_name) => {
    return {
        type: GET_BLOGS,
        payload: category_name
    };
};
export const getBlogsById = (blog_id) => {
    return {
        type: GET_BLOGS_BY_CATEGORY,
        payload: GET_BLOGS_BY_ID
    };
};