import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';


import auth from '../../../firebase.init';
import { Col, Row } from 'react-bootstrap';



const SignUp = () => {
    const [signInWithGoogle, userG, loadingG, errorG] = useSignInWithGoogle(auth);

    const [agree, setAgree] = useState(false)
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    const navigate = useNavigate();

    const navigateLogin = () => {
        navigate('/login');
    }



    if (user) {
        console.log('user', user);
    }



    const handleRegister = async (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        // const agree = event.target.terms.checked;

        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
        console.log('Updated profile');
        navigate('/home');
    }
   

    return (
        <div className='container mt-1'>
            <Row>
                <div className='bg-primary p-2 text-white'>
                    <h3>Please Sign-Up</h3>
                </div>
            </Row>
            <Row className='shadow-lg p-3 mb-5 bg-body rounded'>
                <Col xs={12} md={6}>
                    <img style={{ maxHeight: '500px' }} className='img-fluid' src="https://i.ibb.co/Np2v9pn/person-using-tablet.jpg" alt="" />
                </Col>
                <Col xs={12} md={6}>
                    <div className='mb-2'>
                        <form onSubmit={handleRegister}>
                            <div className='mb-3'>
                                <label htmlFor="name" className="form-label me-2">Your Name:</label>
                                <input type="text" name="name" id="" placeholder='Your Name' />
                            </div>
                            <div className='mb-3'>
                                <label htmlFor="name" className="form-label me-2">Your Email:</label>
                                <input type="email" name="email" id="" placeholder='Email Address' required />

                            </div>
                            <div className='mb-3'>
                                <label htmlFor="name" className="form-label me-2">Your Password :</label>

                                <input type="password" name="password" id="" placeholder='Password' required />
                            </div>
                            <div className='mb-3'>
                                <input onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="terms" />

                                <label className={`ps-2 ${agree ? '' : 'text-danger'}`} htmlFor="terms">Accept  Terms and Conditions</label> <br />
                                <input
                                    disabled={!agree}
                                    className='w-50 mx-auto btn btn-primary mt-3'
                                    type="submit" value="Register" />
                            </div>
                            <div>

                            </div>

                        </form>

                    </div>
                    <div className='d-inline'>
                        <button onClick={() => signInWithGoogle()}className='btn btn-outline-success'>
                            <i className="fab fa-google me-1"></i>Sign-In Using Google</button>
                    </div>
                    <p>Already have an account? <Link to="/signin" className='text-danger pe-auto text-decoration-none' onClick={navigateLogin}>Please Login</Link> </p>
                </Col>
            </Row>

</div>












        
    );
};

export default SignUp;