import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
    name: 'filter',
    initialState: {
        categories: null,
    },
    reducers: {
        addCategoryFilter: (state, action) => {
            state.categories = state.categories || [];
            state.categories.push(action.payload);
        },
        removeCategoryFilter: (state, action) => {
            state.categories = state.categories?.filter(ele => ele !== action.payload);
        },
        resetCategoryFilter: (state) => {
            state.categories = null;
        }
    },
});

export const { addCategoryFilter, removeCategoryFilter, resetCategoryFilter } = filterSlice.actions;

export default filterSlice.reducer;

export const selectCategoryFilter = (state) => state.filter.categories;
