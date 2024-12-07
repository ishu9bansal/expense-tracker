import React from 'react';

const ExpenseList = ({ expenses, onDeleteExpense, onEditExpense }) => {
  return (
    <ul>
        {expenses.map((expense) => (
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