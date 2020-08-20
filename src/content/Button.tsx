import React from 'react';
import styled from 'styled-components';
import Icon from './Icon';
import theme from '../base/theme';

interface ButtonProps {
  /** Children nodes. */
  children: any;
  /** Disable button. */
  disabled?: boolean;
  /** Button type. */
  type?: string;
  dark?: boolean;
  light?: boolean;
  secondary?: boolean;
  /** Button align. */
  align?: 'center' | 'left' | 'right';
  color?: {
    main?: string
    hover?: string
    focus?: string
  }
}

/**
 * The only true Button component.
 */
const ButtonStyled = styled.button<ButtonProps>`
  display: grid;
  align-items: center;
  justify-content: ${props => props.align};
  grid-template-columns: auto auto;
  grid-column-gap: 5px;
  font-family: ${props => props.theme.fontFamily};
  font-weight: bold;
  font-size: 14px;
  border-radius: 50px;
  padding: 10px 20px;
  text-transform: uppercase;
  cursor: pointer;
  outline: none;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  border: 1px solid;
  width: 100%;

  border-color: ${({ theme }) => theme.border.main};
  background: ${({ theme }) => theme.background.main};
  color: ${({ theme, color }) => color?.main || theme.color.main};

  ${Icon}.stroke {
    path {
      stroke: ${({ theme, color }) => color?.main || theme.color.main};
    }
  }
  ${Icon}.fill {  
    path {
      fill: ${({ theme, color }) => color?.main || theme.color.main};
    }
  }

  ${({ disabled, theme, color }) =>
    !disabled &&
    `
    &:hover {
      color: ${color?.hover || theme.color.hover || theme.color.main};
      ${Icon}.stroke {
        path {
          stroke: ${color?.hover || theme.color.hover || theme.color.main};
        }
      }
      ${Icon}.fill {
        path {
          fill: ${color?.hover || theme.color.hover || theme.color.main};
        }
      }

      border-color: ${theme.border.hover || theme.border.main};
      background: ${theme.background.hover || theme.background.main};
    }
  `}
  ${({ disabled, theme, color }) =>
    !disabled &&
    `
    &:active, &:focus {
      color: ${color?.focus || theme.color.focus || theme.color.main};
      ${Icon}.stroke {
        path {
          stroke: ${color?.focus || theme.color.focus || theme.color.main};
        }
      }
      ${Icon}.fill {
        path {
          fill: ${color?.focus || theme.color.focus || theme.color.main};
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

  ${({ disabled }) =>
    disabled &&
    `
    cursor: initial;
    background: #d1cdd2;
    border: none;
    color: #fff;

    &:hover, &:focus, &:active {
      background: none;
    }
    
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
`;

ButtonStyled.defaultProps = {
  align: 'center',
  type: 'button',
};

const Button = (props: any) => {
  const keyTheme =
    !props.dark && !props.light && !props.secondary
      ? 'default'
      : props.dark
        ? 'dark'
        : props.light
          ? 'light'
          : 'secondary';

  return (
    <ButtonStyled
      theme={{
        fontFamily: theme.fontFamily,
        ...(theme[keyTheme] || {}),
      }}
      {...props}
    />
  );
};

export default Button;
