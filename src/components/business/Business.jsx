import React from 'react';
import './business.css';
import { MdStars } from 'react-icons/md';
import { AiFillDollarCircle } from 'react-icons/ai';
import { IoIosCheckmarkCircle } from 'react-icons/io';
import { AiFillStar } from 'react-icons/ai';
import { BsArrowClockwise } from 'react-icons/bs';
import Cart from '../img/cartoon.png'

const Business = () => {
  return (
    <div className='business-cont'>
      <div className='business-description'>
        <h1>Why businesses<br/> turn to Upwork</h1>
        <div className='each-sec mt-4'>
          <div>
            <MdStars className='mdstar'/>
          </div>
          <div>
            <h6 className='mdhead'>Proof of quality</h6>
            <p className='mdtext'>Check any pro’s work samples, client reviews, and identity verification.</p>
          </div>
        </div>
        <div className='each-sec mt-3'>
        <div>
            <AiFillDollarCircle className='mdstar'/>
            </div>
            <div>
            <h6 className='mdhead'>No cost until you hire</h6>
            <p className='mdtext'>Interview potential fits for your job, negotiate rates, and only pay for work you approve.</p>
        </div>
        </div>
        <div className='each-sec mt-3'>
             <div>
            <IoIosCheckmarkCircle className='mdstar'/>
            </div>
            <div>
            <h6 className='mdhead'>Safe and secure</h6>
            <p className='mdtext'>Check any pro’s work samples, client reviews, and identity verification.</p>
        </div>
        </div>
        <img src={Cart} alt="cartoon" className='mycart'/>
      </div>
      <div className='business-card-two'>
        <h1>We’re<br />the world’s work <br />marketplace</h1>
        <div className='each-sec'>
            <div>
            <AiFillStar className='aistar' />
            </div>
            <div>
              <h1 className='rate'>4.9/5</h1>
              <p className='rate fs-5'>Clients rate professionals on Upwork</p>
            </div>
        </div>
        <div className='each-sec'>
            <div>
            <BsArrowClockwise className='aistar'/>
            </div>
            <div>
              <h1 className='rate'>Award winner</h1>
              <p className='rate fs-5'>G2’s 2021 Best Software Awards</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Business
