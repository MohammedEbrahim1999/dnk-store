'use client';
import React from 'react'
import './Special.css';
const Special = () => {
  return (
    <div className="special">
        <div className="container">
            <div className="row">
                <div className="time">
                <div className="overlay"></div>
                    <p> Limited Time Offer </p>
                    <h1> Special Edition </h1>
                    <p className='dolor'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec <br /> ullamcorper mattis, pulvinar dapibus leo.</p>
                    <h4> Buy This T-shirt At 20% Discount, Use Code OFF20 </h4>
                    <button> Shop Now </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Special
