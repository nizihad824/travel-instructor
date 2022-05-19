import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './Footer.css'
import logo from '../../../Images/logo.jpg'

import './Footer.css'

const Footer = () => {
    return (
        <div className='bg-footer p-2 footer'>

  <div className="footer-left col-md-4 col-sm-6">
    <p className="about mt-5">
        
      <span> About Myself</span> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis ipsum possimus sapiente aut reprehenderit quis error non dicta optio excepturi placeat sed cum vitae, voluptatem consectetur natus reiciendis enim! Aspernatur.
    </p>
    <div className="icons mt-5 pt-5">
  
      <a href="#"><i className="fab fa-facebook"></i></a>
      <a href="#"><i className="fab fa-twitter"></i></a>
      <a href="#"><i className="fab fa-linkedin"></i></a>
      <a href="#"><i className="fab fa-google-plus"></i></a>
      <a href="#"><i className="fab fa-instagram"></i></a>
    </div>
  </div>
  <div className="footer-center col-md-4 col-sm-6">
    
  </div>
  <div className="footer-right col-md-4 col-sm-6">
  <div>
        <div>
        <img  style={{borderRadius :'80px',height:'200px'}}   className='img-fluid p-5 img' src={logo} alt="" />
        </div>
      <i className="fa fa-map-marker"></i>
      <p><span> Hohenburg Straße 88</span> Essen, Germany</p>
    </div>
    <div>
      <i className="fa fa-phone"></i>
      <p> (+299) 777 558 4566</p>
    </div>
    <div>
      <i className="fa fa-envelope"></i>
      <p><a href="#"> office@company.com</a></p>
    </div>

    <div>
        
    </div>
   
    
  </div>
  <p className="name mx-auto"> Company Name &copy; 2022</p>



            {/* <Row className='w-100'>
                <Col md={4} sm={8} >
                    <img  style={{borderRadius :'50px'}} className='img-fluid p-5 img' src={logo} alt="" />
                </Col>
                <Col md={8} sm={12}>
                   
                    <Row>
                        <Col sm={12} className='p-3 d-flex justify-content-center align-items-center '>
                            <div>
                                <div className='d-flex justify-content-center align-items-center'>
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
                                <p className='fixed bottom'>&copy;Your next travel instructor </p>
                            </div>

                        </Col>
                    </Row>
                </Col>
            </Row> */}
        </div>
    );
};

export default Footer;