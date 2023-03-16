import React from 'react'
import girl from '../img/girlComp.jpg'

const Card3 = () => {
  return (
    <main>
      <div>
        <img src={girl} alt="girlLaptop" />
      </div>
      <div>
        <p>For talent</p>
        <h1>Find great <br/>work</h1>
        <p>Meet clients you’re excited to work with and take your career or business to new heights.</p>
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
          <button>Find Opportunities</button>
        </div>
      </div>
    </main>
  )
}

export default Card3
