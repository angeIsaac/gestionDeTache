import { ADD_TASK, DEL_TASK, UPDATE_TASK } from "./constant";

const initial_State = {
    tasks: [
        {id:1, desc: 'wakeUp', isDone: true},
        {id:2, desc: 'Wash myself', isDone: false},
        {id:3, desc: 'get dressed', isDone: false},
        {id:4, desc: 'Pack my things', isDone: false},
        {id:5, desc: 'Go to scool', isDone: false},
    ]
}

export const taskReduxer = (state = initial_State, action) => {
    console.log(action.payload)
    switch (action.type) {
        case ADD_TASK:
            return {
                ...state,
                tasks: [...state.tasks, action.payload]
            }
        case UPDATE_TASK:
            return{
                ...state,
                tasks: state.tasks.map(task => task.id === action.payload.id? action.payload: task)
            }
        case DEL_TASK:
            return{
                ...state,
                tasks: state.tasks.filter(task => task.id !== action.payload) 
            }
    
        default:
            return state;
        
    }
}