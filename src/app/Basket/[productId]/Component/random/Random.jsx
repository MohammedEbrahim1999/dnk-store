'use client';
import React, { useState, useEffect } from 'react';
import myProducts from '../../../../Data';

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

const Random = () => {
    const [shuffledProducts, setShuffledProducts] = useState([]);
    const [rating, setRating] = useState(0);

    useEffect(() => {
        const shuffled = shuffleArray([...myProducts]);
        setShuffledProducts(shuffled.slice(0, 3)); // Get first 3 products
    }, []);

    return (
        <div className="container mt-5">
            <div className="row">
                <h1> Related products </h1>
                {shuffledProducts.map((product) => (
                    <div key={product.id} className="col-12 col-sm-6 col-md-4 mb-4">
                        <div className="card text-dark mb-3" style={{ width: '100%' }}>
                            <img src={product.productSrc} className="card-img-top" alt={product.ProductSrc} />
                            <div className="card-body">
                                <h5 className="card-title">{product.productTitle}</h5>
                                <p className="card-title">{product.ProductType}</p>
                                <p className="card-title">{product.productPrice}</p>
                                <div className="mb-3">
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
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Random;
