import React from "react";
// import logo from './logo.svg';
import './App.css';
// import { Login } from "./Login";
// import { Register } from "./Register";
import Home from "./home";
import { Route, Routes } from "react-router-dom";
import RecipePage from "./recipe";
import Upload from "./upload";
import Briyani from "./Recipes/briyani";
import Burger from "./Recipes/burger";
import Butter from "./Recipes/chicbutter";
import Gobi from "./Recipes/gobi";
import Meals from "./Recipes/meals";
import Pizza from "./Recipes/pizza";
import Tandoori from "./Recipes/tand";
import Tikka from "./Recipes/tikka";
import Veg from "./Recipes/veg";
import AboutPage from "./Aboutus";
import ContactPage from "./contact";
import UserRecipe from "./UserRecipe";
import { Login } from "./Login";
import { Register } from "./Register";
// import Newlogin from "./newlogin";
// import SignUp from "./newregister";



function App() {
  // const [currentForm, setCurrentForm] = useState('login');

  // const toggleForm = (formName) => {
  //   setCurrentForm(formName);
  // }

  return (
    <Routes>
      <Route path="/home" element={<Home/>}/>
      <Route path="/about" element={<AboutPage/>}/>
      <Route path="/" element={<Login/>}/>
      {/* <Route path="/" element={<Newlogin/>}/> */}
      <Route path="/reg" element={<Register/>}/>
      {/* <Route path="/reg" element={<SignUp/>}/> */}
      <Route path="/rec" element={<RecipePage/>}/>
      <Route path="/upload" element={<Upload/>}/>
      <Route path="/userrecipe" element={<UserRecipe/>}/>
      <Route path="/contact" element={<ContactPage/>}/>
      <Route path="/briyani" element={<Briyani/>}/>
      <Route path="/Burger" element={<Burger/>}/>
      <Route path="/Butter" element={<Butter/>}/>
      <Route path="/Gobi" element={<Gobi/>}/>
      <Route path="/Meals" element={<Meals/>}/>
      <Route path="/Pizza" element={<Pizza/>}/>
      <Route path="/Tandoori" element={<Tandoori/>}/>
      <Route path="/Tikka" element={<Tikka/>}/>
      <Route path="/Veg" element={<Veg/>}/>
    </Routes>
  );
}

export default App;