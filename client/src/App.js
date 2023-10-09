import React from 'react';
import './App.css';
import LoginAndSignup from './components/loginAndSignupTabComponent.js/LoginAndSignup';
import TaskComponent from './components/taskComponent/TaskComponent';

import { useSelector } from 'react-redux';


function App() {

  const isLogged = useSelector(state => state.auth)


  return (
    <div className="App">
      <div className="container">
        {!isLogged.isLoggedIn && <LoginAndSignup></LoginAndSignup>}
        {isLogged.isLoggedIn && <TaskComponent></TaskComponent>}

      </div>
    </div>
  );
}

export default App;
