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
  const pairedCoreServices = [
    [
      {
        title: 'Hybrid Cloud Solutions',
        image: hybridImage,
        description:
          'Our hybrid cloud solutions bridge the gap between on-premises infrastructure and public cloud services, offering seamless integration, data portability, and maximum flexibility. This approach empowers businesses to innovate faster, maintain data sovereignty, and optimize IT operations through intelligent workload placement.',
      },
      {
        title: 'Deployment of Services',
        image: deployImage,
        description:
          'We ensure the smooth deployment of cloud-native and hybrid applications through streamlined CI/CD pipelines. Our engineers design fault-tolerant architectures and apply industry best practices to deliver scalable, secure, and efficient cloud environments tailored to business requirements.',
      },
    ],
    [
      {
        title: 'Security Enhancement',
        image: securityImage,
        description:
          'Security is a core priority. With Microsoft Defender for Cloud and Sentinel, we proactively identify risks, monitor compliance, and respond to threats in real time. We integrate these tools into your environment to elevate visibility, automate defenses, and harden your infrastructure against evolving attacks.',
      },
      {
        title: 'Firewall Implementation',
        image: firewallImage,
        description:
          'We implement enterprise-grade firewalls such as Fortinet and Sophos to safeguard your cloud edge. Our configurations include IPS/IDS, VPN, and application-level filtering for granular control over network access, reducing exposure to external threats and ensuring compliance with security policies.',
      },
    ],
  ];

  const supportServices = [
    // {
    //   title: 'Troubleshooting',
    //   image: troubleshootImage,
    //   description:
    //     'We provide fast and effective troubleshooting for cloud systems, addressing network, application, and infrastructure issues. Our experts identify root causes quickly and resolve issues efficiently to restore optimal service levels and minimize business disruption.',
    // },
    {
      title: '24/7 Monitoring & Support',
      image: monitoringImage,
      description:
        'Around-the-clock server and application monitoring is key to uptime. We utilize advanced observability tools and a proactive support team to detect anomalies, respond to alerts, and provide continuous technical assistance for smooth operations.',
    },
    {
      title: 'Cost Optimization',
      image: costImage,
      description:
        'We help organizations save on cloud costs by analyzing resource usage, rightsizing workloads, and eliminating waste. Our experts implement reserved instances, autoscaling strategies, and budget tracking to maximize value from every cloud dollar spent.',
    },
    {
      title: 'Lift & Shift Migration',
      image: migrationImage,
      description:
        'Migrate legacy workloads with zero data loss and minimal downtime using our lift-and-shift services. We handle architecture replication, infrastructure mapping, and rigorous testing to ensure business continuity during your cloud transition.',
    },
    {
      title: 'Backup & Disaster Recovery',
      image: backupImage,
      description:
        'Disaster recovery is more than backups—it’s about resilience. We provide comprehensive data protection and recovery planning with RTO/RPO alignment, geo-redundant storage, and automated failover strategies to safeguard critical operations during crises.',
    },
  ];

  return (
    <div className="cloud-container">
      <h1 className="cloud-title">Cloud Consulting Services</h1>

      <section className="cloud-section">
        <h2 className="cloud-section-title">Core Infrastructure & Security</h2>
        {pairedCoreServices.map((pair, index) => (
          <div className="cloud-service-row" key={index}>
            {pair.map((service, idx) => (
              <div className="cloud-service-column" key={idx}>
                <img src={service.image} alt={service.title} className="cloud-service-img" />
                <div className="cloud-service-text">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        ))}
      </section>

      <section className="cloud-section">
        <h2 className="cloud-section-title">Support & Operational Excellence</h2>
        <ul className="cloud-service-list">
          {supportServices.map((service, index) => (
            <li className="cloud-service-item" key={index}>
              <img src={service.image} alt={service.title} className="cloud-service-img small" />
              <div className="cloud-service-text">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Cloud;
