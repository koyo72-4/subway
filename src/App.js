import React, { Component } from 'react';
import Konva from 'konva';
import './App.css';
import SubwayMap from './SubwayMap/SubwayMap';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentColor: "hsl(142.4, 71.1%, 48.8%)",
      currentStartPoint: [],
      lines: [],
      circles: []
    };

    this.updateCurrentStartPoint = this.updateCurrentStartPoint.bind(this);
    this.startNewLine = this.startNewLine.bind(this);
    this.addToCurrentLine = this.addToCurrentLine.bind(this);
    this.updateState = this.updateState.bind(this);
    this.drawCircle = this.drawCircle.bind(this);
  }

  updateCurrentStartPoint(array) {
    this.setState({ currentStartPoint: array });
  }

  startNewLine(x, y) {
    let lines = this.state.lines.slice();
    this.setState({ currentColor: Konva.Util.getRandomColor() });
    lines.push({
      color: this.state.currentColor,
      segments: []
    });
    this.updateState(x, y, lines);
  }

  addToCurrentLine(x, y) {
    let lines = this.state.lines.slice();
    let currentLine = lines[lines.length - 1];
    currentLine.segments.push({
      startPoint: this.state.currentStartPoint,
      endPoint: [x, y]
    });
    this.updateState(x, y, lines);
  }

  updateState(x, y, lines) {
    this.drawCircle(x, y);
    this.setState({ lines: lines });
    this.updateCurrentStartPoint([x, y]);
  }

  drawCircle(x, y) {
    let circles = this.state.circles.slice();
    circles.push({
      x: x,
      y: y,
      radius: 10,
      fill: 'white',
      stroke: this.state.currentColor
    });
    this.setState({ circles: circles });
  }

  render() {
    return (
      <div className="App">
        <h1>Design a Subway</h1>
        <div id="interface">
          <p>Click anywhere on the map to place a subway station at that location.</p>
          <p>Click the "New Line" button to start a new subway line.</p>
          <button
            type="button"
            onClick={() => this.updateCurrentStartPoint([])}
          >
            New Line
          </button>
          <div id="map">
            <SubwayMap 
              currentStartPoint={this.state.currentStartPoint}
              lines={this.state.lines}
              circles={this.state.circles}
              startNewLine={this.startNewLine}
              addToCurrentLine={this.addToCurrentLine}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
