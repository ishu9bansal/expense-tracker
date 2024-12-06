import React, { useState } from 'react';
import ExpenseList from '../components/ExpenseList';
import { useNavigate } from 'react-router-dom';
import ExpenseCards from '../components/ExpenseCards';

const ExpenseListPage = ({ setEditIndex, expenses, dispatchExpenseAction }) => {
    const [showList, setShowList] = useState(true);
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

    const toggleView = () => {
        setShowList(val => !val);
    }

    const heading = showList ? "Expense List" : "Expense Cards";
    const ExpenseView = showList ? ExpenseList : ExpenseCards;

    return (
        <>
            <button onClick={toggleView}>Toggle View</button>
            <h1>{heading}</h1>
            <ExpenseView expenses={expenses || []} onDeleteExpense={handleDeleteExpense} onEditExpense={handleEditExpense} />
        </>
    );
};

export default ExpenseListPage;