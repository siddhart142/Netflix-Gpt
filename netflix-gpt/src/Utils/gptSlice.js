import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name : "Gpt",
    initialState : {
        showGptSearch : false,
    },
    reducers : {
        toggleGptView : (state) => {
            state.showGptSearch = !state.showGptSearch; 
        },
    },
});
export const {toggleGptView} = gptSlice.actions;
export default gptSlice.reducer;