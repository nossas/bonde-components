import styled from 'styled-components';
import theme from '../base/theme';

const Input = styled.input`
  font-family: ${props => props.theme.fontFamily};
  font-size: 16px;
  color: #000;
  border: none;
  border-bottom: 1px solid ${props => props.theme.commons.main};
  padding: 8px 0;
  background: none;

  &[disabled] {
    color: #d1cdd2;
    background: none;
  }

  &:focus {
    outline: none;
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
  type: 'text',
};

export default Input;
