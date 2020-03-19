import React from 'react';
import styled from 'styled-components';
import LoadingSVG, { LoadingSVGProps } from './LoadingSVG';
import Header from '../content/Header';

interface FullSizeProps {
  background: string;
}

const FullSize = styled.div<FullSizeProps>`
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  align-items: center;
  justify-content: center;
  background: ${props => props.background};
`;

interface LoadingProps extends LoadingSVGProps {
  fullsize?: boolean;
  background: string;
  message?: string;
  messageComponent: any;
}

/**
 * Animated loading transition component.
 */
const Loading: React.FC<LoadingProps> = ({
  children,
  fullsize,
  background,
  message,
  messageComponent: MessageComponent,
  ...props
}) => {
  return fullsize ? (
    <FullSize background={background}>
      <LoadingSVG {...props} />
      {message ? <MessageComponent>{message}</MessageComponent> : children}
    </FullSize>
  ) : (
    <LoadingSVG {...props} />
  );
};

Loading.defaultProps = {
  fullsize: false,
  background: 'rgba(219,219,219,0.31)',
  color: '#050505',
  size: 'default',
  sparklesColor: '#35E3C3',
  sparklesColorInit: '#DBDBDB',
  sparklesDuration: '6s',
  messageComponent: Header.h3,
};

export default Loading;
