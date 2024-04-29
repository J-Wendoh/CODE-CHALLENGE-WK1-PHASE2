import React from "react";
import { useState } from "react";



export default function TransactionForm({ onAddTransaction }) {
    const [date, setDate] = useState('');
    const [description, setDescription] = useState('');
    const [amount, setAmount] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const newTransaction = {
        date,
        description,
        amount
      };
      onAddTransaction(newTransaction);
      setDate('');
      setDescription('');
      setAmount('');
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button type="submit">Add Transaction</button>
      </form>
    )}