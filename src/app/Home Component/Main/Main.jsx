'use client';
import React from 'react';
import './Main.css';
import { color } from 'framer-motion';

const Main = () => {
  return (
    <div className="main position-relative d-flex align-items-center justify-content-start text-left">
      <div className="overlay position-absolute w-100 h-100"></div>
      <div className="container">
        <div className="row justify-content-start">
          <div className="col-lg-8 col-md-10 col-12">
            <h1 className="display-4 mb-3 text-white">
              Raining Offers For <br /> Hot Summer!
            </h1>
            <h3 className="mb-4 text-white">25% Off On All Products</h3>
            <div>
              <button className="btn btn-primary me-2 p-3 text-dark" style={{backgroundColor: "#FFF"}}>
                <a href="/Basket" className="a-edit1 text-dark text-decoration-none">
                  Shop Now
                </a>
              </button>
              <button className="btn btn-secondary  p-3" style={{backgroundColor: "transparent"}}>
                <a href="/Basket" className="a-edit text-white text-decoration-none">
                  Find More
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main
