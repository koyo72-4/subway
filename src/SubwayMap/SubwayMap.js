import React, { Component } from 'react';
import { Stage, Layer, Group, Circle } from 'react-konva';
import '../App.css';
import MapImage from '../MapImage/MapImage';
import { SubwayLine } from '../SubwayLine/SubwayLine';

class SubwayMap extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lines: [],
      circles: []
    };

    this.handleClick = this.handleClick.bind(this);
    this.startNewLine = this.startNewLine.bind(this);
    this.addToCurrentLine = this.addToCurrentLine.bind(this);
    this.updateState = this.updateState.bind(this);
    this.drawCircle = this.drawCircle.bind(this);
  }

  handleClick(event) {
    if (this.props.currentStartPoint.length === 0) {
      const startX = event.evt.offsetX;
      const startY = event.evt.offsetY;
      this.startNewLine(startX, startY);   
    } else {
      const endX = event.evt.offsetX;
      const endY = event.evt.offsetY;
      this.addToCurrentLine(endX, endY);
    }
  }

  startNewLine(x, y) {
    let lines = this.state.lines.slice();
    this.props.updateColor();
    lines.push({
      color: this.props.currentColor,
      segments: []
    });
    this.updateState(x, y, lines);
  }

  addToCurrentLine(x, y) {
    let lines = this.state.lines.slice();
    let currentLine = lines[lines.length - 1];
    currentLine.segments.push({
      startPoint: this.props.currentStartPoint,
      endPoint: [x, y]
    });
    this.updateState(x, y, lines);
  }

  updateState(x, y, lines) {
    this.drawCircle(x, y);
    this.setState({ lines: lines });
    this.props.updateCurrentStartPoint([x, y]);
  }

  drawCircle(x, y) {
    let circles = this.state.circles.slice();
    circles.push({
      x: x,
      y: y,
      radius: 10,
      fill: 'white',
      stroke: this.props.currentColor
    });
    this.setState({ circles: circles });
  }

  render() {
    return (
      <Stage 
        width={1000} 
        height={600} 
        onClick={this.handleClick}
      >
        <Layer>
          <MapImage />
          <Group>
            {this.state.lines.map((line) => {
              return (
                <SubwayLine 
                  color={line.color}
                  segments={line.segments}
                />
              );
            })}
          </Group>
          <Group>
            {this.state.circles.map((circle) => {
              return (
                <Circle
                  x={circle.x}
                  y={circle.y}
                  radius={circle.radius}
                  fill={circle.fill}
                  stroke={circle.stroke}
                />
              );
            })}
          </Group>
        </Layer>
      </Stage>
    );
  }
}

export default SubwayMap;