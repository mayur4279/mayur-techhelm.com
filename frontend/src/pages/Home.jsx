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

          <li><Link to="/cloud-consulting">Cloud Consulting Services</Link></li>

          <li><Link to="/cyber-security">Cyber Security</Link></li> 
          
          <li><Link to="/Hosting-Services">Hosting Services</Link></li>
      
          <li><Link to="/company">Company</Link></li>

          <li><Link to="/contact-us">Contact Us</Link></li>

        </ul>

      </nav>

    </div>
  );
}

export default Home;
