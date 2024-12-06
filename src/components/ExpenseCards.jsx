import React from 'react';
import "./ExpenseCards.css";

const Card = ({ expense, deleteHandler, editHandler }) => {
    return (
        <div className="expense-card">
            <div className="expense-info">
                <p><strong>Date:</strong> {expense.date}</p>
                <p><strong>Amount:</strong> ${expense.amount}</p>
                <p><strong>Title:</strong> {expense.title}</p>
                <p><strong>Category:</strong> {expense.category}</p>
                <p><strong>Payment Mode:</strong> {expense.paymentMode}</p>
                <p><strong>Type:</strong> {expense.recurring ? 'Recurring' : 'One-time'}</p>
                <p><strong>Beneficiary:</strong> {expense.beneficiary}</p>
                <p><strong>Tags:</strong> {expense.tags?.join(', ')}</p>
            </div>
            <div className="expense-actions">
                <button onClick={deleteHandler}>Delete</button>
                <button onClick={editHandler}>Edit</button>
            </div>
        </div>
    );
  };
  

const ExpenseCards = ({ expenses, onDeleteExpense, onEditExpense }) => {
  return (
    <div className='expense-grid'>
        {expenses.map((expense, index) => (
            <Card
                key={index}
                expense={expense}
                deleteHandler={() => onDeleteExpense(index)}
                editHandler={() => onEditExpense(index)}
            >
            </Card>
        ))}
    </div>
  );
};

export default ExpenseCards;