import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { motion } from 'framer-motion';
import Home from './pages/Home';
// import CloudConsulting from './pages/CloudConsulting';
import AboutUs from './pages/Aboutus';  
import Contactus from './pages/Contactus'
import HybridCloud from './pages/CloudConsulting/Hybridcloud' 
import DeploymentServices from './pages/CloudConsulting/Deployment' 

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">

        {/* Routes */}
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/cloud-consulting" element={<CloudConsulting />} /> */}
            {/* <Route path="/DevOps-Solutions" element={<DevOps />} /> */}
            {/* <Route path="/security-services" element={<CyberSecurity />} /> */}
            <Route path="/About-us" element={<AboutUs />} />
            <Route path="/contact-us" element={<Contactus />} />
            <Route path="/hybrid-cloud-soluctions" element={<HybridCloud />} />
            <Route path="/deployment-services" element={<DeploymentServices />} />

      
          </Routes>
        </div>

      </div>
    </Router>
  );
}

export default App;


