import React from 'react';
import * as SVGIcons from './SVGIcons';
interface IconProps {
  className?: string;
  size?: 'default' | 'small' | 'large';
  name: keyof typeof SVGIcons;
  color?: string;
}
declare const Icon: import('styled-components').StyledComponent<
  React.FC<IconProps>,
  any,
  IconProps,
  never
>;
export default Icon;
