import React from 'react';
import { BodyProps } from './Body.types'; // Import types from an external file

const Body: React.FC<BodyProps> = ({ children, center, style }) => {
  return (
    <body>
      <table
        style={{
          boxSizing: 'border-box',
          width: '600px',
          maxWidth: '100%',
          margin: center ? 'auto' : 0,
          padding: 0,
          ...style
        }}
        cellPadding={0}
        cellSpacing={0}
      >
        <tbody>
          {children}
        </tbody>
      </table>
    </body>
  );
};

export default Body;
