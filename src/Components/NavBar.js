import React from 'react';
import Hamburger from './hamburger';

import { Link } from 'react-router-dom'; // import Link

function NavBar() {
    return (
      <div className="NavBar">
        <Hamburger />
        <ul className="nav-items">
          <li><a href="/"><button className="button" id="sponsors-button">Home</button></a></li>
          <li><a href="https://ucmerced.az1.qualtrics.com/jfe/form/SV_bd9SUxJc0EjVhoq"><button className="button" id="mentor-button">Become a Judge</button></a></li>
          {/* <li><a href="https://live.hackmerced.com/"><button className="button" id="hackmerced-live-button">Live</button></a></li> */}
          <li><Link to="/aboutus"><button className="button" id="about-us-button">About Us</button></Link></li>
          {/* <li><Link to="/contactus"><button className="button" id="contact-us-button">Contact Us</button></Link></li> */}
          {/* <li><Link to="/sponsorus"><button className="button" id="sponsor-us-button">Sponsor Us</button></Link></li> */}
          <li><a href="https://events.mlh.com/events/14970-hacktoberfest-hack-day-merced-x-hackmerced?utm_source=ig&utm_medium=social&utm_content=link_in_bio"><button className="registerButton" id="register-button">Register!</button></a></li>
        </ul>
      </div>
    );
  }
  
  export default NavBar;