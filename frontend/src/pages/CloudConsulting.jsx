import React from "react";
import "../css/cloud-consulting.css";
import { FaCloud, FaServer, FaShieldAlt, FaDesktop, FaDatabase, FaSyncAlt } from "react-icons/fa";

const services = [
  { icon: <FaShieldAlt />, title: "Azure Cloud Security Assessment & Compliances" },
  { icon: <FaSyncAlt />, title: "Cloud Migration Services" },
  { icon: <FaShieldAlt />, title: "Azure Security Services" },
  { icon: <FaCloud />, title: "Azure AD Support Services" },
  { icon: <FaDesktop />, title: "Azure Virtual Desktop Infrastructure" },
  { icon: <FaServer />, title: "Cloud Support And Managed Services" },
  { icon: <FaDatabase />, title: "Cloud Cost Optimization" },
  { icon: <FaCloud />, title: "Application & Data Modernization" },
  { icon: <FaSyncAlt />, title: "Backup & Disaster Recovery Solutions" },
  { icon: <FaCloud />, title: "Hybrid Cloud Services" },
  { icon: <FaServer />, title: "Microsoft Office 365 Migration" },
  { icon: <FaCloud />, title: "Microsoft 365 Support Services" },
];

const CloudConsulting = () => {
  return (
    <div className="cloud-consulting">
      <h1 className="title">Cloud Consulting Services</h1>
      <p className="description">Expert cloud solutions tailored to your business needs.</p>
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <div className="icon">{service.icon}</div>
            <h3>{service.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CloudConsulting;
