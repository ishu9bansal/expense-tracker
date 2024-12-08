import React from 'react';
import ExpenseForm from '../components/ExpenseForm';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addExpense, editExpense } from '../slices/expenseSlice';

const ExpenseFormPage = ({ editId, setEditId }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSaveExpense = (expense, id) => {
        if (id > -1) {
            dispatch(editExpense({ id, expense }));
        } else {
            dispatch(addExpense({ expense }));
        }
        setEditId(-1);
        navigate('/expenses')
    };

    return (
        <>
            <h1>Daily Expense Tracker</h1>
            <ExpenseForm onSaveExpense={handleSaveExpense} editId={editId} key={editId} />
        </>
    );
};

export default ExpenseFormPage;