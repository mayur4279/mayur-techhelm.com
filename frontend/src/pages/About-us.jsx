import React from "react";
import '../css/about-us.css'

const AboutUs = () => {
  return (
    <div className="about-us-container">
      {/* Header */}
      <div className="header">
        <h1>About Us</h1>
        <p>Home &gt; Who We Are &gt; About Us</p>
      </div>

      {/* Company Overview */}
      <div className="company-overview">
        <p>
          HelmBytes is a leading technology company specializing in Cloud Consulting and Cyber Security Services. 
          We have been empowering businesses with cutting-edge solutions since our inception. 
          Our offerings include managed cloud services, security audits, and infrastructure optimization.
        </p>
      </div>

      {/* Why Us Section */}
      <div className="why-us">
        <h2>Why Us</h2>
        <ul>
          <li>Committed to industry standards and data protection</li>
          <li>Successfully delivered multiple projects to satisfied clients</li>
          <li>Providing reliable support and monitoring for smooth operation</li>
          <li> Driven by a passionate team with deep technical expertise</li>
          <li>Offering tailored cloud and security solutions to meet business needs</li>
        </ul>
      </div>

      {/* Vision and Mission */}
      <div className="vision-mission">
        <div className="vision">
          <h3>Our Vision</h3>
          <p>
            Our vision is to be recognized as an industry leader in cloud and security solutions, 
            empowering businesses to achieve greater efficiency and security.
          </p>
        </div>
        <div className="mission">
          <h3>Our Mission</h3>
          <p>
            Our mission is to provide scalable, secure, and innovative solutions that help 
            businesses grow and thrive in a competitive landscape.
          </p>
        </div>
      </div>

      {/* Recent Blog */}
      <div className="recent-blog">
        <h2>Recent Blog</h2>
        <div className="blog-list">
          <div className="blog-item">
            <h4>Unlocking the Power of Microsoft Azure</h4>
            <p>Discover how Azure SQL can transform your data management strategy.</p>
            <a href="#">Read More</a>
          </div>
          <div className="blog-item">
            <h4>Elevate Your Business with SAP B1</h4>
            <p>Learn how migrating to Azure can enhance business performance.</p>
            <a href="#">Read More</a>
          </div>
          <div className="blog-item">
            <h4>Securing the Future</h4>
            <p>Cybersecurity strategies for businesses in the digital age.</p>
            <a href="#">Read More</a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="footer">
        <div className="footer-section">
          <h4>Consultancy</h4>
          <ul>
            <li>Cloud Consulting</li>
            <li>Cybersecurity</li>
            <li>Data Management</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Tech Support</h4>
          <ul>
            <li>24/7 Monitoring</li>
            <li>Infrastructure Support</li>
            <li>Security Audit</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Contact</h4>
          <p>Email: support@helmbytes.com</p>
          <p>Phone: +91 98765 43210</p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
