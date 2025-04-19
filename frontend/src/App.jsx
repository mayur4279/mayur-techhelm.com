import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { motion } from 'framer-motion';
import Home from './pages/Home';
// import CloudConsulting from './pages/CloudConsulting';
import AboutUs from './pages/Aboutus';  
import Contactus from './pages/Contactus'
import HybridCloud from './pages/CloudConsulting/Hybridcloud' 
import DeploymentServices from './pages/CloudConsulting/Deployment' 
import Monitoring from './pages/CloudConsulting/Monitoring' 
import Costoptimization from './pages/CloudConsulting/Costoptimization' 
import Migration from './pages/CloudConsulting/Migration' 
import BackupDR from './pages/CloudConsulting/Backup' 
import Firewall from './pages/CloudConsulting/Firewall' 
import SecurityEnhancement from './pages/CloudConsulting/SecurityEnhancement' 
import Troubleshooting from './pages/CloudConsulting/Troubleshooting' 

import Vapt from './pages/CyberSecurity/Vapt' 

import Cicd from './pages/DevOps/CICD' 
import Iac from './pages/DevOps/IAC' 
import Kubernetes from './pages/DevOps/Kubernetes' 
import MonitoringLogging from './pages/DevOps/MonitoringDevops' 
import AutomatedTesting from './pages/DevOps/AutomatedTesting' 
import DevSecOps from './pages/DevOps/DevSecOps' 


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
            <Route path="/monitoring-support" element={<Monitoring />} />
            <Route path="/cost-optimization" element={<Costoptimization />} />
            <Route path="/migration" element={<Migration />} />
            <Route path="/backup-recovery" element={<BackupDR />} />
            <Route path="/firewall-implementation" element={<Firewall />} />
            <Route path="/security-enhancement" element={<SecurityEnhancement />} />
            <Route path="/troubleshooting" element={<Troubleshooting />} />

      

            <Route path="/vapt-services" element={<Vapt />} />



            <Route path="/ci-cd-pipeline" element={<Cicd />} />
            <Route path="/infrastructure-as-code" element={<Iac />} />
            <Route path="/kubernetes" element={<Kubernetes />} />
            <Route path="/monitoring-logging" element={<MonitoringLogging />} />
            <Route path="/automated-testing" element={<AutomatedTesting />} />
            <Route path="/devsecops" element={<DevSecOps />} />

          </Routes>
        </div>

      </div>
    </Router>
  );
}

export default App;


