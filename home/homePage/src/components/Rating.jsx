import React, { useState } from 'react';

const Rating = () => {
  const [rating, setRating] = useState(0);

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  return (
    <div className="rating">
      <p>Rating: {rating} stars</p>
      {[1, 2, 3, 4, 5].map((star) => (
        <span key={star} onClick={() => handleRatingChange(star)}>
          ⭐
        </span>
      ))}
    </div>
  );
};

export default Rating;