import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { motion } from 'framer-motion';
import Home from './pages/Home';
import Blog from './pages/Blog';
import CloudConsulting from './pages/CloudConsulting';
import DevOps from './pages/DevOps';
import CyberSecurity from './pages/CyberSecurity';
import AboutUs from './pages/About-us';  
import Hosting from './pages/Hosting'
// import Contactus from './pages/Contact'
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
            <Route path="/cloud-consulting" element={<CloudConsulting />} />
            <Route path="/DevOps-Solutions" element={<DevOps />} />
            <Route path="/security-services" element={<CyberSecurity />} />
            <Route path="/Hosting-Services" element={<Hosting />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/About-us" element={<AboutUs />} />
            {/* <Route path="/contact-us" element={<Contactus />} /> */}
      
          </Routes>
        </div>

      </div>
    </Router>
  );
}

export default App;


