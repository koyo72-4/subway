import React, { Component } from 'react';
import Konva from 'konva';
import { Stage, Layer, Group, Line } from 'react-konva';
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


class SubwayLine extends Component {
  render() {
    return (
      <Group>
        {this.props.segments.map((segment) => {
          return (
            <Line
              points={segment.startPoint.concat(segment.endPoint)}
              stroke={this.props.color}
              strokeWidth={10}
            />
          );
        })}
      </Group>
    );
  }
}

class SubwayMap extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lines: [],
      currentStartPoint: []
    };
    //   lines: [
    //     {
    //       color: "hsl(142.4, 71.1%, 48.8%)",
    //       segments: [
    //         {
    //           startPoint: [0, 0],
    //           endPoint: [100, 100]
    //         },
    //         {
    //           startPoint: [100, 100],
    //           endPoint: [200, 400]
    //         }
    //       ]
    //     },
    //     {
    //       color: "hsl(271.1, 75.9%, 52.7%)",
    //       segments: [
    //         {
    //           startPoint: [300, 100],
    //           endPoint: [300, 150]
    //         },
    //         {
    //           startPoint: [300, 150],
    //           endPoint: [200, 100]
    //         }
    //       ]
    //     }
    //   ]
    // }; 

    this.addLine = this.addLine.bind(this);
    this.changeEndPoint = this.changeEndPoint.bind(this);
  }

  addLine(event) {
    let x = event.evt.offsetX;
    let y = event.evt.offsetY;
    let lines = this.state.lines.slice();
    lines.push({
      color: Konva.Util.getRandomColor(),
      segments: [
        {
          startPoint: this.state.currentStartPoint.length === 0 ? [0, 0] : this.state.currentStartPoint,
          endPoint: [x, y]
        }
      ]
    });
    this.setState({ lines: lines });
    this.setState({ currentStartPoint: [x, y] });
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
        onClick={this.addLine}
        // onClick={this.changeEndPoint}
      >
        <Layer>
          <Group>
            {this.state.lines.map((line) => {
              return (
                <SubwayLine 
                  color={line.color}
                  segments={line.segments}
                />
                // <Line
                //   points={line.segments[0].startPoint.concat(line.segments[0].endPoint)}
                //   stroke={line.color}
                //   strokeWidth={10}
                // />
              );
            })}
          </Group>
          {/* <Line
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
          /> */}
        </Layer>
      </Stage>
    );
  }
}
