import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import SewerCleaning from './pages/SewerCleaning';
import WasteRemoval from './pages/WasteRemoval';
import Emergency from './pages/Emergency';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sewer-cleaning" element={<SewerCleaning />} />
          <Route path="/waste-removal" element={<WasteRemoval />} />
          <Route path="/emergency" element={<Emergency />} />
        </Routes>
        <Footer />
        
      </div>
    </Router>
  );
}

export default App;