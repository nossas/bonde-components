import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Row, Col } from '../src';

describe('it', () => {
  it('renders without crashing Row', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Row>Lorem ipsum</Row>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders without crashing Col', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Col>Lorem ipsum</Col>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
