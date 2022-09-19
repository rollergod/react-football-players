import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    categoryValue: 'FL1',
    currentPage: 1,
};

const filterSlice = createSlice({
    name: 'category',
    initialState,
    reducers: {
        setCategoryValue(state, action) {
            state.categoryValue = action.payload;
        },
        setCurrentPage(state, action) {
            state.currentPage = action.payload;
        }
    }
});

export const { setCategoryValue, setCurrentPage } = filterSlice.actions;

export default filterSlice.reducer;