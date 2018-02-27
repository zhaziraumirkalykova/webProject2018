import React, { Component } from 'react';
import {Route, NavLink, HashRouter } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import './bootstrap.css';

import Home from './home';
import About from './about';
import Contact from './contact';

class App extends Component {
  render() {
    return (
        <HashRouter>
          <div className ="container">
            <div className="navbar navbar-expand-lg bg-light navbar-light">
              <ul className="navbar-nav">
                <li className="nav-item"><NavLink className="nav-link" to="/"> Home </NavLink></li>
                <li className="nav-item" ><NavLink className="nav-link" to="/about"> About </NavLink></li>
                <li className="nav-item"><NavLink className="nav-link" to="/contact"> Contact</NavLink></li>
              </ul>
            </div>
            <div>
              <Route exact path = "/" component={Home}/>
              <Route path = "/about" component={About}/>
              <Route path = "/contact" component={Contact}/>

            </div>
          </div>
        </HashRouter>
    );
  }
}


export default App;
