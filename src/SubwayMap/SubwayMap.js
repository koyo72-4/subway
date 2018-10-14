import React, { Component } from 'react';
import { Stage, Layer, Group, Circle } from 'react-konva';
import '../App.css';
import { SubwayLine } from '../SubwayLine/SubwayLine';

class SubwayMap extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lines: [],
      circles: []
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
    console.log(this.state);

    if (this.props.currentStartPoint.length === 0) {
      let startX = event.evt.offsetX;
      let startY = event.evt.offsetY;
      let circles = this.state.circles.slice();

      circles.push({
        x: startX,
        y: startY,
        radius: 5,
        fill: this.props.currentColor
      });

      this.setState({ circles: circles });
      this.props.updateCurrentStartPoint([startX, startY]);
    } else {
      let endX = event.evt.offsetX;
      let endY = event.evt.offsetY;
      let lines = this.state.lines.slice();

      lines.push({
        color: this.props.currentColor,
        segments: [
          {
            startPoint: this.props.currentStartPoint,
            endPoint: [endX, endY]
          }
        ]
      });

      this.setState({ lines: lines });
      this.props.updateCurrentStartPoint([endX, endY]);
    }
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
            {this.state.circles.map((circle) => {
              return (
                <Circle
                  x={circle.x}
                  y={circle.y}
                  radius={circle.radius}
                  fill={circle.fill}
                />
              );
            })}
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

export default SubwayMap;