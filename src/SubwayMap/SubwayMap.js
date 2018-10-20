import React, { Component } from 'react';
import { Stage, Layer, Group, Circle } from 'react-konva';
import '../App.css';
import MapImage from '../MapImage/MapImage';
import { SubwayLine } from '../SubwayLine/SubwayLine';

class SubwayMap extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    if (this.props.currentStartPoint.length === 0) {
      const startX = event.evt.offsetX;
      const startY = event.evt.offsetY;
      this.props.startNewLine(startX, startY);   
    } else {
      const endX = event.evt.offsetX;
      const endY = event.evt.offsetY;
      this.props.addToCurrentLine(endX, endY);
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
            {this.props.lines.map(line =>
              <SubwayLine 
                color={line.color}
                segments={line.segments}
              />
            )}
          </Group>
          <Group>
            {this.props.circles.map(circle => 
              <Circle
                x={circle.x}
                y={circle.y}
                radius={circle.radius}
                fill={circle.fill}
                stroke={circle.stroke}
              />
            )}
          </Group>
        </Layer>
      </Stage>
    );
  }
}

export default SubwayMap;