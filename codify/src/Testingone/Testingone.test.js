import React from 'react';
import ReactDOM from 'react-dom';
import Testingone from './Testingone';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Testingone />, div);
  ReactDOM.unmountComponentAtNode(div);
});