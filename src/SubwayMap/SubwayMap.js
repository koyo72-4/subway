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
  }

  handleClick(event) {
    let circles = this.state.circles.slice();
    let lines = this.state.lines.slice();

    if (this.props.currentStartPoint.length === 0) {
      let startX = event.evt.offsetX;
      let startY = event.evt.offsetY;
      this.props.updateColor();

      lines.push({
        color: this.props.currentColor,
        segments: []
      });

      circles.push({
        x: startX,
        y: startY,
        radius: 10,
        fill: 'white',
        stroke: this.props.currentColor
      });

      this.setState({ circles: circles });
      this.setState({ lines: lines });
      this.props.updateCurrentStartPoint([startX, startY]);
    
    } else {
      let endX = event.evt.offsetX;
      let endY = event.evt.offsetY;
      let currentLine = lines[lines.length - 1];

      currentLine.segments.push({
        startPoint: this.props.currentStartPoint,
        endPoint: [endX, endY]
      });

      circles.push({
        x: endX,
        y: endY,
        radius: 10,
        fill: 'white',
        stroke: this.props.currentColor
      });

      this.setState({ circles: circles });
      this.setState({ lines: lines });
      this.props.updateCurrentStartPoint([endX, endY]);
    }
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