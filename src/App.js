import React, { Component } from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import MainSection from './components/smart/MainSection';
import CustomNavBar from './components/smart/CustomNavBar';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App container">
          <CustomNavBar />
          <MainSection />
          <p className="placeholder-style footer">Footer Placeholder</p>
        </div>
      </Router>
    );
  }
}

export default App;
