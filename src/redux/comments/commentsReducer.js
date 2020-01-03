import { ADD_COMMENT } from "./commentsTypes";

const initialState = {
  comments: []
};

const commentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COMMENT:
      if (action.payload.value !== "") {
        state.comments.push({
          item: action.payload.item.title,
          value: action.payload.value
        });
        var test = state.comments;
      } else {
        test = state.comments;
      }
      const getComments = Object.keys(test).map(item => {
        return test[item];
      });

      return {
        ...state,
        comments: getComments
      };
    default:
      return state;
  }
};

export default commentsReducer;
