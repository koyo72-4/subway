import React from 'react';
import { Group, Line } from 'react-konva';
import '../App.css';

export function SubwayLine(props) {
  return (
    <Group>
      {props.segments.map((segment) => {
        return (
          <Line
            points={segment.startPoint.concat(segment.endPoint)}
            stroke={props.color}
            strokeWidth={15}
          />
        );
      })}
    </Group>
  );
}
