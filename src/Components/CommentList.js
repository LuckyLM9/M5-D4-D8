import React, { useEffect } from "react";
import SingleComment from "./SingleComment";

function CommentList({
  comments, token, setComments, totalCommentsNum, setActivePage, setRefresher, setIsDelete

}) {
  const commentsEl = comments.map((comment) => (
    <SingleComment
      comment={comment}
      key={comment._id}
      token={token}
      setComments={setComments}
      setRefresher={setRefresher}
      setIsDelete={setIsDelete}/>));
  return (
    <>
      {totalCommentsNum === 0 && (
        <p>Nessun commento per questo Libro. Commenta per primo.</p>
      )}
      {totalCommentsNum > 0 && commentsEl}
    </>
  );
}

export default CommentList;
