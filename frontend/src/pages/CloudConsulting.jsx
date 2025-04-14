import React from "react";
import "../css/cloud-consulting.css";

// Icons
import { 
  FaCloud, FaServer, FaShieldAlt, FaNetworkWired, 
  FaTools, FaEye, FaDollarSign, FaExchangeAlt, FaDatabase 
} from 'react-icons/fa';

const Cloud = () => {
  const services = [
    {
      title: 'Hybrid Cloud',
      icon: <FaCloud />,
      description: 'Seamless integration of on-prem and cloud environments.',
      highlight: 'Flexible workload management'
    },
    // Add all other services...
  ];

  return (
    <div className="compact-cloud-page">
      {/* Hero (unchanged) */}

      <div className="compact-services-grid">
        {services.map((service, index) => (
          <div key={index} className="compact-service-card">
            <div className="card-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <div className="card-highlight">{service.highlight}</div>
          </div>
        ))}
      </div>
    </div>
  );
};