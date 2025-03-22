import React from "react";
import "../css/devops.css";

const devOpsServices = [
  { title: "CI/CD Pipeline Automation", description: "Streamline deployments with automated CI/CD pipelines." },
  { title: "Infrastructure as Code (IaC)", description: "Automate infrastructure using Terraform, Ansible & more." },
  { title: "Kubernetes & Container Orchestration", description: "Manage scalable applications with Kubernetes & Docker." },
  { title: "Cloud-Native Application Development", description: "Build and deploy cloud-native solutions efficiently." },
  { title: "Monitoring & Logging Solutions", description: "Gain insights with centralized monitoring and logging." },
  { title: "Configuration Management", description: "Automate configurations with tools like Chef and Puppet." },
  { title: "Security & Compliance in DevOps", description: "Ensure security best practices and compliance in CI/CD." },
  { title: "Automated Testing & Quality Assurance", description: "Enhance reliability with automated testing frameworks." },
  { title: "Site Reliability Engineering (SRE)", description: "Improve system reliability and performance." },
  { title: "DevSecOps Implementation", description: "Integrate security seamlessly into DevOps workflows." },
];

const DevOpsSolutions = () => {
  return (
    <div className="devops-solutions">
      <h1 className="title">DevOps Solutions</h1>
      <p className="description">Accelerate software delivery with cutting-edge DevOps solutions.</p>
      <div className="services-grid">
        {devOpsServices.map((service, index) => (
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

export default DevOpsSolutions;

  