
import React from 'react';
import { Nav, Navbar, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <Navbar sticky="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="/">foOgle news<sup>R</sup></Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Link to='/tech'><Button variant="outline-secondary" className='m-1'>Tech</Button></Link>
          <Link to='/business'><Button variant="outline-secondary" className='m-1'>Business</Button></Link>
          <Link to='/health'><Button variant="outline-secondary" className='m-1'>Health</Button></Link>
          <Link to='/science'><Button variant="outline-secondary" className='m-1'>Science</Button></Link>
          <Link to='/sports'><Button variant="outline-secondary" className='m-1'>Sports</Button></Link>
          <Link to='/bangladesh'><Button variant="outline-secondary" className='m-1'>Bangladesh</Button></Link>

        </Nav>
        <Nav>
          <Link to='/developer'><Button variant="outline-secondary" className='m-1'>Developer</Button></Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;