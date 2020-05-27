import React, { useCallback } from "react";
import { connect } from "react-redux";

const CommentList = ({ comments }) => {
  const renderComments = useCallback(() => {
    return comments.map((comment, i) => <li key={i}>{comment}</li>);
  }, [comments]);
  return (
    <div>
      <ul>{renderComments()}</ul>
    </div>
  );
};
function mapStateToProps(state){
    return{
        comments: state.comments
    }
}
export default connect(mapStateToProps, null)(CommentList);
