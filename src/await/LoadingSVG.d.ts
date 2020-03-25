/// <reference types="react" />
export interface LoadingSVGProps {
  size?: 'small' | 'default' | 'large';
  color?: string;
  sparklesColor?: string;
  sparklesColorInit?: string;
  sparklesDuration?: string;
}
/**
 * Animated loading transition component.
 */
declare const LoadingSVG: import('styled-components').StyledComponent<
  (props: any) => JSX.Element,
  any,
  LoadingSVGProps,
  never
>;
export default LoadingSVG;
