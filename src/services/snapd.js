import http from './http';

export default {
  async getSections() {
    const { data } = await http.get('/sections');

    return data.result;
  },

  async getSnaps(params) {
    const { data } = await http.get('/find', {
      params,
    });

    return data.result;
  },
};
