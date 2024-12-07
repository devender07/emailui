import { ReactNode, CSSProperties } from 'react';

export interface HeadingProps {
  Tag?: keyof JSX.IntrinsicElements; // Allows any valid HTML tag (e.g., 'h1', 'h2', etc.)
  children: ReactNode;
  style?: CSSProperties;
}
