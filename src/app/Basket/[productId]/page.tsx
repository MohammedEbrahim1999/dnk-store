'use client'
import React, { useEffect, useState } from 'react';
import myProducts from '../../Data.js';
import './style.css';
import Light from './Component/light/Light.jsx';
import Random from './Component/random/Random.jsx';
const ProductDetailPage = ({ params }: { params: { productId: string } }) => {
    const [product, setProduct] = useState(null);

    useEffect(() => {
        // Assume myProducts is your products array
        const productData = myProducts.find((item) => item.productId === params.productId);
        setProduct(productData);
    }, [params.productId]);

    if (!product) {
        return <p>Loading...</p>;
    }

    return (
        <>
            <div className='product'>
                <div className="container">
                    <div className="row">
                        <div className="detail">
                            <img src={product.productSrc} alt="" />
                            <div className="content">
                                <p>Home/{product.ProductType}/{product.productTitle}</p>
                                <h3>{product.ProductType},{product.gender}</h3>
                                <h1>{product.productTitle}</h1>
                                <p>{product.productPrice} + FreeShipping</p>
                                <p>{product.description}</p>
                                <hr />
                                <div className="add">
                                    <input type="number" min={0} name="number" id="" style={{ width: "100px", marginRight: "25px", textAlign: "center", fontSize: "35px" }} />
                                    <a href='/CheckOut'> <button className='btn btn-primary' style={{ padding: "12px" }}>CheckOut</button></a>
                                </div>
                                <hr />
                                <h5> SKU: N/A Categories: Accessories, Women </h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Light />
            <Random />
        </>
    );
};

export default ProductDetailPage;
