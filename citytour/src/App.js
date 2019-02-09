import React, { Component } from 'react';
import './App.scss';
import Navbar from './components/Navbar/Navbar'
import Tourlist from './components/Tourlist/index'
//import Tour from './components/Tour/Tour'

class App extends Component {
  render() {
    return (
      <div className="App">
       <Navbar />

    <Tourlist />
        <h1>hello treek</h1>
      </div>
    );
  }
}

export default App;
