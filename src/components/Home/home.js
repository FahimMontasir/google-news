import React from 'react';
import Tech from '../Tech/Tech';
import { Nav, Navbar } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Business from '../Business/Business';
import Health from '../Health/Health';
import Science from '../Science/Science';
import Sports from '../Sports/Sports';
import Top from '../Top/Top';
import Devs from '../Devs/Devs';
import Ban from '../Ban/Ban';
const home = () => {
  return (
    <>
      <Navbar sticky="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="/">foOgle news<sup>®</sup></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/tech">Tech</Nav.Link>
            <Nav.Link href="/business">Business</Nav.Link>
            <Nav.Link href="/health">Health</Nav.Link>
            <Nav.Link href="/science">Science</Nav.Link>
            <Nav.Link href="/sports">Sports</Nav.Link>
            <Nav.Link href="/bangladesh">Bangladesh</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="/developer">About Developerrr</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <div className="container mt-3">
        <Router>
          <Switch>
            <Route path="/tech">
              <Tech></Tech>
            </Route>
            <Route path="/business">
              <Business></Business>
            </Route>
            <Route path="/health">
              <Health></Health>
            </Route>
            <Route path="/science">
              <Science></Science>
            </Route>
            <Route path="/sports">
              <Sports></Sports>
            </Route>
            <Route path="/developer">
              <Devs></Devs>
            </Route>
            <Route path="/bangladesh">
              <Ban></Ban>
            </Route>
            <Route exact path="/">
              <Top></Top>
            </Route>
          </Switch>
        </Router>
      </div>

    </>
  );
};

export default home;