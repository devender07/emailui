import React from 'react';
import { RowProps } from './Row.types'; // Import types from an external file

const Row: React.FC<RowProps> = ({ children, responsive = false }) => {
  return (
    <table
      style={{ width: '100%' }}
      className={responsive ? 'table-container' : ''}
      cellPadding={0}
      cellSpacing={0}
    >
      <tbody>
        <tr>{children}</tr>
      </tbody>
    </table>
  );
};

export default Row;
