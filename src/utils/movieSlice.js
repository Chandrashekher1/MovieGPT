import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies : null,
        trailerVideo: null,
        PopularMovies:null,
        topRatedMovies:null,
        upComingMovies:null,
    },
    reducers: {
        addNowPlayingMovies : (state,action) => {
            state.nowPlayingMovies = action.payload
        },
        addPopularMovies : (state,action) => {
            state.PopularMovies = action.payload
        },
        addTopRatedMovies : (state,action) => {
            state.topRatedMovies = action.payload
        },
        addUpComingMovies : (state,action) => {
            state.upComingMovies = action.payload
        },
        addTrailerVideo: (state,action) => {
            state.trailerVideo = action.payload
        }
    }
})

export const {addNowPlayingMovies, addTrailerVideo, addPopularMovies,addTopRatedMovies, addUpComingMovies} = movieSlice.actions

export default movieSlice.reducer

