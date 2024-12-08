import React, { useState } from 'react';
import ExpenseList from '../components/ExpenseList';
import { useNavigate } from 'react-router-dom';
import ExpenseCards from '../components/ExpenseCards';
import FilterDropdown from '../components/FilterDropdown';
import { useDispatch, useSelector } from 'react-redux';
import { addCategoryFilter, removeCategoryFilter, resetCategoryFilter, selectCategoryFilter } from '../slices/filterSlice';
import { deleteExpense, selectAllCategories, selectFilteredExpenses } from '../slices/expenseSlice';

const ExpenseListPage = ({ setEditId }) => {
    const [showList, setShowList] = useState(true);
    const selectedCategories = useSelector(selectCategoryFilter);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const allCategories = useSelector(selectAllCategories);

    const onSelectCategory = (category) => {
        dispatch(addCategoryFilter(category));
    }

    const onDeselectCategory = (category) => {
        dispatch(removeCategoryFilter(category));
    }

    const handleDeleteExpense = (id) => {
        dispatch(deleteExpense({ id }));
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

    const filteredExpenses = useSelector(selectFilteredExpenses);

    return (
        <>
            <button onClick={toggleView}>Toggle View</button>
            <FilterDropdown
                allOptions={allCategories}
                selectedOptions={selectedCategories}
                onSelectOption={onSelectCategory}
                onDeselectOption={onDeselectCategory}
                resetSelection={() => dispatch(resetCategoryFilter())}
            />
            <h1>{heading}</h1>
            <ExpenseView expenses={filteredExpenses || []} onDeleteExpense={handleDeleteExpense} onEditExpense={handleEditExpense} />
        </>
    );
};

export default ExpenseListPage;