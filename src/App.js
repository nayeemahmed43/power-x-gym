import React, { useEffect } from 'react';
import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home';
import OurClasses from './components/OurClasses';
import Pricing from './components/Pricing';
import PersonalDetails from './components/PersonalDetails';
import ReactGA from 'react-ga';

const initializeAnalytics = ()=>{
    ReactGA.initialize('UA-168211357-1');
    ReactGA.pageview(window.location.pathname);
}

function App() {

  useEffect(()=>{
    initializeAnalytics()
  },[])
  return (
    <div className="App">
      
      <Router>
        <Switch>

          <Route path="/home">
              <Home></Home>
          </Route>

          <Route path="/our_classes">
              <OurClasses></OurClasses>
          </Route>

          <Route exact path="/">
              <Home></Home>
          </Route>

          <Route  path="/pricing">
              <Pricing></Pricing>
          </Route>

          <Route  path="/personalDetails/:key">
              <PersonalDetails></PersonalDetails>
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
