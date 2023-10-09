import React, {useState} from "react";
import axios from 'axios';

import { useDispatch } from "react-redux";

import { login } from "../auth/authSlice";

function Login(){

    const dispatch = useDispatch();

    const formStyle = {
        padding: '20px 30px',
        background: '#CCD1E4',
        borderRadius: 16,
        marginTop: 50,
        paddingBottom: 40,
        boxShadow: '4px 4px 15px 2px rgba(0, 0, 0, 0.15)'
    }

    const whiteColor = {
        color: '#fff'
    }

    const btnStyle = {
        background: '#0E8388',
        color: '#fff',
        fontWeight: 600,
        padding: '5px 30px',
    }

    const [credentials, setCredentials] = useState({
        email: '',
        password: ''
    })



    const changeHandler = (e) => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        })
    }

    const submitHandler = (event) => {
        event.preventDefault();
        axios.post('http://localhost:5000/api/v1/signin', credentials)
        .then(response => {
            
            if(response.data.status === 'success'){
                setCredentials({
                    email: '',
                    password: ''
                })

                localStorage.setItem('authToken', response.data.token)
                dispatch(login());
            }
        })
        .catch(error => console.log(error.response.data.message))
    }

    return (<form style={formStyle} onSubmit={submitHandler}>
                <h2 style={whiteColor} className="mt-3 mb-5">Login</h2>
                <input
                className="form-control my-3"
                placeholder="Enter Email"
                type="text"
                name="email"
                value={credentials.email}
                onChange={changeHandler}
                />
                <input
                className="form-control my-3"
                placeholder="Enter Password"
                type="Password"
                name="password"
                value={credentials.password}
                onChange={changeHandler}
                />
                <button type="submit" className='btn btn-primary' style={btnStyle}>Submit</button>
        </form>)
}

export default Login;