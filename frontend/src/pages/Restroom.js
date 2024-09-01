import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ReviewCard from '../components/ReviewCard';

const Restroom = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [restroom, setRestroom] = useState(null);
  const [reviews, setReviews] = useState([]);

  const handleClick = () => {
    navigate(`/restroom/${restroom._id}/review`);
  };

  useEffect(() => {
    const fetchRestroom = async () => {
      const response = await fetch(`https://the-loo-review.onrender.com/api/restrooms/${id}`);
      const json = await response.json();

      if (response.ok) {
        setRestroom(json);
      }
    };

    const fetchReviews = async () => {
      // fetch the restroom details to get the restroom name
      const restroomResponse = await fetch(`https://the-loo-review.onrender.com/api/restrooms/${id}`);
      const restroomJson = await restroomResponse.json();

      if (restroomResponse.ok) {
        const restroomName = restroomJson.restroom;

        // fetch the reviews based on the restroom name
        const reviewResponse = await fetch(`https://the-loo-review.onrender.com/api/reviews/restroom/${restroomName}`);
        const reviewJson = await reviewResponse.json();

        if (reviewResponse.ok) {
          setReviews(reviewJson.reverse());
        }
      }
    };

    fetchRestroom();
    fetchReviews();
  }, [id]);

  if (!restroom) return <div></div>;

  return (
    <div className="home">
      <div className="page-content-container">
        <div className="back-arrow" onClick={() => navigate(-1)} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
          &lt;
        </div>
        <div className="flex-display">
          <div className="title">
            <h1>{restroom.restroom}</h1>
          </div>
          <div className="review-button-container">
            <button className="leave-review-button" onClick={handleClick}>Leave a Review</button>
          </div>
        </div>
        <div className="reviews">
          {reviews.map((review) => (
            <ReviewCard key={review._id} review={review} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Restroom;
