import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

const url = "http:127.0.0.1:4000/api/tasks"
const initialState = {
    tasks: [],
    status: "idle", // idle loading succed failed
    filter: "all", // completed, active
    error: null
}


export const getTasks = createAsyncThunk("tasks/getTasks", async () => {
    const {data} = await axios.get(url);
    return data;
})

export const createTask = createAsyncThunk("tasks/postTask", async payload => {
    const {data} = await axios.post(url, payload);
    return data;
})

export const updateTasks = createAsyncThunk("tasks/updateTasks", async payload => {
    const {data} = await axios.put(`${url}/${payload._id}`, payload);
    return data;
})

export const deleteTasks = createAsyncThunk("tasks/deleteTasks", async id => {
    const {data} = await axios.delete(`${url}/${id}`);
    return data;
})

const taskSlice = createSlice({
    name: "tasks",
    initialState,
    reducers:{
        changeFilter: (state, action) => {
            state.filter = action.payload
        }
    },
    extraReducers(builder){
        builder
        .addCase(getTasks.pending, state => {state.status = "loading"; state.error = null})
        .addCase(getTasks.fulfilled,(state, action) => {state.status = "success"; state.tasks = [...action.payload] })
        .addCase(getTasks.rejected, state => {state.status = "failed"; state.error = action.error.message})

        .addCase(updateTasks.pending, state => {state.status = "loading"; state.error = null})
        .addCase(updateTasks.fulfilled, (state, action) => {state.status = "success"; state.tasks = state.tasks.map(item => item._id !== action.payload._id? item: action.payload) })
        .addCase(updateTasks.rejected, state => {state.status = "failed"; state.error = action.error.message})

        .addCase(createTask.pending, state => {state.status = "loading"; state.error = null})
        .addCase(createTask.fulfilled, (state, action) => {state.status = "success"; state.tasks.push(action.payload) })
        .addCase(createTask.rejected, state => {state.status = "failed"; state.error = action.error.message})

        .addCase(deleteTasks.pending, state => {state.status = "loading"; state.error = null})
        .addCase(deleteTasks.fulfilled, (state, action) => {state.status = "success"; state.tasks.filter(item => item._id !== action.payload._id) })
        .addCase(deleteTasks.rejected, state => {state.status = "failed"; state.error = action.error.message})
    }
})

export const {changeFilter} = taskSlice.actions;
export default taskSlice.reducer;
