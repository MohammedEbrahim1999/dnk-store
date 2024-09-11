'use client';
import React from 'react';
import './latest.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const logos = [
    '/imgs/client-logo-1.png',
    '/imgs/client-logo-2.png',
    '/imgs/client-logo-3.png',
    '/imgs/client-logo-4.png',
    '/imgs/client-logo-5.png',
];
const items = [
    {
        id: 1,
        title: '20% Off On Tank Tops',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac dictum.',
        buttonText: 'SHOP NOW',
        image: '/imgs/itemOne.jpg', // Replace with your image paths
    },
    {
        id: 2,
        title: 'Latest Eyewear For You',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac dictum.',
        buttonText: 'SHOP NOW',
        image: '/imgs/itemTwoLatest.jpg',
    },
    {
        id: 3,
        title: "Let's Lorem Suit Up!",
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac dictum.',
        buttonText: 'CHECK OUT',
        image: '/imgs/itemthree.jpg',
    },
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
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    const handleNavigateToBasket = () => {
        window.location.href = '/Basket'; // Directly navigate to the Basket page
    };
    return (
        <div className="latest py-5 w-100">
            <div className="container">
                <div className="row mb-4">
                    <Slider {...settings}>
                        {logos.map((logo, index) => (
                            <div key={index} className="d-flex justify-content-center">
                                <img src={logo} alt={`Logo ${index}`} className="img-fluid" />
                            </div>
                        ))}
                    </Slider>
                </div>

                {/* Three items side by side */}
                {/* <div className="latest-divs row g-3">
                    <div className="col-lg-3 col-md-6 col-12">
                        <div className="overlay-container position-relative one">
                            <div className="overlay"></div>
                            <div className="text p-3">
                                <h3>20% Off On Tank Tops</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Proin ac dictum.
                                </p>
                                <button className="btn btn-primary">Shop Now</button>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 col-12">
                        <div className="overlay-container position-relative two">
                            <div className="overlay"></div>
                            <div className="text p-3">
                                <h3>20% Off On Tank Tops</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Proin ac dictum.
                                </p>
                                <button className="btn btn-primary">Shop Now</button>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-12">
                        <div className="overlay-container position-relative three">
                            <div className="overlay"></div>
                            <div className="text p-3">
                                <h3>20% Off On Tank Tops</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Proin ac dictum.
                                </p>
                                <button className="btn btn-primary">Check Out</button>
                            </div>
                        </div>
                    </div>
                </div> */}
                <div className="latest py-5">
                    <div className="container">
                        <div className="row g-3">
                            {items.map((item) => (
                                <div className="col-lg-4 col-md-6 col-12 " key={item.id}>
                                    <div className="card border-0 position-relative">
                                        <img src={item.image} className="card-img-top" alt={item.title} />
                                        <div className="card-img-overlay d-flex flex-column justify-content-end p-3 text-white z-2">
                                            <h5 className="card-title">{item.title}</h5>
                                            <p className="card-text">{item.description}</p>
                                            <a href='/CheckOut'><button className="btn btn-light" onClick={handleNavigateToBasket} > {item.buttonText}</button></a>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Latest;
