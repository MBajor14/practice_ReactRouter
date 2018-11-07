import React, { Component } from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import Body from './components/dumb/Body';
import CustomNavBar from './components/smart/CustomNavBar';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app main-container">
          <CustomNavBar />
          <Body />
          <p id="footer">Footer Placeholder</p>
        </div>
      </Router>
    );
  }
}

export default App;
