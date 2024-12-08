import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "./slices/filterSlice";
import expenseReducer from "./slices/expenseSlice";

export default configureStore({
    reducer: {
        filter: filterReducer,
        expense: expenseReducer
    },
});
