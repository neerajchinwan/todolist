import React, { useState } from "react";
import axios from "axios";
import { fetchTasks } from "../taskSlice";
import { useDispatch } from "react-redux";

function TaskForm(){

    const [taskData, setTaskData] = useState({
        title: '',
        description: ''
    })

    const dispatch = useDispatch();

    const formStyle = {
        padding: '20px 30px',
        background: '#FFD0D0',
        borderRadius: 16,
        paddingBottom: 40,
        boxShadow: '4px 4px 15px 2px rgba(0, 0, 0, 0.15)',
        marginLeft: '50px',
        position: 'fixed',
        top: '50px',
    }

    function handleSubmit(event){
        event.preventDefault()

        fetch('http://127.0.0.1:5000/api/v1/tasks',{
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('authToken')}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(taskData)
        })
        .then(response => {
            setTaskData({
                title: '',
                description: ''
            })
            dispatch(fetchTasks())
        })
        .catch(error => error.message)
    }

    function handleChange(e){
        setTaskData({
            ...taskData,
            [e.target.name]: e.target.value
        })
    }

    return(<div className='col-md-4 d-flex'>
            <form style={formStyle} onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Title"
                    className="form-control my-3"
                    value={taskData.title}
                    onChange={handleChange}
                    name='title'
                />
                <input
                    type="text"
                    placeholder="Description"
                    className="form-control my-3"
                    value={taskData.description}
                    onChange={handleChange}
                    name='description'
                />
                <button className="btn" style={{background: '#FFA41B', color: '#fff', padding: '5px 25px'}}>Create</button>
            </form>
        </div>)
}

export default TaskForm