import { motion } from 'framer-motion';

function Home() {
  return (

    <div className="Home Container">
        
        <div classname="top bar"> 
        <span>SINCE 2024 | Certified Employees</span>  
        <div classname="contact-info ">  
          <span>INDIA: +91 9881052089</span>
          <span>sales@techhelm.com </span>    
        </div>
        </div>
     


   {/* Navigation Bar  */}
   <nav className="navbar">
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
          <li>Home</li>
          <li>Why Techelm</li>
          <li>Cloud Consulting Services</li>
          <li>Cyber Security</li>
          <li>Hosting Services</li>
          <li>Resource Center</li>
          <li>Company</li>
          <li>Contact Us</li>
        </ul>
      </nav>

    </div>
  );
}

export default Home;
