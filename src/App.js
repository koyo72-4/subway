import React, { Component } from 'react';
import Konva from 'konva';
import './App.css';
import SubwayMap from './SubwayMap/SubwayMap';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentColor: "hsl(142.4, 71.1%, 48.8%)",
      currentStartPoint: []
    };

    this.updateColor = this.updateColor.bind(this);
    this.updateCurrentStartPoint = this.updateCurrentStartPoint.bind(this);
  }

  updateColor() {
    this.setState({ currentColor: Konva.Util.getRandomColor() });
  }

  updateCurrentStartPoint(array) {
    this.setState({ currentStartPoint: array });
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
              currentColor={this.state.currentColor}
              currentStartPoint={this.state.currentStartPoint}
              updateColor={this.updateColor}
              updateCurrentStartPoint={this.updateCurrentStartPoint}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
