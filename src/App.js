import React, { Component } from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import CustomNavBar from './components/smart/CustomNavBar';
import Body from './components/dumb/Body';
import Footer from './components/dumb/Footer'

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app main-container">
          <CustomNavBar />
          <Body />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
