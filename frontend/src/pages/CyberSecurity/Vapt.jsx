import '../../css/vapt.css';
import { Link } from 'react-router-dom';
import vaptImage from '../../assets/vapt.png';

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








      <div className="vapt-container">
      <section className="vapt-hero">
        <h1>Vulnerability Assessment & Penetration Testing</h1>
        <p className="breadcrumb">
          <span>🏠 Home</span> &gt; <span>Cyber Security</span> &gt; <span>VAPT</span>
        </p>
        <Link to="/contact-us" className="consultation-btn">Schedule Security Test</Link>          
      </section>

      <section className="vapt-content">
        <h2 className="section-title">Proactive Security Validation</h2>
        
        <div className="split-screen">
          <div className="text-side">
            <div className="vapt-description">
              <p>
                Our comprehensive <strong>VAPT services</strong> identify and exploit vulnerabilities in your applications, networks, and infrastructure before attackers can. We simulate real-world attacks to uncover security weaknesses with proven methodologies.
              </p>
              <p>
                Using both automated scanning tools and manual testing techniques, we provide <strong>actionable security reports</strong> with risk ratings and remediation guidance. Our tests cover OWASP Top 10 vulnerabilities, configuration flaws, and business logic errors.
              </p>
              <p>
                From web applications to cloud environments and IoT devices, we tailor our testing approach to your technology stack and compliance requirements (PCI DSS, ISO 27001, HIPAA).
              </p>
            </div>
          </div>

          <div className="image-side">
            <img src={vaptImage} alt="VAPT Testing Process" className="vapt-image" />
          </div>
        </div>

        <div className="vapt-benefits">
          <h3 className="benefits-title">Our VAPT <span>Methodology</span></h3>
          <div className="benefit-list">
            <div className="benefit-item">
              <div className="benefit-icon">🔍</div>
              <div>
                <strong>Discovery Phase:</strong> Asset identification and vulnerability scanning
              </div>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">⚔️</div>
              <div>
                <strong>Exploitation:</strong> Ethical hacking to validate vulnerabilities
              </div>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">📑</div>
              <div>
                <strong>Reporting:</strong> Detailed findings with remediation roadmap
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


