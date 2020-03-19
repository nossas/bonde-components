import React from 'react';
import { Loading, Text } from '@';

export const loading = () => 
  <div>
    <Loading size='large' />
    <Loading />
    <Loading size='small' />
  </div>
;

export const fullSizeLoading = () =>
  <div>
    <Loading fullsize>
      <Text>Saving yout dataform...</Text>
    </Loading>
    <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
  </div>
;

export default {
  title: 'Await',
};