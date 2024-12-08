import React, { useReducer, useState } from 'react';
import ExpenseList from '../components/ExpenseList';
import { useNavigate } from 'react-router-dom';
import ExpenseCards from '../components/ExpenseCards';
import FilterDropdown from '../components/FilterDropdown';
import filterReducer from "../reducers/filterReducer"
import { useDispatch, useSelector } from 'react-redux';
import { addFilter, removeFilter, resetFilter, selectFilter } from '../slices/filterSlice';
import { deleteExpense, selectAllExpenses } from '../slices/expenseSlice';

const ExpenseListPage = ({ setEditId }) => {
    const [showList, setShowList] = useState(true);
    const selectedCategories = useSelector(selectFilter);
    const expenses = useSelector(selectAllExpenses);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    if (expenses === null) {
        return <div>Loading...</div>
    }

    const allCategories = [];
    expenses?.forEach((expense) => {
        if (!allCategories.includes(expense.category)) {
            allCategories.push(expense.category);
        }
    });

    const onSelectCategory = (category) => {
        dispatch(addFilter(category));
    }

    const onDeselectCategory = (category) => {
        dispatch(removeFilter(category));
    }

    const handleDeleteExpense = (id) => {
        dispatch(deleteExpense(id));
    };

    const handleEditExpense = (id) => {
        setEditId(id);
        navigate('/');
    };

    const toggleView = () => {
        setShowList(val => !val);
    }

    const heading = showList ? "Expense List" : "Expense Cards";
    const ExpenseView = showList ? ExpenseList : ExpenseCards;

    const filteredExpenses = selectedCategories !== null ? expenses?.filter(expense => selectedCategories.includes(expense.category)) : expenses;

    return (
        <>
            <button onClick={toggleView}>Toggle View</button>
            <FilterDropdown
                allOptions={allCategories}
                selectedOptions={selectedCategories}
                onSelectOption={onSelectCategory}
                onDeselectOption={onDeselectCategory}
                resetSelection={() => dispatch(resetFilter())}
            />
            <h1>{heading}</h1>
            <ExpenseView expenses={filteredExpenses || []} onDeleteExpense={handleDeleteExpense} onEditExpense={handleEditExpense} />
        </>
    );
};

export default ExpenseListPage;