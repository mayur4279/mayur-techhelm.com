// import { motion } from 'framer-motion';
import  '../../css/hybridcloud.css'
import { Link } from 'react-router-dom';

function Home() {
  return (

    <div className="Home Container">
        
        <div className="top-bar"> 
        <span>SINCE 2024 | Certified Employees</span>  
        <div className="contact-info ">  
          <span>INDIA: +91 9881052089</span>
          <span>sales@helmbytes.com </span>    
        </div>
        </div>


{/* Navigation Bar */}
<nav className="Navbar">
  <div className="logo">
    <span className="logo-ibn">H</span>
    <span className="logo-green">E</span>
    <span className="logo-green">L</span>
    <span className="logo-ibn">M</span>
    <span className="logo-green">B</span>
    <span className="logo-green">Y</span>
    <span className="logo-green">T</span>
    <span className="logo-green">E</span>
    <span className="logo-green">S</span>
  </div>

  <ul className="nav-links">
    <li><Link to="/About-us">About Us</Link></li>
    
    <li className="dropdown">
    <span className="dropdown-parent">Cloud Consulting Services</span>
      <ul className="dropdown-menu">
        <li><Link to="/hybrid-cloud-soluctions">Hybrid Cloud Solutions</Link></li>
        <li><Link to="/deployment-services">Deployment of Services</Link></li>
        <li><Link to="/security-enhancement">Security Enhancement</Link></li>
        <li><Link to="/troubleshooting">Troubleshooting</Link></li>
        <li><Link to="/monitoring-support">24/7 Monitoring & Support</Link></li>
        <li><Link to="/cost-optimization">Cost Optimization</Link></li>
        <li><Link to="/lift-shift-migration">Lift & Shift Migration</Link></li>
        <li><Link to="/backup-recovery">Backup & Disaster Recovery</Link></li>
        <li><Link to="/firewall-implementation">Firewall Implementation</Link></li>
      </ul>
    </li>

    <li className="dropdown">
    <span className="dropdown-parent">Cyber Security Services</span>
      <ul className="dropdown-menu">
        <li><Link to="/vapt-services">VAPT Services</Link></li>
      </ul>
    </li>

    <li className="dropdown">
    <span className="dropdown-parent">DevOps Solutions</span>
      <ul className="dropdown-menu">
        <li><Link to="/ci-cd-pipeline">CI/CD Pipeline Automation</Link></li>
        <li><Link to="/infrastructure-as-code">Infrastructure as Code (IaC)</Link></li>
        <li><Link to="/kubernetes">Kubernetes & Container Orchestration</Link></li>
        <li><Link to="/monitoring-logging">Monitoring & Logging Solutions</Link></li>
        <li><Link to="/automated-testing">Automated Testing & QA</Link></li>
        <li><Link to="/devsecops">DevSecOps Implementation</Link></li>
      </ul>
    </li>
    
    <li><Link to="/contact-us">Contact Us</Link></li>
  </ul>
</nav>




</div>
  );
} 

export default Home;


