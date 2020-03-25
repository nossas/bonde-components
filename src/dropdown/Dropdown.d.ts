import React from 'react';
export declare const DropdownFluid: import('styled-components').StyledComponent<
  'div',
  any,
  {},
  never
>;
interface DropdownProps {
  placeholder?: string;
  item?: any;
  items: any[];
  selectable?: boolean;
  onSelect: Function;
  dropdownInput?: any;
  dropdownItem?: any;
  dropdownList?: any;
  direction?: 'left' | 'right';
}
declare const Dropdown: React.FC<DropdownProps>;
export default Dropdown;
