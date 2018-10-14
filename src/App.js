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
      lines: [
        {
          color: "hsl(142.4, 71.1%, 48.8%)",
          segments: [
            {
              startPoint: [0, 0],
              endPoint: [100, 100]
            },
            {
              startPoint: [100, 100],
              endPoint: [200, 400]
            }
          ]
        },
        {
          color: "hsl(271.1, 75.9%, 52.7%)",
          segments: [
            {
              startPoint: [300, 100],
              endPoint: [300, 150]
            },
            {
              startPoint: [300, 150],
              endPoint: [200, 100]
            }
          ]
        }
      ]
    }; 

    this.changeEndPoint = this.changeEndPoint.bind(this);
  }

  changeEndPoint(event) {
    let x = event.evt.offsetX;
    let y = event.evt.offsetY;
    let lines = this.state.lines.slice();
    lines[0].segments[1].endPoint = [x, y];
    this.setState({ lines: lines });
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
            points={this.state.lines[0].segments[0].startPoint.concat(this.state.lines[0].segments[0].endPoint)}
            stroke={this.state.lines[0].color}
            strokeWidth={10}
          />
          <Line
            points={this.state.lines[0].segments[1].startPoint.concat(this.state.lines[0].segments[1].endPoint)}
            stroke={this.state.lines[0].color}
            strokeWidth={10}
          />
          <Line
            points={this.state.lines[1].segments[0].startPoint.concat(this.state.lines[1].segments[0].endPoint)}
            stroke={this.state.lines[1].color}
            strokeWidth={10}
          />
          <Line
            points={this.state.lines[1].segments[1].startPoint.concat(this.state.lines[1].segments[1].endPoint)}
            stroke={this.state.lines[1].color}
            strokeWidth={10}
          />
        </Layer>
      </Stage>
    );
  }
}
