import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BackgroundVideoBanner from './Pokemon-project/BackgroundVideoBanner';
import About from './Pokemon-project/About';
import Contact from './Pokemon-project/Contact';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BackgroundVideoBanner />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  
  );
}

export default App;