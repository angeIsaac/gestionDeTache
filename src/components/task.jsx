import { useDispatch } from "react-redux"
import { deleteTask, updateTask} from "../Redux_toolkit/taskSlice";

// eslint-disable-next-line react/prop-types
export const Task = ({task}) => {
  const dispatch = useDispatch();
  const handleDelete = ()=>{
    // console.log("task deleted: ", task)
    dispatch(deleteTask(task.id))
}

  const handleUpdate = ()=>{
    const newValue = prompt("modifiez la tache");
    const newTask = {...task,desc: newValue }
    // console.log("new task: ", newTask)
    dispatch(updateTask(newTask))
  }

    return (
        <div>
            <li className="flex justify-between gap-x-6 py-5">
    <div className="flex min-w-0 gap-x-4">
      <div className="min-w-0 flex-auto">
        <p className="text-xl font-semibold leading-6 text-gray-900">{task.id}</p>
      </div>
      <div className="min-w-0 flex-auto">
        <p className="mt-1 truncate text-xl leading-5 text-gray-500"> {task.desc}</p>
      </div>
    </div>
    <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
      <div className="text-sm leading-6 text-gray-900">
            <button className='text-blue-500' onClick={handleUpdate}>
                update
            </button>
      </div>
    <div className="mt-1 text-sm leading-5 text-gray-500">
        <button className='text-red-500' onClick={handleDelete}>
            delete
        </button>
    </div>
  </div>
</li>
</div>
    )
}
