'use client';
import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from "framer-motion";
import myProducts from '../../../Data.js';
import './All.css'

const All = () => {
    const [store, setStore] = useState("Store");
    const [arr, setArr] = useState(myProducts);
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 12;

    const handleClick = (buttonCategory) => {
        const newArr = myProducts.filter((item) => item.ProductType === buttonCategory);
        setArr(newArr);
        setCurrentPage(1); // Reset to the first page when changing category
    };

    const goToPage = (page) => {
        setCurrentPage(page);
    };

    const previousPage = () => {
        if (currentPage > 1) {
            goToPage(currentPage - 1);
        }
    };

    const nextPage = () => {
        const totalPages = Math.ceil(arr.length / productsPerPage);
        if (currentPage < totalPages) {
            goToPage(currentPage + 1);
        }
    };

    const [type, setType] = useState("");
    const [pDes, setpDes] = useState("");
    const [pageNumber, setPageNumber] = useState("");

    useEffect(() => {
        const startProductNumber = (currentPage - 1) * productsPerPage + 1;
        const endProductNumber = Math.min(currentPage * productsPerPage, arr.length);
        setPageNumber(`${startProductNumber} - ${endProductNumber}`);
    }, [currentPage, arr]);

    // Calculate products to display on the current page
    const currentProducts = arr.slice(
        (currentPage - 1) * productsPerPage,
        currentPage * productsPerPage
    );

    return (
        <div className="all">
            <div className="container">
                <div className="row">
                    <div className="all-left col-lg-3">
                        <input type="search" name="Product name" placeholder="Search Products..." />
                        <button className="arrow-right">
                            <i className="fa-solid fa-angle-right"></i>
                        </button>
                        <label htmlFor="range" className="filter">Filter by Price</label>
                        <input type="range" name="Range" id="range" min={0} max={100} />
                        <div className="filter-button">
                            <button>Filter</button>
                            <span> Price: $20 — $290 </span>
                        </div>
                        <h4 className="cat"> Categories </h4>
                        <div className="every">
                            <a href="#" onClick={() => { setArr(myProducts); setStore("Store"); setType(""); setpDes(""); setCurrentPage(1); }}>Everything</a>
                            <p>(33)</p>
                        </div>
                        <div className="acc">
                            <a href="#" onClick={() => {
                                handleClick("Accessories");
                                setStore("Accessories");
                                setType("Accessories");
                                setpDes("Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit sed ut.");
                            }}>Accessories</a>
                            <p>(10)</p>
                        </div>
                        <div className="men">
                            <a href="#" onClick={() => {
                                handleClick("Men");
                                setStore("Men");
                                setType("Men");
                                setpDes("Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit sed ut.");
                            }}>Men</a>
                            <p>(14)</p>
                        </div>
                        <div className="woman">
                            <a href="#" onClick={() => {
                                handleClick("Woman");
                                setStore("Woman");
                                setType("Woman");
                                setpDes("Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit sed ut.");
                            }}>Women</a>
                            <p>(9)</p>
                        </div>
                        <h2 className="our">Our Best Sellers </h2>
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <img src="/imgs/MiniTshirt.jpg" alt="Mini" style={{ maxWidth: "100%" }} />
                                    </div>
                                    <div className="col-lg-6 mini-text">
                                        <p><a href="#" className="mini-a">DNK Green Tshirt</a></p>
                                        <span>
                                            <i className="fa-regular fa-star"></i>
                                            <i className="fa-regular fa-star"></i>
                                            <i className="fa-regular fa-star"></i>
                                            <i className="fa-regular fa-star"></i>
                                            <i className="fa-regular fa-star"></i>
                                        </span>
                                        <p> $40.00 – $45.00 </p>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <hr style={{ width: "100% !important" }} />
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <img src="/imgs/Green Hoodie.jpg" alt="Mini" style={{ maxWidth: "100%" }} />
                                    </div>
                                    <div className="col-lg-6 mini-text">
                                        <p><a href="#" className="mini-a">Green Hoodie </a></p>
                                        <span>
                                            <i className="fa-regular fa-star"></i>
                                            <i className="fa-regular fa-star"></i>
                                            <i className="fa-regular fa-star"></i>
                                            <i className="fa-regular fa-star"></i>
                                            <i className="fa-regular fa-star"></i>
                                        </span>
                                        <p> $150.00 </p>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <hr style={{ width: "100% !important" }} />
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <img src="/imgs/DNKBlackShoes.jpg" alt="Mini" style={{ maxWidth: "100%" }} />
                                    </div>
                                    <div className="col-lg-6 mini-text">
                                        <p><a href="#" className="mini-a">DNK Black Shoes</a></p>
                                        <span>
                                            <i className="fa-regular fa-star"></i>
                                            <i className="fa-regular fa-star"></i>
                                            <i className="fa-regular fa-star"></i>
                                            <i className="fa-regular fa-star"></i>
                                            <i className="fa-regular fa-star"></i>
                                        </span>
                                        <p> $175.00 </p>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <hr style={{ width: "100% !important" }} />
                    </div>
                    <div className="all-right col-lg-9">
                        <div className="row">
                            <AnimatePresence>
                                <p className="title-type"> Home/{store}</p>
                                <h1 className="hone-head">{type}</h1>
                                <p className="p-des">{pDes}</p>
                                <div className="show">
                                    <h6> Showing {pageNumber} of {arr.length} results </h6>
                                    <select name="Item Selected" id="Selection">
                                        <option value="Default Sorting" selected>Default Sorting</option>
                                        <option value="Sort By Popularity">Sort By Popularity</option>
                                        <option value="Average">Sort By Average Rating</option>
                                        <option value="Latest">Sort By Latest</option>
                                        <option value="Low">Sort By Price: Low To High</option>
                                        <option value="High">Sort By: High To Low</option>
                                    </select>
                                </div>
                                {currentProducts.map((item) => (
                                    <motion.article
                                        layout
                                        initial={{ transform: "scale(0.4)" }}
                                        animate={{ transform: "scale(1)" }}
                                        className="col-lg-4 col-md-6 col-sm-12"
                                        transition={{ type: "spring", damping: 20, stiffness: 30 }}
                                        key={item.imgPath}>
                                        <div className="item-all">
                                            <a href={item.productLink}><img src={item.productSrc} alt="Item One" style={{ maxWidth: "100%" }} />
                                            </a>
                                            <h6 style={{ marginTop: "20px" }}>{item.productTitle}</h6>
                                            <p style={{ marginTop: "0px" }}>{item.ProductType}</p>
                                            <p>{item.productPrice}</p>
                                            <span>
                                                <i className="fa-regular fa-star"></i>
                                                <i className="fa-regular fa-star"></i>
                                                <i className="fa-regular fa-star"></i>
                                                <i className="fa-regular fa-star"></i>
                                                <i className="fa-regular fa-star"></i>
                                            </span>
                                        </div>
                                    </motion.article>
                                ))}
                            </AnimatePresence>
                            <div className="pagination">
                                <button onClick={previousPage}>←</button>
                                <button onClick={() => goToPage(1)} className={currentPage === 1 ? 'active' : ''}>1</button>
                                <button onClick={() => goToPage(2)} className={currentPage === 2 ? 'active' : ''}>2</button>
                                <button onClick={() => goToPage(3)} className={currentPage === 3 ? 'active' : ''}>3</button>
                                <button onClick={nextPage}>→</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    );
};

export default All;
