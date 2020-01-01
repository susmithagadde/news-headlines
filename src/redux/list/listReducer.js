import {
  FETCH_LISTS_REQUEST,
  FETCH_LISTS_SUCCESS,
  FETCH_LISTS_FAILURE
} from "./listTypes";

const initialState = {
  loading: false,
  articles: [],
  error: "",
  item: []
};

export const listsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LISTS_REQUEST:
      return {
        ...state,
        loading: true
      };
    case FETCH_LISTS_SUCCESS:
      return {
        ...state,
        loading: false,
        articles: action.payload,
        error: ""
      };
    case FETCH_LISTS_FAILURE:
      return {
        ...state,
        loading: false,
        articles: [],
        error: action.payload
      };

    default:
      return state;
  }
};
