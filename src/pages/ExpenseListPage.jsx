import React, { useReducer, useState } from 'react';
import ExpenseList from '../components/ExpenseList';
import { useNavigate } from 'react-router-dom';
import ExpenseCards from '../components/ExpenseCards';
import FilterDropdown from '../components/FilterDropdown';
import filterReducer from "../reducers/filterReducer"
import { useDispatch, useSelector } from 'react-redux';
import { deleteExpense, selectAllCategories, selectAllExpenses } from '../slices/expenseSlice';

const ExpenseListPage = ({ setEditId }) => {
    const [showList, setShowList] = useState(true);
    // const [selectedCategories, dispatchFilterAction] = useReducer(filterReducer, null);
    const selectedCategories = useSelector(state => state.filter);
    const navigate = useNavigate();
    const expenses = useSelector(selectAllExpenses);
    const dispatch = useDispatch();
    // const dispatchFilterAction = dispatch;
    const allCategories = useSelector(selectAllCategories);
    if (expenses === null) {
        return <div>Loading...</div>
    }


    const onSelectCategory = (category) => {
        dispatch({
            type: "ADD_FILTER",
            payload: { category },
        });
    }

    const onDeselectCategory = (category) => {
        dispatch({
            type: "REMOVE_FILTER",
            payload: { category },
        });
    }

    const handleDeleteExpense = (id) => {
        const action = deleteExpense({ id });
        console.log(action);
        dispatch(action);
    };

    const handleEditExpense = (id) => {
        console.log("id: ", id);
        console.log("expenses: ", expenses);
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
                resetSelection={() => dispatch({
                    type: "RESET_FILTER"
                })}
            />
            <h1>{heading}</h1>
            <ExpenseView expenses={filteredExpenses || []} onDeleteExpense={handleDeleteExpense} onEditExpense={handleEditExpense} />
        </>
    );
};

export default ExpenseListPage;