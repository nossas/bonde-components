import React from 'react';
import { LoadingSVGProps } from './LoadingSVG';
interface LoadingProps extends LoadingSVGProps {
  fullsize?: boolean;
  background?: string;
  message?: string;
  messageComponent?: any;
}
/**
 * Animated loading transition component.
 */
declare const Loading: React.FC<LoadingProps>;
export default Loading;
