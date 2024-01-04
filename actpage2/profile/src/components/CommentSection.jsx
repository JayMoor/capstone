import React, { useState } from 'react';
import Comment from './Comment';

const CommentSection = (props) => {
  // const [comments, setComments] = useState([]);

  // const handleReply = (replyText, parentCommentIndex) => {
  //   const updatedComments = [...comments];
  //   updatedComments[parentCommentIndex].replies.push(replyText);
  //   setComments(updatedComments);
  // };

  return (
    <div className="comment-section">
      <h2>Ratings</h2>
      {props.reviews && props.reviews.length === 0 && <p>No ratings yet</p>}
      {props.reviews.map((comment, index) => (
        <Comment key={index} comment={comment} />
      ))}
    </div>
  );
};

export default CommentSection;
