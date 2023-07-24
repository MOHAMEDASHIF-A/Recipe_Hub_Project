// import { Link } from "@mui/material";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./form.css";
import axios from "axios";
import {useDispatch} from 'react-redux';
import {login} from './redux/userslice.js';
export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const dispatch=useDispatch();
    let navigate=useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        const data={
            email:email,
           password:pass,
           
        };
        axios.post("http://localhost:8080/post",data);
        navigate("/home");
        console.log(email);
        dispatch(login({email}));
    }

    return (
        <div className="auth-form-container">
        <div className="form_container">
            <h2>Login</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="Email" className="form_label">Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="Enter your Email" id="email" name="email" className="form_input" required/>
                <label htmlFor="Password" className="form_label">password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="Enter Your Password" id="password" name="password" className="form_input" required/><br/>
                <button type="submit" className="submit">Log In</button>
            </form>
            <Link to="/reg">
        <button className="link-btn">Don't have an account? Register here.</button>
        </Link>
        </div>
        </div>
    )
}