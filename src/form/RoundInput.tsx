import styled, { css } from 'styled-components';
import theme from '../base/theme';

type Props = {
  type?: string;
  invalid?: boolean;
  disabled?: boolean;
  theme: any;
  onBlur?: (e: any) => void;
  placeholder?: string;
};

const RoundInput = styled.input<Props>`
  padding: 10px 40px 10px 15px;
  width: 100%;
  max-height: 40px;

  font-family: ${props => props.theme.fontFamily};
  font-size: 14px;
  line-height: 22px;
  color: ${props => props.theme.commons.dark};
  border: 1px solid;
  box-sizing: border-box;
  border-radius: 7px;

  ${props =>
    !props.value
      ? css`
          &:hover,
          &:focus {
            border-color: ${props.theme.brand.dark};
          }
          border-color: ${props.theme.brand.dark};
        `
      : css`
          &:hover,
          &:focus {
            border-color: ${props.theme.brand.main};
          }
          border-color: ${props.theme.brand.main};
        `}

  ${props =>
    props.invalid &&
    css`
      border-color: ${props.theme.error};
    `}

  &[disabled] {
    color: #d1cdd2;
    background: none;
  }

  &::placeholder,
  &::-webkit-input-placeholder,
  &::-moz-placeholder,
  &:-ms-input-placeholder,
  &:-moz-placeholder {
    color: ${props => props.theme.commons.dark};
    font-family: ${props => props.theme.fontFamily};
  }
`;

RoundInput.defaultProps = {
  invalid: false,
  type: 'text',
  theme,
};

export default RoundInput;
