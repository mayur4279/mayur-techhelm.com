// import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function Home() {
  return (

    <div className="Home Container">
        
        <div className="top-bar"> 
        <span>SINCE 2024 | Certified Employees</span>  
        <div className="contact-info ">  
          <span>INDIA: +91 9881052089</span>
          <span>sales@techhelm.com </span>    
        </div>
        </div>
     


   {/* Navigation Bar  */}
   <nav className="Navbar">
        <div className="logo">
          <span className="logo-ibn">T</span>
          <span className="logo-green">E</span>
          <span className="logo-green">C</span>
          <span className="logo-ibn">H</span>
          <span className="logo-green">E</span>
          <span className="logo-green">L</span>
          <span className="logo-green">M</span>
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

    </div>
  );
} 

export default Home;
