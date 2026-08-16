import {
  React,
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';

import {
  getProfile,
  loginUser,
  logoutUser,
  registerUser,
} from '../services/authService';

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  /*
   * Check whether the user already has
   * a valid authentication session.
   */
  const checkAuth = useCallback(async () => {
    try {
      const response = await getProfile();

      setUser(response.user);
    } catch (error) {
      setUser(null);
    } finally {
      setIsLoading(false);
    }
  }, []);

  /*
   * Check authentication when the application
   * initially loads.
   */
  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  /*
   * Login
   */
  const login = async (credentials) => {
    const response = await loginUser(credentials);

    const profile = await getProfile();

    setUser(profile.user);

    return response;
  };

  /*
   * Register
   */
  const register = async (userData) => {
    const response = await registerUser(userData);

    const profile = await getProfile();

    setUser(profile.user);

    return response;
  };

  /*
   * Logout
   */
  const logout = async () => {
    try {
      await logoutUser();
    } finally {
      setUser(null);
    }
  };

  const value = useMemo(
    () => ({
      user,
      isAuthenticated: Boolean(user),
      isLoading,
      login,
      register,
      logout,
      checkAuth,
    }),
    [user, isLoading, checkAuth]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
