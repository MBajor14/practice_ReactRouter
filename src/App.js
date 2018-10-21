import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import Login from './components/Login'
import Signup from './components/Signup'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App container">
        <p className="placeholder_style">Navbar Placeholder</p>
        <BrowserRouter>
          <div className="main_body_wrapper">
            <Route path="/" exact component={Login}/>
            <Route path="/signup" component={Signup} />
          </div>
        </BrowserRouter>
        <p className="placeholder_style footer">Footer Placeholder</p>
      </div>
    );
  }
}

export default App;
