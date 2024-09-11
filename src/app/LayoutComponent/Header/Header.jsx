'use client';
import React ,{useState} from 'react';
import './Header.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Container } from 'react-bootstrap';
const Header = () => {
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
                                    <Nav.Link href="/Woman">WOMAN</Nav.Link>
                                    <Nav.Link href="/Mens">MEN</Nav.Link>
                                    <Nav.Link href="/Accessoire">ACCESSORIES</Nav.Link>
                                </Nav>
                                <Nav>
                                    <Nav.Link href="/About">ABOUT</Nav.Link>
                                    <Nav.Link href="/Contact">Contact US</Nav.Link>
                                    <Nav.Link href="/CheckOut">$0.00</Nav.Link>
                                    <Nav.Link href="/CheckOut" > <i class="fa-solid fa-briefcase"></i> </Nav.Link>
                                    <Nav.Link href="/Login" > <i class="fa-solid fa-user-large"></i> </Nav.Link>
                                    
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </div>
            </div>
        </div>
    )
}

export default Header;
