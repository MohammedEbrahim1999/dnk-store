'use client';
import React from 'react';
import './Copy.css';
const Copy = () => {
    return (
        <div className="copy">
            <div className="container">
                <div className="row">
                    <div className="col-md-9 col-lg-9 col-md-6">
                        <p> Copyright © 2024 Brandstore. Powered by Brandstore.</p>
                    </div>
                    <div className="col-md-3 col-lg-3 col-md-6">
                        <ul className='flex'>
                            <li><a href="#"> <i class="fa-brands fa-facebook-f"></i> </a></li>
                            <li><a href="#"> <i class="fa-brands fa-youtube"></i></a></li>
                            <li><a href="#"> <i class="fa-brands fa-twitter"></i></a></li>
                            <li><a href="#"> <i class="fa-brands fa-instagram"></i></a></li>
                            <li><a href="#"> <i class="fa-brands fa-google"></i></a></li>
                            <li><a href="#"> <i class="fa-brands fa-yelp"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Copy
