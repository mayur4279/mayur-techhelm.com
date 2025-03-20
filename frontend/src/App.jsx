import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { motion } from 'framer-motion';
import Home from './pages/Home';
import Blog from './pages/Blog';
import CloudConsulting from './pages/CloudConsulting';
import DevOps from './pages/DevOps';
import CyberSecurity from './pages/CyberSecurity';
import AIML from './pages/AIML';
import AboutUs from './pages/About-us';  


// import Navbar from './components/Navbar';
// import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">

        {/* Routes */}
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="about-us" element={<AboutUs /> } />  */}
            <Route path="/cloud-consulting" element={<CloudConsulting />} />
            <Route path="/devops" element={<DevOps />} />
            <Route path="/cyber-security" element={<CyberSecurity />} />
            <Route path="/ai-ml" element={<AIML />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/About-us" element={<AboutUs />} />

          </Routes>
        </div>

      </div>
    </Router>
  );
}

export default App;



