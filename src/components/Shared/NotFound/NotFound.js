import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css'

const NotFound = () => {
    return (
        <div className='Container d-flex justify-content-center bg-404'>
            <div>
                <div className='d-flex justify-content-center'>
                    <Link to='/home'>
                        <button className='btn btn-outline-success m-2'>Back to Home</button>
                    </Link>
                </div>
               

            </div>
        </div>
    );
};

export default NotFound;