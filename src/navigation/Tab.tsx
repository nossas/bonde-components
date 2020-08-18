import styled, { css } from 'styled-components';
import CleanButton from '../content/CleanButton';
import theme from '../base/theme';

const Tab = styled(CleanButton)<{ active?: boolean; theme?: any }>`
  ${({ active, theme }) =>
    active &&
    css`
      border-bottom: 1.5px solid ${theme.brand.main};
    `}
  cursor: pointer;
  font-weight: bold;
  font-size: 13px;
  line-height: 18px;
  letter-spacing: 0.005em;
  font-family: ${({ theme }) => theme.fontFamily};
  text-transform: uppercase;
  padding-bottom: 15px;
  color: ${({ active, theme }) =>
    active ? `${theme.brand.main}` : `${theme.brand.light}`};
  &:hover,
  &:active,
  &:focus {
    ${({ theme }) => `
      border-bottom: 1.5px solid ${theme.brand.main};
      color: ${theme.brand.main};
    `}
  }
`;

Tab.defaultProps = {
  theme,
};

export default Tab;
