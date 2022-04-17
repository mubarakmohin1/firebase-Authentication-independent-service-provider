
import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import GoogleLogin from '../GoogleLogin/GoogleLogin';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation()
    let from = location.state?.from?.pathname || "/";

    const [
        signInWithEmailAndPassword,
        user,


    ] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);

    const submitButton = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password)
    }
    const signUpNavigate = event => {
        navigate('/register')
    }
    const resetNavigate = async () => {
        const email = emailRef.current.value;
        await sendPasswordResetEmail(email);
        alert('Sent email');
    }
    if (user) {
        navigate(from, { replace: true });
    }


    if (user) {
        navigate(from, { replace: true });
    }

    return (
        <div className='container w-50'>
            <h2 className='text-center'>Please Login!</h2>
            <Form onSubmit={submitButton}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Login
                </Button>
            </Form>
            <p>New visitors? <Link to={'/register'} className='text-danger pe-auto text-decoration-none' onClick={signUpNavigate}>Go to Registration.</Link></p>
            <p>Forget password? <Link to={'/register'} className='text-danger pe-auto text-decoration-none' onClick={resetNavigate}>Reset password.</Link></p>
            <GoogleLogin></GoogleLogin>
        </div>
    );
};

export default Login;