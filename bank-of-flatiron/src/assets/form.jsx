import React, { useState } from 'react';

export default function TransactionForm({ onAddTransaction, selectedDate, setSelectedDate }) {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!description.trim() || !amount.trim() || !category.trim()) return;
    const newTransaction = {
      description,
      amount: parseFloat(amount),
      date: selectedDate,
      category
    };
    onAddTransaction(newTransaction);
    setDescription('');
    setAmount('');
    setCategory('');
  };

  return (
    <>
    <form onSubmit={handleSubmit}>
        <label htmlFor="description">Description:</label>
        <input
          type="text"
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <label htmlFor="amount">Amount:</label>
        <input
          type="number"
          id="amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <label htmlFor="category">Category:</label>
        <select
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">Select a category</option>
          <option value="Entertainment">Entertainment</option>
          <option value="Food">Food</option>
          <option value="Domestic bills">Domestic bills</option>
          <option value="Employees">Employees</option>
          <option value="Others">Others</option>
        </select>
        <label>Date:</label>
        <input
        id='date'
          type="date"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
        />
      <button type="submit">Add Transaction</button>
    </form>
    </>
  );
}
