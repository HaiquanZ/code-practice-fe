import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
    name: "task",
    initialState: {
        getAllTasks:{
            tasks: null,
            isFetching: false,
            error: false
        }
    },
    reducers: {
        getAllTasksStart: (state) => {
            state.getAllTasks.isFetching = true;
        },
        getAllTasksSuccess: (state, action) => {
            state.getAllTasks.tasks = action.payload;
            state.getAllTasks.isFetching = false;
            state.getAllTasks.error = false;
        },
        getAllTasksFail: (state) => {
            state.getAllTasks.isFetching = false;
            state.getAllTasks.error = true;
        }
    }
});

export const { getAllTasksStart, getAllTasksSuccess, getAllTasksFail } = taskSlice.actions;

export default taskSlice.reducer;