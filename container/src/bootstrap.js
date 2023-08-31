import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

/**
 * não precisa das verificações pois é o projeto principal
 * sempre será carregado da mesma forma
*/


ReactDOM.render(
  <App />,
  document.querySelector('#root')
);
