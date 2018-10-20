import React from 'react';
import { Group, Line } from 'react-konva';
import '../App.css';

export function SubwayLine({ segments, color }) {
  return (
    <Group>
      {segments.map(segment =>
        <Line
          points={segment.startPoint.concat(segment.endPoint)}
          stroke={color}
          strokeWidth={15}
        />
      )}
    </Group>
  );
}
