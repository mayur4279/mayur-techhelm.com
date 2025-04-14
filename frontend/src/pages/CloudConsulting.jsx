// Cloud.jsx
import React from "react";
import "../css/cloud-consulting.css";

import hybridImage from '../assets/hybrid-cloud.jpg';
import deployImage from '../assets/deployment.jpg';
import securityImage from '../assets/security.jpg';
// import troubleshootImage from '../assets/troubleshooting.jpg';
import monitoringImage from '../assets/monitoring.jpg';
import costImage from '../assets/cost-optimization.jpg';
import migrationImage from '../assets/migration.jpg';
import backupImage from '../assets/backup.jpg';
import firewallImage from '../assets/firewall.jpg';


const Cloud = () => {
  const services = [
    {
      title: 'Hybrid Cloud Solutions',
      image: hybridImage,
      description:
        'We design and implement hybrid cloud solutions that combine the benefits of public and private clouds, enabling seamless data mobility, scalability, and high availability.',
    },
    {
      title: 'Deployment of Services',
      image: deployImage,
      description:
        'We deploy scalable and secure cloud-based applications and infrastructure, automating CI/CD pipelines to ensure high availability and seamless user experiences.',
    },
    {
      title: 'Security Enhancement',
      image: securityImage,
      description:
        'Implementing Microsoft Defender for Cloud and Sentinel to proactively detect and respond to threats, ensuring your infrastructure remains secure and compliant.',
    },
    // {
    //   title: 'Troubleshooting',
    //   image: troubleshootImage,
    //   description:
    //     'Rapid identification and resolution of cloud-related issues to minimize downtime and keep services running smoothly.',
    // },
    {
      title: '24/7 Monitoring & Support',
      image: monitoringImage,
      description:
        'Round-the-clock monitoring and support of servers to ensure reliability, performance, and fast issue resolution.',
    },
    {
      title: 'Cost Optimization',
      image: costImage,
      description:
        'Analyzing your cloud infrastructure to reduce costs by identifying underutilized resources and optimizing workloads.',
    },
    {
      title: 'Lift & Shift Migration',
      image: migrationImage,
      description:
        'Seamless migration of workloads and applications from on-prem to cloud environments with minimal disruption.',
    },
    {
      title: 'Backup & Disaster Recovery',
      image: backupImage,
      description:
        'Implementing robust backup and DR strategies to safeguard data and ensure business continuity during unexpected events.',
    },
    {
      title: 'Firewall Implementation',
      image: firewallImage,
      description:
        'Deploying advanced firewall solutions like Fortinet and Sophos to protect your network from external threats.',
    },
  ];

  return (
    <div className="cloud-container">
      <h1 className="cloud-title">Cloud Consulting Services</h1>
      <div className="cloud-services">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <img src={service.image} alt={service.title} className="service-image" />
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </div>

      
    </div>
  );
};

export default Cloud;


