// import { motion } from 'framer-motion';
import  '../../css/hybridcloud.css'
import { Link } from 'react-router-dom';
import hybridImage from '../../assets/hybrid-cloud.jpg'; // Adjust path as needed

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



<div className="hybrid-container">
      <section className="hybrid-hero">
        <h1>Hybrid Cloud Solutions</h1>
        <p className="breadcrumb">
          <span>🏠 Home</span> &gt; <span>Cloud Consulting Services</span> &gt; <span>Hybrid Cloud</span>
        </p>
        <button className="consultation-btn">Schedule Free Consultation</button>
      </section>

      <section className="hybrid-content">
        <h2 className="section-title">Hybrid Cloud Services</h2>
        
        <div className="hybrid-split">
          <div className="hybrid-text">
            <p>
              Unlock agility and control with <strong>Hybrid Cloud</strong> solutions that blend public cloud scalability with private infrastructure security. We help you design, deploy, and manage hybrid strategies that support innovation while preserving legacy systems.
            </p>
            <p>
              With seamless integration and centralized management, our Hybrid Cloud services empower your business with flexibility, business continuity, and governance across environments.
            </p>
            <ul>
              <li><strong>✔ Scalability</strong>: Dynamically extend resources across cloud and on-prem.</li>
              <li><strong>✔ Data Sovereignty</strong>: Keep critical data on-prem while using cloud benefits.</li>
              <li><strong>✔ Business Continuity</strong>: Ensure uptime across hybrid deployments.</li>
            </ul>
          </div>

          <div className="hybrid-image">
            <img src={hybridImage} alt="Hybrid Cloud Architecture" />
          </div>
        </div>

        <div className="hybrid-drivers">
          <h3 className="drivers-title">Key Drivers For <span>Hybrid Cloud</span> Adoption</h3>
          <div className="driver-list">
            <div className="driver-item">
              <div className="driver-icon">☁️</div>
              <div>
                <strong>Scalability:</strong> Instantly scale workloads across cloud and on-prem environments.
              </div>
            </div>
            <div className="driver-item">
              <div className="driver-icon">🔐</div>
              <div>
                <strong>Security:</strong> Maintain control of sensitive data with private infrastructure.
              </div>
            </div>
            <div className="driver-item">
              <div className="driver-icon">⚙️</div>
              <div>
                <strong>Flexibility:</strong> Run applications where they perform best—on-premises or in the cloud.
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>



</div>
  );
} 

export default Home;


