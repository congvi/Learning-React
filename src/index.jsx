import React from 'react';
import ReactDOM from 'react-dom';
const host = document.getElementById('app-host');
import List from './List/List';

if (!host) {
  throw new Error('Cannot attach app to DOM');
}

ReactDOM.render(
  <List/>,
  host
);
