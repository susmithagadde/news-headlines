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

    let url = "https://newsapi.org/v2/top-headlines?country=in&pageSize=100";
    const header = {
      "X-Api-Key": "85acd3d822b140d79c7f27104408213c"
    };
    fetch(url, {
      method: "GET",
      headers: header
    })
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
