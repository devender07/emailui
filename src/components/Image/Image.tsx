import React from 'react';
import { ImageProps } from './Image.types'; // Import types from an external file

const Image: React.FC<ImageProps> = ({ src, alt = 'image', height = '100%', width = '100%', style }) => {
  return (
    <div style={{ display: 'inline-block' }}>
      <img
        src={src}
        alt={alt}
        height={height}
        width={width}
        style={{
          display: 'block',
          margin:0,
          padding:0,
          ...style,
          boxSizing: 'border-box',
        }}
      />
    </div>
  );
};

export default Image;
