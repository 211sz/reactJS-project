import React, { useState, useEffect } from 'react';
import axios from '../api/axiosConfig';
import TransactionForm from '../components/TransactionForm';

export default function Dashboard() {
  const [txs, setTxs] = useState([]);

  useEffect(() => {
    axios.get('/transactions').then(res => setTxs(res.data));
  }, []);

  return (
    <main>
      <h1>Your Transactions</h1>
      <TransactionForm onSave={t => setTxs([...txs, t])} />
      <ul>
        {txs.map(t => (
          <li key={t.id}>
            {t.date} – {t.description}: ${t.amount}
          </li>
        ))}
      </ul>
    </main>
  );
}