import React from 'react';
import Tech from '../Tech/Tech';
import { Nav, Navbar } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Business from '../Business/Business';
import Health from '../Health/Health';
import Science from '../Science/Science';
import Sports from '../Sports/Sports';
import Top from '../Top/Top';
import Devs from '../Devs/Devs';
const home = () => {
  return (
    <Router>
      <Navbar sticky="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Link to="/"><Navbar.Brand href="/">foOgle news<sup>®</sup></Navbar.Brand></Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Link to='/tech'><Nav.Link href="/tech">Tech</Nav.Link></Link>
            <Link to='/business'><Nav.Link href="/business">Business</Nav.Link></Link>
            <Link to='/health'><Nav.Link href="/health">Health</Nav.Link></Link>
            <Link to='/science'><Nav.Link href="/science">Science</Nav.Link></Link>
            <Link to='/sports'><Nav.Link href="/sports">Sports</Nav.Link></Link>
          </Nav>
          <Nav>
            <Link to='/developer'><Nav.Link href="/developer">About Developerrr</Nav.Link></Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <div className="container mt-3">
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
          <Route exact path="/">
            <Top></Top>
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default home;