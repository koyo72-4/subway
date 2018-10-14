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
    }

    this.updateColor = this.updateColor.bind(this);
    this.updateCurrentStartPoint = this.updateCurrentStartPoint.bind(this);
  }

  updateColor() {
    this.setState({ currentColor: Konva.Util.getRandomColor() });
    console.log(this.state);
  }

  updateCurrentStartPoint(array) {
    this.setState({ currentStartPoint: array });
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
          onClick={() => this.updateCurrentStartPoint([])}
        >
          New Line
        </button>
        <div id="map">
          <SubwayMap 
            currentColor={this.state.currentColor}
            currentStartPoint={this.state.currentStartPoint}
            updateCurrentStartPoint={this.updateCurrentStartPoint}
          />
        </div>
      </div>
    );
  }
}

export default App;
