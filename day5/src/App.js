import React, { useState } from "react";
// import logo from './logo.svg';
import './App.css';
import { Login } from "./Login";
import { Register } from "./Register";
import Home from "./home";
import { Route, Routes } from "react-router-dom";
import RecipePage from "./recipe";
import upload from "./upload";

function App() {
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/reg" element={<Register/>}/>
      <Route path="/rec" element={<RecipePage/>}/>
      <Route path="/upload" element={<upload/>}/>
    </Routes>
  );
}

export default App;