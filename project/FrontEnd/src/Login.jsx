// import { Link } from "@mui/material";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./form.css";
import axios from "axios";
import {useDispatch} from 'react-redux';
import {login} from './redux/userslice.js';

export const Login = (props) => {
    const [username, setUsername] = useState('');
    // const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch=useDispatch();
    let navigate=useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        const data={
            username:username,
           password:password,
           
        };
        axios.post("http://localhost:8080/api/auth/signin",data)
        .then(function(response) {
            alert("hi");
          })
          .catch(function(error) {
            console.log(error);
            alert("Incorrect credentials")
          });
        navigate("/home");
        // console.log(email);
        // alert("Success");
        dispatch(login({username}));
    }

    return (
        <div className="auth-form-container">
        <div className="form_container">
            <h2>Login</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="Username" className="form_label">UserName</label>
                <input value={username} onChange={(e) => setUsername(e.target.value)}type="text" placeholder="Enter your Username" id="text" name="text" className="form_input" required/>
                <label htmlFor="Password" className="form_label">password</label>
                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Enter Your Password" id="password" name="password" className="form_input" required/><br/>
                <button type="submit" className="submit">Log In</button>
            </form>
            <Link to="/reg">
        <button className="link-btn">Don't have an account? Register here.</button>
        </Link>
        </div>
        </div>
    )
}