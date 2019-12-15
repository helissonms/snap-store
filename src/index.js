import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const renderRoot = (Component) => {
  ReactDOM.render(<Component />, document.getElementById('root'));
};

renderRoot(App);

if (module.hot) {
  module.hot.accept('./App', () => {
    const NextRoot = require('./App').default;
    renderRoot(NextRoot);
  });
}
