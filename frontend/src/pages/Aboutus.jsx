import React from 'react';
import { Link } from 'react-router-dom'; // Add this import
import '../css/aboutus.css';
import ContentLoader from '../components/ContentLoader';

const AboutUs = () => {
  return (
    <ContentLoader>

<div className="about-us-container">

      <section className="Home Container">
        
        <div className="top-bar"> 
        <span>SINCE 2024 | Certified Employees</span>  
        <div className="contact-info ">  
          <span>INDIA: +91 9881052089</span>
          <span>sales@helmbytes.com </span>    
        </div>
        </div>
       </section>



{/* Navigation Bar */}
<section className="Navbar">
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
</section>







      <section className="hero-section">
        <div className="hero-content">
          <h1>Your Trusted Cloud & Security Partners</h1>
          <p>Delivering innovative cloud solutions and robust security services to businesses worldwide</p>
        </div>
      </section>

      <section className="about-section">
        <div className="container">
          <h2>About Our Company</h2>
          <div className="about-grid">
            <div className="about-card">
              <div className="icon-container">
                <i className="fas fa-cloud"></i>
              </div>
              <h3>Multicloud Specialists</h3>
              <p>Experts in AWS & Azure cloud platforms, helping businesses optimize their cloud infrastructure for maximum performance and cost-efficiency.</p>
            </div>
            
            <div className="about-card">
              <div className="icon-container">
                <i className="fas fa-code-branch"></i>
              </div>
              <h3>DevOps Solution Providers</h3>
              <p>We implement cutting-edge DevOps practices to streamline your development lifecycle, ensuring faster deployments and higher quality releases.</p>
            </div>
            
            <div className="about-card">
              <div className="icon-container">
                <i className="fas fa-shield-alt"></i>
              </div>
              <h3>Cybersecurity Services</h3>
              <p>Comprehensive security solutions to protect your digital assets, from vulnerability assessments to 24/7 threat monitoring and incident response.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mission-section">
        <div className="container">
          <h2>Our Mission</h2>
          <p>We empower businesses to harness the full potential of cloud technologies while maintaining the highest security standards. Our team of certified professionals is dedicated to delivering tailored solutions that drive innovation, efficiency, and growth for our clients.</p>
        </div>
      </section>

      <section className="team-section">
        <div className="container">
          <h2>Our Expertise</h2>
          <div className="expertise-grid">
            <div className="expertise-item">
              <h3>200+</h3>
              <p>Successful Cloud Migrations</p>
            </div>
            <div className="expertise-item">
              <h3>100%</h3>
              <p>Client Satisfaction Rate</p>
            </div>
            <div className="expertise-item">
              <h3>50+</h3>
              <p>Certified Professionals</p>
            </div>
            <div className="expertise-item">
              <h3>24/7</h3>
              <p>Security Operations Center</p>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="cta-section">
        <div className="container">
          <h2>Ready to Transform Your Cloud Infrastructure?</h2>
          <p>Contact us today to discuss how we can help your business achieve its cloud and security goals.</p>
          <button className="cta-button">Get in Touch</button>
        </div>
      </section> */}







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
};

export default AboutUs;