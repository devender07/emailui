import React from 'react';
import { ParagraphProps } from './Paragraph.types'; // Import types from an external file

const Paragraph: React.FC<ParagraphProps> = ({ children, style }) => {
  return (
    <p
      style={{
        margin: 0,
        padding: 0,
        ...style,
        boxSizing: 'border-box',
      }}
    >
      {children}
    </p>
  );
};

export default Paragraph;
