import { BrowserRouter, Routes, Route } from 'react-router-dom';

// pages & components
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Restroom from './pages/Restroom';
import Review from './pages/Review';
import About from './pages/About';
import Help from './pages/Help';
// import StarRate from "./components/StarRate"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        {/* <StarRate /> */}
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/restroom/:id" element={<Restroom />} />
            <Route path="/restroom/:id/review" element={<Review />} />
            <Route path="/about" element={<About />} />
            <Route path="/help" element={<Help />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
