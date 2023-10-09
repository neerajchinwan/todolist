import { configureStore } from "@reduxjs/toolkit";
import taskReducer from './../components/taskComponent/taskSlice';
import authReducer from "../components/auth/authSlice";


const store = configureStore({
    reducer: {
        task: taskReducer,
        auth: authReducer
    }
});


export default store;