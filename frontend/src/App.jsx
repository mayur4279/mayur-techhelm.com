import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Home from './pages/Home';
import Blog from './pages/Blog';
import CloudConsulting from './pages/CloudConsulting';
import DevOps from './pages/DevOps';
import CyberSecurity from './pages/CyberSecurity';
import AIML from './pages/AIML';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 text-gray-800">
        {/* Navbar */}
        <motion.nav
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-blue-600 text-white py-4 flex justify-center gap-8 shadow-lg"
        >
          <Link to="/" className="hover:text-gray-300 font-semibold">Home</Link>
          <Link to="/cloud-consulting" className="hover:text-gray-300 font-semibold">Cloud Consulting</Link>
          <Link to="/devops" className="hover:text-gray-300 font-semibold">DevOps</Link>
          <Link to="/cyber-security" className="hover:text-gray-300 font-semibold">Cyber Security</Link>
          <Link to="/ai-ml" className="hove r:text-gray-300 font-semibold">AI & ML</Link>
          <Link to="/blog" className="hover:text-gray-300 font-semibold">Blog</Link>
        </motion.nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cloud-consulting" element={<CloudConsulting />} />
          <Route path="/devops" element={<DevOps />} />
          <Route path="/cyber-security" element={<CyberSecurity />} />
          <Route path="/ai-ml" element={<AIML />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
