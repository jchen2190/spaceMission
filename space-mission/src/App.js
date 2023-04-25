import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './Header';
import Navbar from './Navbar';
import Home from './Home';
import Mission from './Mission';
import Contact from './Contact';
import Gallery from './Gallery';

function App() {
  return (
    <div className="container">
      <div className="row">
        <Header />
        <Navbar />
      </div>
      <div className="row">
        <Routes>
          <Route path="spaceMission/" element={<Home />} />
          <Route path="spaceMission/mission" element={<Mission />} />
          <Route path="spaceMission/gallery" element={<Gallery />} />
          <Route path="spaceMission/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
