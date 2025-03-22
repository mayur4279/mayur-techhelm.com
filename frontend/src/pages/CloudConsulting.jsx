import React from "react";
import "../css/cloud-consulting.css";

const services = [
  { title: "Azure Modernisation – Application & Data", description: "Optimize applications and data for efficiency and innovation on Microsoft Azure." },
  { title: "Backup & Disaster Recovery Solutions", description: "Secure your data against disruptions for uninterrupted business continuity." },
  { title: "Hybrid Cloud Solutions", description: "Seamless integration for unparalleled flexibility and efficiency." },
  { title: "Migration", description: "Smooth business migration for secure cloud transitions." },
  { title: "Optimisation & Well-Architected Framework", description: "Optimize cloud efficiency while ensuring a scalable and resilient foundation." },
  { title: "Support & Managed Services", description: "24/7 proactive solutions for optimized IT performance." }
];

const CloudConsulting = () => {
  return (
    <div className="cloud-consulting">
      <h1 className="title">Cloud Consulting Services</h1>
      <p className="description">Expert cloud solutions tailored to your business needs.</p>
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <h3>{service.title}</h3>
            <p className="service-description">{service.description}</p>
            <a href="#" className="read-more">Read More →</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CloudConsulting;

