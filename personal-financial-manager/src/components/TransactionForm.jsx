import React from 'react';
import { useForm } from 'react-hook-form';
import axios from '../api/axiosConfig';

export default function TransactionForm({ onSave }) {
  const { register: reg, handleSubmit, reset } = useForm();

  const onSubmit = async data => {
    const res = await axios.post('/transactions', data);
    onSave(res.data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...reg('description', { required: true })} placeholder="Description" />
      <input type="number" step="0.01" {...reg('amount', { required: true })} placeholder="Amount" />
      <input type="date" {...reg('date', { required: true })} />
      <button type="submit">Add Transaction</button>
    </form>
  );
}