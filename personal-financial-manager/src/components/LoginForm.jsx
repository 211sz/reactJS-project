import React from 'react';
import { useForm } from 'react-hook-form';
import { useAuth } from '../auth/useAuth';
import { useNavigate } from 'react-router-dom';

export default function LoginForm() {
  const { register: reg, handleSubmit, formState: { errors } } = useForm();
  const { login } = useAuth();
  const nav = useNavigate();

  const onSubmit = async data => {
    try {
      await login(data);
      nav('/dashboard');
    } catch (e) {
      alert(e.message);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...reg('email', { required: true })} placeholder="Email" />
      {errors.email && <span>Email is required</span>}
      <input type="password" {...reg('password', { required: true })} placeholder="Password" />
      {errors.password && <span>Password is required</span>}
      <button type="submit">Login</button>
    </form>
  );
}