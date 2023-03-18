import React from 'react'
import girl from '../img/girlComp.jpg'

const Card3 = () => {
  return (
    <main className='card-box mt-5'>
      <div>
        <img src={girl} alt="girlLaptop" className='girlLaptop'/>
      </div>
      <div className='next-to-girl-pic'>
        <p className='pb-3 pt-2 fs-4'>For talent</p>
        <h1 className='work'>Find great <br/>work</h1>
        <p className='fs-5 clients'>Meet clients you’re excited to work with and take your career or business to new heights.</p>
        <hr />
        <div className='opportunities'>
          <div>
            <p>Find opportunities for every stage of your freelance career</p>
          </div>
          <div>
            <p>Control when, where, and how you work</p>
          </div>
          <div>
            <p>Explore different ways to earn</p>
          </div>
          <button className='btn btn-info opp'>Find Opportunities</button>
        </div>
      </div>
    </main>
  )
}

export default Card3
