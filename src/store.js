import { configureStore } from "@reduxjs/toolkit";
import expenseReducer from "./slices/expenseSlice";
import filterReducer from "./reducers/filterReducer";

const exampleReducer = (state = {
    status: "initial"
}, action) => {
    return state;
}

export default configureStore({
    reducer: {
        expenseKeyInStore: expenseReducer,
        filter: filterReducer,
        example: exampleReducer,
    },
});

// store = { globalState, dispatch }
