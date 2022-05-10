import { signOut } from 'firebase/auth';
import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
// import logo from '../../../images/logo.png'


const Header = () => {
    const [user] = useAuthState(auth);
    const location =useLocation()
    const navigate=useNavigate()
    const handleSignOut = () =>{
        signOut(auth)
        .then(() => {
            navigate('/home')
        })
       
    }
   
    return (
        <>
        <Navbar collapseOnSelect expand="lg" sticky='top' bg="black" variant="dark">
            <Container>
               {/*  <Navbar.Brand as={Link} to="/">
                    <img height={30} src={logo} alt="" />
                </Navbar.Brand> */}
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="home">Home</Nav.Link>
                        <Nav.Link href="home#experts">Appoinment</Nav.Link>
                       
                    </Nav>
                    <Nav>
                        <Nav.Link as={Link} to="about">About</Nav.Link>
                       
                        
                    </Nav>
                    <Nav>
                    {user ?
                                <Button onClick={handleSignOut} variant='light'>Sign-Out</Button> :
                                <Nav.Link as={Link} to="/signin">Sign-In</Nav.Link>
                            }
                         {user?.displayName &&
                                <Navbar.Text className='ms-2'>
                                    Signed in as: <a href="#"> {user.displayName}</a>
                                </Navbar.Text>
                            }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </>
    );
};

export default Header;