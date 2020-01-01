import {
  FETCH_LISTS_REQUEST,
  FETCH_LISTS_SUCCESS,
  FETCH_LISTS_FAILURE
} from "./listTypes";

export const fetchListsRequest = () => {
  return {
    type: FETCH_LISTS_REQUEST
  };
};

export const fetchListsSuccess = articles => {
  return {
    type: FETCH_LISTS_SUCCESS,
    payload: articles
  };
};

export const fetchListsFailure = error => {
  return {
    type: FETCH_LISTS_FAILURE,
    payload: error
  };
};

export const fetchLists = () => {
  return dispatch => {
    dispatch(fetchListsRequest());
    let url =
      "https://newsapi.org/v2/top-headlines?" +
      "country=in&" +
      "apiKey=85acd3d822b140d79c7f27104408213c";
    fetch(url)
      .then(response => response.json())
      .then(res => {
        const articles = res.articles;
        dispatch(fetchListsSuccess(articles));
      })
      .catch(error => {
        const errorMsg = error.message;
        dispatch(fetchListsFailure(errorMsg));
      });
  };
};
