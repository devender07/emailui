import { ReactNode, CSSProperties } from 'react';

export interface ButtonProps {
  href?: string;
  target?: string;
  children: ReactNode;
  style?: CSSProperties;
}
