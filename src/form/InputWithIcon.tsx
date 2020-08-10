import React from 'react';
import styled, { css } from 'styled-components';
import theme from '../base/theme';
import Icon from '../content/Icon';

interface InputProps {
  invalid?: boolean;
  placeholder?: string;
}

const Wrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: auto auto;
  align-items: center;
`;

const RoundInput = styled.input<InputProps>`
  padding: 10px 40px 10px 15px;
  width: 100%;

  font-family: ${props => props.theme.fontFamily};
  font-size: 14px;
  line-height: 22px;
  color: ${props => props.theme.commons.dark};

  border: 1px solid ${props => props.theme.brand.dark};
  box-sizing: border-box;
  border-radius: 7px;

  & + ${Icon} {
    position: relative;
    right: 25px;
  }

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

type Props = {
  icon: string | any;
  placeholder?: string;
};

const InputWithIcon = ({ icon, placeholder }: Props) => (
  <Wrapper>
    <RoundInput theme={theme} placeholder={placeholder} />
    <Icon size="xs" name={icon} />
  </Wrapper>
);

InputWithIcon.defaultProps = {
  theme,
  invalid: false,
  type: 'text',
  icon: false,
};

export default InputWithIcon;
