import { createSlice } from "@reduxjs/toolkit";

const generateNewId = (state) => {
    let newId = -1;
    state.forEach(ele => {
        newId = Math.max(newId, ele.id);
    });
    return newId + 1;
}

const expenseSlice = createSlice({
    name: "expense",
    initialState: [],
    reducers: {
        addExpense: (state, action) => {
            const expense = {
                ...action.payload.expense,
                id: generateNewId(state),
            }
            state.push(expense);
        },
        deleteExpense: (state, action) => {
            state = state.filter(ele => ele.id === action.payload.id);
        },
        editExpense: (state, action) => {
            const updatedExpense = {
                ...action.payload.expense,
                id: action.payload.id,
            };
            state = state.map(ele => ele.id === action.payload.id ? updatedExpense : ele);
        },
        fillExpenses: (state, action) => {
            state = action.payload;
        }
    },
});

export const { addExpense, editExpense, deleteExpense, fillExpenses } = expenseSlice.actions;

export default expenseSlice.reducer;

export const selectAllExpenses = (state) => state.expenses;
export const selectExpenseById = (id) => (state) => state.expenses.find(ele => ele.id === id);