import React, { ReactNode } from 'react';
import { HtmlProps } from './Html.types';

const Html: React.FC<HtmlProps> = ({ children, dir = 'ltr', lang = 'en' }) => {
  return (
    <html dir={dir} lang={lang}>
      {children}
    </html>
  );
};

export default Html;
