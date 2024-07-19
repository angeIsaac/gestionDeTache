import { createStore } from "redux";
import { taskReduxer } from "./reducer";

const store = createStore(taskReduxer);
export default store;