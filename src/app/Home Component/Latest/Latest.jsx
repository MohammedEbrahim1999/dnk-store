'use client';
import React from 'react'
import './latest.css';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const logos = [
    '/imgs/client-logo-1.png',
    '/imgs/client-logo-2.png',
    '/imgs/client-logo-3.png',
    '/imgs/client-logo-4.png',
    '/imgs/client-logo-5.png',

];
const Latest = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    return (
        <div className="latest">
            <div className="div container">
                <div className="row">
                    <Slider {...settings}>
                        {logos.map((logo, index) => (
                            <div key={index}>
                                <img src={logo} alt={`Logo ${index}`} />
                            </div>
                        ))}
                    </Slider>
                    <div className="latest-divs row">
                        <div className="col-md-4 col-lg-3 one">
                            <div className="overlay"></div>
                            <div className='text'>
                                <h3> 20% Off On Tank Tops </h3>
                                <p> Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Proin ac dictum. </p>
                                <button> Shop Now </button>
                            </div>
                        </div>
                        <div className="col-md-4 col-lg-3 two">
                            <div className="overlay"></div>
                            <div className='text'>
                                <h3> 20% Off On Tank Tops </h3>
                                <p> Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Proin ac dictum. </p>
                                <button> Shop Now </button>
                            </div>
                        </div>
                        <div className="col-md-4 col-lg-3 three">
                            <div className="overlay"></div>
                            <div className='text'>
                                <h3> 20% Off On Tank Tops </h3>
                                <p> Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Proin ac dictum. </p>
                                <button> Check Out </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Latest
