// import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

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
     


   {/* Navigation Bar  */}
   <nav className="Navbar">
        <div className="logo">
          <span className="logo-ibn">H</span>
          <span className="logo-green">E</span>
          <span className="logo-green">L</span>
          <span className="logo-ibn">M</span>
          <span className="logo-green">B</span>
          <span className="logo-green">Y</span>
          <span className="logo-green">T</span>
          <span className="logo-green">E</span>
          <span className="logo-green">S</span>
        </div>

        <ul className="nav-links">

          <li><Link to="/About-Us">About Us</Link> </li>


      {/* <li
          onMouseEnter={() => handleMouseEnter('CloudConsulting')}
          onMouseLeave={handleMouseLeave}
      >
          <Link to="/cloud-consulting">Cloud Consulting Services</Link>

      {dropdown === 'cloud-consulting' && (
      <ul className="dropdown">
      <li><Link to="/cloud-consulting/aws">AWS Consulting</Link></li>
      <li><Link to="/cloud-consulting/azure">Azure Consulting</Link></li>
      <li><Link to="/cloud-consulting/gcp">GCP Consulting</Link></li>
      </ul>
       )}
      </li> */}
         

          <li> <Link to="/cloud-consulting">Cloud Consulting Services</Link> </li>

          <li><Link to="/cyber-security">Cyber Security</Link></li> 
          
          <li><Link to="/Hosting-Services">Hosting Services</Link></li>
      
          <li><Link to="/company">Company</Link></li>

          <li><Link to="/contact-us">Contact Us</Link></li>
        </ul>
      </nav>




      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-content">
          <h1>
            Expert Cloud, Cybersecurity and DevOps Solutions <br />
            <span>Expert Protection Around the Clock</span>
          </h1>
          <p>
            VAPT • 24/7 MANAGED SECURITY • SIEM & SOAR CONSULTING • CLOUD SECURITY & MANAGEMENT
          </p>
          <button className="cta-button">Contact Our Expert</button>
        </div>
      </div>  





      <div className="why-helmbytes-container">
      <h2 className="section-title">Why HelmBytes?</h2>
      
      <div className="services-section">
        <div className="service-card">
          <h3>Cloud Consulting Excellence</h3>
          <p>
            As an AWS and Azure partner, we provide Cloud Assessment, Migration, and Optimization services. 
            We specialize in cost-saving strategies and enhanced performance across Public, Private, and Hybrid Cloud environments.
          </p>
        </div>

        <div className="service-card">
          <h3>Comprehensive Cybersecurity</h3>
          <p>
            We offer top-tier Managed Security (mSOC) services including Vulnerability Assessment, Pen Testing, and Red Team operations. 
            Our solutions integrate SIEM & SOAR with 24/7 monitoring and rapid incident response.
          </p>
        </div>

        <div className="service-card">
          <h3>End-to-End DevOps Solutions</h3>
          <p>
            We provide comprehensive DevOps services including CI/CD automation, infrastructure as code (IaC), 
            and container orchestration using Kubernetes and Docker. Our solutions enhance deployment speed, 
            reduce downtime, and improve system reliability.
          </p>
        </div>

        <div className="service-card">
          <h3>Data Backup & Recovery</h3>
          <p>
            Ensure business continuity with secure backup and disaster recovery solutions. 
            We provide automated backups and quick recovery for both cloud and on-prem environments.
          </p>
        </div>

        <div className="service-card">
          <h3>Cloud Cost Optimization</h3>
          <p>
            Maximize efficiency and reduce cloud expenses through monitoring, scaling, and automation. 
            We identify underutilized resources and suggest improvements.
          </p>
        </div>

        <div className="service-card">
          <h3>Infrastructure as Code (IaC)</h3>
          <p>
            Automate infrastructure provisioning and management using Terraform and Ansible. 
            Achieve consistency and scalability across multiple cloud environments.
          </p>
        </div>
      </div>
    </div>






    <div className="partners-section">
      <h2 className="section-title">Our Cyber Security And Cloud Consulting Partners</h2>
      <div className="partners-container">
        {/* Row 1 */}
        <div className="partners-row">
          <div className="partner-item">
            <img src="https://upload.wikimedia.org/wikipedia/commons/a/a8/Microsoft_Azure_Logo.svg" alt="Azure" />
          </div>
          <div className="partner-item">
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_logo.svg" alt="Google Cloud" />
          </div>
          <div className="partner-item">
            <img src="https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" alt="AWS" />
          </div>
          <div className="partner-item">
            <img src="https://www.jio.com/content/dam/jio/jio-logo.png" alt="Jio Cloud" />
          </div>
          <div className="partner-item">
            <img src="https://upload.wikimedia.org/wikipedia/commons/1/1b/OpenStack_logo_2016.svg" alt="OpenStack" />
          </div>
        </div>
          <div className="partner-item">
            <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Acronis_logo.svg" alt="Acronis" />
          </div>
          <div className="partner-item">
            <img src="https://upload.wikimedia.org/wikipedia/commons/1/12/Sophos_logo.svg" alt="Sophos" />
          </div>
          <div className="partner-item">
            <img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/Fortinet_logo.svg" alt="Fortinet" />
          </div>

        </div>
      </div>





    </div>
  );
} 

export default Home;
