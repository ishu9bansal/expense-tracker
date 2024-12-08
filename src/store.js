import { configureStore } from "@reduxjs/toolkit";
import expenseReducer from "./slices/expenseSlice";
// import filterReducer from "./slices/filterSlice";

export default configureStore({
    reducer: {
        expenseKeyInStore: expenseReducer,
        // filter: filterReducer,
    },
});

// store = { globalState, dispatch }
