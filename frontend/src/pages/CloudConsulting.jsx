// Cloud.jsx
import React from "react";
import "./cloud.css";
import hybridCloudImg from "./assets/hybrid-cloud.jpg";
import deploymentImg from "./assets/deployment.jpg";
import securityImg from "./assets/security.jpg";
import monitoringImg from "./assets/monitoring.jpg";
import costImg from "./assets/cost-optimization.jpg";
import migrationImg from "./assets/migration.jpg";
import backupImg from "./assets/backup.jpg";
import firewallImg from "./assets/firewall.jpg";

const services = [
  {
    title: "Hybrid Cloud Solutions",
    description: "Seamlessly integrate on-premise infrastructure with public and private clouds for agility and scalability.",
    image: hybridCloudImg
  },
  {
    title: "Deployment of Services",
    description: "Streamlined deployment strategies for cloud-native and hybrid environments.",
    image: deploymentImg
  },
  {
    title: "Security Enhancement",
    description: "Boost your cloud security with Microsoft Defender for Cloud and Azure Sentinel.",
    image: securityImg
  },
  {
    title: "Troubleshooting",
    description: "Swift identification and resolution of cloud-related issues to ensure minimal downtime.",
    image: monitoringImg
  },
  {
    title: "24/7 Monitoring & Support",
    description: "Proactive monitoring and round-the-clock support to ensure optimal cloud performance.",
    image: monitoringImg
  },
  {
    title: "Cost Optimization",
    description: "Maximize your cloud ROI with strategic cost-saving solutions and resource management.",
    image: costImg
  },
  {
    title: "Lift & Shift Migration",
    description: "Efficient migration of existing workloads to the cloud without disruption.",
    image: migrationImg
  },
  {
    title: "Backup & Disaster Recovery",
    description: "Robust cloud-based backup and disaster recovery plans to protect your critical data.",
    image: backupImg
  },
  {
    title: "Firewall Implementation",
    description: "Expert implementation of advanced firewalls like Fortinet and Sophos.",
    image: firewallImg
  }
];

const Cloud = () => {
  return (
    <div className="cloud-container">
      <h1 className="cloud-title">Cloud Consulting Services</h1>
      <p className="cloud-subtitle">Empowering your business with reliable and secure cloud solutions.</p>
      <div className="cloud-services">
        {services.map((service, index) => (
          <div className="cloud-card" key={index}>
            <img src={service.image} alt={service.title} className="cloud-image" />
            <h2 className="cloud-card-title">{service.title}</h2>
            <p className="cloud-card-description">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cloud;
