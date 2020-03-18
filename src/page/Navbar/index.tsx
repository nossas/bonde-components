import React from 'react';
import styled from 'styled-components';
import BondeSVG from '../BondeSVG';
import theme from '../theme';

interface NavbarProps {
  className: string;
  indexRoute: string;
}

const Navbar: React.FC<NavbarProps> = ({ children, className, indexRoute }) => (
  <div className={className}>
    <a href={indexRoute} title="Bonde Home Link">
      <BondeSVG />
    </a>
    {children}
  </div>
);

const NavbarStyled = styled(Navbar)`
  display: flex;
  flex-direction: row;
  background-color: ${props => props.theme.background};
  padding: 10px ${props => props.theme.paddingX};
`;

NavbarStyled.defaultProps = {
  theme,
};

NavbarStyled.displayName = 'Navbar';

export default NavbarStyled;
