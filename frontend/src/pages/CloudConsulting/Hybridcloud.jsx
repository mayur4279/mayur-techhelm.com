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
        <li><Link to="/">Home</Link></li>
          <li><Link to="/About-us">About Us</Link></li>
          
          <li className="dropdown">
            <span className="dropdown-parent">Cloud Consulting Services</span>
            <ul className="dropdown-menu">
            <li><Link to="/hybrid-cloud-soluctions">Hybrid Cloud Solutions</Link></li>
        <li><Link to="/deployment-services">Deployment of Services</Link></li>
        <li><Link to="/monitoring-support">24/7 Monitoring & Support</Link></li>
        <li><Link to="/cost-optimization">Cost Optimization</Link></li>
        <li><Link to="/lift-shift-migration">Lift & Shift Migration</Link></li>
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







      <div className="hybrid-container">
        <section className="hybrid-hero">
          <h1>Hybrid Cloud Solutions</h1>
          <p className="breadcrumb">
            <span>🏠 Home</span> &gt; <span>Cloud Consulting Services</span> &gt; <span>Hybrid Cloud</span>
          </p>

          <Link to="/contact-us" className="consultation-btn"> Schedule Free Consultation</Link>          
        </section>


        <section className="hybrid-content">
          <h2 className="section-title">Hybrid Cloud Services</h2>
          
          {/* Split screen section */}
          <div className="split-screen">

            <div className="text-side">
              <div className="hybrid-description">
                <p>
                  Harness the flexibility and scalability of the cloud while maintaining control over your critical workloads with our <strong>Hybrid Cloud Solutions</strong>. We combine the best of public and private cloud infrastructures to create a seamless, secure, and agile environment tailored to your business needs.
                </p>
                <p>
                  Our experts design hybrid strategies that ensure business continuity, support legacy systems, and enable cloud-native innovation. Whether you're migrating existing workloads, building a cloud landing zone, or optimizing your infrastructure, our <strong>Hybrid Cloud services</strong> provide the flexibility and resilience required for modern enterprises.
                </p>
                <p>
                  Benefit from seamless integration, centralized management, and end-to-end visibility across all environments. With robust security protocols and compliance support, we empower your business to innovate without compromise.
                </p>
              </div>
            </div>

            <div className="image-side">
              <img src={hybridImage} alt="Hybrid Cloud Architecture" className="hybrid-image" />
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
  );
}

export default Home;


