'use client';
import React, { useState, useEffect } from 'react';
import './All.css';
import { AnimatePresence, motion } from "framer-motion";
const myProducts = [
    {
        productTitle: "Black Anchor Bracelet",
        ProductType: "Accessories",
        productPrice: "$150.00",
        productSrc: '/imgs/Anchor Bracelet.jpg',
    },
    {
        productTitle: "Basic Gray Jeans",
        ProductType: "Woman",
        productPrice: "$150.00",
        productSrc: '/imgs/jeansWoman2.jpg',
    },
    {
        productTitle: "Black Hoodie",
        ProductType: "Men",
        productPrice: "$150.00",
        productSrc: '/imgs/BlackHoodie.jpg'
    },
    {
        productTitle: "Black handBag",
        ProductType: "Accessories",
        productPrice: "$150.00",
        productSrc: '/imgs/BlackOverBag.jpg'
    },
    {
        productTitle: "Blue Denim Jeans",
        ProductType: "Woman",
        productPrice: "$150.00",
        productSrc: '/imgs/jeansWoman1.jpg'
    },
    {
        productTitle: "Blue Denim Short",
        ProductType: "Woman",
        productPrice: "$150.00",
        productSrc: '/imgs/BlueDenim Short.jpg'
    },
    {
        productTitle: "Blue T-Shirt",
        ProductType: "Men",
        productPrice: "$150.00",
        productSrc: '/imgs/BlueHoodie.jpg'
    },
    {
        productTitle: "Blue T-Shirt",
        ProductType: "Men",
        productPrice: "$40.00",
        productSrc: '/imgs/Blue Tshirt.jpg'
    },
    {
        productTitle: "Boho Bangle Bracelet",
        ProductType: "Accessories",
        productPrice: "$150.00",
        productSrc: '/imgs/Boho Bangle Bracelet.jpg'
    },
    {
        productTitle: "Bright Gold Purse",
        ProductType: "Accessories",
        productPrice: "$150.00",
        productSrc: '/imgs/Bright Gold Purse.jpg'
    },
    {
        productTitle: "Bright Red Bag",
        ProductType: "Accessories",
        productPrice: "$150.00",
        productSrc: '/imgs/Bright Red Bag.jpg',
    },
    {
        productTitle: "Buddha Bracelet",
        ProductType: "Accessories",
        productPrice: "$150.00",
        productSrc: '/imgs/BraceletCudd.jpg'
    },
]
const myProducts2 = [
    {
        productTitle2: "Dark Blue Denim Jeans",
        ProductType2: "Men",
        productPrice2: "$150.00",
        productSrc2: '/imgs/BlueDenimJeans.jpg'
    },
    {
        productTitle2: "Dark Brown Jeans",
        ProductType2: "Men",
        productPrice2: "$150.00",
        productSrc2: '/imgs/JeansMen.jpg'
    },
    {
        productTitle2: "Dark Gray Jeans",
        ProductType2: "Men",
        productPrice2: "$150.00",
        productSrc2: '/imgs/DarkGrayJeans.jpg'
    },
    {
        productTitle2: "DNK Black Shoes",
        ProductType2: "Woman",
        productPrice2: "$175.00",
        productSrc2: '/imgs/DNKBlackShoes.jpg'
    },
    {
        productTitle2: "DNK Blue Shoes",
        ProductType2: "Men",
        productPrice2: "$200.00",
        productSrc2: '/imgs/sports-shoes Blue One.jpg'
    },
    {
        productTitle2: "DNK Green Shoes",
        ProductType2: "Men",
        productPrice2: "$250.00",
        productSrc2: '/imgs/DNK Green Shoes.jpg'
    },
    {
        productTitle2: "DNK Green T-Shirt",
        ProductType2: "Men",
        productPrice2: "$44.00",
        productSrc2: '/imgs/DNK Green T-Shirt.jpg'
    },
    {
        productTitle2: "DNK Red Shoes",
        ProductType2: "Men",
        productPrice2: "$150.00",
        productSrc2: '/imgs/DNK Red Shoes.jpg'
    },
    {
        productTitle2: "DNK Yellow Shoes",
        ProductType2: "Men",
        productPrice2: "$120.00",
        productSrc2: '/imgs/sports-shoe3.jpg'
    },
    {
        productTitle2: "Faint Washed Denim Blue Jeans",
        ProductType2: "Men",
        productPrice2: "$150.00",
        productSrc2: '/imgs/Faint Jeans.jpg'
    },
    {
        productTitle2: "Flamingo T-Shirt",
        ProductType2: "Woman",
        productPrice2: "$28.00",
        productSrc2: '/imgs/Flamingo Tshirt.jpg'
    },
    {
        productTitle2: "Orange Pattern T-Shirt",
        ProductType2: "Woman",
        productPrice2: "$33.00",
        productSrc2: '/imgs/Gray Pattern T-Shirt.jpg'
    }
];
const myProducts3 = [
    {
        productTitle3: "Green Hoodie",
        ProductType3: "Men",
        productPrice3: "$150.00",
        productSrc3: '/imgs/Green Hoodie.jpg'
    },
    {
        productTitle3: "Light Brown Purse",
        ProductType3: "Accessories",
        productPrice3:"$150.00",
        productSrc3: "/imgs/Light Brown Purse.jpg",
    },
    {
        productTitle3: "Lemons T-Shirt",
        ProductType3: "Woman",
        productPrice3:"$28.00",
        productSrc3: "/imgs/Lemons T-Shirt.jpg",
    },
    {
        productTitle3: "Purple Tshirt",
        ProductType3: "Woman",
        productPrice3:"$27.00",
        productSrc3: "/imgs/Purple T-Shirt.jpg",
    },
    {
        productTitle3: "Red Hoodie",
        ProductType3: "Men",
        productPrice3:"$150.00",
        productSrc3: "/imgs/Red Hoodie.jpg",
    },
    {
        productTitle3: "Slim Fit Blue Jeans",
        ProductType3: "Woman",
        productPrice3:"$150.00",
        productSrc3: "/imgs/Slim Fit Blue Jeans.jpg",
    },
    {
        productTitle3: "Bright Yellow Bag",
        ProductType3: "Accessories",
        productPrice3:"$110.00",
        productSrc3: "/imgs/Bright Yellow Bag.jpg",
    },
    {
        productTitle3: "Red Boho Bangle Bracelet",
        ProductType3: "Accessories",
        productPrice3:"$170.00",
        productSrc3: "/imgs/Red Boho Bangle Bracelet.jpg",
    },
    {
        productTitle3: "Brown Anchor Bracelet",
        ProductType3: "Accessories",
        productPrice3:"$170.00",
        productSrc3: "/imgs/Brown Anchor Bracelet.jpg",
    }
];
const All = () => {
    const [store, setStore] = useState("Store");
    const [arr, setArr] = useState(myProducts);
    const handleClick = (buttonCategory) => {
        // setcurActive(buttonCategory);
        const newArr = myProducts.filter((item) => {
            return item.ProductType === buttonCategory;
        });
        setArr(newArr);
    };
    // Second Page
    const [arr2, setArr2] = useState(myProducts2);
    const handleClick2 = (buttonCategory2) => {
        // setcurActive(buttonCategory);
        const newArr2 = myProducts2.filter((item2) => {
            return item2.ProductType2 === buttonCategory2;
        });
        setArr2(newArr2);
    };
    // Third Page
    const [arr3, setArr3] = useState(myProducts3);
    const handleClick3 = (buttonCategory3) => {
        // setcurActive(buttonCategory);
        const newArr3 = myProducts3.filter((item3) => {
            return item3.ProductType3 === buttonCategory3;
        });
        setArr3(newArr3);
    };




    const [type,setType] = useState("")
    const [pDes,setpDes] = useState("")

    const [currentPage, setCurrentPage] = useState(1);

    const goToPage = (page) => {
        setCurrentPage(page);
    };

    const previousPage = () => {
        if (currentPage > 1) {
            goToPage(currentPage - 1);
        }
    };

    const nextPage = () => {
        if (currentPage < 3) {
            goToPage(currentPage + 1);
        }
    };
    const [pageNumber, setPageNumber] = useState("1 - 12");
    useEffect(() => {
        const changePageNumber = () => {
            if (currentPage === 1) {
                setPageNumber("1 - 12");
            } else if (currentPage === 2) {
                setPageNumber("13 - 24");
            } else if (currentPage === 3) {
                setPageNumber("25 - 31");
            } else {
                setPageNumber("Error");
            }
        };

        changePageNumber();
    }, [currentPage]);

    return (
        <div className="all">
            <div className="container">
                <div className="row">
                    <div className="all-left col-lg-3">
                        <input type="search" name="Product name" id="" placeholder='Search Products.....' />
                        <button className='arrow-right'> <i className="fa-solid fa-angle-right"></i> </button>
                        <label htmlFor="range" className='filter'>Filter by Price</label>
                        <input type="range" name="Range" id="range" min={0} max={100} />
                        <div className="filter-button">
                            <button>Filter</button>
                            <span> Price: $20 — $290 </span>
                        </div>
                        <h4 className='cat'> Categories </h4>
                        <div className="every">
                            <a href="#" onClick={() => { setArr(myProducts); setStore("Store"); setArr2(myProducts2); setArr3(myProducts3); setType(""); setpDes("") }}>EveryThing</a>
                            <p>(36)</p>
                        </div>
                        <div className="acc">
                            <a href="#" onClick={() => {
                                handleClick("Accessories");
                                handleClick2("Accessories");
                                handleClick3("Accessories");
                                setStore("Accessories");
                                setType("Accessories");
                                setpDes("Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit sed ut.");
                            }}>Accessories</a>
                            <p>(7)</p>
                        </div>
                        <div className="men">
                            <a href="#" onClick={() => {
                                handleClick("Men");
                                handleClick2("Men");
                                handleClick3("Men");
                                setStore("Men");
                                setType("Men");
                                setpDes("Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit sed ut.");
                            }}>Men</a>
                            <p>(14)</p>
                        </div>
                        <div className="woman">
                            <a href="#" onClick={() => {
                                handleClick("Woman");
                                handleClick2("Woman");
                                handleClick3("Woman");
                                setStore("Woman");
                                setType("Woman");
                                setpDes("Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit sed ut.");
                            }}>Women</a>
                            <p>(17)</p>
                        </div>
                        <h2 className='our'>Our Best Sellers </h2>
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="row">
                                    <div className="col-lg-6" >
                                        <img src="/imgs/MiniTshirt.jpg" alt="Mini" style={{ maxWidth: "100%" }} />
                                    </div>
                                    <div className="col-lg-6 mini-text" >
                                        <p> <a href="#" className='mini-a'> DNK Green Tshirt </a> </p>
                                        <span>
                                            <i class="fa-regular fa-star"></i>
                                            <i class="fa-regular fa-star"></i>
                                            <i class="fa-regular fa-star"></i>
                                            <i class="fa-regular fa-star"></i>
                                            <i class="fa-regular fa-star"></i>
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
                                    <div className="col-lg-6" >
                                        <img src="/imgs/MiniSlimFit.jpg" alt="Mini" style={{ maxWidth: "100%" }} />
                                    </div>
                                    <div className="col-lg-6 mini-text" >
                                        <p> <a href="#" className='mini-a'> Slim Fit Blue Jeans</a> </p>
                                        <span>
                                            <i class="fa-regular fa-star"></i>
                                            <i class="fa-regular fa-star"></i>
                                            <i class="fa-regular fa-star"></i>
                                            <i class="fa-regular fa-star"></i>
                                            <i class="fa-regular fa-star"></i>
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
                                    <div className="col-lg-6" >
                                        <img src="/imgs/MiniDNKShoes.jpg" alt="Mini" style={{ maxWidth: "100%" }} />
                                    </div>
                                    <div className="col-lg-6 mini-text" >
                                        <p> <a href="#" className='mini-a'> DNK Yellow Shoes</a> </p>
                                        <span>
                                            <i class="fa-regular fa-star"></i>
                                            <i class="fa-regular fa-star"></i>
                                            <i class="fa-regular fa-star"></i>
                                            <i class="fa-regular fa-star"></i>
                                            <i class="fa-regular fa-star"></i>
                                        </span>
                                        <p className='price'> <span>$150.00</span> $120.00 </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr style={{ width: "100% !important" }} />



                        <div className="row">
                            <div className="col-lg-12">
                                <div className="row">
                                    <div className="col-lg-6" >
                                        <img src="/imgs/MiniBlueShirt.jpg" alt="Mini" style={{ maxWidth: "100%" }} />
                                    </div>
                                    <div className="col-lg-6 mini-text" >
                                        <p> <a href="#" className='mini-a'> Blue Tshirt</a> </p>
                                        <span>
                                            <i class="fa-regular fa-star"></i>
                                            <i class="fa-regular fa-star"></i>
                                            <i class="fa-regular fa-star"></i>
                                            <i class="fa-regular fa-star"></i>
                                            <i class="fa-regular fa-star"></i>
                                        </span>
                                        <p className='price'>$40.00 – $46.00</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr style={{ width: "100% !important" }} />

                        <div className="row">
                            <div className="col-lg-12">
                                <div className="row">
                                    <div className="col-lg-6" >
                                        <img src="/imgs/MinibasicGray.jpg" alt="Mini" style={{ maxWidth: "100%" }} />
                                    </div>
                                    <div className="col-lg-6 mini-text" >
                                        <p> <a href="#" className='mini-a'> Basic Gray Jeans</a> </p>
                                        <span>
                                            <i class="fa-regular fa-star"></i>
                                            <i class="fa-regular fa-star"></i>
                                            <i class="fa-regular fa-star"></i>
                                            <i class="fa-regular fa-star"></i>
                                            <i class="fa-regular fa-star"></i>
                                        </span>
                                        <p className='price'>$150.00</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr style={{ width: "100% !important" }} />
                    </div>
                    <div className="all-right col-lg-9">
                        <div className="row ">

                            <AnimatePresence>
                                <p className='title-type'> Home/{store}</p>
                                <h1 className='hone-head'>{type}</h1>
                                <p className='p-des'>{pDes}</p>
                                <div className="show">
                                    <h6> Showing {pageNumber} of 31 results </h6>
                                    <select name="Item Selected" id="Selection" >
                                        <option value="Default Sorting" selected>Default Sorting</option>
                                        <option value="Sort By Popularity">Sort By Popularity</option>
                                        <option value="Average" >Sort By Average Rating</option>
                                        <option value="Latest">Sort By Latest</option>
                                        <option value="Low">Sort By Price: Low To Bigh</option>
                                        <option value="High">Sort By: High To Low</option>
                                    </select>
                                </div>
                                {arr.map((item) => {
                                    return (
                                        <motion.article
                                            layout
                                            initial={{ transform: "scale(0.4)" }}
                                            animate={{ transform: "scale(1)" }}
                                            className="col-lg-4 col-md-6 col-sm-12"
                                            style={{ display: currentPage === 1 ? 'block' : 'none' }}
                                            transition={{ type: "spring", damping: 20, stiffness: 30 }}
                                            key={item.imgPath}>
                                            <div className="item-all">
                                                <img src={item.productSrc} alt="Item One" style={{ maxWidth: "100%" }} />
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

                                    );
                                })}
                            </AnimatePresence>

                            {/* Second page */}


                            <div className="row ">

                                <AnimatePresence>
                                    {arr2.map((item2) => {
                                        return (
                                            <motion.article
                                                layout
                                                initial={{ transform: "scale(0.4)" }}
                                                animate={{ transform: "scale(1)" }}
                                                className="col-lg-4 col-md-6 col-sm-12"
                                                style={{ display: currentPage === 2 ? 'block' : 'none' }}
                                                transition={{ type: "spring", damping: 20, stiffness: 30 }}
                                                key={item2.imgPath}>
                                                <div className="item-all">
                                                    <img src={item2.productSrc2} alt="Item One" style={{ maxWidth: "100%" }} />
                                                    <h6 style={{ marginTop: "20px" }}>{item2.productTitle2}</h6>
                                                    <p style={{ marginTop: "0px" }}>{item2.ProductType2}</p>
                                                    <p>{item2.productPrice2}</p>
                                                    <span>
                                                        <i className="fa-regular fa-star"></i>
                                                        <i className="fa-regular fa-star"></i>
                                                        <i className="fa-regular fa-star"></i>
                                                        <i className="fa-regular fa-star"></i>
                                                        <i className="fa-regular fa-star"></i>
                                                    </span>
                                                </div>

                                            </motion.article>

                                        );
                                    })}
                                </AnimatePresence>

                                {/* Third Page */}
                                <div className="row ">

                                    <AnimatePresence>
                                        {arr3.map((item3) => {
                                            return (
                                                <motion.article
                                                    layout
                                                    initial={{ transform: "scale(0.4)" }}
                                                    animate={{ transform: "scale(1)" }}
                                                    className="col-lg-4 col-md-6 col-sm-12"
                                                    style={{ display: currentPage === 3 ? 'block' : 'none' }}
                                                    transition={{ type: "spring", damping: 20, stiffness: 30 }}
                                                    key={item3.imgPath}>
                                                    <div className="item-all">
                                                        <img src={item3.productSrc3} alt="Item One" style={{ maxWidth: "100%" }} />
                                                        <h6 style={{ marginTop: "20px" }}>{item3.productTitle3}</h6>
                                                        <p style={{ marginTop: "0px" }}>{item3.ProductType3}</p>
                                                        <p>{item3.productPrice3}</p>
                                                        <span>
                                                            <i className="fa-regular fa-star"></i>
                                                            <i className="fa-regular fa-star"></i>
                                                            <i className="fa-regular fa-star"></i>
                                                            <i className="fa-regular fa-star"></i>
                                                            <i className="fa-regular fa-star"></i>
                                                        </span>
                                                    </div>

                                                </motion.article>

                                            );
                                        })}
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
                    </div >
                </div>
            </div >
        </div>
    )
}

export default All;
