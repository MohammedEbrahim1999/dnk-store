'use client'
import React from 'react'
import './Help.css';
const Help = () => {
    return (
        <div className="help">
            <div className="container">
                <div className="row">
                    <h4> Have any queries? </h4>
                    <h1> We're here to help.​ </h1>
                    <div className="divide"></div>
                    <div></div>
                    <div className="col-lg-3 here">
                        <h2> Sales </h2>
                        <p> Vestibulum ante ipsum primis in <br /> faucibus orci luctus. </p>
                        <p> 1800 123 4567 </p>
                    </div>
                    <div className="col-lg-3 here">
                        <h2> Complaints </h2>
                        <p> Vestibulum ante ipsum primis in <br /> faucibus orci luctus. </p>
                        <p> 1900 223 8899 </p>
                    </div>
                    <div className="col-lg-3 here">
                        <h2> Returns </h2>
                        <p> Vestibulum ante ipsum primis in <br /> faucibus orci luctus. </p>
                        <p> returns@mail.com </p>
                    </div>
                    <div className="col-lg-3 here">
                        <h2> Marketing </h2>
                        <p>Vestibulum ante ipsum primis in <br /> faucibus orci luctus.</p>
                        <p> 1700 444 5578 </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Help



