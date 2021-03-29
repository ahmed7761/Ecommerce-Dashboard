import React, {useEffect} from 'react';
import Header from "./includes/Header";
import {useHistory} from "react-router-dom";

const Login = () => {
    const history = useHistory()
    useEffect(() =>{
        if(localStorage.getItem('user-info')) {
            history.push('/add')
        }
    },[])

    return (
        <div>
            <Header />
            <h1>Login Page</h1>
        </div>
    );
};

export default Login;
