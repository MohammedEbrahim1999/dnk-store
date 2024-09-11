'use client';
import './Footer.css';
import React from 'react';
import { useForm, ValidationError } from "@formspree/react";
import Lottie from "lottie-react";
import DoneAnimation from '../../../../public/animation/done.json';

const Footer = () => {
    const [state, handleSubmit] = useForm("mzzpbwek");

    return (
        <div className="footer bg-white text-dark py-5">
            <div className="container">
                <div className="row gy-4">
                    {/* Contact Section */}
                    <div className="col-lg-4 col-md-6 text-center text-md-start">
                        <img className="contact img-fluid mb-3" src="/imgs/logo contact.png" alt="Contact-Logo" />
                        <h3 className='logo'>The best look anytime, anywhere.</h3>
                    </div>
                    
                    {/* Links Section */}
                    <div className="col-lg-4 col-md-6 d-flex justify-content-around">
                        <div className="left">
                            <h4>For Her</h4>
                            <ul className="list-unstyled">
                                <li><a href="#" className="text-dark text-decoration-none">Women Jeans</a></li>
                                <li><a href="#" className="text-dark text-decoration-none">Tops and Shirts</a></li>
                                <li><a href="#" className="text-dark text-decoration-none">Women Jackets</a></li>
                                <li><a href="#" className="text-dark text-decoration-none">Heels and Flats</a></li>
                                <li><a href="#" className="text-dark text-decoration-none">Women Accessories</a></li>
                            </ul>
                        </div>
                        <div className="right">
                            <h4>For Him</h4>
                            <ul className="list-unstyled">
                                <li><a href="#" className="text-dark text-decoration-none">Men Jeans</a></li>
                                <li><a href="#" className="text-dark text-decoration-none">Men Shirts</a></li>
                                <li><a href="#" className="text-dark text-decoration-none">Men Shoes</a></li>
                                <li><a href="#" className="text-dark text-decoration-none">Men Accessories</a></li>
                                <li><a href="#" className="text-dark text-decoration-none">Men Jackets</a></li>
                            </ul>
                        </div>
                    </div>

                    {/* Subscribe Form Section */}
                    <div className="col-lg-4 col-md-12 text-center text-md-start">
                        <h2>Subscribe</h2>
                        <form onSubmit={handleSubmit} className="d-flex flex-column align-items-center align-items-md-start">
                            <input
                                id="email"
                                type="email"
                                name="email"
                                className="form-control mb-3"
                                placeholder='Your Email Address...'
                            />
                            <ValidationError
                                prefix="Email"
                                field="email"
                                errors={state.errors}
                                className="text-danger"
                            />
                            <button type="submit" className='btn btn-primary' disabled={state.submitting}>
                                {state.submitting ? "Subscribing..." : "Subscribe"}
                            </button>
                            {state.succeeded && (
                                <p className="submit-message d-flex align-items-center mt-3">
                                    <Lottie className="done-animation" animationData={DoneAnimation} />
                                    Thank You For Your Subscription 👌.
                                </p>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
