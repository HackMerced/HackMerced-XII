import React from 'react';

import Facebook from '../Assets/facebook 1.svg';
import Instagram from '../Assets/instagram 1.svg';
import Discord from '../Assets/discord 1.svg';
import Line from '../Assets/Vector 1.svg';
function Footer() {
    return (
      <div className="Footer-Comp">
        <div className="Footer-container">
          <div>
            <div className="Footer-socialmedia">
           
            <a style={{ textDecoration: 'none' }} href="http://instagram.com/hackmerced"><div><img className='Footer-Logo' src={Instagram} alt="Instagram logo"/></div>Instagram<br/></a>
            </div>
            <div className="Footer-socialmedia">
           
            <a style={{ textDecoration: 'none' }} href="https://www.facebook.com/hackmerced"><div><img className='Footer-Logo' src={Facebook} alt="Facebook logo"/></div>Facebook<br/></a>
            </div>
            <div className="Footer-socialmedia">
           
             <a style={{ textDecoration: 'none' }} href="https://hackmerced.com/discord"><div><img className='Footer-Logo' src={Discord} alt="Discord logo"/></div>Discord<br/></a>
            
            </div>
          </div>
          
          <div></div>

          <div>
            <img className='Footer-Vector' src={Line} alt="vector"/>
            <div className="Footer-description">
                <br/>
                Made with &#9829; by the HackMerced team
                <br/>
                <br/>
                Sponsored by MLH - view the <a href="https://github.com/MLH/mlh-policies/blob/main/code-of-conduct.md">Code of Conduct</a>
                <br/>
                <br/>
                University of California, Merced
                <br/>
                5200 Lake Rd
                <br/>
                Merced, CA 95348
                <br/>
                <br/>
                For inquiries, please contact Brandon Del Mundo at <a href="mailto:bdelmundo@ucmerced.edu">bdelmundo@ucmerced.edu</a>
            </div>
          </div>

        </div>
       
      </div>
    );
  }
  
  export default Footer;