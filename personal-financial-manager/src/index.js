import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { AuthProvider } from './auth/AuthContext';
import './index.css';

ReactDOM.render(
  <AuthProvider>
    <App />
  </AuthProvider>,
  document.getElementById('root')
);