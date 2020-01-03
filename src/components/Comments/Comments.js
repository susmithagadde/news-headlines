import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addComment } from "../../redux";
import "./Comments.css";

const Comments = props => {
  const comments = useSelector(state => state.comments.comments);
  const dispatch = useDispatch();
  let input;
  const { item } = props;
  // console.log("props", item);

  return (
    <div className="comments-app">
      <h2>Add Comments</h2>

      <div className="comment-form">
        <form
          className="form"
          name="form"
          onSubmit={e => {
            e.preventDefault();
            if (!input.value.trim()) {
              return;
            }
            dispatch(addComment(input.value, item));
            input.value = "";
          }}
        >
          <div className="form-row">
            <textarea
              className="input"
              placeholder="Add comment..."
              ref={node => (input = node)}
              required
            ></textarea>
          </div>

          <div className="form-row">
            <input type="submit" value="Add Comment" />
          </div>
        </form>
      </div>

      <div className="comments">
        {comments.map((comment, index) =>
          item.title === comment.item ? (
            <div className="comment" key={index}>
              <div className="comment-box">
                <div className="comment-text">{comment.value}</div>
              </div>
            </div>
          ) : (
            ""
          )
        )}
      </div>
    </div>
  );
};

export default Comments;
