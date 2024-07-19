import { createSlice } from "@reduxjs/toolkit"

const initial_State = {
    loading: false,
    error: "",    
    tasks: [
        {id:1, desc: 'wakeUp', isDone: true},
        {id:2, desc: 'Wash myself', isDone: false},
        {id:3, desc: 'get dressed', isDone: false},
        {id:4, desc: 'Pack my things', isDone: false},
        {id:5, desc: 'Go to scool', isDone: false},
    ]
}

const taskSlice = createSlice({
    name: "task",
    initialState: initial_State,
    reducers: {
        addTask: (state, action) => {
            state.tasks = [...state.tasks, action.payload]
        },
        updateTask: (state, action) => {
            state.tasks = state.tasks.map(task => task.id === action.payload.id? action.payload: task)
        },
        deleteTask: (state, action)=> {
            state.tasks = state.tasks.filter(task => task.id !== action.payload)
        }
    }
})

export const selectAllTasks = (state) => state.taches.tasks

export const {addTask, updateTask, deleteTask} = taskSlice.actions
export default taskSlice.reducer;