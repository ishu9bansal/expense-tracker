import React from 'react';

const ExpenseList = ({ isReverse, expenses, onDeleteExpense, onEditExpense }) => {
  const viewExpenses = isReverse ? [...expenses].reverse() : expenses;
  return (
    <ul>
        {viewExpenses.map((expense) => (
            <li key={expense.id}>
                {expense.date} - ${expense.amount} - {expense.title} - {expense.category} - {expense.paymentMode} - {expense.recurring ? 'Recurring' : 'One-time'} - {expense.beneficiary} - Tags: {expense.tags?.join(', ')}
                <button onClick={() => onDeleteExpense(expense.id)}>Delete</button>
                <button onClick={() => onEditExpense(expense.id)}>Edit</button>
            </li>
        ))}
    </ul>
  );
};

export default ExpenseList;