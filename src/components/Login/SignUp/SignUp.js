import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';


import auth from '../../../firebase.init';



const SignUp = () => {
    const [agree,setAgree]=useState(false)
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] =useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});
      const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    const navigate = useNavigate();

    const navigateLogin = () =>{
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
        <div className='register-form'>
        <h2 style={{textAlign: 'center'}}>PleaseSignUp</h2>
        <form onSubmit={handleRegister}>
            <input type="text" name="name" id="" placeholder='Your Name'/>
            
            <input type="email" name="email" id="" placeholder='Email Address' required/>
            
            <input type="password" name="password" id="" placeholder='Password' required/>
            {/* <input  type="checkbox" name="terms" id="terms" />
             */}
             <input onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="terms" />
            {/* <label  htmlFor="terms">Accept Genius Car Terms and Conditions</label> */}
            <label className={`ps-2 ${agree ? '' : 'text-danger'}`} htmlFor="terms">Accept Genius Car Terms and Conditions</label>
            <input
            disabled={!agree}
             className='w-50 mx-auto btn btn-primary mt-3'
              type="submit" value="Register" />
            
            
           
        </form>
        <p>Already have an account? <Link to="/login" className='text-danger pe-auto text-decoration-none' onClick={navigateLogin}>Please Login</Link> </p>

       
    </div>
    );
};

export default SignUp;