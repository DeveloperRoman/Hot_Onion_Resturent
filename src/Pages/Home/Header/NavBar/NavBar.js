import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './NavBar.css'
import logo from '../../../../images/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const NavBar = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="md" bg="light" variant="light">
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                            width="160"
                            src={logo}
                            alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto text-center">
                        <Nav.Link href="#home">
                            <FontAwesomeIcon icon={faShoppingCart} />
                        </Nav.Link>
                        <Nav.Link className="mx-4" href="#features">Login</Nav.Link>
                        <Nav.Link
                            className="bg-danger text-white rounded-pill py-2 px-4"
                            href="#pricing">
                            Sing UP
                        </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavBar;