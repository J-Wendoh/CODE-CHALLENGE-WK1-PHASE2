import './App.css';
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import TransactionForm from './assets/form';
import TransactionTable from './assets/table';

export default function App() {
  const [transactions, setTransactions] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDate, setSelectedDate] = useState(null); // State for selected date

  const handleAddTransaction = (newTransaction) => {
    newTransaction.date = selectedDate;
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
        style={{ width: '100%', padding: '10px', fontSize: '16px' }}
      />
      <TransactionForm 
        onAddTransaction={handleAddTransaction} 
        selectedDate={selectedDate} // Pass selectedDate state to TransactionForm
        setSelectedDate={setSelectedDate} // Pass setSelectedDate function to update selectedDate
      />
      <TransactionTable transactions={filteredTransactions} />
    </div>
  );
}
