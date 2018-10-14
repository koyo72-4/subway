import React, { Component } from 'react';
import Konva from 'konva';
import './App.css';
import SubwayMap from './SubwayMap/SubwayMap';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentColor: "hsl(142.4, 71.1%, 48.8%)",
      startNewLine: false
    }
    this.updateColor = this.updateColor.bind(this);
    this.beginLine = this.beginLine.bind(this);
  }

  updateColor() {
    this.setState({ currentColor: Konva.Util.getRandomColor() });
    console.log(this.state);
  }

  beginLine() {
    this.setState({ startNewLine: true });
  }

  keepWithSameLine() {
    this.setState({ startNewLine: false });
  }

  render() {
    return (
      <div className="App">
        <button 
          type="button"
          onClick={this.updateColor}
        >
          Click me for a new color
        </button>
        <button
          type="button"
          onClick={this.beginLine}
        >
          New Line
        </button>
        <div id="map">
          <SubwayMap 
            currentColor={this.state.currentColor}
            startNewLine={this.state.startNewLine}
            onClick={this.keepWithSameLine}
          />
        </div>
      </div>
    );
  }
}

export default App;
