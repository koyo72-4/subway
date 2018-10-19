import React from 'react';
import { Image } from 'react-konva';
import '../App.css';

class MapImage extends React.Component {
  state = {
    image: null
  };

  componentDidMount() {
    const image = new window.Image();
    image.src = '/images/1428px-Downtown_Baltimore_map.png';
    image.onload = () => {
      this.setState({ image });
    };
  }

  render() {
    return (
      <Image 
        image={this.state.image} 
        opacity={0.23} 
        offsetY={100}
        offsetX={20}
      />
    );
  }
}

export default MapImage;