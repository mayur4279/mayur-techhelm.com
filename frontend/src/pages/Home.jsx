

// import { motion } from 'framer-motion';
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
        <li><Link to="/hybrid-cloud-solutions">Hybrid Cloud Solutions</Link></li>
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








      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-content">
          <h1>
            Expert Cloud, Cybersecurity and DevOps Solutions <br />
            {/* <span>24/7 Expert Protection You Can Trust</span> */}
          </h1>
          <p>
          • CLOUD CONSULTING • DEVOPS SOLUTIONS • COMPREHENSIVE CYBERSECURITY • CLOUD SECURITY & MANAGEMENT
          </p>
          <button className="cta-button">Contact Our Expert</button>
        </div>
      </div>  





      <div className="why-helmbytes-container">
      <h2 className="section-title">Why HelmBytes?</h2>
      
      <div className="services-section">
        <div className="service-card">
          <h3>Cloud Consulting Excellence</h3>
          <p>
            As an AWS and Azure partner, we provide Cloud Assessment, Migration, and Optimization services. 
            We specialize in cost-saving strategies and enhanced performance across Public, Private, and Hybrid Cloud environments.
          </p>
        </div>

        <div className="service-card">
          <h3>Comprehensive Cybersecurity</h3>
          <p>
            We offer top-tier Managed Security (mSOC) services including Vulnerability Assessment, Pen Testing, and Red Team operations. 
            Our solutions integrate SIEM & SOAR with 24/7 monitoring and rapid incident response.
          </p>
        </div>

        <div className="service-card">
          <h3>End-to-End DevOps Solutions</h3>
          <p>
            We provide comprehensive DevOps services including CI/CD automation, infrastructure as code (IaC), 
            and container orchestration using Kubernetes and Docker. Our solutions enhance deployment speed, 
            reduce downtime, and improve system reliability.
          </p>
        </div>

        <div className="service-card">
          <h3>Data Backup & Recovery</h3>
          <p>
            Ensure business continuity with secure backup and disaster recovery solutions. 
            We provide automated backups and quick recovery for both cloud and on-prem environments.
          </p>
        </div>

        <div className="service-card">
          <h3>Cloud Cost Optimization</h3>
          <p>
            Maximize efficiency and reduce cloud expenses through monitoring, scaling, and automation. 
            We identify underutilized resources and suggest improvements.
          </p>
        </div>

        <div className="service-card">
          <h3>Infrastructure as Code (IaC)</h3>
          <p>
            Automate infrastructure provisioning and management using Terraform and Ansible. 
            Achieve consistency and scalability across multiple cloud environments.
          </p>
        </div>
      </div>
    </div>


    <div className="partners-section">
      <h2 className="section-title">Our Services</h2>
      <div className="partners-container">
        {/* Row 1 */}
        <div className="partners-row">
          <div className="partner-item">
            <img src="https://upload.wikimedia.org/wikipedia/commons/a/a8/Microsoft_Azure_Logo.svg" alt="Azure" />
          </div>
          <div className="partner-item">
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_logo.svg" alt="Google Cloud" />
          </div>
          <div className="partner-item">
            <img src="https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" alt="AWS" />
          </div>
          <div className="partner-item">
            <img src="https://upload.wikimedia.org/wikipedia/commons/6/62/Fortinet_logo.svg" alt="Fortinet" />
          </div>
          <div className="partner-item">
            <img src="https://i0.wp.com/securityaffairs.com/wp-content/uploads/2020/11/sophos.jpg?fit=810%2C456&ssl=1&resize=1280%2C720" alt="Sophos" />
          </div>
          </div>
        </div>
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