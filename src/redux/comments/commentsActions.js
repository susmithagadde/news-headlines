import { ADD_COMMENT } from "./commentsTypes";

export const addComment = (value = "") => {
  return {
    type: ADD_COMMENT,
    payload: value
  };
};
