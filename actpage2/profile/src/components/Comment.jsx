import React, { useState } from 'react';

const Comment = ({ comment, onReply }) => {
  const [replyText, setReplyText] = useState('');

  const handleReply = () => {
    if (onReply) {
      onReply(replyText);
      setReplyText('');
    }
  };

  return (
    <div className="comment">
      <p>{comment.text}</p>
      <button onClick={handleReply}>Reply</button>
      <input
        type="text"
        placeholder="Your reply..."
        value={replyText}
        onChange={(e) => setReplyText(e.target.value)}
      />
    </div>
  );
};

export default Comment;