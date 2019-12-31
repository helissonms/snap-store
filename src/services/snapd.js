import http from './http';

export default {
  async getSections() {
    const { data } = await http.get('/sections');

    return data.result;
  },
};
