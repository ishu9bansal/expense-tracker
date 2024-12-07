import React, { useReducer, useState } from 'react';
import ExpenseList from '../components/ExpenseList';
import { useNavigate } from 'react-router-dom';
import ExpenseCards from '../components/ExpenseCards';
import FilterDropdown from '../components/FilterDropdown';
import filterReducer from "../reducers/filterReducer"

const ExpenseListPage = ({ setEditId, expenses, dispatchExpenseAction }) => {
    const [showList, setShowList] = useState(true);
    const [selectedCategories, dispatchFilterAction] = useReducer(filterReducer, null);
    const navigate = useNavigate();

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
        dispatchFilterAction({
            type: "ADD_FILTER",
            payload: { category },
        });
    }

    const onDeselectCategory = (category) => {
        dispatchFilterAction({
            type: "REMOVE_FILTER",
            payload: { category },
        });
    }

    const handleDeleteExpense = (ind) => {
        dispatchExpenseAction({
            type: "DELETE",
            payload: { ind },
        });
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
                resetSelection={() => dispatchFilterAction({
                    type: "RESET_FILTER"
                })}
            />
            <h1>{heading}</h1>
            <ExpenseView expenses={filteredExpenses || []} onDeleteExpense={handleDeleteExpense} onEditExpense={handleEditExpense} />
        </>
    );
};

export default ExpenseListPage;