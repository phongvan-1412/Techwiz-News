import {
  GET_BLOGS,
  GET_BLOGS_BY_CATEGORY,
  GET_BLOGS_BY_ID,
} from "../actions/types";

const initialState = {
  spotlights: [
  ],
};

export default function (state = initialState, action) {
  switch (action.type) {

    case GET_BLOGS:
      return {
        ...state,
        spotlights: action.payload
      };

    case GET_BLOGS_BY_CATEGORY:
      return {
        ...state,
        spotlights: state.spotlights.filter(
          (spotlight) => spotlight.category_name === action.payload
        )
      };

    case GET_BLOGS_BY_ID:
      return {
        ...state,
        spotlights: state.spotlights.filter(
          (spotlight) => spotlight.blog_id === action.payload
        )
      };

    default:
      return state;
  }
}
