
import { Task } from "./task"
import { useDispatch, useSelector } from "react-redux";
import { selectAllTasks } from "../Redux_toolkit/taskSlice";
import { addTask } from "../Redux_toolkit/taskSlice";

// eslint-disable-next-line no-unused-vars, react-refresh/only-export-components
function ListTask(props){

    const tasks = useSelector(selectAllTasks)
    const dispatch = useDispatch()
    let nextId = tasks.length

    const handleAddTask = () => {
        const data = {
            id: ++nextId,
            desc: "i work",
            isDone: false
        }
        dispatch(addTask(data));
    }

    return (
        <div className="w-1/3">
            <div>
                <button onClick={handleAddTask}>Add task</button>
            </div>
            <ul role="list" className="divide-y divide-gray-100">
                
                {
                    // eslint-disable-next-line react/prop-types
                    tasks.map(task => (<Task task={task} key={task.id}/>))
                }
            </ul>
        </div>
    )
}



// eslint-disable-next-line react-refresh/only-export-components
export default ListTask;
