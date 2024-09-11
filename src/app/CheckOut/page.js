// src/App.js
'use client'
import React, { useState } from 'react';
import { Button, Table, Container, Row, Col, Card, InputGroup, FormControl } from 'react-bootstrap';

const CheckOut = () => {
    const [cart, setCart] = useState([]);

    // Example products
    const products = [
        { id: 1, name: 'Black Anchor Bracelet', price: 150, src: '/imgs/Anchor Bracelet.jpg' },
        { id: 2, name: 'Basic Gray Jeans', price: 150, src: '/imgs/jeansWoman2.jpg' },
        { id: 3, name: 'Black Hoodie', price: 150, src: '/imgs/BlackHoodie.jpg' },
        { id: 4, name: 'Black handBag', price: 150, src: '/imgs/BlackOverBag.jpg' },
        { id: 5, name: 'Blue Denim Jeans', price: 150, src: '/imgs/jeansWoman1.jpg' },
        { id: 6, name: 'Blue Denim Short', price: 150, src: '/imgs/BlueDenim Short.jpg' },
        { id: 7, name: 'Blue T-Shirt', price: 150, src: '/imgs/BlueHoodie.jpg' },
        { id: 8, name: 'Blue T-Shirt', price: 40, src: '/imgs/Blue Tshirt.jpg' },
        { id: 9, name: 'Boho Bangle Bracelet', price: 150, src: '/imgs/Boho Bangle Bracelet.jpg' },
        { id: 10, name: 'Bright Gold Purse', price: 150, src: '/imgs/Bright Gold Purse.jpg' },
        { id: 11, name: 'Bright Red Bag', price: 150, src: '/imgs/Bright Red Bag.jpg' },
        { id: 12, name: 'Buddha Bracelet', price: 150, src: '/imgs/BraceletCudd.jpg' },
        { id: 13, name: 'Dark Blue Denim Jeans', price: 150, src: 'imgs/BlueDenimJeans.jpg' },
        { id: 14, name: 'Dark Brown Jeans', price: 150, src: '/imgs/JeansMen.jpg' },
        { id: 15, name: 'Dark Gray Jeans', price: 150, src: '/imgs/DarkGrayJeans.jpg' },
        { id: 16, name: 'DNK Black Shoes', price: 175, src: '/imgs/DNKBlackShoes.jpg' },
        { id: 17, name: 'DNK Blue Shoes', price: 200, src: '/imgs/sports-shoes Blue One.jpg' },
        { id: 18, name: 'DNK Green Shoes', price: 250, src: '/imgs/DNK Green Shoes.jpg' },
        { id: 19, name: 'DNK Green T-Shirt', price: 44, src: '/imgs/DNK Green T-Shirt.jpg' },
        { id: 20, name: 'DNK Red Shoes', price: 150, src: '/imgs/DNK Red Shoes.jpg' },
        { id: 21, name: 'DNK Yellow Shoes', price: 120, src: '/imgs/sports-shoe3.jpg' },
        { id: 22, name: 'Faint Washed Denim Blue Jeans', price: 150, src: '/imgs/Faint Jeans.jpg' },
        { id: 23, name: 'Flamingo T-Shirt', price: 28, src: '/imgs/Flamingo Tshirt.jpg' },
        { id: 24, name: 'Orange Pattern T-Shirt', price: 33, src: '/imgs/Gray Pattern T-Shirt.jpg' },
        { id: 25, name: 'Green Hoodie', price: 150, src: '/imgs/Green Hoodie.jpg' },
        { id: 26, name: 'Light Brown Purse', price: 150, src: '/imgs/Light Brown Purse.jpg' },
        { id: 27, name: 'Lemons T-Shirt', price: 28, src: '/imgs/Lemons T-Shirt.jpg' },
        { id: 28, name: 'Purple Tshirt', price: 27, src: '/imgs/Purple T-Shirt.jpg' },
        { id: 29, name: 'Red Hoodie', price: 150, src: '/imgs/Red Hoodie.jpg' },
        { id: 30, name: 'Slim Fit Blue Jeans', price: 150, src: '/imgs/Slim Fit Blue Jeans.jpg' },
        { id: 31, name: 'Bright Yellow Bag', price: 110, src: '/imgs/Bright Yellow Bag.jpg' },
        { id: 32, name: 'Red Boho Bangle Bracelet', price: 170, src: '/imgs/Red Boho Bangle Bracelet.jpg' },
        { id: 33, name: 'Brown Anchor Bracelet', price: 170, src: '/imgs/Brown Anchor Bracelet.jpg' },
    ];

// Add to Cart Function
const addToCart = (product) => {
    const existingItem = cart.find((item) => item.id === product.id);
    if (existingItem) {
        setCart(
            cart.map((item) =>
                item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
            )
        );
    } else {
        setCart([...cart, { ...product, quantity: 1 }]);
    }
};

// Remove from Cart Function
const removeFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
};

// Remove All Items from Cart Function
const removeAllFromCart = () => {
    setCart([]); // Clears all items from the cart
};

// Update Quantity Function
const updateQuantity = (productId, quantity) => {
    setCart(
        cart.map((item) =>
            item.id === productId ? { ...item, quantity: parseInt(quantity) } : item
        )
    );
};

// Calculate Total Price
const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
};

return (
    <Container className="mt-5">
        <Row>
            <Col lg={8} md={7} sm={12}>
                <h2 className="mb-4">Products</h2>
                <Row>
                    {products.map((product) => (
                        <Col key={product.id} lg={6} md={12} className="mb-4">
                            <Card className="h-100">
                                <Card.Img
                                    variant="top"
                                    src={product.src}
                                    alt={product.name}
                                    style={{ maxHeight: '200px', objectFit: 'cover' }}
                                />
                                <Card.Body className="d-flex flex-column">
                                    <Card.Title>{product.name}</Card.Title>
                                    <Card.Text>Price: ${product.price.toFixed(2)}</Card.Text>
                                    <Button
                                        variant="primary"
                                        onClick={() => addToCart(product)}
                                        className="mt-auto"
                                    >
                                        Add to Cart
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Col>
            <Col lg={4} md={5} sm={12}>
                <h2 className="mb-4">Shopping Cart</h2>
                {cart.length === 0 ? (
                    <p>Your cart is empty.</p>
                ) : (
                    <>
                        <Table striped bordered hover responsive className="table-sm">
                            <thead>
                                <tr>
                                    <th>Item</th>
                                    <th>Price</th>
                                    <th>Qty</th>
                                    <th>Total</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cart.map((item) => (
                                    <tr key={item.id}>
                                        <td>{item.name}</td>
                                        <td>${item.price.toFixed(2)}</td>
                                        <td style={{ width: '80px' }}>
                                            <InputGroup size="sm">
                                                <FormControl
                                                    type="number"
                                                    min="1"
                                                    value={item.quantity}
                                                    onChange={(e) => updateQuantity(item.id, e.target.value)}
                                                />
                                            </InputGroup>
                                        </td>
                                        <td>${(item.price * item.quantity).toFixed(2)}</td>
                                        <td>
                                            <Button
                                                variant="danger"
                                                size="sm"
                                                onClick={() => removeFromCart(item.id)}
                                            >
                                                Remove
                                            </Button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                        <div className="d-flex flex-column flex-sm-row justify-content-between align-items-center mt-3">
                            <h4 className="mb-3 mb-sm-0">Total: ${calculateTotal()}</h4>
                            <div className="d-flex flex-column gap-3">
                                <Button variant="danger" className="" size="lg" onClick={removeAllFromCart}>
                                    Remove All
                                </Button>
                                <Button variant="success" size="lg">
                                    Checkout
                                </Button>
                            </div>
                        </div>
                    </>
                )}
            </Col>
        </Row>
    </Container>
);
};

export default CheckOut;
