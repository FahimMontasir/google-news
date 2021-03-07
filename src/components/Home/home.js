import React from 'react';
import Tech from '../Tech/Tech';
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
import Navigation from '../Navigation/Navigation';
import Ban from '../Ban/Ban'
const home = () => {
  return (
    <>
      <Router>

        <Navigation></Navigation>
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
            <Route path="/bangladesh">
              <Ban></Ban>
            </Route>
            <Route exact path="/">
              <Top></Top>
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
};

export default home;