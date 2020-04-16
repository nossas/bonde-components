import React from 'react';
import styled from 'styled-components';
import * as SVGIcons from './SVGIcons';

interface IconProps {
  className?: string;
  size?: 'default' | 'small' | 'large';
  name: keyof typeof SVGIcons;
  color?: string;
}

const IconController: React.FC<IconProps> = ({ className, name, ...props }) => {
  const IconSVG = SVGIcons[name];
  if (IconSVG) return <IconSVG className={className} {...props} />;
  else return <span />;
};

const Icon = styled(IconController)<IconProps>`
  vertical-align: middle;
  ${props =>
    props.size === 'small' &&
    `
  width: calc(1*20px);
  height: calc(1*15px);
  `}
  ${props =>
    props.size === 'default' &&
    `
  width: calc(1.5*20px);
  height: calc(1.5*15px);
  `}
  ${props =>
    props.size === 'large' &&
    `
  width: calc(2*20px);
  height: calc(2*15px);
  `}

  &.fill {
    path {
      fill: ${props => props.color};
    }
  }
  &.stroke {
    path {
      stroke: ${props => props.color};
    }
  }
`;

Icon.defaultProps = {
  size: 'default',
  color: '#000',
};

export default Icon;
