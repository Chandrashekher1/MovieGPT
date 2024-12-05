import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name:"gpt",
    initialState: {
        showGptSearch:false,
        movieNames: null,
        movieResult: null,
    },
    reducers: {
        toggleGptSeacrh: (state,action) => {
            state.showGptSearch = !state.showGptSearch
        },
        addGptMoviesResult: (state,actions) => {
            const {movieNames} = actions.payload
            // state.movieResult = movieResult
            state.movieNames = movieNames
        }
    }
})
export const {toggleGptSeacrh, addGptMoviesResult} = gptSlice.actions

export default gptSlice.reducer