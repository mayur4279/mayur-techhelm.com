import '../../css/deployment.css';
import { Link } from 'react-router-dom';
import deploymentImage from '../../assets/deployment.jpg';
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




      <div className="deployment-container">
  <section className="deployment-hero">
    <h1>Cloud Service Deployment</h1>
    <p className="breadcrumb">
      <span>🏠 Home</span> &gt; <span>Cloud Services</span> &gt; <span>Deployment</span>
    </p>
    <Link to="/contact-us" className="consultation-btn">Request Deployment Consultation</Link>          
  </section>

  <section className="deployment-content">
    <h2 className="section-title">Cloud Deployment Services</h2>
    
    <div className="split-screen">
      <div className="text-side">
        <div className="deployment-description">
          <p>
            Streamline your cloud adoption with our comprehensive <strong>Cloud Deployment Services</strong>. We implement robust deployment strategies that ensure smooth transitions, optimal performance, and continuous availability of your applications and workloads.
          </p>
          <p>
            Our team specializes in automated deployment pipelines, infrastructure-as-code, and CI/CD implementations across all major cloud platforms. Whether you're deploying microservices, containerized applications, or traditional workloads, we provide the expertise to ensure successful <strong>cloud deployments</strong> with minimal downtime.
          </p>
          <p>
            Benefit from standardized deployment templates, environment consistency, and comprehensive monitoring from development through production. Our deployment methodologies reduce risk while accelerating your time-to-market.
          </p>
        </div>
      </div>

      <div className="image-side">
        <img src={deploymentImage} alt="Cloud Deployment Architecture" className="deployment-image" />
      </div>
    </div>

    <div className="deployment-benefits">
      <h3 className="benefits-title">Key Benefits of Our <span>Deployment Services</span></h3>
      <div className="benefit-list">
        <div className="benefit-item">
          <div className="benefit-icon">⚡</div>
          <div>
            <strong>Automation:</strong> Reduce manual errors with automated deployment pipelines.
          </div>
        </div>
        <div className="benefit-item">
          <div className="benefit-icon">🔄</div>
          <div>
            <strong>Consistency:</strong> Maintain identical environments across development, staging, and production.
          </div>
        </div>
        <div className="benefit-item">
          <div className="benefit-icon">👁️</div>
          <div>
            <strong>Visibility:</strong> Comprehensive tracking and rollback capabilities for every deployment.
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


