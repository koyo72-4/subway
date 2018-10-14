import React, { Component } from 'react';
import Konva from 'konva';
import { Stage, Layer, Line } from 'react-konva';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div id="map">
          <SubwayMap />
        </div>
      </div>
    );
  }
}

export default App;


class SubwayMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      endPoint: [0, 0, 100, 200]
    }

    this.changeEndPoint = this.changeEndPoint.bind(this);
  }
  changeEndPoint(event) {
    console.log(event);
    let x = event.evt.offsetX;
    let y = event.evt.offsetY;
    console.log(x, y);
    this.setState({ endPoint: [0, 0, x, y] });
  }
  render() {
    return (
      <Stage 
        width={500} 
        height={500}
        onClick={this.changeEndPoint}
      >
        <Layer>
          <Line
            x={5}
            y={5}
            points={this.state.endPoint}
            closed
            stroke="black"
          />
        </Layer>
      </Stage>
    );
  }
}