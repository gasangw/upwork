import React from 'react';
import { FaFacebookF } from 'react-icons/fa';
import { GrLinkedinOption } from 'react-icons/gr';
import { BsTwitter } from 'react-icons/bs';
import { BsYoutube } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import { AiFillApple } from 'react-icons/ai';
import { AiFillAndroid } from 'react-icons/ai';
import { AiOutlineCopyrightCircle } from 'react-icons/ai';


const Footer = () => {
  return (
    <footer>
      <div className='foot-container'>
         <div className='toogle-footer'>
            <p>For Clients</p>
            <ul>
                <li><a href="#">How to Hire</a></li>
                <li><a href="#"></a>Talent Marketplace</li>
                <li><a href="#"></a>Project Catalog</li>
                <li><a href="#"></a>Talent Scout</li>
                <li><a href="#"></a>Enterprise</li>
                <li><a href="#"></a>Payroll Services</li>
                <li><a href="#"></a>Direct Contracts</li>
                <li><a href="#"></a>Hire Worldwide</li>
                <li><a href="#"></a>Hire in the USA</li>
            </ul>      
         </div>
         <div className='toogle-footer'>
         <p>For Talent</p>
         <ul>
                <li><a href="#"></a>How to Find Work</li>
                <li><a href="#"></a>Direct Contracts</li>
                <li><a href="#"></a>Find Freelance Jobs Worldwide</li>
                <li><a href="#"></a>Find Freelance Jobs in the USA</li>
            </ul>
         </div>
         <div className='toogle-footer'>
            <p>Resources</p>
         <ul>
                <li><a href="#"></a>Help & Support</li>
                <li><a href="#"></a>Success Stories</li>
                <li><a href="#"></a>Upwork Reviews</li>
                <li><a href="#"></a>Resources</li>
                <li><a href="#"></a>Blog</li>
                <li><a href="#"></a>Community</li>
                <li><a href="#"></a>Affiliate Program</li>
                <li><a href="#"></a>Free Business tools</li>
            </ul>
         </div>
         <div className='toogle-footer'>
         <p>Company</p>
         <ul>
                <li><a href="#"></a>About Us</li>
                <li><a href="#"></a>Leadership</li>
                <li><a href="#"></a>Investor Relations</li>
                <li><a href="#"></a>Careers</li>
                <li><a href="#"></a>Our Impact</li>
                <li><a href="#"></a>Press</li>
                <li><a href="#"></a>Contact Us</li>
                <li><a href="#"></a>Trust, Safety & Security</li>
                <li><a href="#"></a>Modern Slavery Statement</li>
            </ul>
         </div>
         <div className='last-icon-sections'>
             <div>
               <h5>Follow us</h5>
                <ul>
                  <li>< FaFacebookF/></li>
                  <li><GrLinkedinOption/></li>
                  <li><BsTwitter /></li>
                  <li><BsYoutube /></li>
                  <li><BsInstagram  /></li>
                </ul>
                <h5>Mobile app</h5>
                <ul>
                  <li><AiFillApple /></li>
                  <li><AiFillAndroid /></li>
                </ul>
             </div>
             <hr />
             <div>
               <h5>
                  <AiOutlineCopyrightCircle />
                  2015 - 2023 Upwork® Global Inc.
               </h5>
               <p><a href=''></a>Terms of Service</p>
               <p><a href=''></a>Privacy Policy</p>
               <p><a href=''></a>CA Notice at Collection</p>
               <p><a href=''></a>Cookie Settings</p>
               <p><a href=''></a>Accessibility</p>
             </div>
         </div>
      </div>
    </footer>
  )
}

export default Footer
