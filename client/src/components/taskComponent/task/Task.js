import React, { useEffect } from "react";
import SingleTask from "../singleTask/SingleTask";
import { useDispatch, useSelector } from "react-redux";
import { fetchTasks } from "../taskSlice";
import { logout } from "../../auth/authSlice";


function Task(){

const task = useSelector(state => state.task);

const dispatch = useDispatch();

useEffect(() => {
    dispatch(fetchTasks())
}, [dispatch])

function handleLogout(event){
    localStorage.removeItem('authToken')
    dispatch(logout())
}

    return(<div className='col-md-8'>
            <div className="tasks-wrapper">
                <button onClick={handleLogout}>Logout</button>
                {
                    task.tasks.length === 0 || task.tasks.status === 'fail' ? null : 
                        task.tasks.data.allTask.map(item => {
                            return <SingleTask
                                    key={item._id}
                                    title={item.title}
                                    description={item.description}
                                    />
                        })
                }
            </div>
        </div>)
}

export default Task;