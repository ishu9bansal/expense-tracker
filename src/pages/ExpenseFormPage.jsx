import React from 'react';
import ExpenseForm from '../components/ExpenseForm';
import { useNavigate } from 'react-router-dom';

const ExpenseFormPage = ({ editId, setEditId, expenses, dispatchExpenseAction }) => {
    const navigate = useNavigate();

    const handleSaveExpense = (expense, id) => {
        const action = {}
        if (id > -1) {
            action.type = "EDIT";
            action.payload = { id, expense };
        } else {
            action.type = "ADD";
            action.payload = { expense };
        }
        dispatchExpenseAction(action);
        setEditId(-1);
        navigate('/expenses')
    };

    return (
        <>
            <h1>Daily Expense Tracker</h1>
            <ExpenseForm onSaveExpense={handleSaveExpense} editId={editId} key={editId} expenses={expenses || []} />
        </>
    );
};

export default ExpenseFormPage;