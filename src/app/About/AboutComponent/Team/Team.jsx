'use client';
import React from 'react';
import './Team.css';
const Team = () => {
    return (
        <div className="team">
            <div className="container">
                <div className="row">
                    <div className="divide"></div>
                    <div className="head">
                        <h4> A Few Words About </h4>
                        <h1> Our Team </h1>
                        <p> Nam nec tellus a odio tincidunt auctor a ornare odio.Sed non mauris vitae erat consequat auctor eu in elit.<br />Class aptent taciti sociosqu ad litora torquent per conubia nostra.</p>
                    </div>
                    <div className="team-one flex row">
                        <div className="col-lg-3">
                            <img src="/imgs/Harvey CEO.png" alt="Harvey CEO" />
                            <h1> Harvey Spector </h1>
                            <p> Founder - CEO </p>
                        </div>
                        <div className="col-lg-3">
                            <img src="/imgs/Jessica COO.png" alt="Jessica COO" />
                            <h1> Jessica Pearson </h1>
                            <p> COO </p>
                        </div>
                        <div className="col-lg-3">
                            <img src="/imgs/Zain Head.png" alt="Harvey CEO" />
                            <h1> Rachel Zain </h1>
                            <p> Marketing Head </p>
                        </div>
                    </div>
                    {/*  */}
                    <div className="team-two flex row">
                        <div className="col-lg-3">
                            <img src="/imgs/Litt Lead.png" alt="Litt Lead" />
                            <h1> Luise Litt</h1>
                            <p> Lead Developer </p>
                        </div>
                        <div className="col-lg-3">
                            <img src="/imgs/Bennett Intern.png" alt="Bennett Intern" />
                            <h1> Katrina Bennett </h1>
                            <p> Intern Designer </p>
                        </div>
                        <div className="col-lg-3">
                            <img src="/imgs/Ross Designer.png" alt="Ross Designer" />
                            <h1> Mike Rose </h1>
                            <p> Intern Designer </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Team
