import React, { Component } from 'react';
import {Route, NavLink, HashRouter } from 'react-router-dom';
import './App.css';
import Home from './home';
import About from './about';

class App extends Component {
  render() {
    return (
        <HashRouter>
          <div>
            <div className="container" >
              <div className="navbar navbar-expand-lg bg-light navbar-light">
                <ul className="navbar-nav">
                  <li className="nav-item"><NavLink className="nav-link" to="/"> Home </NavLink></li>
                  <li className="nav-item" ><NavLink className="nav-link" to="/about"> About </NavLink></li>
                 </ul>
              </div>
              <div>
                <Route exact path="/" component={Home}/>
              
              </div>
            </div>
            <div className='container'>
              <Route path="/about" component={About}/>
            </div>
          </div>
        </HashRouter>
    );
  }
}

export default App;
