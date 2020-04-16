import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Header } from '../src';

describe('it', () => {
  it('Header.h1 renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Header.h1>Header</Header.h1>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('Header.h2 renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Header.h2>Header</Header.h2>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('Header.h3 renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Header.h3>Header</Header.h3>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('Header.h4 renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Header.h4>Header</Header.h4>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('Header.h5 renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Header.h5>Header</Header.h5>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('Header.h6 renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Header.h6>Header</Header.h6>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
