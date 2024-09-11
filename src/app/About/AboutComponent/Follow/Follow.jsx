'use client';
import React from 'react';
import './Follow.css';
const Follow = () => {
  return (
    <div className="follow">
        <div className="overlay"></div>
        <div className="container">
            <div className="row">
                <div className='us'>
                    <div className="divide"></div>
                    <h1>Follow Us</h1>
                    <ul>
                        <li><a href="#"> <i class="fa-brands fa-facebook-f"></i> </a></li>
                        <li><a href="#"> <i class="fa-brands fa-twitter"></i> </a></li>
                        <li><a href="#"> <i class="fa-brands fa-instagram"></i> </a></li>
                        <li><a href="#"> <i class="fa-brands fa-google-plus-g"></i> </a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Follow
