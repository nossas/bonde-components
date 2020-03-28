import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ConnectedForm } from '../src';

describe('it', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <ConnectedForm onSubmit={() => {}}>
        {() => <p>FormTest</p>}
      </ConnectedForm>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
