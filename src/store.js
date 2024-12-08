import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "./reducers/filterReducer";
import expenseReducer from "./reducers/expenseReducer";

export default configureStore({
    reducer: {
        filter: filterReducer,
        expenses: expenseReducer
    },
});
