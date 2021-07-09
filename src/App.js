import React from 'react';
import {BrowserRouter as Router, Switch, Route, } from 'react-router-dom';
import WelkomPage from "./pages/welcome";
import HomePage from "./pages/home";
import SigninPage from "./pages/Signin";
import SignUpPage from "./pages/signup";
import MovieItemPage from "./pages/movieItem";
import ListPage from "./pages/list";
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

              <Route path= "/Signin">
                  <SigninPage/>
              </Route>

              <Route path= "/signup">
                  <SignUpPage/>
              </Route>

              <Route path= "/movieItem">
                  <MovieItemPage/>
              </Route>

              <Route path= "/list">
                  <ListPage/>
              </Route>

          </Switch>
      </Router>



  );
}

export default App;
