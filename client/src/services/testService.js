import api from '../api/axios.js';

export const testApi = async () => {
  const response = await api.get('/');

  return response.data;
};
