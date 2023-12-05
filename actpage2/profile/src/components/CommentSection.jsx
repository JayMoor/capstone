import React, { useState } from 'react';
import Comment from './Comment';

const CommentSection = () => {
  const [comments, setComments] = useState([]);

  const handleReply = (replyText, parentCommentIndex) => {
    // Logic to add the reply to the parent comment
    const updatedComments = [...comments];
    updatedComments[parentCommentIndex].replies.push(replyText);
    setComments(updatedComments);
  };

  return (
    <div className="comment-section">
      <h2>Comments</h2>
      {comments.map((comment, index) => (
        <Comment key={index} comment={comment} onReply={(text) => handleReply(text, index)} />
      ))}
    </div>
  );
};

export default CommentSection;
