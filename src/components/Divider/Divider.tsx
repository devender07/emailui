import React from 'react';
import { DividerProps } from './Divider.types'; // Import types from an external file

const Divider: React.FC<DividerProps> = ({ dividerStyle = 'solid', color = 'black', thickness = '1px' }) => {
  return (
    <div
      style={{
        margin:0,
        padding:0,
        boxSizing: 'border-box',
        height: '1px',
        borderBottomWidth: thickness,
        borderBottomColor: color,
        borderBottomStyle: dividerStyle,
      }}
    />
  );
};

export default Divider;
