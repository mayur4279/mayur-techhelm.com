import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Home from './pages/Home';
import Blog from './pages/Blog';
import CloudConsulting from './pages/CloudConsulting';
import DevOps from './pages/DevOps';
import CyberSecurity from './pages/CyberSecurity';
import AIML from './pages/AIML';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
// import './style.css'

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        {/* Navbar */}
        <Navbar />




        {/* Routes */}
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cloud-consulting" element={<CloudConsulting />} />
            <Route path="/devops" element={<DevOps />} />
            <Route path="/cyber-security" element={<CyberSecurity />} />
            <Route path="/ai-ml" element={<AIML />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
        </div>



        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;



