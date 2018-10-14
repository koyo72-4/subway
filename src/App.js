import React, { Component } from 'react';
import Konva from 'konva';
import { Stage, Layer, Line } from 'react-konva';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div id="map">
          <MyMap />
        </div>
      </div>
    );
  }
}

export default App;


class MyMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      endPoint: [100, 200]
    }
  }
  changeEndPoint() {

  }
  render() {
    return (
      <Stage width={500} height={500}>
        <Layer>
          <Line
            onClick={this.changeEndPoint}
            x={5}
            y={5}
            points={[0, 0].concat(this.state.endPoint)}
            closed
            stroke="black"
          />
        </Layer>
      </Stage>
    );
  }
}