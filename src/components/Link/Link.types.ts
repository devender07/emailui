import { ReactNode, CSSProperties } from 'react';

export interface LinkProps {
  children: ReactNode;
  style?: CSSProperties;
  href: string;
  target?: string;
}
