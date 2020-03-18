import React from 'react';
import styled from 'styled-components';
import BondeSVG from './BondeSVG';
import theme from './theme';

const Footer = styled(({ className, children }) => (
  <div className={className}>
    <BondeSVG />
    {children}
  </div>
))`
  display: flex;
  flex-direction: row;
  background-color: ${props => props.theme.background};
  padding: 20px ${props => props.theme.paddingX};
`;

Footer.defaultProps = {
  theme,
};

export default Footer;
