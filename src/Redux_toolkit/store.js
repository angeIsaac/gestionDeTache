import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./taskSlice";

const store = configureStore({
    reducer: {
        taches: taskReducer
    }
})
export default store;