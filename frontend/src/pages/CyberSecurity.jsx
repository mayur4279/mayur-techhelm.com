import React from "react";
import "../css/security.css";

const securityServices = [
  { title: "VAPT Audit Services", description: "Identify and mitigate vulnerabilities with our expert VAPT assessments.", image: "vapt.png" },
  { title: "Managed SIEM", description: "Real-time security event monitoring and response for proactive defense.", image: "siem.png" },
  { title: "Managed SOC Services", description: "24/7 Security Operations Center (SOC) for threat detection and mitigation.", image: "soc.png" },
  { title: "Managed Cyber Security Services", description: "Comprehensive cybersecurity solutions to safeguard your organization.", image: "cyber-security.png" },
  { title: "Azure Sentinel Services", description: "Advanced cloud-native SIEM solution for intelligent threat analytics.", image: "sentinel.png" },
  { title: "Compliance and Regulatory Consulting", description: "Ensure compliance with industry standards and regulatory requirements.", image: "compliance.png" },
  { title: "vCISO Services", description: "Expert virtual CISO services to enhance your security strategy.", image: "vciso.png" },
  { title: "Red Team Services", description: "Simulated attacks to test and improve your security posture.", image: "red-team.png" },
  { title: "Managed Firewalls & IPS", description: "Next-gen firewall and intrusion prevention solutions for protection.", image: "firewall.png" },
  { title: "Endpoint & XDR Protection Platform", description: "Comprehensive endpoint security with extended detection & response.", image: "xdr.png" },
  { title: "Identity & Access Management", description: "Secure and streamline user identity and access management.", image: "iam.png" }
];

const CyberSecuritySolutions = () => {
  return (
    <div className="cyber-security">
      <h1 className="title">Cyber Security Solutions</h1>
      <p className="description">Protect your business with industry-leading security solutions.</p>
      <div className="services-grid">
        {securityServices.map((service, index) => (
          <div key={index} className="service-card">
            <img src={service.image} alt={service.title} className="service-icon" />
            <h3>{service.title}</h3>
            <p className="service-description">{service.description}</p>
            <a href="#" className="read-more">Read More →</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CyberSecuritySolutions;
