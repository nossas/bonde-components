import styled from 'styled-components';
import theme from '../base/theme';

interface InputProps {
  invalid?: boolean;
}

const Input = styled.input<InputProps>`
  font-family: ${props => props.theme.fontFamily};
  font-size: 16px;
  color: #000;
  border: none;
  border-bottom: 1px solid ${props => props.theme.commons.main};
  padding: 8px 0;
  background: none;

  ${props => props.invalid && `border-color: #ff0931;`}

  &[disabled] {
    color: #d1cdd2;
    background: none;
  }

  &:focus {
    outline: none;
    border-bottom: 1px solid ${props => props.theme.brand.main};
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

Input.defaultProps = {
  theme,
  invalid: false,
  type: 'text',
};

export default Input;
