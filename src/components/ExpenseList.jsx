import React from 'react';

const sortPredicate = (selectedSort) => {
  switch(selectedSort){
      case "Name":
          return (a, b) => a.title.localeCompare(b.title);
      case "Date":
          return (a, b) => a.date.localeCompare(b.date);
      case "Amount":
          return (a, b) => a.amount - b.amount;
      default:
          return (a, b) => a.id - b.id;
  }
};

const ExpenseList = ({ selectedSort, isReverse, expenses, onDeleteExpense, onEditExpense }) => {
  const viewExpenses = [...expenses];
  viewExpenses.sort(sortPredicate(selectedSort));
  if (isReverse) {
    viewExpenses.reverse();
  }
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