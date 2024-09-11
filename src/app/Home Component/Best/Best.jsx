'use client';
import React from 'react'
import './Best.css';
const Best = () => {
    return (
        <div className="best">
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <img src="imgs/globe.png" alt="Global" />
                        <h6> Worldwide Shipping </h6>
                        <p> It elit tellus, luctus nec ullamcorper <br /> mattis, pulvinar dapibus leo. </p>
                    </div>
                    <div className="col-md-3">
                        <img src="/imgs/quality.png" alt="Best Quality" />
                        <h6> Best Quality </h6>
                        <p> It elit tellus, luctus nec ullamcorper <br />  mattis, pulvinar dapibus leo. </p>
                    </div>
                    <div className="col-md-3">
                        <img src="/imgs/tag.png" alt="Best Offers" />
                        <h6> Best Offers </h6>
                        <p> It elit tellus, luctus nec ullamcorper <br /> mattis, pulvinar dapibus leo. </p>
                    </div>
                    <div className="col-md-3">
                        <img src="/imgs/lock.png" alt="Secure" />
                        <h6> Secure Payments </h6>
                        <p> It elit tellus, luctus nec ullamcorper <br /> mattis, pulvinar dapibus leo. </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Best
