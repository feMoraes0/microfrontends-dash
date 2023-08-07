import React from 'react';
import ReactDOM from 'react-dom';

const mount = (el) => {
  ReactDOM.render(
    <h1>Hi there!</h1>,    // what should be rendered
    el                    // where should render
  );
}

if(process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#marketing-dev-root');
  if(devRoot) {
    mount(devRoot);
  }
}

export { mount };
