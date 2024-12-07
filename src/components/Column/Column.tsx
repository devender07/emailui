import React from 'react';
import { ColumnProps } from './Column.types'; // Import types from an external file

const Column: React.FC<ColumnProps> = ({ children, style }) => {
  return (
    <td className="column">
      <div
        style={{
          margin:0,
          padding:0,
          boxSizing: 'border-box',
          ...style,
        }}
      >
        {children}
      </div>
    </td>
  );
};

export default Column;
