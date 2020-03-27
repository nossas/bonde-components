import styled, { css } from 'styled-components';
import theme from '../base/theme';

interface TabProps {
  inverted?: boolean;
  active?: boolean;
}

const Tab = styled.div<TabProps>`
  display: inline-block;
  font-family: ${props => props.theme.fontFamily};
  font-size: 13px;
  font-weight: 800;
  line-height: 1.15;
  color: ${props => (props.inverted ? '#000' : '#fff')};
  text-transform: uppercase;
  cursor: pointer;
  margin: 0 15px 0 0;
  padding-bottom: 11px;
  text-decoration: none;

  ${props =>
    props.active &&
    css`
      border-bottom: 2px solid #ee0099;
      padding-bottom: 9px;
    `}

  &:hover, &:active {
    border-bottom: 2px solid #ee0099;
    padding-bottom: 9px;
  }
`;

Tab.defaultProps = {
  theme,
  active: false,
  inverted: false,
};

export default Tab;
