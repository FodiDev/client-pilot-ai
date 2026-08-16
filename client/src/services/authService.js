import api from '../api/axios.js';

/**
 * Register a new user
 */
export const registerUser = async (userData) => {
  const response = await api.post('/auth/register', userData);

  return response.data;
};

/**
 * Login an existing user
 */
export const loginUser = async (credentials) => {
  const response = await api.post('/auth/login', credentials);

  return response.data;
};

/**
 * Logout the current user
 */
export const logoutUser = async () => {
  const response = await api.post('/auth/logout');

  return response.data;
};

/**
 * Get the currently authenticated user
 */
export const getProfile = async () => {
  const response = await api.get('/auth/profile');

  return response.data;
};

/**
 * Verify the current authentication session
 */
export const verifyAuth = async () => {
  const response = await api.get('/auth/verify');

  return response.data;
};
