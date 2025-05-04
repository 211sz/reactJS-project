import React, { createContext, useState } from 'react';
import axios from '../api/axiosConfig';

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [user, setUser] = useState(null);

  const register = async ({ name, email, password }) => {
    await axios.post('/users', { name, email, password });
  };

  const login = async ({ email, password }) => {
    const res = await axios.get(`/users?email=${email}&password=${password}`);
    if (res.data.length) {
      const mockToken = 'mock-jwt-token';
      localStorage.setItem('token', mockToken);
      setToken(mockToken);
      setUser(res.data[0]);
    } else {
      throw new Error('Invalid credentials');
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    setToken(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ token, user, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
}