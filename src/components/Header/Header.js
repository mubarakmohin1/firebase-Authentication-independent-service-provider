import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';



const Header = () => {
  const [user] = useAuthState(auth)
  const signOutbtn = () => {
    signOut(auth);
  }
  return (
    <>
      <Navbar collapseOnSelect expand="lg" sticky='top' bg="primary" variant='dark'>
        <Container>
          <Navbar.Brand as={Link} to="/">Service Provider</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="home#service">Services</Nav.Link>
              <Nav.Link as={Link} to="/overview">Overview</Nav.Link>
              <Nav.Link as={Link} to="/blogs">Blogs</Nav.Link>
              <Nav.Link as={Link} to="/about">About me</Nav.Link>

            </Nav>
            <Nav>
              {
                user ? <button onClick={signOutbtn} className='rounded'>SignOut</button> : <Nav.Link as={Link} to="/signIn">Sign In</Nav.Link>
              }

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;