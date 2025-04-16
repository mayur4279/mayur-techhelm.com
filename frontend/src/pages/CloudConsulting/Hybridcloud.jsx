// import { motion } from 'framer-motion';
import  '../../css/hybridcloud.css'

function Home() {
  return (

    <div className="Home Container">
        
        <div className="top-bar"> 
        <span>SINCE 2024 | Certified Employees</span>  
        <div className="contact-info ">  
          <span>INDIA: +91 9881052089</span>
          <span>sales@helmbytes.com </span>    
        </div>
        </div>


<div className="links-container">
  {/* Consultancy Section */}
  <div className="links-column">
    <div className="column-title">Cloud Consulting Services</div>
    <div className="link-item">➔ Hybrid Cloud Solutions Aws & Azure</div>
    <div className="link-item">➔ Cloud Backup Solutions</div>
    <div className="link-item">➔ 24/7 monitoring & support of the Cloud Servers</div>
    <div className="link-item">➔ Cloud Cost Optimization</div>
    <div className="link-item">➔ Cloud Security Enhancement</div>
    <div className="link-item">➔ Cloud Disaster Recovery</div>
    <div className="link-item">➔ Cloud lift & shift migration </div>

  </div>




  {/* Tech Support Section */}
  <div className="links-column">
    <div className="column-title">Security Services</div>
    <div className="link-item">➔ VAPT Services</div>
    <div className="link-item">➔ Security Enhancement with Microsoft Defender for cloud</div>
    <div className="link-item">➔ Security Enhancement with Microsoft Sentinal</div>
    <div className="link-item">➔ Fortinet Firewall Implementation</div>
    <div className="link-item">➔ Fortinet Firewall Implementation</div>
    <div className="link-item">➔ Sophose Firewall Implementation</div>

  </div>

  {/* Resource Center Section */}
  <div className="links-column">
    <div className="column-title">DevOps Solutions</div>
    <div className="link-item">➔ CI/CD Pipeline Automation</div>
    <div className="link-item">➔ Infrastructure as Code (IaC)</div>
    <div className="link-item">➔ Kubernetes & Container Orchestration</div>
    <div className="link-item">➔ Monitoring & Logging Solutions </div>
    <div className="link-item">➔ DevSecOps Implementation</div>
  </div>



  {/* Reach Us Section */}
  <div className="links-column">
    <div className="column-title">Reach Us</div>
    <div className="link-subtitle">For Sales</div>
    <div className="link-item">📞 India: +91 9881052089</div>
    <div className="link-item">✉️ sales@helmbytes.com</div>
    <div className="link-subtitle">For Support</div>
    <div className="link-item">📞 India: +91 9881052089</div>
    <div className="link-subtitle">For General</div>
    <div className="link-item">📞 India: +91-9881052089</div>
  </div>
</div>








</div>
  );
} 

export default Home;


