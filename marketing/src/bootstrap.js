import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const mount = (el) => {
  ReactDOM.render(
    <App />,        // what should be rendered
    el             // where should render
  );
}

if(process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#marketing-dev-root');
  if(devRoot) {
    mount(devRoot);
  }
}

export { mount };
