import React from 'react';
import styled from 'styled-components';
import Icon from '../content/Icon';
import theme from './theme';
import BondeSVG from './BondeSVG';

interface NavbarProps {
  className?: string;
  indexRoute: string;
  brand?: 'default' | 'small';
}

// Reset link to keep BondeSVG render
const HomeLink = styled.a`
  color: black;
  text-decoration: none;

  $:hover {
    color: black;
    text-decoration: none;
  }
`;

const Navbar: React.FC<NavbarProps> = ({
  brand,
  children,
  className,
  indexRoute,
}) => (
  <div className={className}>
    <HomeLink href={indexRoute} title="Bonde Home Link">
      {brand !== 'small' ? <BondeSVG /> : <Icon name="Bonde" />}
    </HomeLink>
    {children}
  </div>
);

const NavbarStyled = styled(Navbar)`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${props => props.theme.background};
  padding: 20px ${props => props.theme.paddingX};

  ${HomeLink} {
    margin-right: 10px;
  }
`;

NavbarStyled.defaultProps = {
  theme,
  brand: 'default',
};

NavbarStyled.displayName = 'Navbar';

export default NavbarStyled;
