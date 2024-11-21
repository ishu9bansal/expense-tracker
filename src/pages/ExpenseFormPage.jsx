import React from 'react';
import ExpenseForm from '../components/ExpenseForm';
import { useNavigate } from 'react-router-dom';
import { useFormValues } from '../context/FormContext';

const ExpenseFormPage = () => {
    const navigate = useNavigate();
    const expensesDataString = localStorage.getItem('expenses_data_key') || '[]';
    const expenses = JSON.parse(expensesDataString)
    const { formValues, setFormValue, resetFormValues } = useFormValues()

    const handleSaveExpense = (expense, ind) => {
        if (ind !== undefined) {
            expenses[ind] = expense;
        } else {
            expenses.push(expense);
        }
        const updatedExpensesString = JSON.stringify(expenses);
        localStorage.setItem('expenses_data_key', updatedExpensesString);
        resetFormValues();
        navigate('/expenses');
    };

    return (
        <>
            <h1>Daily Expense Tracker</h1>
            <ExpenseForm onSaveExpense={handleSaveExpense} formValues={formValues} setFormValue={setFormValue} resetFormValues={resetFormValues} />
        </>
    );
};

export default ExpenseFormPage;