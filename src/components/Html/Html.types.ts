import { ReactNode } from 'react';

export interface HtmlProps {
  children: ReactNode;
  dir?: 'ltr' | 'rtl';
  lang?: string;
}
