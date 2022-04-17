import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const GoogleLogin = () => {
    const navigate = useNavigate();
    const [signInWithGoogle, user, error] = useSignInWithGoogle(auth);
    let errorValue;
    if (error) {

        errorValue = <p className='text-danger'>Error: {error?.message} </p>
    }
    if (user) {
        navigate('/home');
    }
    return (
        <div>

            <div className='d-flex align-items-center'>
                <div style={{ height: "2px" }} className='bg-primary w-50'></div>
                <div className='ms-3 me-3'>or</div>
                <div style={{ height: "2px" }} className='bg-primary w-50'></div>
            </div>
            {errorValue}
            <div>
                <button onClick={() => signInWithGoogle()} className='btn btn-info text-white d-block mx-auto mt-2 w-50'>Google Sign In</button>
            </div>

        </div>
    );
};

export default GoogleLogin;