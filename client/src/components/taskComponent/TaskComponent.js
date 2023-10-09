import React from "react";
import TaskForm from "./taskForm/TaskForm";
import Task from "./task/Task";

function TaskComponent() {


    return (<div className='row mt-5' style={{ minHeight: "500px"}}>
        <Task></Task>
        <TaskForm></TaskForm>
    </div>)
}

export default TaskComponent