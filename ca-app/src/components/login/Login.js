import React, {useState,useEffect} from "react";
import { Link } from "react-router-dom";
import {CA_LOGIN} from '../../store/actions/Action'
import { useDispatch, useSelector } from "react-redux";

const Login = () => {
    const dispatch = useDispatch();
    const loginData = (data) => {
        dispatch({state: data, type: CA_LOGIN})
    }

  return (
    <div>
    <h1>Login Page</h1>
    <button onClick={loginData('abcdedf')}>
    <Link to='/HomePage'>Move to Home page</Link>
    </button>
    </div>
    
  );
};

export default Login;
