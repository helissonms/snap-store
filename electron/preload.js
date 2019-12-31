const { ipcRenderer } = require('electron');

window.apiDetails = {
  ...ipcRenderer.sendSync('api-details')
};
