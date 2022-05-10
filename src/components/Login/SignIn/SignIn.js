
import { sendPasswordResetEmail } from 'firebase/auth';
import React, { useRef } from 'react';
import { Button, Col, Form, Row} from 'react-bootstrap';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';





    const SignIn = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    let errorElement;

    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password);
    }
    const [signInWithGoogle, userG, loadingG, errorG] = useSignInWithGoogle(auth);

    const navigateRegister = event => {
        navigate('/signUp');
    }
    if(user){
        navigate(from, { replace: true });
    }
   

    if (user) {
     console.log('user', user);  
    }
    if (error) {
        errorElement = <p className='text-danger'>Error: {error?.message}</p>
    }
    const resetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
           toast('Sent email');
        }
        else{
            toast('please enter your email address');
        }
    }
    

    return (
        <div className='container m5-1'>
             <Row>
                <div className='bg-primary p-2 text-white '>
                    <h3>Please SignIn</h3>
                </div>
            </Row>
            
             
            <Row className='shadow-lg p-3 mb-5 bg-body rounded'>
            <Col xs={12} md={6}>
                    <img style={{ maxHeight: '500px' }} className='img-fluid' src="https://i.ibb.co/QH968VC/3094352.jpg" alt="" />
                </Col>
                <Col xs={12} md={6}>
                    <div className='mb-3'>
                    <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                 
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>
               
                <Button className='bt btn-primary' variant="primary" type="submit">
                    SignIn
                </Button>
            </Form>
            {errorElement}
            <div className='d-inline '>
                        <button onClick={() => signInWithGoogle()}className='btn btn-outline-success'>
                            <i className="fab fa-google me-1" ></i>Sign-In Using Google</button>
                    </div>
            <p>New with ME? <Link to="/signup" className='text-danger pe-auto text-decoration-none' onClick={navigateRegister}>Please Register</Link> </p>
            <p>Forget Password? <Button className='btn btn-link text-white pe-auto text-decoration-none' onClick={resetPassword}>Reset Password</Button> </p>

          
            <ToastContainer/>
                        
                    </div>
                
                </Col>


            </Row>
           
           
            
        </div>
       

       
    );
};

export default SignIn;