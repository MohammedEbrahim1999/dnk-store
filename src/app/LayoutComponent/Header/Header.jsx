'use client';
import React ,{useState} from 'react';
import './Header.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Container } from 'react-bootstrap';
const Header = () => {
    const [display,setDisplay] = useState("none side-dad");
    return (
        <div className="header" >
            <div className="container">
                <div className="row">
                    <Navbar collapseOnSelect expand="lg" className="nav-edit" >
                        <Container>
                            <Navbar.Brand href="/"><img src="/imgs/Nav-Logo.png" alt="Logo" /></Navbar.Brand>
                            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                            <Navbar.Collapse id="responsive-navbar-nav">
                                <Nav className="me-auto">
                                    <Nav.Link href="/Basket">EVERYTHING</Nav.Link>
                                    <Nav.Link href="/Basket/Womans">WOMAN</Nav.Link>
                                    <Nav.Link href="/Basket/Mens">MEN</Nav.Link>
                                    <Nav.Link href="/Basket/Accessoire">ACCESSORIES</Nav.Link>
                                </Nav>
                                <Nav>
                                    <Nav.Link href="/About">ABOUT</Nav.Link>
                                    <Nav.Link href="/Contact">Contact US</Nav.Link>
                                    <Nav.Link href="" onClick={()=>{setDisplay("block side-dad")}}>$0.00</Nav.Link>
                                    <Nav.Link href="" > <i class="fa-solid fa-briefcase" onClick={()=>{setDisplay("block side-dad")}}></i> </Nav.Link>
                                    <Nav.Link href="/Login" > <i class="fa-solid fa-user-large"></i> </Nav.Link>
                                    
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                    <div className={display}>
                        <div className="side">
                            <div className="row">
                                <div className="shop">
                                    <h5>Shopping Cart</h5>
                                    <button onClick={()=>{setDisplay("none side-dad")}}><i class="fa-solid fa-xmark fa-beat-fade" style={{color: "#ff0000"}} ></i></button>
                                </div>
                                <div className="cart">
                                    <h2> No products in the cart. </h2>
                                </div>
                                <button className='butt-a' href="/Basket"> <a href="/Basket" className='go-a'> Continue Shopping </a> </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;
