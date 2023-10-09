import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    loading: false,
    tasks: [],
    error: ''
}

// Generate pending, fullfilled and rejected action type

export const fetchTasks = createAsyncThunk('task/fetchTasks', () => {
    // return axios.get({
    //     method:'GET',
    //     url:'http://127.0.0.1:5000/api/v1/tasks', 
    //     headers: {
    //         'Authorization': `Bearer ${localStorage.getItem('authToken')}`
    //     }
    // })
    // .then(response => response.data)

    return fetch('http://127.0.0.1:5000/api/v1/tasks', {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('authToken')}`
        }
    })
    .then(response => response.json())

})

const taskSlice = createSlice({
    name: 'task',
    initialState,
    extraReducers: builder => {
        builder.addCase(fetchTasks.pending, state => {
            state.loading = true
        })

        builder.addCase(fetchTasks.fulfilled, (state, action) => {
            state.loading = false;
            state.tasks = action.payload;
            state.error = ''
        })

        builder.addCase(fetchTasks, (state, action) => {
            state.loading = false;
            state.tasks = [];
            state.error = action.error.message
        })
    }
})

export default taskSlice.reducer;