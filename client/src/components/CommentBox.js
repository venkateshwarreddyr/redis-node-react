import React, { useState } from "react";
import { connect } from "react-redux";
import * as actions from 'actions/actions';

const CommentBox = ({addComment, fetchComments, user}) => {
  const [comment, setComment] = useState("");
  const handleSumbit = (e) => {
    e.preventDefault();
    //todo
    addComment(comment, user)
    setComment("");
  };
  return (
    <div>
      <div>
        <h1>Comment Box</h1>
      </div>
      <form onSubmit={handleSumbit}>
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <div>
          <button type="submit">add comment</button>
        </div>
      </form>
        <div>
          <button type="button" className='fetch-comments' onClick={()=>fetchComments(user._id)}>Fetch comment</button>
        </div>
    </div>
  );
};
function mapStateToProps(state) {
  return {
    user: state.user,
  };
}
export default connect(mapStateToProps, actions)(CommentBox);
