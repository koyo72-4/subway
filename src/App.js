import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="map">
          <Line />
        </div>
      </div>
    );
  }
}

export default App;


class Line extends Component {
  render() {
    return (
      <div></div>
    );
  }
}