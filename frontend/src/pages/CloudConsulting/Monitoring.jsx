import '../../css/monitoring.css';
import { Link } from 'react-router-dom';
import Monitoring from '../../assets/monitoring.jpg';
import ContentLoader from '../../components/ContentLoader';

function Home() {
  return (
        <ContentLoader>
    
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
        <li><Link to="/">Home</Link></li>
          <li><Link to="/About-us">About Us</Link></li>
          
          <li className="dropdown">
    <span className="dropdown-parent">Cloud Consulting Services</span>
      <ul className="dropdown-menu">
        <li><Link to="/hybrid-cloud-soluctions">Hybrid Cloud Solutions</Link></li>
        <li><Link to="/deployment-services">Deployment of Services</Link></li>
        <li><Link to="/monitoring-support">24/7 Monitoring & Support</Link></li>
        <li><Link to="/cost-optimization">Cost Optimization</Link></li>
        <li><Link to="/migration">Lift & Shift Migration</Link></li>
        <li><Link to="/backup-recovery">Backup & Disaster Recovery</Link></li>
        <li><Link to="/firewall-implementation">Firewall Implementation</Link></li>
        <li><Link to="/security-enhancement">Security Enhancement</Link></li>
        <li><Link to="/troubleshooting">Troubleshooting</Link></li>
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








      <div className="monitoring-container">
      <section className="monitoring-hero">
        <h1>Server & Application Monitoring</h1>
        <p className="breadcrumb">
          <span>🏠 Home</span> &gt; <span>Managed Services</span> &gt; <span>Monitoring</span>
        </p>
        <Link to="/contact-us" className="consultation-btn">Get Monitoring Demo</Link>          
      </section>

      <section className="monitoring-content">
        <h2 className="section-title">24/7 Monitoring Services</h2>
        
        <div className="split-screen">
          <div className="text-side">
            <div className="monitoring-description">
              <p>
                Around-the-clock server and application monitoring is key to uptime. We utilize <strong>advanced observability tools</strong> and a proactive support team to detect anomalies, respond to alerts, and provide continuous technical assistance for smooth operations.
              </p>
              <p>
                Our monitoring solutions provide real-time visibility into your infrastructure health, application performance, and security posture. With customizable dashboards and automated alerting, we help you <strong>prevent issues before they impact your users</strong>.
              </p>
              <p>
                From infrastructure metrics to application traces and log analytics, we correlate data across your entire stack to provide actionable insights and reduce mean time to resolution.
              </p>
            </div>
          </div>

          <div className="image-side">
            <img src={Monitoring} alt="Monitoring Dashboard" className="monitoring-image" />
          </div>
        </div>

        <div className="monitoring-features">
          <h3 className="features-title">Our Monitoring <span>Capabilities</span></h3>
          <div className="feature-list">
            <div className="feature-item">
              <div className="feature-icon">📊</div>
              <div>
                <strong>Performance Metrics:</strong> Track CPU, memory, disk, network, and application KPIs in real-time.
              </div>
            </div>
            <div className="feature-item">
              <div className="feature-icon">🚨</div>
              <div>
                <strong>Smart Alerts:</strong> Custom thresholds and AI-powered anomaly detection.
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>






    <div className="links-section">
      <div className="links-container">
        {/* Consultancy Section */}
        <div className="links-column">
          <div className="column-title">Cloud Consulting Services</div>
          <div className="link-item">➔ Hybrid Cloud Solutions Aws & Azure</div>
          <div className="link-item">➔ Cloud Backup Solutions</div>
          <div className="link-item">➔ 24/7 monitoring & support of the Cloud Servers</div>
          <div className="link-item">➔ Cloud Cost Optimization</div>
          <div className="link-item">➔ Cloud Security Enhancement</div>
          <div className="link-item">➔ Cloud Disaster Recovery</div>
          <div className="link-item">➔ Cloud lift & shift migration </div>

        </div>

        {/* Tech Support Section */}
        <div className="links-column">
          <div className="column-title">Security Services</div>
          <div className="link-item">➔ VAPT Services</div>
          <div className="link-item">➔ Security Enhancement with Microsoft Defender for cloud</div>
          <div className="link-item">➔ Security Enhancement with Microsoft Sentinal</div>
          <div className="link-item">➔ Fortinet Firewall Implementation</div>
          <div className="link-item">➔ Fortinet Firewall Implementation</div>
          <div className="link-item">➔ Sophose Firewall Implementation</div>

        </div>

        {/* Resource Center Section */}
        <div className="links-column">
          <div className="column-title">DevOps Solutions</div>
          <div className="link-item">➔ CI/CD Pipeline Automation</div>
          <div className="link-item">➔ Infrastructure as Code (IaC)</div>
          <div className="link-item">➔ Kubernetes & Container Orchestration</div>
          <div className="link-item">➔ Monitoring & Logging Solutions </div>
          <div className="link-item">➔ DevSecOps Implementation</div>
        </div>



        {/* Reach Us Section */}
        <div className="links-column">
          <div className="column-title">Reach Us</div>
          <div className="link-subtitle">For Sales</div>
          <div className="link-item">📞 India: +91 9881052089</div>
          <div className="link-item">✉️ sales@helmbytes.com</div>
          <div className="link-subtitle">For Support</div>
          <div className="link-item">📞 India: +91 9881052089</div>
          <div className="link-subtitle">For General</div>
          <div className="link-item">📞 India: +91-9881052089</div>
        </div>
      </div>
    </div>






    </div>
        </ContentLoader>
    
  );
}

export default Home;


