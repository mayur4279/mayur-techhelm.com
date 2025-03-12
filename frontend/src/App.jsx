import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Home from './pages/Home';
import Blog from './pages/Blog';

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
          <Link to="/blog" className="hover:text-gray-300 font-semibold">Blog</Link>
        </motion.nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pages/Blog.jsx" element={<Blog />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
