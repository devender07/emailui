import React from 'react';
import { ContainerProps } from './Container.types'; // Import types from an external file

const Container: React.FC<ContainerProps> = ({ children, style }) => {
  return (
    <tr>
      <td>
        <div
          style={{
            boxSizing: 'border-box',
            ...style
          }}
        >
          {children}
        </div>
      </td>
    </tr>
  );
};

export default Container;
