import React, { Component } from 'react';
import Main_Section from '../src/components/Main_Section'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const API_CALL = "https://api.iextrading.com/1.0"

class App extends Component {
  render() {
    return (
      <div className="App container">
        <p className="placeholder_style">Navbar Placeholder</p>
        <Main_Section />
        <p className="placeholder_style footer">Footer Placeholder</p>
      </div>
    );
  }
}

export default App;
