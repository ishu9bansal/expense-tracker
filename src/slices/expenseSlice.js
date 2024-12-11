import { createSlice } from "@reduxjs/toolkit";

const generateNewId = (expenses) => {
    let newId = -1;
    expenses.forEach(ele => {
        newId = Math.max(newId, ele.id);
    });
    return newId + 1;
}

const expenseSlice = createSlice({
    name: 'expenseNameInSlice',
    initialState: {
        currency: "Rupee",
        list: [
            {
                "date": "2024-12-08",
                "amount": 350,
                "title": "Burger",
                "category": "Food",
                "paymentMode": "Digital",
                "recurring": false,
                "beneficiary": "Self",
                "tags": [
                    ""
                ],
                "id": 0
            },
            {
                "date": "2024-12-08",
                "amount": 350,
                "title": "Burger",
                "category": "Food",
                "paymentMode": "Digital",
                "recurring": false,
                "beneficiary": "Self",
                "tags": [
                    ""
                ],
                "id": 1
            },
            {
                "date": "2024-12-08",
                "amount": 350,
                "title": "Burger",
                "category": "Food",
                "paymentMode": "Digital",
                "recurring": false,
                "beneficiary": "Self",
                "tags": [
                    ""
                ],
                "id": 2
            },
            {
                "date": "2024-12-08",
                "amount": 350,
                "title": "Burger",
                "category": "Food",
                "paymentMode": "Digital",
                "recurring": false,
                "beneficiary": "Self",
                "tags": [
                    ""
                ],
                "id": 3
            },
            {
                "date": "2024-12-08",
                "amount": 350,
                "title": "Burger",
                "category": "Food",
                "paymentMode": "Digital",
                "recurring": false,
                "beneficiary": "Self",
                "tags": [
                    ""
                ],
                "id": 4
            },
            {
                "date": "2024-12-08",
                "amount": 350,
                "title": "Burger",
                "category": "Food",
                "paymentMode": "Digital",
                "recurring": false,
                "beneficiary": "Self",
                "tags": [
                    ""
                ],
                "id": 5
            },
            {
                "date": "2024-12-08",
                "amount": 350,
                "title": "Burger",
                "category": "Food",
                "paymentMode": "Digital",
                "recurring": false,
                "beneficiary": "Self",
                "tags": [
                    ""
                ],
                "id": 6
            },
            {
                "date": "2024-12-08",
                "amount": 350,
                "title": "Burger",
                "category": "Food",
                "paymentMode": "Digital",
                "recurring": false,
                "beneficiary": "Self",
                "tags": [
                    ""
                ],
                "id": 7
            },
            {
                "date": "2024-12-08",
                "amount": 350,
                "title": "Burger",
                "category": "Food",
                "paymentMode": "Digital",
                "recurring": false,
                "beneficiary": "Self",
                "tags": [
                    ""
                ],
                "id": 8
            },
            {
                "date": "2024-12-08",
                "amount": 350,
                "title": "Burger",
                "category": "Food",
                "paymentMode": "Digital",
                "recurring": false,
                "beneficiary": "Self",
                "tags": [
                    ""
                ],
                "id": 9
            },
            {
                "date": "2024-12-08",
                "amount": 350,
                "title": "Burger",
                "category": "Food",
                "paymentMode": "Digital",
                "recurring": false,
                "beneficiary": "Self",
                "tags": [
                    ""
                ],
                "id": 10
            },
        ],
    },
    reducers: {
        addExpense: (state, action) => {
            action.payload.expense["id"] = generateNewId(state.list);
            state.list.push(action.payload.expense);
        },
        editExpense: (state, action) => {
            const { id, expense } = action.payload;
            state.list = state.list.map(ele => ele.id === id ? expense : ele);
        },
        deleteExpense: (state, action) => {
            const { id } = action.payload;
            state.list = state.list.filter(ele => ele.id !== id);
        },
    },
});

export const { addExpense, editExpense, deleteExpense } = expenseSlice.actions;

export default expenseSlice.reducer;

export const selectAllExpenses = (state) => state.expenseKeyInStore.list;
export const selectCurrency = (state) => state.expenseKeyInStore.currency;
export const selectAllCategories = (state) => {
    const allCategories = [];
    state.expenseKeyInStore.list.forEach((expense) => {
        if (!allCategories.includes(expense.category)) {
            allCategories.push(expense.category);
        }
    });
    return allCategories;
};
