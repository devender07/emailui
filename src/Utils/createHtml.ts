import React from 'react';
import ReactDomServer from 'react-dom/server';

const createHtml = (children:React.ReactNode): string => {
    const htmlContent = ReactDomServer.renderToStaticMarkup(children);
    return htmlContent;
};

export default createHtml;
