import React, { useEffect, useState } from 'react';
// components
import RestroomCard from '../components/RestroomCard';
// import the image
import asuImg from '../images/asu-img.jpeg';
import Footer from '../components/Footer';

// Use the environment variable for the backend URL
const backendUrl = process.env.REACT_APP_BACKEND_URL;

const Home = () => {
  const [restrooms, setRestrooms] = useState(null);
  const [reviewCount, setReviewCount] = useState(0);

  useEffect(() => {
    const fetchRestrooms = async () => {
      const response = await fetch(`${backendUrl}/api/restrooms`);
      const json = await response.json();

      if (response.ok) {
        // Sort restrooms alphabetically by name before setting the state
        const sortedRestrooms = json.sort((a, b) => a.restroom.localeCompare(b.restroom));
        setRestrooms(sortedRestrooms);
      }
    };

    const fetchReviewCount = async () => {
      const response = await fetch(`${backendUrl}/api/reviewcount`);
      const json = await response.json();

      if (response.ok) {
        setReviewCount(json.reviewCount);
      }
    };

    fetchRestrooms();
    fetchReviewCount();
  }, []);

  return (
    <>
      <div className="home">
        <div className="image-container">
          <img src={asuImg} id="asu-img" alt="ASU Campus" />
          <div className="overlay">
            <div className="text">
              <h1>Arizona State University</h1>
              <p>{reviewCount} Restroom Reviews</p>
            </div>
          </div>
        </div>
        <div className="page-content-container">
          <div className="select-restroom-title">
            <h1>Select a Building</h1>
          </div>
          <div className="restrooms">
            {restrooms && restrooms.map((restroom) => (
              <RestroomCard key={restroom._id} restroom={restroom} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
