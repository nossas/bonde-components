import React from 'react';
import styled from 'styled-components';
import Icon from '../content/Icon';
import Bonde from '../content/Bonde';
import theme from '../base/theme';

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

const FluidLayout = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  flex-grow: 1;
`;

const Navbar: React.FC<NavbarProps> = ({
  brand,
  children,
  className,
  indexRoute,
}) => (
  <div className={className}>
    <HomeLink href={indexRoute} title="Bonde Home Link">
      {brand !== 'small' ? <Bonde /> : <Icon name="Bonde" />}
    </HomeLink>
    <FluidLayout>{children}</FluidLayout>
  </div>
);

const NavbarStyled = styled(Navbar)`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${({ theme }) => theme.body.background.light};
  padding: 20px ${({ theme }) => theme.body.padding};

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
