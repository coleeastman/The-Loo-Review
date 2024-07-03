import { useNavigate } from 'react-router-dom';

const Help = () => {
  const navigate = useNavigate();

  return (
    <div className="home">
      <div className="page-content-container">
        <div className="back-arrow" onClick={() => navigate(-1)} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
          &lt;
        </div>
        <div className="title">
          <h1>Help</h1>
        </div>
      </div>
    </div>
  );
};

export default Help;
