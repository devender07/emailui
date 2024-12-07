import React from 'react';

interface PreviewProps {
  emailHtml: string;
}

const Preview: React.FC<PreviewProps> = ({ emailHtml }) => {
  return (
    <iframe
      title="emailui"
      srcDoc={emailHtml}
      width="100%"
      height="100%"
      style={{
        border: 'none',
        margin: 0,
        boxSizing: 'border-box',
        overflow: 'hidden',
      }}
    />
  );
};

export default Preview;
