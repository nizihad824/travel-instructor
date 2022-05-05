import React from 'react';
import logo from '../../../Images/logo.png'

// import './Header.css'


import { Link } from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap';


const Header = () => {
   
    return (
        <div>
            <Navbar sticky="top" bg="dark" variant="dark" collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand  to="/home/#top">
                        <img
                            src={logo}
                            width="170"
                            height="170"
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" className='ms-5'>
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/appointment">Upcommig Trips</Nav.Link>
                            <Nav.Link as={Link} to="/about">About Me</Nav.Link>
                        </Nav>
                        <Nav>
                            {/* {user.email ?
                                <Button onClick={handleSignOut} variant='light'>Sign-Out</Button> :
                                <Nav.Link as={Link} to="/signin">Sign-In</Nav.Link>
                            }
                            {user.displayName &&
                                <Navbar.Text className='ms-2'>
                                    Signed in as: <a href="#">{user.displayName}</a>
                                </Navbar.Text>
                            } */}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;