import { createSlice } from "@reduxjs/toolkit";

const StudentSlice = createSlice({
    name: "studInfo",
    initialState: { name: "", age: "" },
    reducers: {
        addDetails(state, action) {
            state.name = action.payload.name || state.name;
            state.age = action.payload.age || state.age;
        },

    }
})
export const { addDetails } = StudentSlice.actions;
export default StudentSlice.reducer;