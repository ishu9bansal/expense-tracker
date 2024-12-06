import React from 'react';
import ExpenseList from '../components/ExpenseList';
import { useNavigate } from 'react-router-dom';
import ExpenseCards from '../components/ExpenseCards';

const ExpenseListPage = ({ setEditIndex, expenses, dispatchExpenseAction }) => {
    const navigate = useNavigate();

    const handleDeleteExpense = (ind) => {
        dispatchExpenseAction({
            type: "DELETE",
            payload: { ind },
        });
    };

    const handleEditExpense = (ind) => {
        setEditIndex(ind);
        navigate('/');
    };

    return (
        <>
            <h1>Expense Cards</h1>
            <ExpenseCards expenses={expenses || []} onDeleteExpense={handleDeleteExpense} onEditExpense={handleEditExpense} />
        </>
    );
};

export default ExpenseListPage;