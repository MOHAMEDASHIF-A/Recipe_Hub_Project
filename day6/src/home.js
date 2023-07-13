import React  from 'react'
import "./home.css";
import Navbar from './navbar';
import Footer from './footer';
// import Sidebar from './sidebar';

export default function Home() {


  return (
    <div class="body">
        <header>
        <Navbar/>
        <Footer/>
        </header>
        <h1 className='head' style={{fontFamily:"Times New Roman"}}>
        Discover Culinary Delights, One Recipe at a Time

        <p style={{fontSize:'30px',padding:'10px'}}>Explore our Recipe</p>
        </h1>
       
    </div>
  )
}