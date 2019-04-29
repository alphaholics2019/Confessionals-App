import React from 'react';
import ReactDOM from 'react-dom';
import AuthenticatedApp from '../components/AuthenticatedApp';

it('Authenticated renders', () => {
  const div = document.createElement('div');
  fetch.mockResponse(JSON.stringify([{name: 'test'}, {name: 'test2'}]))

  ReactDOM.render(<AuthenticatedApp/>, div);
});
