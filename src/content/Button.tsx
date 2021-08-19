import React from 'react';
import styled from 'styled-components';
import Icon from './Icon';
import theme from '../base/theme';

type ButtonProps = {
  /** Children nodes. */
  children?: any;
  /** Disable button. */
  disabled?: boolean;
  /** Button type. */
  type: 'button' | 'submit' | 'reset';
  dark?: boolean;
  light?: boolean;
  secondary?: boolean;
  /** Button align. */
  align: 'center' | 'left' | 'right';
  /* Optional colors */
  main?: string;
  hover?: string;
  focus?: string;
  onClick?: (event: any) => void;
};

type ButtonStyledProps = {
  /** Disable button. */
  disabled?: boolean;
  /** Button type. */
  dark?: boolean;
  light?: boolean;
  secondary?: boolean;
  /** Button align. */
  align: 'center' | 'left' | 'right';
  theme: any;
  /* Optional colors */
  main?: string;
  hover?: string;
  focus?: string;
};

/**
 * The only true Button component.
 */
const ButtonStyled = styled.button<ButtonStyledProps>`
  display: grid;
  align-items: center;
  justify-content: ${({ align }) => align};
  grid-template-columns: auto auto;
  grid-column-gap: 5px;
  font-family: ${({ theme }) => theme.fontFamily};
  font-weight: bold;
  font-size: 14px;
  border-radius: 50px;
  padding: 10px 20px;
  text-transform: uppercase;
  cursor: pointer;
  outline: none;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  border: 1px solid;

  border-color: ${({ theme }) => theme.border.main};
  background: ${({ theme }) => theme.background.main};
  color: ${({ theme, main }) => main || theme.color.main};

  ${Icon}.stroke {
    path {
      stroke: ${({ theme, main }) => main || theme.color.main};
    }
  }
  ${Icon}.fill {  
    path {
      fill: ${({ theme, main }) => main || theme.color.main};
    }
  }

  ${({ disabled, theme, hover }) =>
    !disabled &&
    `
    &:hover {
      color: ${hover || theme.color.hover || theme.color.main};
      ${Icon}.stroke {
        path {
          stroke: ${hover || theme.color.hover || theme.color.main};
        }
      }
      ${Icon}.fill {
        path {
          fill: ${hover || theme.color.hover || theme.color.main};
        }
      }

      border-color: ${theme.border.hover || theme.border.main};
      background: ${theme.background.hover || theme.background.main};
    }
  `}
  ${({ disabled, theme, focus }) =>
    !disabled &&
    `
    &:active, &:focus {
      color: ${focus || theme.color.focus || theme.color.main};
      ${Icon}.stroke {
        path {
          stroke: ${focus || theme.color.focus || theme.color.main};
        }
      }
      ${Icon}.fill {
        path {
          fill: ${focus || theme.color.focus || theme.color.main};
        }
      }

      border-color: ${theme.border.focus || theme.border.main};
      background: ${theme.background.focus || theme.background.main};
    }
  `}

  ${({ dark, light, disabled, secondary }) =>
    (dark || light || disabled || secondary) &&
    `
    box-shadow: none;
  `}

  ${({ disabled, secondary }) =>
    disabled &&
    !secondary &&
    `
    cursor: initial;
    border: none;
    background: #d1cdd2;
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

${({ disabled, secondary, theme }) =>
  disabled &&
  secondary &&
  `
    cursor: initial;
    background: ${theme.disabled.background};
    border: none;
    color: ${theme.disabled.color.main};

    ${Icon}.stroke {
      path {
        stroke: ${theme.disabled.color.main};
      }
    }
    ${Icon}.fill {
      path {
        fill: ${theme.disabled.color.main};
      }
    }
  `}
`;

const Button = (props: ButtonProps) => {
  const keyTheme =
    !props.dark && !props.light && !props.secondary
      ? 'default'
      : props.dark
      ? 'dark'
      : props.light
      ? 'light'
      : 'secondary';

  const customTheme = {
    fontFamily: theme.fontFamily,
    ...(theme[keyTheme] || {}),
  };

  return <ButtonStyled {...props} theme={customTheme} />;
};

Button.defaultProps = {
  align: 'center',
  type: 'button',
};

export default Button;
