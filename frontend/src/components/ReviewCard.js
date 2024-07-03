import React from 'react';

const ReviewCard = ({ review }) => {

  return (
    <div className="review-card">
      <p>
        {review.stars} {review.stars === 1 ? 'star' : 'stars'}
      </p>
      <p>"{review.review}"</p>
    </div>
  );
};

export default ReviewCard;
