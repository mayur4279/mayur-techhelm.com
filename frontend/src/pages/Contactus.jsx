import React from 'react';
import '../css/contactus.css';


const ContactUs = () => {
  return (
    <div className="hb-contact-page">
      {/* Header Section */}
      <section className="hb-contact-hero">
        <div className="hb-container">
          <h1>Contact Us</h1>
          <p>Get in touch with our team for cloud, DevOps, and security solutions</p>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="hb-contact-section">

        <div className="hb-container">
          <div className="hb-contact-grid">
            
            {/* Contact Form */}
            <div className="hb-contact-form">
              <h2>Send Us a Message</h2>
              <form className="hb-contact-form-container">
                <div className="hb-form-group">
                  <label htmlFor="hb-name">Name</label>
                  <input type="text" id="hb-name" placeholder="Your name" />
                </div>
                <div className="hb-form-group">
                  <label htmlFor="hb-email">Email</label>
                  <input type="email" id="hb-email" placeholder="Your email" />
                </div>
                <div className="hb-form-group">
                  <label htmlFor="hb-phone">Phone</label>
                  <input type="tel" id="hb-phone" placeholder="Your phone number" />
                </div>
                <div className="hb-form-group">
                  <label htmlFor="hb-service">Service Interested In</label>
                  <select id="hb-service">
                    <option value="">Select a service</option>
                    <option value="cloud">Cloud Consulting</option>
                    <option value="devops">DevOps Solutions</option>
                    <option value="security">Cybersecurity Services</option>
                  </select>
                </div>
                <div className="hb-form-group">
                  <label htmlFor="hb-message">Message</label>
                  <textarea id="hb-message" rows="5" placeholder="Your message"></textarea>
                </div>
                <button type="submit" className="hb-submit-btn">Send Message</button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="hb-contact-info">
              <h2>Contact Information</h2>
              <div className="hb-info-card">
                <div className="hb-info-icon">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div className="hb-info-content">
                  <h3>Location</h3>
                  <p>123 Tech Park, Bangalore, India</p>
                </div>
              </div>
              <div className="hb-info-card">
                <div className="hb-info-icon">
                  <i className="fas fa-phone-alt"></i>
                </div>
                <div className="hb-info-content">
                  <h3>Phone</h3>
                  <p>+91 9881052089</p>
                  <p>+1 (555) 123-4567 (US)</p>
                </div>
              </div>
              <div className="hb-info-card">
                <div className="hb-info-icon">
                  <i className="fas fa-envelope"></i>
                </div>
                <div className="hb-info-content">
                  <h3>Email</h3>
                  <p>sales@helmbytes.com</p>
                  <p>support@helmbytes.com</p>
                </div>
              </div>
              <div className="hb-info-card">
                <div className="hb-info-icon">
                  <i className="fas fa-clock"></i>
                </div>
                <div className="hb-info-content">
                  <h3>Working Hours</h3>
                  <p>Monday - Friday: 9am - 6pm</p>
                  <p>24/7 Emergency Support</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="hb-map-section">
        <iframe 
          title="Company Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.646361734885!2d77.59727631482172!3d12.934536990882047!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15c49c040309%3A0x6553433f72187bdb!2sBangalore%20International%20Tech%20Park!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin" 
          width="100%" 
          height="450" 
          style={{border:0}} 
          allowFullScreen="" 
          loading="lazy">
        </iframe>
      </section>
    </div>
  );
};

export default ContactUs;