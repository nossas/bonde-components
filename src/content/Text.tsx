import styled from 'styled-components';
import theme from '../base/theme';

interface TextProps {
  align?: 'left' | 'center' | 'right';
  bold?: boolean;
  uppercase?: boolean;
}

/**
 * The only true paragraph.
 */
const Text = styled.p<TextProps>`
  font-family: ${props => props.theme.fontFamily};
  font-size: 16px;
  font-weight: ${props => (props.bold ? 'bold' : 'normal')};
  line-height: 25px;
  color: ${props => props.theme.commons.dark};
  text-align: ${props => props.align};
  letter-spacing: normal;

  ${props => props.uppercase && 'text-transform: uppercase;'}
`;

Text.defaultProps = {
  theme,
  align: 'left',
  uppercase: false,
  bold: false,
};

Text.displayName = 'Text';

export default Text;
