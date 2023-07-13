import React  from 'react'
import "./home.css";
import Navbar from './navbar';
import Footer from './footer';
import Sidebar from './sidebar';

export default function Home() {


  return (
    <div class="body">
        <header>
        <Navbar/>
        <Footer/>
        </header>
        <h1 className='head'>Explore our Recipe</h1>
        <h2 className='head1'>Discover Culinary Delights, One Recipe at a Time</h2>
       
    </div>
  )
}