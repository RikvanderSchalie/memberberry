import React from 'react';
import {BrowserRouter as Router, Switch, Route, } from 'react-router-dom';
import WelkomPage from "./pages/welcome";
import HomePage from "./pages/home";
import "./App.css";


function App() {
  return (
      <Router>


          <Switch>

              <Route exact path="/">
              <HomePage/>
              </Route>

              <Route path= "/welkom">
              <WelkomPage/>
              </Route>

              </Switch>
      </Router>



  );
}

export default App;
