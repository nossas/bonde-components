import React from 'react';
import styled from 'styled-components';
import Icon from './Icon';

const themes = {
  default: {
    color: {
      main: '#fff',
    },
    border: {
      main: '#ee0099',
    },
    background: {
      main: '#ee0099',
      hover: '#e2058a',
      focus: '#b4006c',
    },
  },
  dark: {
    color: {
      main: '#000',
      hover: '#424242',
      focus: '#9b9b9b',
    },
    border: {
      main: '#000',
      hover: '#424242',
      focus: '#9b9b9b',
    },
    background: {
      main: 'none',
    },
  },
  light: {
    color: {
      main: '#fff',
      hover: '#9b9b9b',
      focus: '#424242',
    },
    border: {
      main: '#fff',
      hover: '#eee',
      focus: '#424242',
    },
    background: {
      main: 'none',
    },
  },
};

interface ButtonProps {
  /** Children nodes. */
  children: any;
  /** Disable button. */
  disabled?: boolean;
  /** Button type. */
  type?: string;
  dark?: boolean;
  light?: boolean;
  /** Button align. */
  align?: 'center' | 'left' | 'right';
}

/**
 * The only true Button component.
 */
const ButtonStyled = styled.button<ButtonProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-family: 'Nunito Sans', sans-serif;
  font-weight: bold;
  font-size: 13px;
  text-align: ${props => props.align};
  border-radius: 100px;
  padding: 10px 20px;
  text-transform: uppercase;
  cursor: pointer;
  outline: none;
  box-shadow: 1px 2px 7px 5px rgba(0, 0, 0, 0.08);
  border: 1px solid;
  
  color: ${({ theme }) => theme.color.main};
  ${Icon}.stroke {
    path {
      stroke: ${({ theme }) => theme.color.main};
    }
  }
  ${Icon}.fill {  
    path {
      fill: ${({ theme }) => theme.color.main};
    }
  }

  border-color: ${({ theme }) => theme.border.main};
  background: ${({ theme }) => theme.background.main};
  ${({ disabled, theme }) =>
    !disabled &&
    `
    &:hover {
      color: ${theme.color.hover || theme.color.main};
      ${Icon}.stroke {
        path {
          stroke: ${theme.color.hover || theme.color.main};
        }
      }
      ${Icon}.fill {
        path {
          fill: ${theme.color.hover || theme.color.main};
        }
      }

      border-color: ${theme.border.hover || theme.border.main};
      background: ${theme.background.hover || theme.background.main};
    }
  `}
  ${({ disabled, theme }) =>
    !disabled &&
    `
    &:active {
      color: ${theme.color.focus || theme.color.main};
      ${Icon}.stroke {
        path {
          stroke: ${theme.color.focus || theme.color.main};
        }
      }
      ${Icon}.fill {
        path {
          fill: ${theme.color.focus || theme.color.main};
        }
      }

      border-color: ${theme.border.focus || theme.border.main};
      background: ${theme.background.focus || theme.background.main};;
    }
  `}

  ${({ dark, light, disabled }) =>
    (dark || light || disabled) &&
    `
    box-shadow: none;
    border: 1px solid;
  `}

  ${({ disabled }) =>
    disabled &&
    `
    cursor: initial;
    background: #d1cdd2;
    border: none;
    color: #fff;
    
    ${Icon}.stroke {
      path {
        stroke: #fff;
      }
    }
    ${Icon}.fill {
      path {
        fill: #fff;
      }
    }
  `}
  
  ${Icon} {
    margin-right: 5px;
  }
`;

ButtonStyled.defaultProps = {
  align: 'center',
  type: 'button',
};

const Button = (props: any) => {
  const theme =
    !props.dark && !props.light ? 'default' : props.dark ? 'dark' : 'light';

  return <ButtonStyled theme={themes[theme]} {...props} />;
};

export default Button;
