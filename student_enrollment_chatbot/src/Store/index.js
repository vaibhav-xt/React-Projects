import { configureStore } from "@reduxjs/toolkit";
import StudentSlice from './Slices/StudentSlice'

const store = configureStore({
    reducer: {
        student: StudentSlice,
    }
})

export default store;