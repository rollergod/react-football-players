import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    categoryValue: 'FL1'
};

const filterSlice = createSlice({
    name: 'category',
    initialState,
    reducers: {
        setCategoryValue(state, action) {
            state.categoryValue = action.payload;
        }
    }
});

export const { setCategoryValue } = filterSlice.actions;

export default filterSlice.reducer;