'use client';
import React, { useState } from 'react'
import './Products.css';
// Shoes Men Product 
const myShoes = [
    { src: '/imgs/sports-shoes Blue One.jpg', color: 'blue', headline: 'DNK Blue Shoes', price: "$200.00" },
    { src: '/imgs/DNK Green Shoes.jpg', color: 'green', headline: 'DNK Green Shoes', price: "$220.00" },
    { src: '/imgs//DNK Red Shoes.jpg', color: 'red', headline: 'DNK Red Shoes', price: "$240.00" },
]
// Anchor ACCEssories Product 
const myAnchor = [
    { src: '/imgs/Anchor Bracelet.jpg', color: 'black', headline: 'Black Anchor Bracelet', price: "$150.00" },
    { src: '/imgs/Brown Anchor Bracelet.jpg', color: 'brown', headline: 'Brown Anchor Bracelet', price: "$170.00" },
    { src: '/imgs/Red Anchor Bracelet.jpg', color: 'redd', headline: 'Red Anchor Bracelet', price: "$180.00" },
];
// Boho bangle ACCEssories Product
const myBoho = [
    { src: '/imgs/Boho Bangle Bracelet.jpg', color: 'Blue', headline: 'Blue Bangle Bracelet', price: "$150.00" },
    { src: '/imgs/Green Bogo Bangle Bracelet.jpg', color: 'green', headline: 'Green Bangle Bracelet', price: "$160.00" },
    { src: '/imgs/Red Boho Bangle Bracelet.jpg', color: 'red', headline: 'Red Bangle Bracelet', price: "$170.00" },
];
// Bag Accessories Product 
const myBag = [
    { src: '/imgs/Bright Blue Bag.jpg', color: 'Blue', headline: 'Bright Blue Bag', price: "$100.00" },
    { src: '/imgs/Bright Yellow Bag.jpg', color: 'orange', headline: 'Bright Orange Bag', price: "$110.00" },
    { src: '/imgs/Bright Purple Bag.jpg', color: 'purple', headline: 'Bright Purple Bag', price: "$120.00" },
    { src: '/imgs/Bright Red Bag.jpg', color: 'red', headline: 'Bright Red Bag', price: "$140.00" },
]
const Products = () => {
    // Shoes Men Product 
    const [shoesSrc, setShoesSrc] = useState(myShoes[0].src);
    const [shoesHeadline, setShoesHeadline] = useState(myShoes[0].headline);
    const [shoesPrice, setShoesPrice] = useState(myShoes[0].price + " " + myShoes[2].price);
    // Anchor ACCEssories Product 
    const [anchorSrc, setAnchorSrc] = useState(myAnchor[0].src);
    const [anchorHeadline, setAnchorHeadline] = useState(myAnchor[0].headline);
    const [anchorPrice, setAnchorPrice] = useState(myAnchor[0].price + " " + myAnchor[2].price)
    // Boho bangle ACCEssories Product
    const [bohoSrc, setBohoSrc] = useState(myBoho[0].src);
    const [bohoHeadline, setBohoHeadline] = useState(myBoho[0].headline);
    const [bohoPrice, setBohoPrice] = useState(myBoho[0].price + " " + myBoho[2].price);
    // Bag Accessories Product 
    const [bagsrc, setBagSrc] = useState(myBag[0].src);
    const [bagHeadline, setBagHeadline] = useState(myBag[0].headline);
    const [bagPrice, setBagPrice] = useState(myBag[0].price + " " + myBag[3].price);
    return (
        <div className="product">
            <div className="container">
                <div className="row">
                    <h2> Featured Products </h2>
                    <hr />
                    <div className="divider"></div>
                    <div className="col-md-3 col-lg-3 product-one">
                        <img src="/imgs/sports-shoe3.jpg" alt="DNK Yellow Shoes" />
                        <div className="content">
                            <h3>DNK Yellow Shoes</h3>
                            <p>Men</p>
                            <p className='price'> <span>$150.00</span> $120.00 </p>
                            <span>
                                <i class="fa-regular fa-star"></i>
                                <i class="fa-regular fa-star"></i>
                                <i class="fa-regular fa-star"></i>
                                <i class="fa-regular fa-star"></i>
                                <i class="fa-regular fa-star"></i>
                            </span>
                        </div>
                    </div>
                    <div className="col-md-3 col-lg-3 product-two">
                        <img src={shoesSrc} alt="DNK Shoes" />
                        <div className="content">
                            <h3>{shoesHeadline}</h3>
                            <p>Men</p>
                            <p className='price'> {shoesPrice} </p>
                            <div className="circle flex">
                                <span
                                    onClick={() => { setShoesSrc(myShoes[0].src); setShoesHeadline(myShoes[0].headline); setShoesPrice(myShoes[0].price) }}
                                    data-tooltip="Blue"
                                    className="circle-one"

                                ></span>
                                <span
                                    onClick={() => { setShoesSrc(myShoes[1].src); setShoesHeadline(myShoes[1].headline); setShoesPrice(myShoes[1].price) }}
                                    data-tooltip="Green"
                                    className="circle-two"
                                ></span>
                                <span
                                    onClick={() => { setShoesSrc(myShoes[2].src); setShoesHeadline(myShoes[2].headline); setShoesPrice(myShoes[2].price) }}
                                    data-tooltip="Red"
                                    className="circle-three"
                                ></span>
                            </div>
                            <span>
                                <i class="fa-regular fa-star"></i>
                                <i class="fa-regular fa-star"></i>
                                <i class="fa-regular fa-star"></i>
                                <i class="fa-regular fa-star"></i>
                                <i class="fa-regular fa-star"></i>
                            </span>
                        </div>
                    </div>
                    <div className="col-md-3 col-lg-3 product-three">
                        <img src="/imgs/JeansMen.jpg" alt="Dark Brown Jeans" />
                        <div className="content">
                            <h3>Dark Brown jeans </h3>
                            <p>Men</p>
                            <p className='price'>$150.00 </p>
                            <span>
                                <i class="fa-regular fa-star"></i>
                                <i class="fa-regular fa-star"></i>
                                <i class="fa-regular fa-star"></i>
                                <i class="fa-regular fa-star"></i>
                                <i class="fa-regular fa-star"></i>
                            </span>
                        </div>
                    </div>
                    <div className="col-md-3 col-lg-3 product-four">
                        <img src="/imgs/jeansWoman1.jpg" alt="Blue Denim Jeans" />
                        <div className="content">
                            <h3>Blue Denim Jeans </h3>
                            <p>Woman</p>
                            <p className='price'>$150.00 </p>
                            <span>
                                <i class="fa-regular fa-star"></i>
                                <i class="fa-regular fa-star"></i>
                                <i class="fa-regular fa-star"></i>
                                <i class="fa-regular fa-star"></i>
                                <i class="fa-regular fa-star"></i>
                            </span>
                        </div>
                    </div>
                    <div className="col-md-3 col-lg-3 product-five">
                        <img src="/imgs/jeansWoman2.jpg" alt="Basic Gray Jeans" />
                        <div className="content">
                            <h3>Basic Gray Jeans </h3>
                            <p>Woman</p>
                            <p className='price'>$150.00 </p>
                            <span>
                                <i class="fa-regular fa-star"></i>
                                <i class="fa-regular fa-star"></i>
                                <i class="fa-regular fa-star"></i>
                                <i class="fa-regular fa-star"></i>
                                <i class="fa-regular fa-star"></i>
                            </span>
                        </div>
                    </div>
                    <div className="col-md-3 col-lg-3 product-six">
                        <img src="/imgs/BlueDenim Short.jpg" alt="Blue Denim Shorts" />
                        <div className="content">
                            <h3>Blue Denim Shorts </h3>
                            <p>Woman</p>
                            <p className='price'> <span> $150.00 </span>  $130.00 </p>
                            <span>
                                <i class="fa-regular fa-star"></i>
                                <i class="fa-regular fa-star"></i>
                                <i class="fa-regular fa-star"></i>
                                <i class="fa-regular fa-star"></i>
                                <i class="fa-regular fa-star"></i>
                            </span>
                        </div>
                    </div>
                    <div className="col-md-3 col-lg-3 product-seven">
                        <img src={anchorSrc} alt="DNK Shoes" />
                        <div className="content">
                            <h3>{anchorHeadline}</h3>
                            <p>Accessories</p>
                            <p className='price'> {anchorPrice} </p>
                            <div className="circle flex">
                                <span
                                    className="circle-one-second-class"
                                    onClick={() => { setAnchorSrc(myAnchor[0].src); setAnchorHeadline(myAnchor[0].headline); setAnchorPrice(myAnchor[0].price) }}
                                >
                                </span>
                                <span
                                    className="circle-two-second-class"
                                    onClick={() => { setAnchorSrc(myAnchor[1].src); setAnchorHeadline(myAnchor[1].headline); setAnchorPrice(myAnchor[1].price) }}
                                >
                                </span>
                                <span
                                    className="circle-three-second-class"
                                    onClick={() => { setAnchorSrc(myAnchor[2].src); setAnchorHeadline(myAnchor[2].headline); setAnchorPrice(myAnchor[2].price); }}
                                >
                                </span>
                            </div>
                            <span>
                                <i class="fa-regular fa-star"></i>
                                <i class="fa-regular fa-star"></i>
                                <i class="fa-regular fa-star"></i>
                                <i class="fa-regular fa-star"></i>
                                <i class="fa-regular fa-star"></i>
                            </span>
                        </div>
                    </div>
                    <div className="col-md-3 col-lg-3 product-eight">
                        <img src={bohoSrc} alt="DNK Shoes" />
                        <div className="content">
                            <h3>{bohoHeadline}</h3>
                            <p>Accessories</p>
                            <p className='price'> {bohoPrice} </p>
                            <div className="circle flex">
                                <span
                                    onClick={() => {
                                        setBohoSrc(myBoho[0].src);
                                        setBohoHeadline(myBoho[0].headline);
                                        setBohoPrice(myBoho[0].price);
                                    }}
                                    className="circle-one-third-class">
                                </span>
                                <span
                                    onClick={() => {
                                        setBohoSrc(myBoho[1].src);
                                        setBohoHeadline(myBoho[1].headline);
                                        setBohoPrice(myBoho[1].price);
                                    }}
                                    className="circle-two-third-class">
                                </span>
                                <span
                                    onClick={() => {
                                        setBohoSrc(myBoho[2].src);
                                        setBohoHeadline(myBoho[2].headline);
                                        setBohoPrice(myBoho[2].price);
                                    }}
                                    className="circle-three-third-class">
                                </span>

                            </div>
                            <span>
                                <i class="fa-regular fa-star"></i>
                                <i class="fa-regular fa-star"></i>
                                <i class="fa-regular fa-star"></i>
                                <i class="fa-regular fa-star"></i>
                                <i class="fa-regular fa-star"></i>
                            </span>
                        </div>
                    </div>
                    <div className="col-md-3 col-lg-3 product-nine">
                        <img src="/imgs/Light Brown Purse.jpg" alt="Light Brown Purse" />
                        <div className="content">
                            <h3>Light Brown Purse </h3>
                            <p>Accessories</p>
                            <p className='price'>$150.00 </p>
                            <span>
                                <i class="fa-regular fa-star"></i>
                                <i class="fa-regular fa-star"></i>
                                <i class="fa-regular fa-star"></i>
                                <i class="fa-regular fa-star"></i>
                                <i class="fa-regular fa-star"></i>
                            </span>
                        </div>
                    </div>
                    <div className="col-md-3 col-lg-3 product-ten">
                        <img src={bagsrc} alt="DNK Shoes" />
                        <div className="content">
                            <h3>{bagHeadline}</h3>
                            <p>Accessories</p>
                            <p className='price'> {bagPrice} </p>
                            <div className="circle flex">
                                <span
                                    className="circle-one-class-five"
                                    onClick={() => {
                                        setBagSrc(myBag[0].src);
                                        setBagHeadline(myBag[0].headline);
                                        setBagPrice(myBag[0].price);
                                    }}
                                ></span>
                                <span
                                    className="circle-two-class-five"
                                    onClick={() => {
                                        setBagSrc(myBag[1].src);
                                        setBagHeadline(myBag[1].headline);
                                        setBagPrice(myBag[1].price);
                                    }}
                                ></span>
                                <span
                                    className="circle-three-class-five"
                                    onClick={() => {
                                        setBagSrc(myBag[2].src);
                                        setBagHeadline(myBag[2].headline);
                                        setBagPrice(myBag[2].price);
                                    }}
                                ></span>
                                <span
                                    className="circle-four-class-five"
                                    onClick={() => {
                                        setBagSrc(myBag[3].src);
                                        setBagHeadline(myBag[3].headline);
                                        setBagPrice(myBag[3].price);
                                    }}
                                ></span>


                            </div>
                            <span>
                                <i class="fa-regular fa-star"></i>
                                <i class="fa-regular fa-star"></i>
                                <i class="fa-regular fa-star"></i>
                                <i class="fa-regular fa-star"></i>
                                <i class="fa-regular fa-star"></i>
                            </span>
                        </div>
                    </div>
                    <div className="col-md-3 col-lg-3 product-one">
                        <img src="/imgs/Slim Fit Blue Jeans.jpg" alt="Slim Fit Blue Jeans" />
                        <div className="content">
                            <h3>Slim Fit Blue Jeans</h3>
                            <p>Woman</p>
                            <p className='price'> <span>$150.00</span> $120.00 </p>
                            <span>
                                <i class="fa-regular fa-star"></i>
                                <i class="fa-regular fa-star"></i>
                                <i class="fa-regular fa-star"></i>
                                <i class="fa-regular fa-star"></i>
                                <i class="fa-regular fa-star"></i>
                            </span>
                        </div>
                    </div>
                    <div className="col-md-3 col-lg-3 product-three">
                        <img src="/imgs/Green Hoodie.jpg" alt="Green Hoodie" />
                        <div className="content">
                            <h3>Green Hoodie </h3>
                            <p>Men</p>
                            <p className='price'>$150.00 </p>
                            <span>
                                <i class="fa-regular fa-star"></i>
                                <i class="fa-regular fa-star"></i>
                                <i class="fa-regular fa-star"></i>
                                <i class="fa-regular fa-star"></i>
                                <i class="fa-regular fa-star"></i>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Products



