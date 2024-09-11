"use client";
import React from 'react';
import './Lost.css';
import { useForm, ValidationError } from "@formspree/react";
import Lottie from "lottie-react";
import SentAnimation from '../../../../public/animation/Sent.json';
const LostItem = () => {
  const [state, handleSubmit] = useForm("xgvwvway");
  return (
    <div className="lost">
      <div className="container">
        <div className="row">
          <h6> Lost your password? Please enter your username or email address. You will receive a link to create a new password via email. </h6>
          <form onSubmit={handleSubmit}>
            <label htmlFor="email">
            Username or email <span> * </span>
            </label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder='Enter Your Email Or UserName'
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
            <a href="/Login" className='rego'>Go TO Login</a>
            <button type="submit" className='submit' disabled={state.submitting}> {state.submitting ? "Submitting....." : "Reset Password"} </button>
            {state.succeeded && (<p className="submit-message flex"> <Lottie className="done-animation" animationData={SentAnimation} /> We've sent an email to [your email address] with instructions to reset your password. Please check your inbox and follow the steps provided. 👌.</p>)}

          </form>
        </div>
      </div>
    </div>
  )
}

export default LostItem;
