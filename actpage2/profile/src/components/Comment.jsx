import React, { useState } from 'react';
import Rating from './Rating';

const Comment = (props) => {
  const [replyText, setReplyText] = useState('');

  const handleReply = () => {
    if (onReply) {
      onReply(replyText);
      setReplyText('');
    }
  };
// convert rating to number for display
  const ratings = {
    Half: 0.5,
    One: 1.0,
    OneAndHalf: 1.5,
    Two: 2.0,
    TwoAndHalf: 2.5,
    Three: 3.0,
    ThreeAndHalf: 3.5,
    Four: 4.0,
    FourAndHalf: 4.5,
    Five: 5.0,
  };
  const ratingValue = ratings[props.comment.rating];

  return (
    <div className="comment">
      <Rating ratingValue={ratingValue} />
      <p>{props.comment.user}</p>
      <p>{props.comment.body}</p>
    </div>
  );
};

export default Comment;