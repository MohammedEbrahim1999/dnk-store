'use client';
import React from 'react';
import './FormContact.css';
import { useForm, ValidationError } from "@formspree/react";
import Lottie from "lottie-react";
import DoneAnimation from '../../../../../public/animation/done.json';
const FormContact = () => {
    const [state, handleSubmit] = useForm("xvgpoeyy");
    return (
        <div className="form-cc">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 text">
                        <h6> Don't be a stranger! </h6>
                        <h1> You tell us. We listen. </h1>
                        <p> Cras elementum finibus lacus nec lacinia. Quisque non convallis nisl, eu <br /> condimentum sem. Proin dignissim libero lacus, ut eleifend magna <br /> vehicula et. Nam mattis est sed tellus.</p>
                    </div>
                    <div className="col-lg-6">
                        <form onSubmit={handleSubmit} className='cc'>
                            <input type="text" name="Name" id=""  placeholder='NAME'/>
                            <input type="text" name="Subject" id=""  placeholder='SUBJECT'/>
                            <input
                                id="email"
                                type="email"
                                name="email"
                                placeholder='EMAIL'
                            />
                            <ValidationError
                                prefix="Email"
                                field="email"
                                errors={state.errors}
                            />
                            <textarea
                                id="message"
                                name="message"
                                placeholder='MESSAGE'
                            />
                            <ValidationError
                                prefix="Message"
                                field="message"
                                errors={state.errors}
                            />
                            <button type="submit" className='submit' disabled={state.submitting}> {state.submitting ? "Submitting....." : "Send Message"} </button>
                            {state.succeeded && (<p className="submit-message flex"> <Lottie className="done-animation" animationData={DoneAnimation} /> Thank You  For Your Subscription 👌.</p>)}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FormContact
