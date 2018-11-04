import React, { Component } from 'react';
import MainSection from './components/smart/MainSection'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App container">
        <p className="placeholder-style">Navbar Placeholder</p>
        <MainSection />
        <p className="placeholder-style footer">Footer Placeholder</p>
      </div>
    );
  }
}

export default App;
