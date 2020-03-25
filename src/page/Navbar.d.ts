import React from 'react';
interface NavbarProps {
  className?: string;
  indexRoute: string;
  brand?: 'default' | 'small';
}
declare const NavbarStyled: import('styled-components').StyledComponent<
  React.FC<NavbarProps>,
  any,
  {},
  never
>;
export default NavbarStyled;
