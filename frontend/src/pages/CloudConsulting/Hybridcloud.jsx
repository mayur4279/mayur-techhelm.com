import '../../css/hybridcloud.css';
import { Link } from 'react-router-dom';
import hybridImage from '../../assets/hybrid-cloud.jpg';

function Home() {
  return (
    <div className="hybrid-cloud-container">
      {/* Top Bar Section */}
      <div className="Home Container">
        <div className="top-bar">
          <span>SINCE 2024 | Certified Employees</span>
          <div className="contact-info">
            <span>INDIA: +91 9881052089</span>
            <span>sales@helmbytes.com</span>
          </div>
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

      {/* Main Content Section */}
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
                Our <strong>Hybrid Cloud</strong> solutions combine public cloud flexibility with private infrastructure security, delivering the perfect balance for modern businesses. We specialize in creating tailored hybrid strategies that drive innovation while maintaining existing systems.
              </p>
              <p>
                Experience seamless integration and unified management with our Hybrid Cloud services, designed to provide operational flexibility, continuous availability, and comprehensive governance across all environments.
              </p>
              <ul>
                <li><strong>✔ Elastic Scalability</strong>: Expand resources effortlessly across cloud and on-premises environments</li>
                <li><strong>✔ Data Control</strong>: Maintain sensitive data on-premises while leveraging cloud advantages</li>
                <li><strong>✔ Resilient Operations</strong>: Guarantee uninterrupted service across hybrid deployments</li>
              </ul>
            </div>

            <div className="hybrid-image">
              <img src={hybridImage} alt="Hybrid Cloud Infrastructure" />
            </div>
          </div>

          <div className="hybrid-drivers">
            <h3 className="drivers-title">Why Businesses Choose <span>Hybrid Cloud</span></h3>
            <div className="driver-list">
              <div className="driver-item">
                <div className="driver-icon">☁️</div>
                <div>
                  <strong>Adaptive Scaling:</strong> Effortlessly adjust resources across multiple environments
                </div>
              </div>
              <div className="driver-item">
                <div className="driver-icon">🔐</div>
                <div>
                  <strong>Enhanced Protection:</strong> Secure critical data with private infrastructure controls
                </div>
              </div>
              <div className="driver-item">
                <div className="driver-icon">⚙️</div>
                <div>
                  <strong>Operational Freedom:</strong> Deploy applications in their optimal environment
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


