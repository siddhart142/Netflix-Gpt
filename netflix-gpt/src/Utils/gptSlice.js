import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name : "Gpt",
    initialState : {
        showGptSearch : false,
        movieNames : null,
        movieResults : null,
    },
    reducers : {
        toggleGptView : (state) => {
            state.showGptSearch = !state.showGptSearch; 
        },
        addGptMovieResult : (state,action)=>
        {
            const {movieNames , movieResults} = action.payload;
            state.movieNames=movieNames;
            state.movieResults=movieResults;
        }
    },
});
export const {toggleGptView,addGptMovieResult} = gptSlice.actions;
export default gptSlice.reducer;