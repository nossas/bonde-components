import React from 'react';
import { action } from '@storybook/addon-actions';
import { Header } from '@';

export const title = () =>
  <div>
    <Header.h1>Header 1</Header.h1>
    <Header.h2>Header 2</Header.h2>
    <Header.h3>Header 3</Header.h3>
    <Header.h4>Header 4</Header.h4>
    <Header.h5>Header 5</Header.h5>
    <Header.h6>Header 6</Header.h6>
  </div>
;

export default {
  title: 'Header',
};