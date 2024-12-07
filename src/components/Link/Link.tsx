import React from 'react';
import { LinkProps } from './Link.types'; // Import types from an external file

const Link: React.FC<LinkProps> = ({ children, style, href, target = '_blank' }) => {
  return (
    <a
      href={href}
      target={target}
      style={{
        color: '#067df7',
        textDecoration: 'none',
        margin: 0,
        padding: 0,
        ...style,
      }}
    >
      {children}
    </a>
  );
};

export default Link;
