
import './App.css'
import { useState } from 'react';
import TransactionForm from './assets/form';
import TransactionTable from './assets/table';


export default function App() {
  const [transactions, setTransactions] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const handleAddTransaction = (newTransaction) => {
    setTransactions([...transactions, newTransaction]);
  };

  const filteredTransactions = transactions.filter(transaction =>
    transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search transactions"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <TransactionTable transactions={filteredTransactions} />
      <TransactionForm onAddTransaction={handleAddTransaction} />
    </div>
  )}