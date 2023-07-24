import React  from 'react'
import "./home.css";
import Navbar from './navbar';
import Footer from './footer';
// import Sidebar from './sidebar';
import { useSelector } from 'react-redux';
import { selectUser } from './redux/userslice';
export default function Home() {
const user=useSelector(selectUser)

  return (
    <div class="body">
        <header>
        <Navbar/>
        <Footer/>
        </header>
        
       
        <h1 className='head' style={{fontFamily:"Times New Roman"}}>
        Discover Culinary Delights, One Recipe at a Time

        <p style={{fontSize:'30px',padding:'10px',color:'white'}}>Explore our Recipe </p>
        <div className='divi'><p className='redu'>Welcome :{user.email} </p></div>
        </h1>
       
    </div>
  )
}