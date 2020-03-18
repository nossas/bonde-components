import React from 'react';
import { action } from '@storybook/addon-actions';
import { Button } from '@';

const Layout = ({ children, bg }) => (
  <div style={{ padding: '20px 10px', backgroundColor: bg }}>
    {children}
  </div>
)

Layout.defaultProps = {
  bg: '#fff'
}

export const render = () =>
  <Layout>
    <Button onClick={action('Hit me!')}>Hit me!</Button>
  </Layout>
;

render.story = {
  name: 'Default',
};

export const dark = () => 
  <Layout>
    <Button dark onClick={action('Hit me!')}>Hit me!</Button>
  </Layout>
;

export const light = () =>
  <Layout bg='#000'>
    <Button light onClick={action('Hit me!')}>Hit me!</Button>
  </Layout>
;

export const disabled = () =>
  <Layout>
    <Button disabled onClick={action('Hit me!')}>Hit me!</Button>
  </Layout>
;

export default {
  title: 'Button',
};