export default function filterReducer(state = null, action) {
    switch (action.type) {
        case "ADD_FILTER": {
            const { category } = action.payload;
            const selectedCategories = state ? [...state] : [];
            selectedCategories.push(category);
            return selectedCategories;
        }
        case "REMOVE_FILTER": {
            const { category } = action.payload;
            return state.filter((ele) => ele !== category);
        }
        case "RESET_FILTER": {
            return null;
        }
        default: {
            return state;
        }
    }
}

