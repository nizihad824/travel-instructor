import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Review.css'

const Review = (props) => {
    const { name, reviews, img } = props.review;
    return (
        <div className='container-r mb-5 ms-5 g-4'>
            <div className='card-style text-white p-5'>
                <div className=' d-flex justify-content-center'>
                <img src={img} alt="" />
                </div>
                <h3 className='name d-flex justify-content-center text-white'>{name}</h3>
                
                <p className='text-black'>{reviews}</p>
                <div className='d-flex justify-content-center text-warning'>
                <span>  <FontAwesomeIcon icon={faStar}></FontAwesomeIcon></span>
               <span>  <FontAwesomeIcon icon={faStar}></FontAwesomeIcon></span>
               <span>  <FontAwesomeIcon icon={faStar}></FontAwesomeIcon></span>
               <span>  <FontAwesomeIcon icon={faStar}></FontAwesomeIcon></span>
               <span>  <FontAwesomeIcon icon={faStar}></FontAwesomeIcon></span>
                </div>
              

            </div>
            </div>
    );
};

export default Review;