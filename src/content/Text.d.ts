export interface TextProps {
  align?: 'left' | 'center' | 'right';
  bold?: boolean;
  uppercase?: boolean;
}
/**
 * The only true paragraph.
 */
declare const Text: import('styled-components').StyledComponent<
  'p',
  any,
  TextProps,
  never
>;
export default Text;
