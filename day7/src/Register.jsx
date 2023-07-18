import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./form.css";

export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [confirmpass, setconfirmPass] = useState('');
    const [firstname, setfirstName] = useState('');
    const [lastname, setlastName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div className="auth-form-container">
        <div className="form_container">
            <h2>Register</h2>
        <form className="register-form" onSubmit={handleSubmit}>
            <label htmlFor="firstname" className="form_label">First Name</label>
            <input value={firstname} name="firstname" onChange={(e) => setfirstName(e.target.value)} id="firstname" placeholder="Enter First Name" className="form_input"/>
            <label htmlFor="lastname" className="form_label">Last Name</label>
            <input value={lastname} name="name" onChange={(e) => setlastName(e.target.value)} id="name" placeholder="Enter Last Name" className="form_input"/>
            <label htmlFor="email" className="form_label">Email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="Enter Your Email" id="email" name="email" className="form_input"/>
            <label htmlFor="password" className="form_label">password</label>
            <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="Enter Password" id="password" name="password" className="form_input"/>
            <label htmlFor="Confirm password" className="form_label">Confirm password</label>
            <input value={confirmpass} onChange={(e) => setconfirmPass(e.target.value)} type="password" placeholder="Confirm Password" id="password" name="password" className="form_input"/>
            <br/>
            <Link to="/login"><button type="submit" className="submit">Register</button></Link>
        </form>
        <Link  to="/login">
        <button className="link-btn">Already have an account? Login here.</button>
        </Link>
        </div>
    </div>
    )
}