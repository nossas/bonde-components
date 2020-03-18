import React from 'react';
import { Icon } from '@';
import styled from 'styled-components';

const Layout = styled.div`
  display: flex;
  flex-direction: row;

  svg {
    margin: 0 5px;
  }
`

export const render = () =>
  <Layout>
    <Icon name='ArrowDown' />
    <Icon name='ArrowLeft' />
    <Icon name='ArrowRight' />
    <Icon name='ArrowUp' />
    <Icon name='Bonde' />
    <Icon name='Bot' />
    <Icon name='Close' />
    <Icon name='Network' />
    <Icon name='Settings' />
    <Icon name='Plus' />
    <Icon name='User' />
    <Icon name='Window' />
  </Layout>
;

render.story = {
  name: 'Default',
};

export const small = () =>
  <Layout>
    <Icon name='ArrowDown' size='small' />
    <Icon name='ArrowLeft' size='small' />
    <Icon name='ArrowRight' size='small' />
    <Icon name='ArrowUp' size='small' />
    <Icon name='Bonde' size='small' />
    <Icon name='Bot' size='small' />
    <Icon name='Close' size='small' />
    <Icon name='Network' size='small' />
    <Icon name='Plus' size='small' />
    <Icon name='Settings' size='small' />
    <Icon name='User' size='small' />
    <Icon name='Window' size='small' />
  </Layout>
;

export const large = () =>
  <Layout>
    <Icon name='ArrowDown' size='large' />
    <Icon name='ArrowLeft' size='large' />
    <Icon name='ArrowRight' size='large' />
    <Icon name='ArrowUp' size='large' />
    <Icon name='Bonde' size='large' />
    <Icon name='Bot' size='large' />
    <Icon name='Close' size='large' />
    <Icon name='Network' size='large' />
    <Icon name='Plus' size='large' />
    <Icon name='Settings' size='large' />
    <Icon name='User' size='large' />
    <Icon name='Window' size='large' />
  </Layout>
;

export const color = () =>
  <Layout>
    <Icon name='ArrowDown' size='large' color='red' />
    <Icon name='ArrowLeft' size='large' color='red' />
    <Icon name='ArrowRight' size='large' color='red' />
    <Icon name='ArrowUp' size='large' color='red' />
    <Icon name='Bonde' size='large' color='red' />
    <Icon name='Bot' size='large' color='red' />
    <Icon name='Close' size='large' color='red' />
    <Icon name='Network' size='large' color='red' />
    <Icon name='Plus' size='large' color='red' />
    <Icon name='Settings' size='large' color='red' />
    <Icon name='User' size='large' color='red' />
    <Icon name='Window' size='large' color='red' />
  </Layout>
  ;

export default {
  title: 'Icon',
};