import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
const { ipcRenderer } = window.require("electron");

let apiDetails = ipcRenderer.sendSync('api-details');

const renderRoot = (Component) => {
  ReactDOM.render(<Component apiDetails={apiDetails} />, document.getElementById('root'));
};

renderRoot(App);

if (module.hot) {
  module.hot.accept('./App', () => {
    const NextRoot = require('./App').default;
    renderRoot(NextRoot);
  });
}
