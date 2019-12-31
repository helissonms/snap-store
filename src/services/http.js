import axios from 'axios';

const { address, port, token } = window.apiDetails;

export default axios.create({
  baseURL: `http://${address}:${port}/v2`,
  headers: {
    'Authorization': token,
  },
});
