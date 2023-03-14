import React from 'react';
import { BsFillPinAngleFill } from "react-icons/bs";
import { RiShieldStarLine } from "react-icons/ri";
import { HiOutlinePencilAlt } from "react-icons/hi";
import gif from '../img/gifs.png';
import './about.css'

const About = ()=> {
  return (
    <div className='wrapper'>
      <div>
         <img src={gif} alt='gif' className='gif'/>
      </div>
      <div className='text-wrap'>
        <h2 className='wrap-heading mb-1'>Up your work game, it’s free.</h2>
        <div className='work-wrap-items'>
           <ul className='work-item'>
             <li className='icon'><HiOutlinePencilAlt /></li>
             <h3 className='icon-heading'>No cost to join</h3>
           </ul>
           <p className='work-description'>Register and browse professionals, explore projects, or even book a consultation</p>
        </div>
        <div className='work-wrap-items'>
           <ul className='work-item'>
             <li className='icon'><BsFillPinAngleFill /></li>
             <h3 className='icon-heading'>Post a job and hire top talent.</h3>
           </ul>
           <p className='work-description'>Finding talent doesn’t have to be a chore. Post a job or we can search for you!</p>
        </div>
        <div className='work-wrap-items'>
           <ul className='work-item'>
             <li className='icon'><RiShieldStarLine /></li>
             <h3 className='icon-heading'>Work with the best—without breaking the bank.</h3>
           </ul>
           <p className='work-description'>Register and browse professionals, explore projects, or even book a consultation</p>
        </div>
        <div className='buttons mt-2 d-flex gap-4'>
            <button className='btn-success'>Sign up for free</button>
            <button className='success'>Learn how to hire</button>
        </div>
      </div>     
    </div>
  )
}

export default About;
