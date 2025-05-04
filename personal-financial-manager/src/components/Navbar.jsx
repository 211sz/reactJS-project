import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../auth/useAuth';

export default function Navbar() {
  const { token, logout } = useAuth();

  return (
    <nav>
      <Link to="/">Home</Link>
      {token ? (
        <>
          <Link to="/dashboard">Dashboard</Link>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </>
      )}
    </nav>
  );
}