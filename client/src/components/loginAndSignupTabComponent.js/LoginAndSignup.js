import React, { useState } from "react";
import Login from './../loginComponent/Login';
import Signup from "../signupComponent/Signup";

function LoginAndSignup(){

    
    const [loginBtnActive, setLoginBtnActive] = useState(true);
    const [signupBtnActive, setSignupBtnActive] = useState(false);

    function loginBtnHandler(){
        setLoginBtnActive(true);
        setSignupBtnActive(false);
    }

    function singupBtnHandler(){
        setLoginBtnActive(false);
        setSignupBtnActive(true);
    }

    const activeStyle = {
        background: '#AA14F0',
        width: '40%',
        color: '#fff',
        fontWeight: 600
    }

    const unActiveStyle = {
        width: '40%',
        background:'#D8D9DA',
        fontWeight: 600,
        color: '#fff'
    }

    return (<div className="row">
                <div className="col-6 m-auto mt-5" style={{minHeight: 500}}>
                    <div className="d-flex justify-content-center gap-5 my-4">
                        <button className="btn" style={loginBtnActive ? activeStyle : unActiveStyle} onClick={loginBtnHandler}>LOGIN</button>
                        <button className="btn" style={signupBtnActive ? activeStyle : unActiveStyle} onClick={singupBtnHandler}>SIGNUP</button>
                    </div>

                    {loginBtnActive && <Login></Login>}
                    {signupBtnActive && <Signup></Signup>}
                </div>
        </div>)
}

export default LoginAndSignup;