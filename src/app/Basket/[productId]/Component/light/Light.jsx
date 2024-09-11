// Light.js
'use client';
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './style.css';
import myProducts from '../../../../Data.js'; // Import your products data
import emailjs from 'emailjs-com';
const Light = () => {
    const [activeTab, setActiveTab] = useState('description');
    const [productId, setProductId] = useState('1'); // Default ID

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    useEffect(() => {
        const updateProductId = () => {
            const currentPath = window.location.pathname;
            const id = currentPath.split('/').pop(); // Get the last part of the path

            if (!isNaN(id) && Number(id) > 0 && Number(id) <= 33) {
                setProductId(id);
            } else {
                setProductId("1");
            }
        };

        updateProductId();

        window.addEventListener('popstate', updateProductId);
        window.addEventListener('pushState', updateProductId);
        window.addEventListener('replaceState', updateProductId);

        return () => {
            window.removeEventListener('popstate', updateProductId);
            window.removeEventListener('pushState', updateProductId);
            window.removeEventListener('replaceState', updateProductId);
        };
    }, []);

    const specificProduct = myProducts.find((product) => product.productId === productId);




    // Form State
    const [rating, setRating] = useState(0);
    const [review, setReview] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const templateParams = {
            rating: rating,
            review: review,
            name: name,
            email: email,
        };

        emailjs.send('service_xltw3xj', 'template_betva69', templateParams, 'b7wUOGvFwtCazJ2l3')
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                alert('Feedback sent successfully!');
            }, (error) => {
                console.log('FAILED...', error);
                alert('Failed to send feedback. Please try again.');
            });

        // Optionally, clear the form fields
        setRating('');
        setReview('');
        setName('');
        setEmail('');
    };
    return (
        <div className="light bg-body-tertiary">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <ul className="nav nav-tabs justify-content-start">
                            <li className="nav-item">
                                <button
                                    className={`nav-link ${activeTab === 'description' ? 'active' : ''}`}
                                    onClick={() => handleTabClick('description')}
                                >
                                    Description
                                </button>
                            </li>
                            <li className="nav-item">
                                <button
                                    className={`nav-link ${activeTab === 'additionalInfo' ? 'active' : ''}`}
                                    onClick={() => handleTabClick('additionalInfo')}
                                >
                                    Additional Information
                                </button>
                            </li>
                            <li className="nav-item">
                                <button
                                    className={`nav-link ${activeTab === 'reviews' ? 'active' : ''}`}
                                    onClick={() => handleTabClick('reviews')}
                                >
                                    Reviews (0)
                                </button>
                            </li>
                        </ul>
                    </div>

                    <div className="col-12 mt-3">
                        {/* Conditional Rendering Based on Active Tab */}
                        {activeTab === 'description' && (

                            <div className=" text-dark p-3 rounded">
                                <div className="container mt-5">
                                    <h2 className="mb-4">Product description</h2>
                                    <p>
                                        Since it’s creation lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                    </p>
                                    <p>
                                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
                                    </p>
                                </div>
                                <div className="container mt-5">
                                    <div className="row">
                                        {/* Left Column with Image */}
                                        <div className="col-md-6 mb-3">
                                            <img
                                                src="/imgs/product-about-01.jpg"
                                                alt="Styled Clothing and Shoes"
                                                className="img-fluid  "
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <img
                                                src="/imgs/product-about-04.jpg"
                                                alt="Styled Clothing and Shoes"
                                                className="img-fluid  "
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="container mt-4">
                                    <div className="row">
                                        {/* Left Column with Image */}
                                        <div className="col-md-6 mb-3">
                                            <img
                                                src="/imgs/product-about-02.jpg"
                                                alt="Styled Clothing and Shoes"
                                                className="img-fluid  "
                                            />
                                        </div>

                                        {/* Right Column with Text */}
                                        <div className="bg-white col-md-6  d-flex align-items-center">
                                            <div style={{ width: "65%" }} className='m-auto'>
                                                <h5 className="fw-bold">Ut enim ad minim</h5>
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                    eiusmod tempor incididunt.
                                                </p>

                                                <h5 className="fw-bold">Quis nostrud</h5>
                                                <p>Sed do eiusmod tempor incididunt ut labore.</p>

                                                <h5 className="fw-bold">Duis aute irure</h5>
                                                <p>
                                                    Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                                    incididunt ut labore.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="container mt-4">
                                    <div className="row">
                                        <div className="bg-white col-md-6 text-left auto d-flex align-items-center">
                                            <div className='m-auto' style={{ width: "65%", }}>
                                                <h5 className="fw-bold">More about the product</h5>
                                                <p className='lh-lg'>
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in.
                                                </p>
                                            </div>
                                        </div>
                                        {/* Left Column with Image */}
                                        <div className="col-md-6">
                                            <img
                                                src="/imgs/product-about-03.jpg"
                                                alt="Styled Clothing and Shoes"
                                                className="img-fluid"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                        {activeTab === 'additionalInfo' && (
                            <div className="p-3 rounded border border-dark-subtle" style={{ marginBottom: " 25px" }}>
                                <div className="row">
                                    <div className="col-12">
                                        {specificProduct && (
                                            <h2>Color: {specificProduct.productColor}</h2>
                                        )}
                                    </div>
                                </div>
                            </div>
                        )}
                        {activeTab === 'reviews' && (
                            <div className="text-white p-3 rounded">
                                <p className='text-dark'> There are no reviews yet. </p>
                                <div className="container my-4 p-4 border rounded bg-light">
                                    <h5 className="mb-4 text-dark">Be the first to review “Anchor Bracelet”</h5>
                                    <p className='text-dark'>Your email address will not be published. Required fields are marked *</p>
                                    <form onSubmit={handleSubmit}>
                                        <div className="mb-3">
                                            <label className="form-label text-dark">Your rating *</label>
                                            <div className="rating">
                                                {[...Array(5)].map((_, index) => (
                                                    <span
                                                        key={index}
                                                        className={`star ${index < rating ? 'filled' : ''}`}
                                                        onClick={() => setRating(index + 1)}
                                                        onChange={(e) => setRating(e.target.value)}
                                                    >
                                                        &#9733;
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="mb-3">
                                            <label htmlFor="review" className="form-label text-dark">
                                                Your review *
                                            </label>
                                            <textarea
                                                id="review"
                                                className="form-control"
                                                rows="4"
                                                value={review}
                                                onChange={(e) => setReview(e.target.value)}
                                                required
                                            ></textarea>
                                        </div>

                                        <div className="row">
                                            <div className="col-md-6 mb-3">
                                                <label htmlFor="name" className="form-label text-dark">
                                                    Name *
                                                </label>
                                                <input
                                                    type="text"
                                                    id="name"
                                                    className="form-control text-dark"
                                                    value={name}
                                                    onChange={(e) => setName(e.target.value)}
                                                    required
                                                />
                                            </div>

                                            <div className="col-md-6 mb-3">
                                                <label htmlFor="email" className="form-label text-dark">
                                                    Email *
                                                </label>
                                                <input
                                                    type="email"
                                                    id="email"
                                                    className="form-control text-dark"
                                                    value={email}
                                                    onChange={(e) => setEmail(e.target.value)}
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <button type="submit" className="btn btn-primary ">
                                            Submit
                                        </button>
                                    </form>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Light;
