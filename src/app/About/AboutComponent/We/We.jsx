'use client';
import React from 'react';
import './We.css';
const We = () => {
  return (
    <div className="we">
        <div className="container">
            <div className="row">
                <div className="col-lg-6 left">
                    <div className='divide'></div>
                    <h1> Who We Are  </h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit.</p>
                </div>
                <div className="col-lg-6 right">
                    <img src="/imgs/We-About-Image.jpg" alt="We-About-Image" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default We
