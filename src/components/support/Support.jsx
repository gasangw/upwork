import React from 'react'
import svgIcon from '../img/ukraine-help.svg'
import './support.css'

const Support = () => {
  return (
    <div className='support-main mt-5'>
      <div className='support-text'>
        <h1>We support Ukraine</h1>
        <p className='fs-5'>We are taking action to help our freelancers, our <br/>  clients, and the people of Ukraine—and so can you.</p>
        <button className='success'>Learn more</button>
      </div>
      <div className='heart-holder'>
        <img src={svgIcon} alt='heart-hand' className='heart-hand me-auto' />
      </div>
    </div>
  )
}

export default Support
