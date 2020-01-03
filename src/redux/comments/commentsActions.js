import { ADD_COMMENT } from "./commentsTypes";

export const addComment = (value = "", item) => {
  const data = {
    value: value,
    item: item
  };

  return {
    type: ADD_COMMENT,
    payload: data
  };
};
