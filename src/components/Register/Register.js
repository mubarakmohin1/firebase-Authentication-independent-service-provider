import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import GoogleLogin from '../GoogleLogin/GoogleLogin';


const Register = () => {

    const [
        createUserWithEmailAndPassword,
        user
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const navigate = useNavigate();
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const signInNavigate = () => {
        navigate('/signIn')
    }
    const registerButton = event => {
        event.preventDefault();
        //  const name = event.target.name.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        createUserWithEmailAndPassword(email, password)
    }
    if (user) {
        navigate('/')
    }
    return (
        <div className='container w-50'>
            <h2 className='text-center'>Please Registration</h2>
            <Form onSubmit={registerButton}>
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
                    Registration
                </Button>
            </Form>
            <p>Already Registered? <Link to={'/signIn'} className='text-danger pe-auto text-decoration-none' onClick={signInNavigate}>Go to Login.</Link></p>
            <GoogleLogin></GoogleLogin>
        </div>
    );
};

export default Register;