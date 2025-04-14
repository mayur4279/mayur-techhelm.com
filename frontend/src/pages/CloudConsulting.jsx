// Cloud.jsx
import React from "react";
import "../css/cloud-consulting.css";

import hybridImage from '../assets/hybrid-cloud.jpg';
import deployImage from '../assets/deployment.jpg';
import securityImage from '../assets/security.jpg';
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
        'We design and implement hybrid cloud solutions that combine the benefits of public and private clouds, enabling seamless data mobility, high availability, and scalability. Our approach ensures that businesses can run workloads securely and efficiently across environments while retaining control and visibility.',
    },
    {
      title: 'Deployment of Services',
      image: deployImage,
      description:
        'Our team assists in deploying scalable and secure cloud-based applications and infrastructure. We automate CI/CD pipelines to ensure high availability, optimal performance, and seamless user experiences during rollout across multiple environments.',
    },
    {
      title: 'Security Enhancement',
      image: securityImage,
      description:
        'We enhance your cloud security posture using tools like Microsoft Defender for Cloud and Sentinel. This includes threat detection, vulnerability management, and incident response to keep your infrastructure protected at all times.',
    },
    // {
    //   title: 'Troubleshooting',
    //   image: troubleshootImage,
    //   description:
    //     'Our experts diagnose and resolve cloud-related issues quickly to reduce downtime and disruption. Whether it’s performance, connectivity, or configuration problems, we ensure smooth and stable cloud operations.',
    // },
    {
      title: '24/7 Monitoring & Support',
      image: monitoringImage,
      description:
        'We offer continuous monitoring and technical support for your servers and cloud infrastructure. With real-time alerts and rapid response, our team ensures high availability and proactive problem resolution around the clock.',
    },
    {
      title: 'Cost Optimization',
      image: costImage,
      description:
        'Our cost optimization services identify underutilized resources and help implement strategies for efficient cloud spending. We help you cut unnecessary costs while improving performance and utilization.',
    },
    {
      title: 'Lift & Shift Migration',
      image: migrationImage,
      description:
        'We facilitate smooth lift-and-shift migrations of applications and workloads to the cloud with minimal downtime. Our approach ensures that your operations continue without disruption while transitioning to a modern infrastructure.',
    },
    {
      title: 'Backup & Disaster Recovery',
      image: backupImage,
      description:
        'We implement robust backup and disaster recovery strategies tailored to your business needs. This guarantees data availability, integrity, and rapid recovery during system failures, cyber incidents, or natural disasters.',
    },
    {
      title: 'Firewall Implementation',
      image: firewallImage,
      description:
        'We deploy and manage next-gen firewall solutions such as Fortinet and Sophos to secure your network perimeter. Our firewalls are configured to prevent unauthorized access and monitor traffic across your cloud environment.',
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
