import React, { useState } from 'react';
import { action } from '@storybook/addon-actions';
import { Navbar, Dropdown, DropdownImageInput, DropdownImageItem } from '@';

export const communities = () => {
  const [item, setItem] = useState(undefined)

  return (
    <Navbar brand='small' indexRoute='/'>
      <Dropdown
        placeholder='Selecione uma comunidade'
        item={item}
        items={[
          {
            img: { src: 'https://s3.amazonaws.com/hub-central/uploads/1540751246_Ninguemficapratras-Logo.png', alt: 'Ninguém fica pra trás' },
            label: 'Ninguém fica pra trás'
          },
          {
            img: { src: 'https://s3.amazonaws.com/hub-central/uploads/1484260522_reboo.png', alt: 'Meu Rio' },
            label: 'Meu Rio'
          },
          {
            img: { src: 'https://s3.amazonaws.com/hub-central/uploads/1502212636_betaavatar.png', alt: 'BETA' },
            label: 'BETA'
          }
        ]}
        onSelect={(value: any) => {
          setItem(value)
          action('SelectDropdown')(value)
        }}
        dropdownInput={DropdownImageInput}
        dropdownItem={DropdownImageItem}
        />
    </Navbar>
  );
};

export default {
  title: 'Dropdown',
};