import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ReviewForm from '../components/ReviewForm';

const Review = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [restroom, setRestroom] = useState(null);

  useEffect(() => {
    const fetchRestroom = async () => {
      const response = await fetch(`${process.env.BACKEND_URL}/api/restrooms/${id}`);
      const json = await response.json();

      if (response.ok) {
        setRestroom(json);
      }
    };

    fetchRestroom();
  }, [id]);

  if (!restroom) return <div></div>;

  return (
    <div className="home">
      <div className="page-content-container">
        <div className="back-arrow" onClick={() => navigate(-1)} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
          &lt;
        </div>
        <div className="title">
          <h1>{restroom.restroom}</h1>
        </div>
        <ReviewForm restroom={restroom.restroom} />
      </div>
    </div>
  );
};

export default Review;
