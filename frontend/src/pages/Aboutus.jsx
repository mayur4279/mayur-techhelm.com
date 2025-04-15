import React from 'react';
import "../aboutus.css";

const AboutUs = () => {
  return (
    <div className="about-us-container">
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

      <section className="cta-section">
        <div className="container">
          <h2>Ready to Transform Your Cloud Infrastructure?</h2>
          <p>Contact us today to discuss how we can help your business achieve its cloud and security goals.</p>
          <button className="cta-button">Get in Touch</button>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;