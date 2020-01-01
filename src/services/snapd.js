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

  async findSnap(name) {
    const { data } = await http.get('/find', {
      params: {
        name,
      },
    });

    return data.result.length > 0 ? data.result[0] : null;
  }
};
