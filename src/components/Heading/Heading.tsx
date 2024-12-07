import React from 'react';
import { HeadingProps } from './Heading.types'; // Import types from an external file

const Heading: React.FC<HeadingProps> = ({ Tag = 'h1', children, style }) => {
  return (
    <Tag
      style={{
        boxSizing: 'border-box',
        margin: 0,
        padding: 0,
        ...style,
      }}
    >
      {children}
    </Tag>
  );
};

export default Heading;
