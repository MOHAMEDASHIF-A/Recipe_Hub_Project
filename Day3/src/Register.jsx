import React, { useState } from "react";

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
            <h2>Register</h2>
        <form className="register-form" onSubmit={handleSubmit}>
            <label htmlFor="firstname">First Name</label>
            <input value={firstname} name="firstname" onChange={(e) => setfirstName(e.target.value)} id="firstname" placeholder="Enter First Name" />
            <label htmlFor="lastname">Last Name</label>
            <input value={lastname} name="name" onChange={(e) => setlastName(e.target.value)} id="name" placeholder="Enter Last Name" />
            <label htmlFor="email">Email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="Enter Your Email" id="email" name="email" />
            <label htmlFor="password">password</label>
            <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="Enter Password" id="password" name="password" />
            <label htmlFor="Confirm password">Confirm password</label>
            <input value={confirmpass} onChange={(e) => setconfirmPass(e.target.value)} type="password" placeholder="Confirm Password" id="password" name="password" />
            <br/>
            <button type="submit">Register</button>
        </form>
        <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? Login here.</button>
    </div>
    )
}