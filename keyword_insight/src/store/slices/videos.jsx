import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const API = import.meta.env.VITE_API;

const initialState = {
    isLoading: false,
    videosData: [],
    isError: null,
    word: ""
};

const videosSlice = createSlice({
    name: "videos",
    initialState,
    reducers: {
        selectedKeyword(state, action) {
            state.word = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchVideos.pending, (state) => {
            state.isLoading = true;
            state.isError = null;
        });
        builder.addCase(fetchVideos.fulfilled, (state, action) => {
            state.isLoading = false;
            state.videosData = action.payload; // Replace push with assignment
        });
        builder.addCase(fetchVideos.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = action.error.message;
        });
    }
});

export const fetchVideos = createAsyncThunk('fetchVideos', async (keyword) => {
    console.log(keyword)
    const response = await youtubeAPI.get("/search", {
        params: {
            q: keyword
        }
    });
    return response.data.pageInfo.totalResults; // Use response.data.items to get the videos
});

const youtubeAPI = axios.create({
    baseURL: "https://youtube.googleapis.com/youtube/v3/",
    params: {
        part: "snippet",
        maxResults: 8,
        key: API
    },
    headers: {}
});

export const { selectedKeyword } = videosSlice.actions; // Use .actions instead of .reducer
export default videosSlice.reducer;
