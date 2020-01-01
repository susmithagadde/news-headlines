import { combineReducers } from "redux";
import { listsReducer } from "./list/listReducer";
import commentsReducer from "./comments/commentsReducer";

const rootReducer = combineReducers({
  articles: listsReducer,
  comments: commentsReducer
});

export default rootReducer;
