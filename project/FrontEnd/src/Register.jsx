import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./form.css";
import axios from "axios";

export const Register = (props) => {
    const [firstname, setfirstName] = useState('');
    const [lastname, setlastName] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [confirmpass, setconfirmPass] = useState('');
    let navigate= useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        const data={
            firstname:firstname,
            lastname:lastname,
            email:email,
           password:pass,
           confirmPassword:confirmpass
        };
        axios.post("http://localhost:8080/addDetails",data);
       
        navigate("/")
        console.log(email);
    }

    return (
        <div className="auth-form-container">
        <div className="form_container">
            <h2>Register</h2>
        <form className="register-form" onSubmit={handleSubmit}>
            <label htmlFor="firstname" className="form_label">First Name</label>
            <input value={firstname} name="firstname" onChange={(e) => setfirstName(e.target.value)} id="firstname" placeholder="Enter First Name" className="form_input" required/>
            <label htmlFor="lastname" className="form_label">Last Name</label>
            <input value={lastname} name="name" onChange={(e) => setlastName(e.target.value)} id="name" placeholder="Enter Last Name" className="form_input" required/>
            <label htmlFor="email" className="form_label">Email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="Enter Your Email" id="email" name="email" className="form_input" required/>
            <label htmlFor="password" className="form_label">password</label>
            <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="Enter Password" id="password" name="password" className="form_input" required/>
            <label htmlFor="Confirm password" className="form_label">Confirm password</label>
            <input value={confirmpass} onChange={(e) => setconfirmPass(e.target.value)} type="password" placeholder="Confirm Password" id="password" name="password" className="form_input" required/>
            <br/>
         <button type="submit" className="submit">Register</button>
        </form>
        <Link  to="/login">
        <button className="link-btn">Already have an account? Login here.</button>
        </Link>
        </div>
    </div>
    )
}