// Cloud.jsx
import React from "react";
import "../css/cloud-consulting.css";

const services = [
  {
    title: "Hybrid Cloud Solutions",
    description: "Seamlessly integrate on-premise infrastructure with public and private clouds for agility and scalability.",
    image: "https://images.unsplash.com/photo-1581090700227-1e8e5f1a5b8b"
  },
  {
    title: "Deployment of Services",
    description: "Streamlined deployment strategies for cloud-native and hybrid environments.",
    image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg"
  },
  {
    title: "Security Enhancement",
    description: "Boost your cloud security with Microsoft Defender for Cloud and Azure Sentinel.",
    image: "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7"
  },
  {
    title: "Troubleshooting",
    description: "Swift identification and resolution of cloud-related issues to ensure minimal downtime.",
    image: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg"
  },
  {
    title: "24/7 Monitoring & Support",
    description: "Proactive monitoring and round-the-clock support to ensure optimal cloud performance.",
    image: "https://images.unsplash.com/photo-1581093588401-9b6c1f0c0f8e"
  },
  {
    title: "Cost Optimization",
    description: "Maximize your cloud ROI with strategic cost-saving solutions and resource management.",
    image: "https://images.pexels.com/photos/4386373/pexels-photo-4386373.jpeg"
  },
  {
    title: "Lift & Shift Migration",
    description: "Efficient migration of existing workloads to the cloud without disruption.",
    image: "https://images.unsplash.com/photo-1581090700227-1e8e5f1a5b8b"
  },
  {
    title: "Backup & Disaster Recovery",
    description: "Robust cloud-based backup and disaster recovery plans to protect your critical data.",
    image: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg"
  },
  {
    title: "Firewall Implementation",
    description: "Expert implementation of advanced firewalls like Fortinet and Sophos.",
    image: "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7"
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
