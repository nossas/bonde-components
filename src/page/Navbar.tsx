import React from 'react';
import styled from 'styled-components';
import { Stack } from '@chakra-ui/react';
import Icon from '../content/Icon';
import Bonde from '../content/Bonde';

interface NavbarProps {
  className?: string;
  indexRoute: string;
  brand?: 'default' | 'small';
}

// Reset link to keep BondeSVG render
const HomeLink = styled.a`
  color: #000;
  text-decoration: none;

  &:hover {
    color: #000;
    text-decoration: none;
  }
`;

const Navbar: React.FC<NavbarProps> = ({ brand, children, indexRoute }) => (
  <Stack direction="row" bg="black" px="57px" py={4} alignItems="center">
    <HomeLink href={indexRoute} title="Bonde Home Link">
      {brand !== 'small' ? <Bonde /> : <Icon name="Bonde" />}
    </HomeLink>
    {children}
  </Stack>
);

export default Navbar;
