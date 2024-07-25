'use client';
import './Footer.css'
import React from 'react'
import { useForm, ValidationError } from "@formspree/react";
import Lottie from "lottie-react";
import DoneAnimation from '../../../../public/animation/done.json';
const Footer = () => {
    const [state, handleSubmit] = useForm("mzzpbwek");
    return (
        <>
            <div className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 col-lg-4 col-md-12">
                            <img className="contact" src="/imgs/logo contact.png" alt="Contact-Logo" />
                            <h3 className='logo'> The best look anytime, anywhere. </h3>
                        </div>
                        <div className="col-md-4 col-lg-4 col-md-12 links">
                            <div className="left">
                                <h4>For Her </h4>
                                <ul>
                                    <li> <a href='#'> Women Jeans </a></li>
                                    <li> <a href='#'>Tops and Shirts </a></li>
                                    <li> <a href='#'>Women Jackets</a> </li>
                                    <li> <a href='#'>Heels and Flats </a></li>
                                    <li> <a href='#'>Women Accessories </a></li>
                                </ul>
                            </div>
                            <div className="right">
                                <h4>For Him </h4>
                                <ul>
                                    <li><a href='#'> Men Jeans</a></li>
                                    <li> <a href='#'>Men Shirts </a></li>
                                    <li> <a href='#'>Men Shoes </a></li>
                                    <li> <a href='#'>Men Accessories </a></li>
                                    <li> <a href='#'>Men Jackets </a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-4 col-lg-4 col-md-12 form">
                            <h2> Subscribe </h2>
                            <form onSubmit={handleSubmit}>

                                <input
                                    id="email"
                                    type="email"
                                    name="email"
                                    placeholder='Your Email Addresse.....'
                                />
                                <ValidationError
                                    prefix="Email"
                                    field="email"
                                    errors={state.errors}
                                />
                                <button type="submit" className='submit' disabled={state.submitting}> {state.submitting ? "Subscribing....." : "Subscribe"} </button>
                                {state.succeeded && (<p className="submit-message flex"> <Lottie className="done-animation" animationData={DoneAnimation} /> Thank You  For Your Subscription 👌.</p>)}

                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Footer








