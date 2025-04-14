import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function Home() {
  const [isHovered, setIsHovered] = useState(false);

  // Cloud consulting services data
  const cloudServices = [
    "Hybrid Cloud Solutions",
    "Deployment of services",
    "Security Enhancement (Microsoft Defender for cloud & Sentinel)",
    "Troubleshooting",
    "24/7 monitoring & support of the servers",
    "Cost optimization",
    "Lift & shift migration",
    "Backup & Disaster Recovery Solutions",
    "Firewall Implementation (Fortinet & Sophos)"
  ];

  return (
    <div className="Home Container">
      {/* Top Bar */}
      <div className="top-bar"> 
        <span>SINCE 2024 | Certified Employees</span>  
        <div className="contact-info">  
          <span>INDIA: +91 9881052089</span>
          <span>sales@helmbytes.com</span>    
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
          <li 
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <Link to="/cloud-consulting">Cloud Consulting Services</Link>
          </li>
          <li><Link to="/security-services">Cyber Security Services</Link></li> 
          <li><Link to="/DevOps-Solutions">DevOps Solutions</Link></li>  
          <li><Link to="/contact-us">Contact Us</Link></li>
        </ul>
      </nav>

      {/* Floating Cloud Consulting Section */}
      {isHovered && (
        <motion.div 
          className="floating-cloud-services"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
        >
          <h3>Cloud Consulting Services</h3>
          <ul>
            {cloudServices.map((service, index) => (
              <li key={index}>{service}</li>
            ))}
          </ul>
        </motion.div>
      )}

      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-content">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Expert Cloud, Cybersecurity and DevOps Solutions
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            • CLOUD CONSULTING • DEVOPS SOLUTIONS • COMPREHENSIVE CYBERSECURITY • CLOUD SECURITY & MANAGEMENT
          </motion.p>
          <motion.button 
            className="cta-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Our Expert
          </motion.button>
        </div>
      </div>  

      {/* Why Helmbytes Section */}
      <div className="why-helmbytes-container">
        <h2 className="section-title">Why HelmBytes?</h2>
        
        <div className="services-section">
          {[
            {
              title: "Cloud Consulting Excellence",
              content: "As an AWS and Azure partner, we provide Cloud Assessment, Migration, and Optimization services. We specialize in cost-saving strategies and enhanced performance across Public, Private, and Hybrid Cloud environments."
            },
            {
              title: "Comprehensive Cybersecurity",
              content: "We offer top-tier Managed Security (mSOC) services including Vulnerability Assessment, Pen Testing, and Red Team operations. Our solutions integrate SIEM & SOAR with 24/7 monitoring and rapid incident response."
            },
            {
              title: "End-to-End DevOps Solutions",
              content: "We provide comprehensive DevOps services including CI/CD automation, infrastructure as code (IaC), and container orchestration using Kubernetes and Docker. Our solutions enhance deployment speed, reduce downtime, and improve system reliability."
            },
            {
              title: "Data Backup & Recovery",
              content: "Ensure business continuity with secure backup and disaster recovery solutions. We provide automated backups and quick recovery for both cloud and on-prem environments."
            },
            {
              title: "Cloud Cost Optimization",
              content: "Maximize efficiency and reduce cloud expenses through monitoring, scaling, and automation. We identify underutilized resources and suggest improvements."
            },
            {
              title: "Infrastructure as Code (IaC)",
              content: "Automate infrastructure provisioning and management using Terraform and Ansible. Achieve consistency and scalability across multiple cloud environments."
            }
          ].map((service, index) => (
            <motion.div 
              key={index}
              className="service-card"
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3>{service.title}</h3>
              <p>{service.content}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Partners Section */}
      <div className="partners-section">
        <h2 className="section-title">Our Services</h2>
        <div className="partners-container">
          <div className="partners-row">
            {[
              "https://upload.wikimedia.org/wikipedia/commons/a/a8/Microsoft_Azure_Logo.svg",
              "https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_logo.svg",
              "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
              "https://upload.wikimedia.org/wikipedia/commons/6/62/Fortinet_logo.svg",
              "https://i0.wp.com/securityaffairs.com/wp-content/uploads/2020/11/sophos.jpg?fit=810%2C456&ssl=1&resize=1280%2C720"
            ].map((logo, index) => (
              <motion.div 
                key={index}
                className="partner-item"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <img src={logo} alt={`Partner ${index + 1}`} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Links Section */}
      <div className="links-section">
        <div className="links-container">
          {/* Cloud Consulting Services */}
          <div className="links-column">
            <div className="column-title">Cloud Consulting Services</div>
            {[
              "Hybrid Cloud Solutions Aws & Azure",
              "Cloud Backup Solutions",
              "24/7 monitoring & support of the Cloud Servers",
              "Cloud Cost Optimization",
              "Cloud Security Enhancement",
              "Cloud Disaster Recovery",
              "Cloud lift & shift migration"
            ].map((item, index) => (
              <div key={index} className="link-item">➔ {item}</div>
            ))}
          </div>

          {/* Security Services */}
          <div className="links-column">
            <div className="column-title">Security Services</div>
            {[
              "VAPT Services",
              "Security Enhancement with Microsoft Defender for cloud",
              "Security Enhancement with Microsoft Sentinal",
              "Fortinet Firewall Implementation",
              "Sophos Firewall Implementation"
            ].map((item, index) => (
              <div key={index} className="link-item">➔ {item}</div>
            ))}
          </div>

          {/* DevOps Solutions */}
          <div className="links-column">
            <div className="column-title">DevOps Solutions</div>
            {[
              "CI/CD Pipeline Automation",
              "Infrastructure as Code (IaC)",
              "Kubernetes & Container Orchestration",
              "Monitoring & Logging Solutions",
              "DevSecOps Implementation"
            ].map((item, index) => (
              <div key={index} className="link-item">➔ {item}</div>
            ))}
          </div>

          {/* Reach Us */}
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