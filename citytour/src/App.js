import React, { Component } from 'react';
import './App.scss';
import Navbar from './components/Navbar/Navbar'

class App extends Component {
  render() {
    return (
      <div className="App">
       <Navbar />

        <h1>hello treek</h1>
      </div>
    );
  }
}

export default App;
