import React from 'react';
import ReactDOM from 'react-dom';
import Root from './Root';

const renderRoot = (Component) => {
  ReactDOM.render(<Component />, document.getElementById('root'));
};

renderRoot(Root);

if (module.hot) {
  module.hot.accept('./Root', () => {
    const NextRoot = require('./Root').default;
    renderRoot(NextRoot);
  });
}
