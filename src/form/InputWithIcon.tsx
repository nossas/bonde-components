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
  display: flex;
  align-items: center;
`;

const RoundInput = styled.input<InputProps>`
  padding: 10px 40px 10px 15px;
  width: 100%;
  max-height: 40px;

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
  type: string;
  invalid?: boolean;
  disabled?: boolean;
  placeholder?: string;
  onBlur?: (e: any) => void;
};

const InputWithIcon = ({ icon, ...props }: Props) => (
  <Wrapper>
    <RoundInput theme={theme} {...props} />
    <Icon size="xs" name={icon} />
  </Wrapper>
);

InputWithIcon.defaultProps = {
  invalid: false,
  type: 'text',
};

export default InputWithIcon;
