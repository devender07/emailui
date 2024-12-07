import React from 'react';
import { ButtonProps } from './Button.types'; // Import types from an external file

const Button: React.FC<ButtonProps> = ({ href = '', target = '_blank', children, style }) => {
  return (
    <a
      href={href}
      target={target}
      style={{
        margin: 0,
        color: '#ffffff',
        textDecoration: 'none',
        padding: '10px 20px',
        backgroundColor: '#146Cf5',
        borderRadius: '6px',
        boxSizing: 'border-box',
        ...style
      }}
    >
      <span style={{ margin: 0, padding: 0, boxSizing: 'border-box' }}>
        {children}
      </span>
    </a>
  );
};

export default Button;
