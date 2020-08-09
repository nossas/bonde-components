import styled, { css } from 'styled-components';
import theme from '../base/theme';

interface InputProps {
  invalid?: boolean;
  placeholder?: string;
}

const RoundInput = styled.input<InputProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 15px;

  font-family: ${props => props.theme.fontFamily};
  font-size: 16px;
  line-height: 22px;
  color: ${props => props.theme.commons.dark};

  border: 1px solid ${props => props.theme.brand.dark};
  box-sizing: border-box;
  border-radius: 7px;

  ${props =>
    props.invalid &&
    css`
      border-color: ${props.theme.error};
    `}

  &[disabled] {
    color: #d1cdd2;
    background: none;
  }

  &::placeholder {
    color: ${props => props.theme.commons.dark};
  }
  &::-webkit-input-placeholder {
    color: ${props => props.theme.commons.dark};
  }
  &::-moz-placeholder {
    color: ${props => props.theme.commons.dark};
  }
  &:-ms-input-placeholder {
    color: ${props => props.theme.commons.dark};
  }
  &:-moz-placeholder {
    color: ${props => props.theme.commons.dark};
  }
`;

RoundInput.defaultProps = {
  theme,
  invalid: false,
  type: 'text',
};

export default RoundInput;
