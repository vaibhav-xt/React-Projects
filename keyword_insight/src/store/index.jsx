import { configureStore } from "@reduxjs/toolkit";
import videosSlice from './slices/videos'

const store = configureStore({
    reducer: {
        videos: videosSlice,
    }
})

export default store;