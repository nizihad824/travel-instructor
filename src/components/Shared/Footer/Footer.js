import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './Footer.css'
import logo from '../../../Images/logo.jpg'


const Footer = () => {
    return (
        <div className='bg-footer p-2'>
            <Row className='w-100'>
                <Col md={4} sm={12} >
                    <img  style={{borderRadius :'50px'}} className='img-fluid img' src={logo} alt="" />
                </Col>
                <Col md={8} sm={12}>
                    <Row>
                       
                        <Col md={6} sm={12}>
                            <h5>Info<br />Berlin</h5>
                            <address>
                                <p>abcd Street 110<br /></p>
                                <p><i className="fas fa-tty text-success"></i> +029587465</p>
                            </address>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={12} className='p-3 d-flex justify-content-center border-top border-1 border-danger'>
                            <div>
                                <div className='d-flex justify-content-center'>
                                    <a target='_blank' rel="noreferrer" href="https://www.facebook.com/">
                                        <i className="fab fa-facebook text-primary fs-4"></i>
                                    </a>
                                    <a target='_blank' rel="noreferrer" href="https://www.instagram.com/?hl=en">
                                        <i className="fab fa-instagram text-danger ms-2 fs-4"></i>
                                    </a>
                                    <a target='_blank' rel="noreferrer" href="https://www.youtube.com/">
                                        <i className="fab fa-youtube text-danger ms-2 fs-4"></i>
                                    </a>
                                </div>
                                <p>&copy;Your next travel instructor9 </p>
                            </div>

                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    );
};

export default Footer;