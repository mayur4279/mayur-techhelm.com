import React from "react";
import "../css/cloud-consulting.css";

// Icons (using react-icons)
import { 
  FaCloud, 
  FaServer, 
  FaShieldAlt, 
  FaNetworkWired, 
  FaTools, 
  FaEye, 
  FaDollarSign, 
  FaExchangeAlt, 
  FaDatabase 
} from 'react-icons/fa';

// Import images (replace with your actual paths)
import hybridImage from '../assets/hybrid-cloud.jpg';
import deployImage from '../assets/deployment.jpg';
// import securityImage from '../assets/security.jpg';
// import firewallImage from '../assets/firewall.jpg';
// import troubleshootImage from '../assets/troubleshooting.jpg';
// import monitoringImage from '../assets/monitoring.jpg';
// import costImage from '../assets/cost-optimization.jpg';
// import migrationImage from '../assets/migration.jpg';
// import backupImage from '../assets/backup.jpg';
import cloudHero from '../assets/cloud-hero.jpg';

const Cloud = () => {
  const services = [
    {
      title: 'Hybrid Cloud Solutions',
      icon: <FaCloud className="service-icon" />,
      image: hybridImage,
      description: 'Seamlessly integrate on-premises infrastructure with cloud services for optimal flexibility and performance. Our hybrid solutions ensure data portability and workload optimization.',
      features: [
        'Multi-cloud integration',
        'Workload balancing',
        'Data sovereignty compliance',
        'Unified management'
      ]
    },
    {
      title: 'Cloud Deployment Services',
      icon: <FaServer className="service-icon" />,
      image: deployImage,
      description: 'Streamline your application deployment with automated CI/CD pipelines and fault-tolerant architectures tailored for scalability and security.',
      features: [
        'Infrastructure as Code (IaC)',
        'Automated scaling',
        'Zero-downtime deployments',
        'Multi-region support'
      ]
    },
    // ... (Add all other services similarly)
  ];

  return (
    <div className="cloud-page">
      {/* Hero Section */}
      <div className="cloud-hero">
        <div className="hero-content">
          <h1>Expert Cloud Consulting Services</h1>
          <p>Optimize your cloud infrastructure with tailored solutions for security, performance, and cost efficiency.</p>
          <button className="cta-button">Get a Free Assessment</button>
        </div>
        <div className="hero-image">
          <img src={cloudHero} alt="Cloud infrastructure" />
        </div>
      </div>

      {/* Split-Screen Services Section */}
      <div className="services-container">
        {services.map((service, index) => (
          <div 
            key={index} 
            className={`service-split ${index % 2 === 0 ? '' : 'reverse'}`}
          >
            <div className="split-image">
              <img 
                src={service.image} 
                alt={service.title} 
                onError={(e) => {
                  e.target.src = '/fallback-cloud.jpg'; // Fallback if image fails
                  e.target.style.objectFit = 'contain';
                }}
              />
            </div>
            <div className="split-content">
              <div className="service-header">
                {service.icon}
                <h3>{service.title}</h3>
              </div>
              <p>{service.description}</p>
              <ul className="features-list">
                {service.features.map((feature, i) => (
                  <li key={i}>
                    <span className="feature-icon">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="service-cta">Learn More</button>
            </div>
          </div>
        ))}
      </div>

      {/* Final CTA Section */}
      <div className="final-cta">
        <h2>Ready to Optimize Your Cloud Strategy?</h2>
        <p>Contact us for a free consultation and let our experts tailor a solution for your business.</p>
        <button className="cta-button">Schedule a Call</button>
      </div>
    </div>
  );
};

export default Cloud;