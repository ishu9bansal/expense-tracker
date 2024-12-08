import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
    name: 'filter',
    initialState: null,
    reducers: {
        addFilter: (state, action) => {
            if (state === null) {
                state = [];
            }
            state.push(action.payload);
            return state;
        },
        removeFilter: (state, action) => {
            return state?.filter(ele => ele !== action.payload);
        },
        resetFilter: (state) => {
            return null;
        }
    },
});

export const { addFilter, removeFilter, resetFilter } = filterSlice.actions;

export default filterSlice.reducer;

export const selectFilter = (state) => state.filter;
