// Cloud.jsx
import React from "react";
import "../css/cloud-consulting.css";

const Cloud = () => {
  return (
    <div className="cloud-container">
      <h2 className="cloud-title">Cloud Consulting Services</h2>

      <div className="cloud-services">
        {/* Hybrid Cloud Solutions */}
        <div className="cloud-section">
          <div className="cloud-text">
            <h3 className="cloud-card-title">Hybrid Cloud Solutions</h3>
            <p className="cloud-card-description">
              We design and implement hybrid cloud solutions that combine the benefits of public and private clouds, enabling seamless data mobility and high availability. This approach allows businesses to scale workloads efficiently while maintaining security and control.
            </p>
          </div>
          <div className="cloud-image-container">
            <img
              src="https://www.ibm.com/cloud-computing/images/hybrid-cloud-diagram.svg"
              alt="Hybrid Cloud"
              className="cloud-image"
            />
          </div>
        </div>

        {/* Deployment of Services */}
        <div className="cloud-section">
          <div className="cloud-image-container">
            <img
              src="https://www.ntaskmanager.com/wp-content/uploads/2022/05/How-to-Deploy-a-Web-Application.png"
              alt="Deployment"
              className="cloud-image"
            />
          </div>
          <div className="cloud-text">
            <h3 className="cloud-card-title">Deployment of Services</h3>
            <p className="cloud-card-description">
              Our team assists in deploying scalable and secure cloud-based applications and infrastructure. We automate CI/CD pipelines and ensure high availability, optimal performance, and seamless user experiences during rollout across environments.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cloud;
