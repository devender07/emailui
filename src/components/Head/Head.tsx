import React from 'react';
import { HeadProps } from './Head.types'; // Import types from an external file

const Head: React.FC<HeadProps> = ({ children }) => {
  return (
    <head>
      <meta content="text/html; charset=UTF-8" httpEquiv="Content-Type" />
      <meta name="x-apple-disable-message-reformatting" />
      <style type="text/css">
        {`
          * { margin: 0; padding: 0; box-sizing: border-box; }
          .table-container { width: 100%; }
          .table-container.column { width: 100%; }

          @media(max-width: 390px) {
            .table-container td { width: 100% !important; display: block; padding: 0; }
            .desktop { display: none !important; }
            .mobile { display: block !important; }
          }
        `}
      </style>
      {children}
    </head>
  );
};

export default Head;
