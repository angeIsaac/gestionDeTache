import { ADD_TASK, DEL_TASK, UPDATE_TASK } from "./constant";



export function add_task(task){
    return{
        type: ADD_TASK,
        payload: task
    }
}

export function aupdate_task(newtask){
    return{
        type: UPDATE_TASK,
        payload: newtask
    }
}

export function delete_task(id){
    return{
        type: DEL_TASK,
        payload: id
    }
}