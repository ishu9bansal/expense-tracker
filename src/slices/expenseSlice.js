import { createSlice } from "@reduxjs/toolkit";
import { selectCategoryFilter } from "./filterSlice";

const generateNewId = (state) => {
    let newId = -1;
    state.forEach(ele => {
        newId = Math.max(newId, ele.id);
    });
    return newId + 1;
}

const expenseSlice = createSlice({
    name: "expense",
    initialState: {
        list: [
            {
                "date": "2024-12-08",
                "amount": 350,
                "title": "Burger",
                "category": "Food",
                "paymentMode": "Digital",
                "recurring": false,
                "beneficiary": "Friends",
                "tags": [
                    ""
                ],
                "id": 0
            },
            {
                "date": "2024-12-08",
                "amount": 450,
                "title": "Pizza",
                "category": "Food",
                "paymentMode": "Digital",
                "recurring": false,
                "beneficiary": "Family",
                "tags": [
                    ""
                ],
                "id": 1
            },
            {
                "date": "2024-12-08",
                "amount": 2300,
                "title": "Shoes",
                "category": "Apparel",
                "paymentMode": "Digital",
                "recurring": false,
                "beneficiary": "Self",
                "tags": [
                    ""
                ],
                "id": 2
            },
            
        ]
    },
    reducers: {
        addExpense: (state, action) => {
            const expense = {
                ...action.payload.expense,
                id: generateNewId(state),
            }
            state.list.push(expense);
        },
        deleteExpense: (state, action) => {
            state.list = state.list.filter(ele => ele.id !== action.payload.id);
        },
        editExpense: (state, action) => {
            const updatedExpense = {
                ...action.payload.expense,
                id: action.payload.id,
            };
            state.list = state.list.map(ele => ele.id === action.payload.id ? updatedExpense : ele);
        },
        fillExpenses: (state, action) => {
            state.list = action.payload;
        }
    },
});

export const { addExpense, editExpense, deleteExpense, fillExpenses } = expenseSlice.actions;

export default expenseSlice.reducer;

export const selectAllExpenses = (state) => state.expense.list;
export const selectExpenseById = (id) => (state) => state.expense.list.find(ele => ele.id === id);
export const selectAllCategories = (state) => {
    const allCategories = [];
    state.expense.list.forEach((expense) => {
        if (!allCategories.includes(expense.category)) {
            allCategories.push(expense.category);
        }
    });
    return allCategories;
};
export const selectFilteredExpenses = (state) => {
    const selectedCategories = selectCategoryFilter(state) || selectAllCategories(state);
    return state.expense.list.filter(expense => selectedCategories.includes(expense.category));
};
