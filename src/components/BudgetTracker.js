import React, { useState } from 'react';
import './BudgetTracker.css';
function BudgetTracker() {
  const [expenses, setExpenses] = useState([]);
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');

  const handleAddExpense = () => {
    setExpenses([...expenses, { description, amount: parseFloat(amount) }]);
    setAmount('');
    setDescription('');
  };

  const totalExpense = expenses.reduce((total, item) => total + item.amount, 0);

  return (
    <div className="ib">
    <div className="budget-tracker">
      <h2>Budget Tracker</h2>
      
      <input type="text" placeholder="Expense Description" value={description} onChange={(e) => setDescription(e.target.value)} />
      <input type="number" placeholder="Amount" value={amount} onChange={(e) => setAmount(e.target.value)} />
      <button onClick={handleAddExpense}>Add Expense</button>
      <h3>Total: ${totalExpense.toFixed(2)}</h3>
      <ul>
        {expenses.map((exp, index) => (
          <li key={index}>{exp.description}: ${exp.amount}</li>
        ))}
      </ul>
    </div>
    </div>
  );
}

export default BudgetTracker;
