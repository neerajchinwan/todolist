import React, {useState} from "react";
import axios from 'axios';

function Signup(){

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
        padding: '5px 30px'
    }

    const [credentials,setCredentials] = useState({
        name:'',
        email: '', 
        country: '', 
        number: '', 
        password: '', 
        confirmPassword: '',
    })

    const changeHandler = (e) => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
    })
    }

    const submitHandler = async (event) => {
        event.preventDefault();

        axios.post('http://127.0.0.1:5000/api/v1/create', credentials)
        .then(function (response) {
            console.log(response.data);

            if(response.data.status === 'success'){
                setCredentials({
                    name:'',
                    email: '', 
                    country: '', 
                    number: '', 
                    password: '', 
                    confirmPassword: '',
                })
            }
        })
        .catch(function (error) {
            console.log(error);
        });
    }



    return(<form style={formStyle} onSubmit={submitHandler}>
                <h2 style={whiteColor} className="mt-3 mb-5">Signup</h2>
                <input
                className="form-control my-3"
                placeholder="Name"
                type="text"
                name='name'
                value={credentials.name}
                onChange={changeHandler}
                />
                <input
                className="form-control my-3"
                placeholder="Email"
                type="text"
                name='email'
                value={credentials.email}
                onChange={changeHandler}
                />
                <input
                className="form-control my-3"
                placeholder="Country"
                type="text"
                name='country'
                value={credentials.country}
                onChange={changeHandler}
                />
                <input
                className="form-control my-3"
                placeholder="Number"
                type="text"
                name="number"
                value={credentials.number}
                onChange={changeHandler}
                />
                <input
                className="form-control my-3"
                placeholder="Password"
                type="Password"
                name="password"
                value={credentials.password}
                onChange={changeHandler}
                />
                <input
                className="form-control my-3"
                placeholder="Confirm Password"
                type="Password"
                name="confirmPassword"
                value={credentials.confirmPassword}
                onChange={changeHandler}
                />
                <button type="submit" className="btn" style={btnStyle}>Submit</button>
            </form>)
}

export default Signup;