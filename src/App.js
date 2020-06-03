import React from 'react';
import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home';
import OurClasses from './components/OurClasses';
import Pricing from './components/Pricing';

function App() {
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

          <Route exact path="/pricing">
              <Pricing></Pricing>
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
