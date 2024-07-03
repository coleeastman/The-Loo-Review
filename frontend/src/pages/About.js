const About = () => {

  return (
    <div className="home">
      <div className="page-content-container">
        {/* <div className="back-arrow" onClick={() => navigate(-1)} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
          &lt;
        </div> */}
        {/* <div className="title">
          <h1>About</h1>
        </div> */}
        <div className="title">
          <h2>About</h2>
        </div>
        <p className="title">
          Our mission is to provide an honest and comprehensive review platform for all restrooms on the Arizona State University campus. 
          We understand that a clean and well-maintained restroom can make a significant difference in your day, so our goal is to ensure that everyone has access to up-to-date information on the state of restrooms across the campus, helping you make informed decisions about which restroom to use.</p>
        <div className="title">
          <h2>Our Target</h2>
        </div>
        <p className="title">
          TheLooReview is designed to serve the entire ASU community, including students, faculty, and visitors. Students can benefit from knowing which restrooms are the cleanest and most convenient between their classes. 
          Faculty members can find the best-maintained restrooms in their area, ensuring a comfortable work environment. Visitors to ASU can navigate the campus with confidence, knowing that they can rely on our reviews to find the best facilities.</p>
      </div>
    </div>
  );
};

export default About;
