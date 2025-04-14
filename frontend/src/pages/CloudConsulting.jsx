import React from "react";
import "../css/cloud-consulting.css";

// Import images
// import hybridImage from '../assets/hybrid-cloud.jpg';
// import deployImage from '../assets/deployment.jpg';
import securityImage from '../assets/security.jpg';
import monitoringImage from '../assets/monitoring.jpg';
import costImage from '../assets/cost-optimization.jpg';
import migrationImage from '../assets/migration.jpg';
import backupImage from '../assets/backup.jpg';
import firewallImage from '../assets/firewall.jpg';
// import troubleshootImage from '../assets/troubleshooting.jpg';
// import cloudHero from '../assets/cloud-hero.jpg';

// Import icons
import { FaShieldAlt, FaServer, FaSyncAlt, FaChartLine, FaMoneyBillWave, FaDatabase, FaNetworkWired, FaLifeRing } from 'react-icons/fa';
const CloudServices = () => {
  const services = [
    {
      title: "Hybrid Cloud Solutions",
      icon: <FaSyncAlt className="service-icon" />,
      description: "Seamlessly integrate your on-premises infrastructure with public cloud services for optimal flexibility and performance. Our hybrid solutions provide:",
      features: [
        "Unified management across environments",
        "Workload portability and optimization",
        "Enhanced security and compliance",
        "Cost-effective resource allocation"
      ],
      image: "hybrid-cloud.jpg"
    },
    {
      title: "Cloud Deployment Services",
      icon: <FaServer className="service-icon" />,
      description: "Professional deployment of cloud-native and hybrid applications with industry best practices including:",
      features: [
        "Automated CI/CD pipelines",
        "Infrastructure as Code (IaC)",
        "Multi-cloud deployment strategies",
        "Performance-optimized architectures"
      ],
      image: "deployment.jpg"
    },
    // Add more services as needed
    {
      title: 'Cloud Security Enhancement',
      icon: <FaShieldAlt className="service-icon" />,
      image: securityImage,
      description: 'Security is a core priority. With Microsoft Defender for Cloud and Sentinel, we proactively identify risks, monitor compliance, and respond to threats in real time. We integrate these tools into your environment to elevate visibility, automate defenses, and harden your infrastructure against evolving attacks.',
      features: [
        'Microsoft Defender for Cloud implementation',
        'Azure Sentinel deployment',
        'Compliance monitoring',
        'Threat detection & response'
      ]
    },
    {
      title: 'Firewall Implementation',
      icon: <FaNetworkWired className="service-icon" />,
      image: firewallImage,
      description: 'We implement enterprise-grade firewalls such as Fortinet and Sophos to safeguard your cloud edge. Our configurations include IPS/IDS, VPN, and application-level filtering for granular control over network access, reducing exposure to external threats and ensuring compliance with security policies.',
      features: [
        'Fortinet & Sophos deployment',
        'IPS/IDS configuration',
        'Application-level filtering',
        'VPN setup & management'
      ]
    },
    // {
    //   title: 'Cloud Troubleshooting',
    //   icon: <FaLifeRing className="service-icon" />,
    //   image: troubleshootImage,
    //   description: 'We provide fast and effective troubleshooting for cloud systems, addressing network, application, and infrastructure issues. Our experts identify root causes quickly and resolve issues efficiently to restore optimal service levels and minimize business disruption.',
    //   features: [
    //     'Performance bottleneck analysis',
    //     'Connectivity issue resolution',
    //     'Configuration error correction',
    //     'Root cause analysis reports'
    //   ]
    // },
    {
      title: '24/7 Monitoring & Support',
      icon: <FaChartLine className="service-icon" />,
      image: monitoringImage,
      description: 'Around-the-clock server and application monitoring is key to uptime. We utilize advanced observability tools and a proactive support team to detect anomalies, respond to alerts, and provide continuous technical assistance for smooth operations.',
      features: [
        'Real-time performance monitoring',
        'Automated alerting system',
        'Incident response protocols',
        'Monthly health reports'
      ]
    },
    {
      title: 'Cloud Cost Optimization',
      icon: <FaMoneyBillWave className="service-icon" />,
      image: costImage,
      description: 'We help organizations save on cloud costs by analyzing resource usage, rightsizing workloads, and eliminating waste. Our experts implement reserved instances, autoscaling strategies, and budget tracking to maximize value from every cloud dollar spent.',
      features: [
        'Resource utilization analysis',
        'Reserved instance planning',
        'Autoscaling configuration',
        'Budget forecasting'
      ]
    },
    {
      title: 'Lift & Shift Migration',
      icon: <FaServer className="service-icon" />,
      image: migrationImage,
      description: 'Migrate legacy workloads with zero data loss and minimal downtime using our lift-and-shift services. We handle architecture replication, infrastructure mapping, and rigorous testing to ensure business continuity during your cloud transition.',
      features: [
        'Workload assessment',
        'Migration planning',
        'Data transfer execution',
        'Post-migration validation'
      ]
    },
    {
      title: 'Backup & Disaster Recovery',
      icon: <FaDatabase className="service-icon" />,
      image: backupImage,
      description: 'Disaster recovery is more than backups—its about resilience. We provide comprehensive data protection and recovery planning with RTO/RPO alignment, geo-redundant storage, and automated failover strategies to safeguard critical operations during crises.',
      features: [
        'RTO/RPO definition',
        'Geo-redundant storage setup',
        'Automated backup schedules',
        'Disaster recovery testing'
      ]
    }

  ];

  return (
    <div className="cloud-services-container">
      <div className="services-header">
        <h1>Enterprise Cloud Solutions</h1>
        <p>Transform your business with our comprehensive cloud services</p>
      </div>

      {services.map((service, index) => (
        <div key={index} className="service-card">
          <div className="service-content">
            <div className="service-icon-container">
              {service.icon}
            </div>
            <h2>{service.title}</h2>
            <p className="service-description">{service.description}</p>
            
            <div className="service-features">
              <h3>Key Features:</h3>
              <ul>
                {service.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="service-image-container">
            <img 
              src={`/assets/${service.image}`} 
              alt={service.title}
              className="service-image"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default CloudServices;