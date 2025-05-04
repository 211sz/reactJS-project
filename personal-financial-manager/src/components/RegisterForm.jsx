import React from 'react';
import { useForm } from 'react-hook-form';
import { useAuth } from '../auth/useAuth';
import { useNavigate } from 'react-router-dom';

export default function RegisterForm() {
  const { register: reg, handleSubmit, formState: { errors } } = useForm();
  const { register: registerUser } = useAuth();
  const nav = useNavigate();

  const onSubmit = async data => {
    await registerUser(data);
    nav('/login');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...reg('name', { required: true })} placeholder="Name" />
      {errors.name && <span>Name is required</span>}
      <input {...reg('email', { required: true })} placeholder="Email" />
      {errors.email && <span>Email is required</span>}
      <input type="password" {...reg('password', { required: true })} placeholder="Password" />
      {errors.password && <span>Password is required</span>}
      <button type="submit">Register</button>
    </form>
  );
}