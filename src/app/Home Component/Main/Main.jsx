'use client';
import React from 'react';
import './Main.css';
import { color } from 'framer-motion';

const Main = () => {
  return (
    <div className="main">
        <div className="overlay"></div>
        <div className="container">
            <div className="row">
                <h1> Raining Offers For <br />  Hot Summer! </h1>
                <h3> 25% Off On All Products </h3>
                <button> <a href="/Basket" className='a-edit1'> Shop Now </a> </button>
                <button> <a href="/Basket" className='a-edit'> Find More </a> </button>
            </div>
        </div>
    </div>
  )
}

export default Main
